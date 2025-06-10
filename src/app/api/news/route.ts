import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city") || "world";

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.responses.create({
      model: "gpt-4.1",
      tools: [{ type: "web_search_preview" }],
      input: `Find one positive news story from today in ${city}. Today is: ${new Date().toLocaleDateString()}`,
    });

    // Extraire le texte de la réponse
    const outputText = response.output_text || "No positive news found today.";

    console.log("outputText", outputText);

    return NextResponse.json({
      city: city,
      news: outputText,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "News service error",
        city: request.nextUrl.searchParams.get("city") || "world",
      },
      { status: 500 }
    );
  }
}
