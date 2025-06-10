import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");
    const unit = searchParams.get("unit") || "celsius";

    if (!location) {
      return NextResponse.json({ error: "Location required" }, { status: 400 });
    }

    // 1. Géocodage
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
      )}&format=json&limit=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.length) {
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 }
      );
    }

    const { lat, lon } = geoData[0];

    // 2. Météo
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&temperature_unit=${unit}`
    );
    const weather = await weatherRes.json();

    return NextResponse.json({
      location: location,
      temperature: weather.current.temperature_2m,
      unit: unit,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Weather service error" },
      { status: 500 }
    );
  }
}
