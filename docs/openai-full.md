
---

File: ./platform.openai.com_docs_guides_agents.md
---

---

url: "<https://platform.openai.com/docs/guides/agents>"
title: "Agents - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Agents

Learn how to build agents with the OpenAI API.

Copy page

Agents represent **systems that intelligently accomplish tasks**, ranging from executing simple workflows to pursuing complex, open-ended objectives.

OpenAI provides a **rich set of composable primitives that enable you to build agents**. This guide walks through those primitives, and how they come together to form a robust agentic platform.

## Overview

Building agents involves assembling components across several domains—such as **models, tools, knowledge and memory, audio and speech, guardrails, and orchestration**—and OpenAI provides composable primitives for each.

| Domain | Description | OpenAI Primitives |
| --- | --- | --- |
| [Models](https://platform.openai.com/docs/guides/agents#models) | Core intelligence capable of reasoning, making decisions, and processing different modalities. | [o1](https://platform.openai.com/docs/models/o1), [o3-mini](https://platform.openai.com/docs/models/o3-mini), [GPT-4.5](https://platform.openai.com/docs/models/gpt-4.5-preview), [GPT-4o](https://platform.openai.com/docs/models/gpt-4o), [GPT-4o-mini](https://platform.openai.com/docs/models/gpt-4o-mini) |
| [Tools](https://platform.openai.com/docs/guides/agents#tools) | Interface to the world, interact with environment, function calling, built-in tools, etc. | [Function calling](https://platform.openai.com/docs/guides/function-calling), [Web search](https://platform.openai.com/docs/guides/tools-web-search), [File search](https://platform.openai.com/docs/guides/tools-file-search), [Computer use](https://platform.openai.com/docs/guides/tools-computer-use) |
| [Knowledge and memory](https://platform.openai.com/docs/guides/agents#knowledge-memory) | Augment agents with external and persistent knowledge. | [Vector stores](https://platform.openai.com/docs/guides/retrieval#vector-stores), [File search](https://platform.openai.com/docs/guides/tools-file-search), [Embeddings](https://platform.openai.com/docs/guides/embeddings) |
| [Audio and speech](https://platform.openai.com/docs/guides/agents#audio-and-speech) | Create agents that can understand audio and respond back in natural language. | [Audio generation](https://platform.openai.com/docs/guides/audio-generation), [realtime](https://platform.openai.com/docs/guides/realtime), [Audio agents](https://platform.openai.com/docs/guides/audio-agents) |
| [Guardrails](https://platform.openai.com/docs/guides/agents#guardrails) | Prevent irrelevant, harmful, or undesirable behavior. | [Moderation](https://platform.openai.com/docs/guides/moderation), [Instruction hierarchy (Python)](https://openai.github.io/openai-agents-python/guardrails/), [Instruction hierarchy (TypeScript)](https://openai.github.io/openai-agents-js/guides/guardrails/) |
| [Orchestration](https://platform.openai.com/docs/guides/agents#orchestration) | Develop, deploy, monitor, and improve agents. | [Python Agents SDK](https://openai.github.io/openai-agents-python/), [TypeScript Agents SDK](https://openai.github.io/openai-agents-js/), [Tracing](https://platform.openai.com/traces), [Evaluations](https://platform.openai.com/docs/guides/evals), [Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) |
| [Voice agents](https://platform.openai.com/docs/guides/voice-agents) | Create agents that can understand audio and respond back in natural language. | [Realtime API](https://platform.openai.com/docs/guides/realtime), [Voice support in the Python Agents SDK](https://openai.github.io/openai-agents-python/voice/quickstart/), [Voice support in the TypeScript Agents SDK](https://openai.github.io/openai-agents-js/guides/voice-agents/) |

## Models

| Model | Agentic Strengths |
| --- | --- |
| [o3](https://platform.openai.com/docs/models/o3) and [o4-mini](https://platform.openai.com/docs/models/o4-mini) | Best for long-term planning, hard tasks, and reasoning. |
| [GPT-4.1](https://platform.openai.com/docs/models/gpt-4.1) | Best for agentic execution. |
| [GPT-4.1-mini](https://platform.openai.com/docs/models/gpt-4.1-mini) | Good balance of agentic capability and latency. |
| [GPT-4.1-nano](https://platform.openai.com/docs/models/gpt-4.1-nano) | Best for low-latency. |

Large language models (LLMs) are at the core of many agentic systems, responsible for making decisions and interacting with the world. OpenAI’s models support a wide range of capabilities:

- **High intelligence:** Capable of [reasoning](https://platform.openai.com/docs/guides/reasoning) and planning to tackle the most difficult tasks.
- **Tools:** [Call your functions](https://platform.openai.com/docs/guides/function-calling) and leverage OpenAI's [built-in tools](https://platform.openai.com/docs/guides/tools).
- **Multimodality:** Natively understand text, images, audio, code, and documents.
- **Low-latency:** Support for [real-time audio](https://platform.openai.com/docs/guides/realtime) conversations and smaller, faster models.

For detailed model comparisons, visit the [models](https://platform.openai.com/docs/models) page.

## Tools

Tools enable agents to interact with the world. OpenAI supports [**function calling**](https://platform.openai.com/docs/guides/function-calling) to connect with your code, and [**built-in tools**](https://platform.openai.com/docs/guides/tools) for common tasks like web searches and data retrieval.

| Tool | Description |
| --- | --- |
| [Function calling](https://platform.openai.com/docs/guides/function-calling) | Interact with developer-defined code. |
| [Web search](https://platform.openai.com/docs/guides/tools-web-search) | Fetch up-to-date information from the web. |
| [File search](https://platform.openai.com/docs/guides/tools-file-search) | Perform semantic search across your documents. |
| [Computer use](https://platform.openai.com/docs/guides/tools-computer-use) | Understand and control a computer or browser. |
| [Local shell](https://platform.openai.com/docs/guides/tools-local-shell) | Execute commands on a local machine. |

## Knowledge and memory

Knowledge and memory help agents store, retrieve, and utilize information beyond their initial training data. **Vector stores** enable agents to search your documents semantically and retrieve relevant information at runtime. Meanwhile, **embeddings** represent data efficiently for quick retrieval, powering dynamic knowledge solutions and long-term agent memory. You can integrate your data using OpenAI’s [vector stores](https://platform.openai.com/docs/guides/retrieval#vector-stores) and [Embeddings API](https://platform.openai.com/docs/guides/embeddings).

## Guardrails

Guardrails ensure your agents behave safely, consistently, and within your intended boundaries—critical for production deployments. Use OpenAI’s free [Moderation API](https://platform.openai.com/docs/guides/moderation) to automatically filter unsafe content. Further control your agent’s behavior by leveraging the [instruction hierarchy](https://openai.github.io/openai-agents-python/guardrails/), which prioritizes developer-defined prompts and mitigates unwanted agent behaviors.

## Orchestration

Building agents is a process. OpenAI provides tools to effectively build, deploy, monitor, evaluate, and improve agentic systems.

![Agent Traces UI in OpenAI Dashboard](https://cdn.openai.com/API/docs/images/orchestration.png)

| Phase | Description | OpenAI Primitives |
| --- | --- | --- |
| **Build and deploy** | Rapidly build agents, enforce guardrails, and handle conversational flows using the Agents SDK. | [Agents SDK Python](https://openai.github.io/openai-agents-python/), [Agents SDK TypeScript](https://openai.github.io/openai-agents-js/) |
| **Monitor** | Observe agent behavior in real-time, debug issues, and gain insights through tracing. | [Tracing](https://platform.openai.com/traces) |
| **Evaluate and improve** | Measure agent performance, identify areas for improvement, and refine your agents. | [Evaluations](https://platform.openai.com/docs/guides/evals)<br>[Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) |

## Get started

PythonPythonTypeScript/JavaScriptTypeScript/JavaScript

Python

```bash
1
pip install openai-agents
```

[View the documentation\\
\\
Check out our documentation for more information on how to get started with the Agents SDK for Python.](https://openai.github.io/openai-agents-python/) [View the Python repository\\
\\
The OpenAI Agents SDK for Python is open source. Check out our repository for implementation details and a collection of examples.](https://github.com/openai/openai-agents-python)

TypeScript/JavaScript

```bash
1
npm install @openai/agents
```

[View the documentation\\
\\
Check out our documentation for more information on how to get started with the Agents SDK for TypeScript.](https://openai.github.io/openai-agents-js/) [Check out the code\\
\\
The OpenAI Agents SDK for TypeScript is open source. Check out our repository for implementation details and a collection of examples.](https://github.com/openai/openai-agents-js) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_audio.md
---

---

url: "<https://platform.openai.com/docs/guides/audio>"
title: "Audio and speech - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Audio and speech

Explore audio and speech features in the OpenAI API.

Copy page

The OpenAI API provides a range of audio capabilities. If you know what you want to build, find your use case below to get started. If you're not sure where to start, read this page as an overview.

## Build with audio

[![Build voice agents](https://cdn.openai.com/API/docs/images/voice-agents-rounded.png)\\
\\
Build voice agents\\
\\
Build interactive voice-driven applications.](https://platform.openai.com/docs/guides/voice-agents) [![Transcribe audio](https://cdn.openai.com/API/docs/images/stt-rounded.png)\\
\\
Transcribe audio\\
\\
Convert speech to text instantly and accurately.](https://platform.openai.com/docs/guides/speech-to-text) [![Speak text](https://cdn.openai.com/API/docs/images/tts-rounded.png)\\
\\
Speak text\\
\\
Turn text into natural-sounding speech in real time.](https://platform.openai.com/docs/guides/text-to-speech)

## A tour of audio use cases

LLMs can process audio by using sound as input, creating sound as output, or both. OpenAI has several API endpoints that help you build audio applications or voice agents.

### Voice agents

Voice agents understand audio to handle tasks and respond back in natural language. There are two main ways to approach voice agents: either with speech-to-speech models and the [Realtime API](https://platform.openai.com/docs/guides/realtime), or by chaining together a speech-to-text model, a text language model to process the request, and a text-to-speech model to respond. Speech-to-speech is lower latency and more natural, but chaining together a voice agent is a reliable way to extend a text-based agent into a voice agent. If you are already using the [Agents SDK](https://platform.openai.com/docs/guides/agents), you can [extend your existing agents with voice capabilities](https://openai.github.io/openai-agents-python/voice/quickstart/) using the chained approach.

### Streaming audio

Process audio in real time to build voice agents and other low-latency applications, including transcription use cases. You can stream audio in and out of a model with the [Realtime API](https://platform.openai.com/docs/guides/realtime). Our advanced speech models provide automatic speech recognition for improved accuracy, low-latency interactions, and multilingual support.

### Text to speech

For turning text into speech, use the [Audio API](https://platform.openai.com/docs/api-reference/audio/) `audio/speech` endpoint. Models compatible with this endpoint are `gpt-4o-mini-tts`, `tts-1`, and `tts-1-hd`. With `gpt-4o-mini-tts`, you can ask the model to speak a certain way or with a certain tone of voice.

### Speech to text

For speech to text, use the [Audio API](https://platform.openai.com/docs/api-reference/audio/) `audio/transcriptions` endpoint. Models compatible with this endpoint are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`. With streaming, you can continuously pass in audio and get a continuous stream of text back.

## Choosing the right API

There are multiple APIs for transcribing or generating audio:

| API | Supported modalities | Streaming support |
| --- | --- | --- |
| [Realtime API](https://platform.openai.com/docs/api-reference/realtime) | Audio and text inputs and outputs | Audio streaming in and out |
| [Chat Completions API](https://platform.openai.com/docs/api-reference/chat) | Audio and text inputs and outputs | Audio streaming out |
| [Transcription API](https://platform.openai.com/docs/api-reference/audio) | Audio inputs | Audio streaming out |
| [Speech API](https://platform.openai.com/docs/api-reference/audio) | Text inputs and audio outputs | Audio streaming out |

### General use APIs vs. specialized APIs

The main distinction is general use APIs vs. specialized APIs. With the Realtime and Chat Completions APIs, you can use our latest models' native audio understanding and generation capabilities and combine them with other features like function calling. These APIs can be used for a wide range of use cases, and you can select the model you want to use.

On the other hand, the Transcription, Translation and Speech APIs are specialized to work with specific models and only meant for one purpose.

### Talking with a model vs. controlling the script

Another way to select the right API is asking yourself how much control you need. To design conversational interactions, where the model thinks and responds in speech, use the Realtime or Chat Completions API, depending if you need low-latency or not.

You won't know exactly what the model will say ahead of time, as it will generate audio responses directly, but the conversation will feel natural.

For more control and predictability, you can use the Speech-to-text / LLM / Text-to-speech pattern, so you know exactly what the model will say and can control the response. Please note that with this method, there will be added latency.

This is what the Audio APIs are for: pair an LLM with the `audio/transcriptions` and `audio/speech` endpoints to take spoken user input, process and generate a text response, and then convert that to speech that the user can hear.

### Recommendations

- If you need [real-time interactions](https://platform.openai.com/docs/guides/realtime-conversations) or [transcription](https://platform.openai.com/docs/guides/realtime-transcription), use the Realtime API.
- If realtime is not a requirement but you're looking to build a [voice agent](https://platform.openai.com/docs/guides/voice-agents) or an audio-based application that requires features such as [function calling](https://platform.openai.com/docs/guides/function-calling), use the Chat Completions API.
- For use cases with one specific purpose, use the Transcription, Translation, or Speech APIs.

## Add audio to your existing application

Models such as GPT-4o or GPT-4o mini are natively multimodal, meaning they can understand and generate multiple modalities as input and output.

If you already have a text-based LLM application with the [Chat Completions endpoint](https://platform.openai.com/docs/api-reference/chat/), you may want to add audio capabilities. For example, if your chat application supports text input, you can add audio input and output—just include `audio` in the `modalities` array and use an audio model, like `gpt-4o-audio-preview`.

Audio is not yet supported in the [Responses API](https://platform.openai.com/docs/api-reference/chat/completions/responses).

Audio output from modelAudio output from modelAudio input to modelAudio input to model

Audio output from model

Create a human-like audio response to a prompt

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
import { writeFileSync } from "node:fs";
import OpenAI from "openai";

const openai = new OpenAI();

// Generate an audio response to the given prompt
const response = await openai.chat.completions.create({
  model: "gpt-4o-audio-preview",
  modalities: ["text", "audio"],
  audio: { voice: "alloy", format: "wav" },
  messages: [\
    {\
      role: "user",\
      content: "Is a golden retriever a good family dog?"\
    }\
  ],
  store: true,
});

// Inspect returned data
console.log(response.choices[0]);

// Write audio data to a file
writeFileSync(
  "dog.wav",
  Buffer.from(response.choices[0].message.audio.data, 'base64'),
  { encoding: "utf-8" }
);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
import base64
from openai import OpenAI

client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o-audio-preview",
    modalities=["text", "audio"],
    audio={"voice": "alloy", "format": "wav"},
    messages=[\
        {\
            "role": "user",\
            "content": "Is a golden retriever a good family dog?"\
        }\
    ]
)

print(completion.choices[0])

wav_bytes = base64.b64decode(completion.choices[0].message.audio.data)
with open("dog.wav", "wb") as f:
    f.write(wav_bytes)
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
curl "https://api.openai.com/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
      "model": "gpt-4o-audio-preview",
      "modalities": ["text", "audio"],
      "audio": { "voice": "alloy", "format": "wav" },
      "messages": [\
        {\
          "role": "user",\
          "content": "Is a golden retriever a good family dog?"\
        }\
      ]
    }'
```

Audio input to model

Use audio inputs for prompting a model

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
import OpenAI from "openai";
const openai = new OpenAI();

// Fetch an audio file and convert it to a base64 string
const url = "https://cdn.openai.com/API/docs/audio/alloy.wav";
const audioResponse = await fetch(url);
const buffer = await audioResponse.arrayBuffer();
const base64str = Buffer.from(buffer).toString("base64");

const response = await openai.chat.completions.create({
  model: "gpt-4o-audio-preview",
  modalities: ["text", "audio"],
  audio: { voice: "alloy", format: "wav" },
  messages: [\
    {\
      role: "user",\
      content: [\
        { type: "text", text: "What is in this recording?" },\
        { type: "input_audio", input_audio: { data: base64str, format: "wav" }}\
      ]\
    }\
  ],
  store: true,
});

console.log(response.choices[0]);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
import base64
import requests
from openai import OpenAI

client = OpenAI()

# Fetch the audio file and convert it to a base64 encoded string
url = "https://cdn.openai.com/API/docs/audio/alloy.wav"
response = requests.get(url)
response.raise_for_status()
wav_data = response.content
encoded_string = base64.b64encode(wav_data).decode('utf-8')

completion = client.chat.completions.create(
    model="gpt-4o-audio-preview",
    modalities=["text", "audio"],
    audio={"voice": "alloy", "format": "wav"},
    messages=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "text",\
                    "text": "What is in this recording?"\
                },\
                {\
                    "type": "input_audio",\
                    "input_audio": {\
                        "data": encoded_string,\
                        "format": "wav"\
                    }\
                }\
            ]\
        },\
    ]
)

print(completion.choices[0].message)
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
curl "https://api.openai.com/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
      "model": "gpt-4o-audio-preview",
      "modalities": ["text", "audio"],
      "audio": { "voice": "alloy", "format": "wav" },
      "messages": [\
        {\
          "role": "user",\
          "content": [\
            { "type": "text", "text": "What is in this recording?" },\
            {\
              "type": "input_audio",\
              "input_audio": {\
                "data": "<base64 bytes here>",\
                "format": "wav"\
              }\
            }\
          ]\
        }\
      ]
    }'
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_background.md
---

---
url: "https://platform.openai.com/docs/guides/background"
title: "Background mode - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Background mode

Run long running tasks asynchronously in the background.

Copy page

Agents like [Codex](https://openai.com/index/introducing-codex/) and [Deep Research](https://openai.com/index/introducing-deep-research/) show that reasoning models can take several minutes to solve complex problems. Background mode enables you to execute long-running tasks on models like o3 and o1-pro reliably, without having to worry about timeouts or other connectivity issues.

Background mode kicks off these tasks asynchronously, and developers can poll response objects to check status over time. To start response generation in the background, make an API request with `background` set to `true`:

Generate a response in the background

python

```bash
1
2
3
4
5
6
7
8
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "o3",
    "input": "Write a very long novel about otters in space.",
    "background": true
  }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
import OpenAI from "openai";
const client = new OpenAI();

const resp = await client.responses.create({
    model: "o3",
    input: "Write a very long novel about otters in space.",
    background: true,
});

console.log(resp.status);
```

```python
1
2
3
4
5
6
7
8
9
10
11
from openai import OpenAI

client = OpenAI()

resp = client.responses.create(
    model="o3",
    input="Write a very long novel about otters in space.",
    background=True,
)

print(resp.status)
```

## Polling background responses

To check the status of background requests, use the GET endpoint for Responses. Keep polling while the request is in the queued or in\_progress state. When it leaves these states, it has reached a final (terminal) state.

Retrieve a response executing in the background

python

```bash
1
2
3
curl https://api.openai.com/v1/responses/resp_123 \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY"
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import OpenAI from "openai";
const client = new OpenAI();

let resp = await client.responses.create({
  model: "o3",
  input: "Write a very long novel about otters in space.",
  background: true,
});

while (resp.status === "queued" || resp.status === "in_progress") {
  console.log("Current status: " + resp.status);
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  resp = await client.responses.retrieve(resp.id);
}

console.log("Final status: " + resp.status + "\nOutput:\n" + resp.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
from openai import OpenAI
from time import sleep

client = OpenAI()

resp = client.responses.create(
    model="o3",
    input="Write a very long novel about otters in space.",
    background=True,
)

while resp.status in {"queued", "in_progress"}:
    print(f"Current status: {resp.status}")
    sleep(2)
    resp = client.responses.retrieve(resp.id)

print(f"Final status: {resp.status}\nOutput:\n{resp.output_text}")
```

## Cancelling a background response

You can also cancel an in-flight response like this:

Cancel an ongoing response

python

```bash
1
2
3
curl -X POST https://api.openai.com/v1/responses/resp_123/cancel \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY"
```

```javascript
1
2
3
4
5
6
import OpenAI from "openai";
const client = new OpenAI();

const resp = await client.responses.cancel("resp_123");

console.log(resp.status);
```

```python
1
2
3
4
5
6
from openai import OpenAI
client = OpenAI()

resp = client.responses.cancel("resp_123")

print(resp.status)
```

Cancelling twice is idempotent - subsequent calls simply return the final `Response` object.

## Streaming a background response

You can create a background Response and start streaming events from it right away. This may be helpful if you expect the client to drop the stream and want the option of picking it back up later. To do this, create a Response with both `background` and `stream` set to `true`. You will want to keep track of a "cursor" corresponding to the `sequence_number` you receive in each streaming event.

Currently, the time to first token you receive from a background response is higher than what you receive from a synchronous one. We are working to reduce this latency gap in the coming weeks.

Generate and stream a background response

python

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "o3",
    "input": "Write a very long novel about otters in space.",
    "background": true,
    "stream": true
  }'

// To resume:
curl "https://api.openai.com/v1/responses/resp_123?stream=true&starting_after=42" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import OpenAI from "openai";
const client = new OpenAI();

const stream = await client.responses.create({
    model: "o3",
    input: "Write a very long novel about otters in space.",
    background: true,
    stream: true,
});

let cursor = null;
for await (const event of stream) {
    console.log(event);
    cursor = event.sequence_number;
}

// If the connection drops, you can resume streaming from the last cursor (SDK support coming soon):
// const resumedStream = await client.responses.stream(resp.id, { starting_after: cursor });
// for await (const event of resumedStream) { ... }
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
from openai import OpenAI

client = OpenAI()

# Fire off an async response but also start streaming immediately
stream = client.responses.create(
    model="o3",
    input="Write a very long novel about otters in space.",
    background=True,
    stream=True,
)

cursor = None
for event in stream:
    print(event)
    cursor = event.sequence_number

# If your connection drops, the response continues running and you can reconnect:
# SDK support for resuming the stream is coming soon.
# for event in client.responses.stream(resp.id, starting_after=cursor):
#     print(event)
```

## Limits

1. Background sampling requires `store=true`; stateless requests are rejected.
2. To cancel a synchronous response, terminate the connection
3. You can only start a new stream from a background response if you created it with `stream=true`. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_batch.md
---

---

url: "<https://platform.openai.com/docs/guides/batch>"
title: "Batch API - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Batch API

Process jobs asynchronously with Batch API.

Copy page

Learn how to use OpenAI's Batch API to send asynchronous groups of requests with 50% lower costs, a separate pool of significantly higher rate limits, and a clear 24-hour turnaround time. The service is ideal for processing jobs that don't require immediate responses. You can also [explore the API reference directly here](https://platform.openai.com/docs/api-reference/batch).

## Overview

While some uses of the OpenAI Platform require you to send synchronous requests, there are many cases where requests do not need an immediate response or [rate limits](https://platform.openai.com/docs/guides/rate-limits) prevent you from executing a large number of queries quickly. Batch processing jobs are often helpful in use cases like:

1. Running evaluations
2. Classifying large datasets
3. Embedding content repositories

The Batch API offers a straightforward set of endpoints that allow you to collect a set of requests into a single file, kick off a batch processing job to execute these requests, query for the status of that batch while the underlying requests execute, and eventually retrieve the collected results when the batch is complete.

Compared to using standard endpoints directly, Batch API has:

1. **Better cost efficiency:** 50% cost discount compared to synchronous APIs
2. **Higher rate limits:** [Substantially more headroom](https://platform.openai.com/settings/organization/limits) compared to the synchronous APIs
3. **Fast completion times:** Each batch completes within 24 hours (and often more quickly)

## Getting started

### 1\. Prepare your batch file

Batches start with a `.jsonl` file where each line contains the details of an individual request to the API. For now, the available endpoints are `/v1/responses` ( [Responses API](https://platform.openai.com/docs/api-reference/responses)), `/v1/chat/completions` ( [Chat Completions API](https://platform.openai.com/docs/api-reference/chat)), `/v1/embeddings` ( [Embeddings API](https://platform.openai.com/docs/api-reference/embeddings)), and '/v1/completions' ( [Completions API](https://platform.openai.com/docs/api-reference/completions)). For a given input file, the parameters in each line's `body` field are the same as the parameters for the underlying endpoint. Each request must include a unique `custom_id` value, which you can use to reference results after completion. Here's an example of an input file with 2 requests. Note that each input file can only include requests to a single model.

```jsonl
{"custom_id": "request-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gpt-3.5-turbo-0125", "messages": [{"role": "system", "content": "You are a helpful assistant."},{"role": "user", "content": "Hello world!"}],"max_tokens": 1000}}
{"custom_id": "request-2", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gpt-3.5-turbo-0125", "messages": [{"role": "system", "content": "You are an unhelpful assistant."},{"role": "user", "content": "Hello world!"}],"max_tokens": 1000}}
```

### 2\. Upload your batch input file

Similar to our [Fine-tuning API](https://platform.openai.com/docs/guides/fine-tuning), you must first upload your input file so that you can reference it correctly when kicking off batches. Upload your `.jsonl` file using the [Files API](https://platform.openai.com/docs/api-reference/files).

Upload files for Batch API

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
import fs from "fs";
import OpenAI from "openai";
const openai = new OpenAI();

const file = await openai.files.create({
  file: fs.createReadStream("batchinput.jsonl"),
  purpose: "batch",
});

console.log(file);
```

```python
1
2
3
4
5
6
7
8
9
from openai import OpenAI
client = OpenAI()

batch_input_file = client.files.create(
    file=open("batchinput.jsonl", "rb"),
    purpose="batch"
)

print(batch_input_file)
```

```bash
1
2
3
4
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F purpose="batch" \
  -F file="@batchinput.jsonl"
```

### 3\. Create the batch

Once you've successfully uploaded your input file, you can use the input File object's ID to create a batch. In this case, let's assume the file ID is `file-abc123`. For now, the completion window can only be set to `24h`. You can also provide custom metadata via an optional `metadata` parameter.

Create the Batch

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
import OpenAI from "openai";
const openai = new OpenAI();

const batch = await openai.batches.create({
  input_file_id: "file-abc123",
  endpoint: "/v1/chat/completions",
  completion_window: "24h"
});

console.log(batch);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
from openai import OpenAI
client = OpenAI()

batch_input_file_id = batch_input_file.id
client.batches.create(
    input_file_id=batch_input_file_id,
    endpoint="/v1/chat/completions",
    completion_window="24h",
    metadata={
        "description": "nightly eval job"
    }
)
```

```bash
1
2
3
4
5
6
7
8
curl https://api.openai.com/v1/batches \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input_file_id": "file-abc123",
    "endpoint": "/v1/chat/completions",
    "completion_window": "24h"
  }'
```

This request will return a [Batch object](https://platform.openai.com/docs/api-reference/batch/object) with metadata about your batch:

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
{
  "id": "batch_abc123",
  "object": "batch",
  "endpoint": "/v1/chat/completions",
  "errors": null,
  "input_file_id": "file-abc123",
  "completion_window": "24h",
  "status": "validating",
  "output_file_id": null,
  "error_file_id": null,
  "created_at": 1714508499,
  "in_progress_at": null,
  "expires_at": 1714536634,
  "completed_at": null,
  "failed_at": null,
  "expired_at": null,
  "request_counts": {
    "total": 0,
    "completed": 0,
    "failed": 0
  },
  "metadata": null
}
```

### 4\. Check the status of a batch

You can check the status of a batch at any time, which will also return a Batch object.

Check the status of a batch

javascript

```javascript
1
2
3
4
5
import OpenAI from "openai";
const openai = new OpenAI();

const batch = await openai.batches.retrieve("batch_abc123");
console.log(batch);
```

```python
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

batch = client.batches.retrieve("batch_abc123")
print(batch)
```

```bash
1
2
3
curl https://api.openai.com/v1/batches/batch_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json"
```

The status of a given Batch object can be any of the following:

| Status | Description |
| --- | --- |
| `validating` | the input file is being validated before the batch can begin |
| `failed` | the input file has failed the validation process |
| `in_progress` | the input file was successfully validated and the batch is currently being run |
| `finalizing` | the batch has completed and the results are being prepared |
| `completed` | the batch has been completed and the results are ready |
| `expired` | the batch was not able to be completed within the 24-hour time window |
| `cancelling` | the batch is being cancelled (may take up to 10 minutes) |
| `cancelled` | the batch was cancelled |

### 5\. Retrieve the results

Once the batch is complete, you can download the output by making a request against the [Files API](https://platform.openai.com/docs/api-reference/files) via the `output_file_id` field from the Batch object and writing it to a file on your machine, in this case `batch_output.jsonl`

Retrieving the batch results

javascript

```javascript
1
2
3
4
5
6
7
import OpenAI from "openai";
const openai = new OpenAI();

const fileResponse = await openai.files.content("file-xyz123");
const fileContents = await fileResponse.text();

console.log(fileContents);
```

```python
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

file_response = client.files.content("file-xyz123")
print(file_response.text)
```

```bash
1
2
curl https://api.openai.com/v1/files/file-xyz123/content \
  -H "Authorization: Bearer $OPENAI_API_KEY" > batch_output.jsonl
```

The output `.jsonl` file will have one response line for every successful request line in the input file. Any failed requests in the batch will have their error information written to an error file that can be found via the batch's `error_file_id`.

Note that the output line order **may not match** the input line order. Instead of
relying on order to process your results, use the custom\_id field which will be
present in each line of your output file and allow you to map requests in your input
to results in your output.

```jsonl
{"id": "batch_req_123", "custom_id": "request-2", "response": {"status_code": 200, "request_id": "req_123", "body": {"id": "chatcmpl-123", "object": "chat.completion", "created": 1711652795, "model": "gpt-3.5-turbo-0125", "choices": [{"index": 0, "message": {"role": "assistant", "content": "Hello."}, "logprobs": null, "finish_reason": "stop"}], "usage": {"prompt_tokens": 22, "completion_tokens": 2, "total_tokens": 24}, "system_fingerprint": "fp_123"}}, "error": null}
{"id": "batch_req_456", "custom_id": "request-1", "response": {"status_code": 200, "request_id": "req_789", "body": {"id": "chatcmpl-abc", "object": "chat.completion", "created": 1711652789, "model": "gpt-3.5-turbo-0125", "choices": [{"index": 0, "message": {"role": "assistant", "content": "Hello! How can I assist you today?"}, "logprobs": null, "finish_reason": "stop"}], "usage": {"prompt_tokens": 20, "completion_tokens": 9, "total_tokens": 29}, "system_fingerprint": "fp_3ba"}}, "error": null}
```

The output file will automatically be deleted 30 days after the batch is complete.

### 6\. Cancel a batch

If necessary, you can cancel an ongoing batch. The batch's status will change to `cancelling` until in-flight requests are complete (up to 10 minutes), after which the status will change to `cancelled`.

Cancelling a batch

javascript

```javascript
1
2
3
4
5
import OpenAI from "openai";
const openai = new OpenAI();

const batch = await openai.batches.cancel("batch_abc123");
console.log(batch);
```

```python
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.batches.cancel("batch_abc123")
```

```bash
1
2
3
4
curl https://api.openai.com/v1/batches/batch_abc123/cancel \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -X POST
```

### 7\. Get a list of all batches

At any time, you can see all your batches. For users with many batches, you can use the `limit` and `after` parameters to paginate your results.

Getting a list of all batches

javascript

```javascript
1
2
3
4
5
6
7
8
import OpenAI from "openai";
const openai = new OpenAI();

const list = await openai.batches.list();

for await (const batch of list) {
  console.log(batch);
}
```

```python
1
2
3
4
from openai import OpenAI
client = OpenAI()

client.batches.list(limit=10)
```

```bash
1
2
3
curl https://api.openai.com/v1/batches?limit=10 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json"
```

## Model availability

The Batch API is widely available across most of our models, but not all. Please refer to the [model reference docs](https://platform.openai.com/docs/models) to ensure the model you're using supports the Batch API.

## Rate limits

Batch API rate limits are separate from existing per-model rate limits. The Batch API has two new types of rate limits:

1. **Per-batch limits:** A single batch may include up to 50,000 requests, and a batch input file can be up to 200 MB in size. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch.
2. **Enqueued prompt tokens per model:** Each model has a maximum number of enqueued prompt tokens allowed for batch processing. You can find these limits on the [Platform Settings page](https://platform.openai.com/settings/organization/limits).

There are no limits for output tokens or number of submitted requests for the Batch API today. Because Batch API rate limits are a new, separate pool, **using the Batch API will not consume tokens from your standard per-model rate limits**, thereby offering you a convenient way to increase the number of requests and processed tokens you can use when querying our API.

## Batch expiration

Batches that do not complete in time eventually move to an `expired` state; unfinished requests within that batch are cancelled, and any responses to completed requests are made available via the batch's output file. You will be charged for tokens consumed from any completed requests.

Expired requests will be written to your error file with the message as shown below. You can use the `custom_id` to retrieve the request data for expired requests.

```jsonl
{"id": "batch_req_123", "custom_id": "request-3", "response": null, "error": {"code": "batch_expired", "message": "This request could not be executed before the completion window expired."}}
{"id": "batch_req_123", "custom_id": "request-7", "response": null, "error": {"code": "batch_expired", "message": "This request could not be executed before the completion window expired."}}
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_conversation-state_api-mode=responses.md
---

---
url: "https://platform.openai.com/docs/guides/conversation-state?api-mode=responses"
title: "Conversation state - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Conversation state

Learn how to manage conversation state during a model interaction.

Copy page

OpenAI provides a few ways to manage conversation state, which is important for preserving information across multiple messages or turns in a conversation.

## Manually manage conversation state

While each text generation request is independent and stateless (unless you're using [the Assistants API](https://platform.openai.com/docs/assistants/overview)), you can still implement **multi-turn conversations** by providing additional messages as parameters to your text generation request. Consider a knock-knock joke:

Manually construct a past conversation

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: [\
        { role: "user", content: "knock knock." },\
        { role: "assistant", content: "Who's there?" },\
        { role: "user", content: "Orange." },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-4o-mini",
    input=[\
        {"role": "user", "content": "knock knock."},\
        {"role": "assistant", "content": "Who's there?"},\
        {"role": "user", "content": "Orange."},\
    ],
)

print(response.output_text)
```

By using alternating `user` and `assistant` messages, you capture the previous state of a conversation in one request to the model.

To manually share context across generated responses, include the model's previous response output as input, and append that input to your next request.

In the following example, we ask the model to tell a joke, followed by a request for another joke. Appending previous responses to new requests in this way helps ensure conversations feel natural and retain the context of previous interactions.

Manually manage conversation state with the Responses API.

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
import OpenAI from "openai";

const openai = new OpenAI();

let history = [\
    {\
        role: "user",\
        content: "tell me a joke",\
    },\
];

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: history,
    store: true,
});

console.log(response.output_text);

// Add the response to the history
history = [\
    ...history,\
    ...response.output.map((el) => {\
        // TODO: Remove this step\
        delete el.id;\
        return el;\
    }),\
];

history.push({
    role: "user",
    content: "tell me another",
});

const secondResponse = await openai.responses.create({
    model: "gpt-4o-mini",
    input: history,
    store: true,
});

console.log(secondResponse.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
from openai import OpenAI

client = OpenAI()

history = [\
    {\
        "role": "user",\
        "content": "tell me a joke"\
    }\
]

response = client.responses.create(
    model="gpt-4o-mini",
    input=history,
    store=False
)

print(response.output_text)

# Add the response to the conversation
history += [{"role": el.role, "content": el.content} for el in response.output]

history.append({ "role": "user", "content": "tell me another" })

second_response = client.responses.create(
    model="gpt-4o-mini",
    input=history,
    store=False
)

print(second_response.output_text)
```

## OpenAI APIs for conversation state

Our APIs make it easier to manage conversation state automatically, so you don't have to do pass inputs manually with each turn of a conversation.

Share context across generated responses with the `previous_response_id` parameter. This parameter lets you chain responses and create a threaded conversation.

In the following example, we ask the model to tell a joke. Separately, we ask the model to explain why it's funny, and the model has all necessary context to deliver a good response.

Manually manage conversation state with the Responses API.

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "tell me a joke",
    store: true,
});

console.log(response.output_text);

const secondResponse = await openai.responses.create({
    model: "gpt-4o-mini",
    previous_response_id: response.id,
    input: [{"role": "user", "content": "explain why this is funny."}],
    store: true,
});

console.log(secondResponse.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4o-mini",
    input="tell me a joke",
)
print(response.output_text)

second_response = client.responses.create(
    model="gpt-4o-mini",
    previous_response_id=response.id,
    input=[{"role": "user", "content": "explain why this is funny."}],
)
print(second_response.output_text)
```

Data retention for model responses

Response objects are saved for 30 days by default. They can be viewed in the dashboard
[logs](https://platform.openai.com/logs?api=responses) page or
[retrieved](https://platform.openai.com/docs/api-reference/responses/get) via the API.
You can disable this behavior by setting `store` to `false`
when creating a Response.

OpenAI does not use data sent via API to train our models without your explicit consent— [learn more](https://platform.openai.com/docs/guides/your-data).

Even when using `previous_response_id`, all previous input tokens for responses in the chain are billed as input tokens in the API.

## Managing the context window

Understanding context windows will help you successfully create threaded conversations and manage state across model interactions.

The **context window** is the maximum number of tokens that can be used in a single request. This max tokens number includes input, output, and reasoning tokens. To learn your model's context window, see [model details](https://platform.openai.com/docs/models).

### Managing context for text generation

As your inputs become more complex, or you include more turns in a conversation, you'll need to consider both **output token** and **context window** limits. Model inputs and outputs are metered in [**tokens**](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), which are parsed from inputs to analyze their content and intent and assembled to render logical outputs. Models have limits on token usage during the lifecycle of a text generation request.

- **Output tokens** are the tokens generated by a model in response to a prompt. Each model has different [limits for output tokens](https://platform.openai.com/docs/models). For example, `gpt-4o-2024-08-06` can generate a maximum of 16,384 output tokens.
- A **context window** describes the total tokens that can be used for both input and output tokens (and for some models, [reasoning tokens](https://platform.openai.com/docs/guides/reasoning)). Compare the [context window limits](https://platform.openai.com/docs/models) of our models. For example, `gpt-4o-2024-08-06` has a total context window of 128k tokens.

If you create a very large prompt—often by including extra context, data, or examples for the model—you run the risk of exceeding the allocated context window for a model, which might result in truncated outputs.

Use the [tokenizer tool](https://platform.openai.com/tokenizer), built with the [tiktoken library](https://github.com/openai/tiktoken), to see how many tokens are in a particular string of text.

For example, when making an API request to the [Responses API](https://platform.openai.com/docs/api-reference/responses) with a reasoning enabled model, like the [o1 model](https://platform.openai.com/docs/guides/reasoning), the following token counts will apply toward the context window total:

- Input tokens (inputs you include in the `input` array for the [Responses API](https://platform.openai.com/docs/api-reference/responses))
- Output tokens (tokens generated in response to your prompt)
- Reasoning tokens (used by the model to plan a response)

Tokens generated in excess of the context window limit may be truncated in API responses.

![context window visualization](https://cdn.openai.com/API/docs/images/context-window.png)

You can estimate the number of tokens your messages will use with the [tokenizer tool](https://platform.openai.com/tokenizer).

## Next steps

For more specific examples and use cases, visit the [OpenAI Cookbook](https://cookbook.openai.com/), or learn more about using the APIs to extend model capabilities:

- [Receive JSON responses with Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs)
- [Extend the models with function calling](https://platform.openai.com/docs/guides/function-calling)
- [Enable streaming for real-time responses](https://platform.openai.com/docs/guides/streaming-responses)
- [Build a computer using agent](https://platform.openai.com/docs/guides/tools-computer-use)

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_direct-preference-optimization.md
---

---

url: "<https://platform.openai.com/docs/guides/direct-preference-optimization>"
title: "Direct preference optimization - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Direct preference optimization

Fine-tune models for subjective decision-making by comparing model outputs.

Copy page

[Direct Preference Optimization](https://arxiv.org/abs/2305.18290) (DPO) fine-tuning allows you to fine-tune models based on prompts and pairs of responses. This approach enables the model to learn from more subjective human preferences, optimizing for outputs that are more likely to be favored. DPO is currently only supported for text inputs and outputs.

## Data format

Each example in your dataset should contain:

- A prompt, like a user message.
- A preferred output (an ideal assistant response).
- A non-preferred output (a suboptimal assistant response).

The data should be formatted in JSONL format, with each line [representing an example](https://platform.openai.com/docs/api-reference/fine-tuning/preference-input) in the following structure:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
{
  "input": {
    "messages": [\
      {\
        "role": "user",\
        "content": "Hello, can you tell me how cold San Francisco is today?"\
      }\
    ],
    "tools": [],
    "parallel_tool_calls": true
  },
  "preferred_output": [\
    {\
      "role": "assistant",\
      "content": "Today in San Francisco, it is not quite cold as expected. Morning clouds will give away to sunshine, with a high near 68°F (20°C) and a low around 57°F (14°C)."\
    }\
  ],
  "non_preferred_output": [\
    {\
      "role": "assistant",\
      "content": "It is not particularly cold in San Francisco today."\
    }\
  ]
}
```

Currently, we only train on one-turn conversations for each example, where the preferred and non-preferred messages need to be the last assistant message.

## Create a DPO fine-tune job

Uploading training data and using a model fine-tuned with DPO follows the [same flow described here](https://platform.openai.com/docs/guides/fine-tuning).

To create a DPO fine-tune job, use the `method` field in the [fine-tuning job creation endpoint](https://platform.openai.com/docs/api-reference/fine-tuning/create), where you can specify `type` as well as any associated `hyperparameters`. For DPO:

- set the `type` parameter to `dpo`
- optionally set the `hyperparameters` property with any options you'd like to configure.

The `beta` hyperparameter is a new option that is only available for DPO. It's a floating point number between `0` and `2` that controls how strictly the new model will adhere to its previous behavior, versus aligning with the provided preferences. A high number will be more conservative (favoring previous behavior), and a lower number will be more aggressive (favor the newly provided preferences more often).

You can also set this value to `auto` (the default) to use a value configured by the platform.

The example below shows how to configure a DPO fine-tuning job using the OpenAI SDK.

Create a fine-tuning job with DPO

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
import OpenAI from "openai";

const openai = new OpenAI();

const job = await openai.fineTuning.jobs.create({
  training_file: "file-all-about-the-weather",
  model: "gpt-4o-2024-08-06",
  method: {
    type: "dpo",
    dpo: {
      hyperparameters: { beta: 0.1 },
    },
  },
});
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
from openai import OpenAI

client = OpenAI()

job = client.fine_tuning.jobs.create(
    training_file="file-all-about-the-weather",
    model="gpt-4o-2024-08-06",
    method={
        "type": "dpo",
        "dpo": {
            "hyperparameters": {"beta": 0.1},
        },
    },
)
```

## Use SFT and DPO together

Currently, OpenAI offers [supervised fine-tuning (SFT)](https://platform.openai.com/docs/guides/supervised-fine-tuning) as the default method for fine-tuning jobs. Performing SFT on your preferred responses (or a subset) before running another DPO job afterwards can significantly enhance model alignment and performance. By first fine-tuning the model on the desired responses, it can better identify correct patterns, providing a strong foundation for DPO to refine behavior.

A recommended workflow is as follows:

1. Fine-tune the base model with SFT using a subset of your preferred responses. Focus on ensuring the data quality and representativeness of the tasks.
2. Use the SFT fine-tuned model as the starting point, and apply DPO to adjust the model based on preference comparisons.

## Next steps

Now that you know the basics of DPO, explore these other methods as well.

[Supervised fine-tuning\\
\\
Fine-tune a model by providing correct outputs for sample inputs.](https://platform.openai.com/docs/guides/supervised-fine-tuning) [Vision fine-tuning\\
\\
Learn to fine-tune for computer vision with image inputs.](https://platform.openai.com/docs/guides/vision-fine-tuning) [Reinforcement fine-tuning\\
\\
Fine-tune a reasoning model by grading its outputs.](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_distillation.md
---

---

url: "<https://platform.openai.com/docs/guides/distillation>"
title: "Model distillation - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Model distillation

Improve smaller models with distillation techniques.

Copy page

Model Distillation allows you to leverage the outputs of a large model to [fine-tune](https://platform.openai.com/docs/guides/fine-tuning) a smaller model, enabling it to achieve similar performance on a specific task. This process can significantly reduce both cost and latency, as smaller models are typically more efficient.

Here's how it works:

1. Store high-quality outputs of a large model using the [`store`](https://platform.openai.com/docs/api-reference/chat/create#chat-create-store) parameter in the Chat Completions API to store them.
2. [Evaluate](https://platform.openai.com/docs/guides/evals) the stored completions with both the large and the small model to establish a baseline.
3. Select the stored completions that you'd like to use to for distillation and use them to [fine-tune](https://platform.openai.com/docs/guides/fine-tuning) the smaller model.
4. [Evaluate](https://platform.openai.com/docs/guides/evals) the performance of the fine-tuned model to see how it compares to the large model.

Let's go through these steps to see how it's done.

## Store high-quality outputs of a large model

The first step in the distillation process is to generate good results with a large model like `o1-preview` or `gpt-4o` that meet your bar. As you generate these results, you can store them using the `store: true` option in the [Chat Completions API](https://platform.openai.com/docs/api-reference/chat/create#chat-create-store). We also recommend you use the [metadata](https://platform.openai.com/docs/api-reference/chat/create#chat-create-metadata) property to tag these completions for easy filtering later.

These stored completion can then be viewed and filtered in the [dashboard](https://platform.openai.com/chat-completions).

Store high-quality outputs of a large model

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.chat.completions.create({
  model: "gpt-4.1",
  messages: [\
    { role: "system", content: "You are a corporate IT support expert." },\
    { role: "user", content: "How can I hide the dock on my Mac?"},\
  ],
  store: true,
  metadata: {
    role: "manager",
    department: "accounting",
    source: "homepage"
  }
});

console.log(response.choices[0]);
```

When using the `store: true` option, completions are stored for 30 days. Your completions may contain sensitive information and so, you may want to consider creating a new [Project](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects) with limited access to store these completions.

## Evaluate to establish a baseline

You can use your stored completions to evaluate the performance of both the larger model and a smaller model on your task to establish a baseline. This can be done using the [evals](https://platform.openai.com/docs/guides/evals) product.

Typically, the large model will outperform the smaller model on your evaluations. Establishing this baseline allows you to measure the improvements gained through the distillation / fine-tuning process.

## Create training dataset to fine-tune smaller model

Next you can select a subset of your stored completions to use as training data for fine-tuning a smaller model like `gpt-4o-mini`. [Filter your stored completions](https://platform.openai.com/chat-completions) to those that you would like to use to train the small model, and click the "Distill" button. A few hundred samples might be sufficient, but sometimes a more diverse range of thousands of samples can yield better results.

![distill results](https://openaidevs.retool.com/api/file/7c0009a4-e9f9-4b66-af50-c4e58e0d267d)

This action will open a dialog to begin a [fine-tuning job](https://platform.openai.com/docs/guides/fine-tuning), with your selected completions as the training dataset. Configure the parameters as needed, choosing the base model you wish to fine-tune. In this example, we're going to choose the [latest snapshot of GPT-4o-mini](https://platform.openai.com/docs/models#gpt-4o-mini).

![fine tune job](https://openaidevs.retool.com/api/file/ab8d0ccf-df5d-4099-80e1-2f257d82a92f)

After configuring, click "Run" to start the fine-tuning job. The process may take 15 minutes or longer, depending on the size of your training dataset.

## Evaluate the fine-tuned small model

When your fine-tuning job is complete, you can run evals against it to see how it stacks up against the base small and large models. You can select fine-tuned models in the [Evals](https://platform.openai.com/evaluations) product to generate new completions with the fine-tuned small model.

![eval using ft model](https://openaidevs.retool.com/api/file/8fcfdb03-1385-47d8-81d6-735af29594cc)

Alternately, you could also store [new Chat Completions](https://platform.openai.com/docs/guides/(/docs/guides/distillation#send-fine-tuned)) generated by the fine-tuned model, and use them to evaluate performance. By continually tweaking and improving:

- The diversity of the training data
- Your prompts and outputs on the large model
- The accuracy of your eval graders

You can bring the performance of the smaller model up to the same levels as the large model, for a specific subset of tasks.

## Next steps

Distilling large model results to a small model is one powerful way to improve the results you generate from your models, but not the only one. Check out these resources to learn more about optimizing your outputs.

[Fine-tuning\\
\\
Improve a model's ability to generate responses tailored to your use case.](https://platform.openai.com/docs/guides/fine-tuning) [Evals\\
\\
Run tests on your model outputs to ensure you're getting the right results.](https://platform.openai.com/docs/guides/evals) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_embeddings.md
---

---

url: "<https://platform.openai.com/docs/guides/embeddings>"
title: "Vector embeddings - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Vector embeddings

Learn how to turn text into numbers, unlocking use cases like search.

Copy page

New embedding models

`text-embedding-3-small` and `text-embedding-3-large`, our newest and most performant embedding models, are now available. They feature lower costs, higher multilingual performance, and new parameters to control the overall size.

## What are embeddings?

OpenAI’s text embeddings measure the relatedness of text strings. Embeddings are commonly used for:

- **Search** (where results are ranked by relevance to a query string)
- **Clustering** (where text strings are grouped by similarity)
- **Recommendations** (where items with related text strings are recommended)
- **Anomaly detection** (where outliers with little relatedness are identified)
- **Diversity measurement** (where similarity distributions are analyzed)
- **Classification** (where text strings are classified by their most similar label)

An embedding is a vector (list) of floating point numbers. The [distance](https://platform.openai.com/docs/guides/embeddings#which-distance-function-should-i-use) between two vectors measures their relatedness. Small distances suggest high relatedness and large distances suggest low relatedness.

Visit our [pricing page](https://openai.com/api/pricing/) to learn about embeddings pricing. Requests are billed based on the number of [tokens](https://platform.openai.com/tokenizer) in the [input](https://platform.openai.com/docs/api-reference/embeddings/create#embeddings/create-input).

## How to get embeddings

To get an embedding, send your text string to the [embeddings API endpoint](https://platform.openai.com/docs/api-reference/embeddings) along with the embedding model name (e.g., `text-embedding-3-small`):

Example: Getting embeddings

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
import OpenAI from "openai";
const openai = new OpenAI();

const embedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: "Your text string goes here",
  encoding_format: "float",
});

console.log(embedding);
```

```python
1
2
3
4
5
6
7
8
9
from openai import OpenAI
client = OpenAI()

response = client.embeddings.create(
    input="Your text string goes here",
    model="text-embedding-3-small"
)

print(response.data[0].embedding)
```

```bash
1
2
3
4
5
6
7
curl https://api.openai.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "input": "Your text string goes here",
    "model": "text-embedding-3-small"
  }'
```

The response contains the embedding vector (list of floating point numbers) along with some additional metadata. You can extract the embedding vector, save it in a vector database, and use for many different use cases.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
{
  "object": "list",
  "data": [\
    {\
      "object": "embedding",\
      "index": 0,\
      "embedding": [\
        -0.006929283495992422,\
        -0.005336422007530928,\
        -4.547132266452536e-05,\
        -0.024047505110502243\
      ],\
    }\
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}
```

By default, the length of the embedding vector is `1536` for `text-embedding-3-small` or `3072` for `text-embedding-3-large`. To reduce the embedding's dimensions without losing its concept-representing properties, pass in the [dimensions parameter](https://platform.openai.com/docs/api-reference/embeddings/create#embeddings-create-dimensions). Find more detail on embedding dimensions in the [embedding use case section](https://platform.openai.com/docs/guides/embeddings#use-cases).

## Embedding models

OpenAI offers two powerful third-generation embedding model (denoted by `-3` in the model ID). Read the embedding v3 [announcement blog post](https://openai.com/blog/new-embedding-models-and-api-updates) for more details.

Usage is priced per input token. Below is an example of pricing pages of text per US dollar (assuming ~800 tokens per page):

| Model | ~ Pages per dollar | Performance on [MTEB](https://github.com/embeddings-benchmark/mteb) eval | Max input |
| --- | --- | --- | --- |
| text-embedding-3-small | 62,500 | 62.3% | 8192 |
| text-embedding-3-large | 9,615 | 64.6% | 8192 |
| text-embedding-ada-002 | 12,500 | 61.0% | 8192 |

## Use cases

Here we show some representative use cases, using the [Amazon fine-food reviews dataset](https://www.kaggle.com/snap/amazon-fine-food-reviews).

### Obtaining the embeddings

The dataset contains a total of 568,454 food reviews left by Amazon users up to October 2012. We use a subset of the 1000 most recent reviews for illustration purposes. The reviews are in English and tend to be positive or negative. Each review has a `ProductId`, `UserId`, `Score`, review title ( `Summary`) and review body ( `Text`). For example:

| Product Id | User Id | Score | Summary | Text |
| --- | --- | --- | --- | --- |
| B001E4KFG0 | A3SGXH7AUHU8GW | 5 | Good Quality Dog Food | I have bought several of the Vitality canned... |
| B00813GRG4 | A1D87F6ZCVE5NK | 1 | Not as Advertised | Product arrived labeled as Jumbo Salted Peanut... |

Below, we combine the review summary and review text into a single combined text. The model encodes this combined text and output a single vector embedding.

[Get\_embeddings\_from\_dataset.ipynb](https://cookbook.openai.com/examples/get_embeddings_from_dataset)

```python
1
2
3
4
5
6
7
8
9
from openai import OpenAI
client = OpenAI()

def get_embedding(text, model="text-embedding-3-small"):
    text = text.replace("\n", " ")
    return client.embeddings.create(input = [text], model=model).data[0].embedding

df['ada_embedding'] = df.combined.apply(lambda x: get_embedding(x, model='text-embedding-3-small'))
df.to_csv('output/embedded_1k_reviews.csv', index=False)
```

To load the data from a saved file, you can run the following:

```python
1
2
3
4
import pandas as pd

df = pd.read_csv('output/embedded_1k_reviews.csv')
df['ada_embedding'] = df.ada_embedding.apply(eval).apply(np.array)
```

Reducing embedding dimensions

Using larger embeddings, for example storing them in a vector store for retrieval, generally costs more and consumes more compute, memory and storage than using smaller embeddings.

Both of our new embedding models were trained [with a technique](https://arxiv.org/abs/2205.13147) that allows developers to trade-off performance and cost of using embeddings. Specifically, developers can shorten embeddings (i.e. remove some numbers from the end of the sequence) without the embedding losing its concept-representing properties by passing in the [`dimensions` API parameter](https://platform.openai.com/docs/api-reference/embeddings/create#embeddings-create-dimensions). For example, on the MTEB benchmark, a `text-embedding-3-large` embedding can be shortened to a size of 256 while still outperforming an unshortened `text-embedding-ada-002` embedding with a size of 1536. You can read more about how changing the dimensions impacts performance in our [embeddings v3 launch blog post](https://openai.com/blog/new-embedding-models-and-api-updates#:~:text=Native%20support%20for%20shortening%20embeddings).

In general, using the `dimensions` parameter when creating the embedding is the suggested approach. In certain cases, you may need to change the embedding dimension after you generate it. When you change the dimension manually, you need to be sure to normalize the dimensions of the embedding as is shown below.

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
from openai import OpenAI
import numpy as np

client = OpenAI()

def normalize_l2(x):
    x = np.array(x)
    if x.ndim == 1:
        norm = np.linalg.norm(x)
        if norm == 0:
            return x
        return x / norm
    else:
        norm = np.linalg.norm(x, 2, axis=1, keepdims=True)
        return np.where(norm == 0, x, x / norm)

response = client.embeddings.create(
    model="text-embedding-3-small", input="Testing 123", encoding_format="float"
)

cut_dim = response.data[0].embedding[:256]
norm_dim = normalize_l2(cut_dim)

print(norm_dim)
```

Dynamically changing the dimensions enables very flexible usage. For example, when using a vector data store that only supports embeddings up to 1024 dimensions long, developers can now still use our best embedding model `text-embedding-3-large` and specify a value of 1024 for the `dimensions` API parameter, which will shorten the embedding down from 3072 dimensions, trading off some accuracy in exchange for the smaller vector size.

Question answering using embeddings-based search

[Question\_answering\_using\_embeddings.ipynb](https://cookbook.openai.com/examples/question_answering_using_embeddings)

There are many common cases where the model is not trained on data which contains key facts and information you want to make accessible when generating responses to a user query. One way of solving this, as shown below, is to put additional information into the context window of the model. This is effective in many use cases but leads to higher token costs. In this notebook, we explore the tradeoff between this approach and embeddings bases search.

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
query = f"""Use the below article on the 2022 Winter Olympics to answer the subsequent question. If the answer cannot be found, write "I don't know."

Article:
\"\"\"
{wikipedia_article_on_curling}
\"\"\"

Question: Which athletes won the gold medal in curling at the 2022 Winter Olympics?"""

response = client.chat.completions.create(
    messages=[\
        {'role': 'system', 'content': 'You answer questions about the 2022 Winter Olympics.'},\
        {'role': 'user', 'content': query},\
    ],
    model=GPT_MODEL,
    temperature=0,
)

print(response.choices[0].message.content)
```

Text search using embeddings

[Semantic\_text\_search\_using\_embeddings.ipynb](https://cookbook.openai.com/examples/semantic_text_search_using_embeddings)

To retrieve the most relevant documents we use the cosine similarity between the embedding vectors of the query and each document, and return the highest scored documents.

```python
1
2
3
4
5
6
7
8
9
from openai.embeddings_utils import get_embedding, cosine_similarity

def search_reviews(df, product_description, n=3, pprint=True):
    embedding = get_embedding(product_description, model='text-embedding-3-small')
    df['similarities'] = df.ada_embedding.apply(lambda x: cosine_similarity(x, embedding))
    res = df.sort_values('similarities', ascending=False).head(n)
    return res

res = search_reviews(df, 'delicious beans', n=3)
```

Code search using embeddings

[Code\_search.ipynb](https://cookbook.openai.com/examples/code_search_using_embeddings)

Code search works similarly to embedding-based text search. We provide a method to extract Python functions from all the Python files in a given repository. Each function is then indexed by the `text-embedding-3-small` model.

To perform a code search, we embed the query in natural language using the same model. Then we calculate cosine similarity between the resulting query embedding and each of the function embeddings. The highest cosine similarity results are most relevant.

```python
1
2
3
4
5
6
7
8
9
10
11
12
from openai.embeddings_utils import get_embedding, cosine_similarity

df['code_embedding'] = df['code'].apply(lambda x: get_embedding(x, model='text-embedding-3-small'))

def search_functions(df, code_query, n=3, pprint=True, n_lines=7):
    embedding = get_embedding(code_query, model='text-embedding-3-small')
    df['similarities'] = df.code_embedding.apply(lambda x: cosine_similarity(x, embedding))

    res = df.sort_values('similarities', ascending=False).head(n)
    return res

res = search_functions(df, 'Completions API tests', n=3)
```

Recommendations using embeddings

[Recommendation\_using\_embeddings.ipynb](https://cookbook.openai.com/examples/recommendation_using_embeddings)

Because shorter distances between embedding vectors represent greater similarity, embeddings can be useful for recommendation.

Below, we illustrate a basic recommender. It takes in a list of strings and one 'source' string, computes their embeddings, and then returns a ranking of the strings, ranked from most similar to least similar. As a concrete example, the linked notebook below applies a version of this function to the [AG news dataset](http://groups.di.unipi.it/~gulli/AG_corpus_of_news_articles.html) (sampled down to 2,000 news article descriptions) to return the top 5 most similar articles to any given source article.

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
def recommendations_from_strings(
    strings: List[str],
    index_of_source_string: int,
    model="text-embedding-3-small",
) -> List[int]:
    """Return nearest neighbors of a given string."""

    # get embeddings for all strings
    embeddings = [embedding_from_string(string, model=model) for string in strings]

    # get the embedding of the source string
    query_embedding = embeddings[index_of_source_string]

    # get distances between the source embedding and other embeddings (function from embeddings_utils.py)
    distances = distances_from_embeddings(query_embedding, embeddings, distance_metric="cosine")

    # get indices of nearest neighbors (function from embeddings_utils.py)
    indices_of_nearest_neighbors = indices_of_nearest_neighbors_from_distances(distances)
    return indices_of_nearest_neighbors
```

Data visualization in 2D

[Visualizing\_embeddings\_in\_2D.ipynb](https://cookbook.openai.com/examples/visualizing_embeddings_in_2d)

The size of the embeddings varies with the complexity of the underlying model. In order to visualize this high dimensional data we use the t-SNE algorithm to transform the data into two dimensions.

We color the individual reviews based on the star rating which the reviewer has given:

- 1-star: red
- 2-star: dark orange
- 3-star: gold
- 4-star: turquoise
- 5-star: dark green

![Amazon ratings visualized in language using t-SNE](https://cdn.openai.com/API/docs/images/embeddings-tsne.png)

The visualization seems to have produced roughly 3 clusters, one of which has mostly negative reviews.

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import pandas as pd
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt
import matplotlib

df = pd.read_csv('output/embedded_1k_reviews.csv')
matrix = df.ada_embedding.apply(eval).to_list()

# Create a t-SNE model and transform the data
tsne = TSNE(n_components=2, perplexity=15, random_state=42, init='random', learning_rate=200)
vis_dims = tsne.fit_transform(matrix)

colors = ["red", "darkorange", "gold", "turquiose", "darkgreen"]
x = [x for x,y in vis_dims]
y = [y for x,y in vis_dims]
color_indices = df.Score.values - 1

colormap = matplotlib.colors.ListedColormap(colors)
plt.scatter(x, y, c=color_indices, cmap=colormap, alpha=0.3)
plt.title("Amazon ratings visualized in language using t-SNE")
```

Embedding as a text feature encoder for ML algorithms

[Regression\_using\_embeddings.ipynb](https://cookbook.openai.com/examples/regression_using_embeddings)

An embedding can be used as a general free-text feature encoder within a machine learning model. Incorporating embeddings will improve the performance of any machine learning model, if some of the relevant inputs are free text. An embedding can also be used as a categorical feature encoder within a ML model. This adds most value if the names of categorical variables are meaningful and numerous, such as job titles. Similarity embeddings generally perform better than search embeddings for this task.

We observed that generally the embedding representation is very rich and information dense. For example, reducing the dimensionality of the inputs using SVD or PCA, even by 10%, generally results in worse downstream performance on specific tasks.

This code splits the data into a training set and a testing set, which will be used by the following two use cases, namely regression and classification.

```python
1
2
3
4
5
6
7
8
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    list(df.ada_embedding.values),
    df.Score,
    test_size = 0.2,
    random_state=42
)
```

#### Regression using the embedding features

Embeddings present an elegant way of predicting a numerical value. In this example we predict the reviewer’s star rating, based on the text of their review. Because the semantic information contained within embeddings is high, the prediction is decent even with very few reviews.

We assume the score is a continuous variable between 1 and 5, and allow the algorithm to predict any floating point value. The ML algorithm minimizes the distance of the predicted value to the true score, and achieves a mean absolute error of 0.39, which means that on average the prediction is off by less than half a star.

```python
1
2
3
4
5
from sklearn.ensemble import RandomForestRegressor

rfr = RandomForestRegressor(n_estimators=100)
rfr.fit(X_train, y_train)
preds = rfr.predict(X_test)
```

Classification using the embedding features

[Classification\_using\_embeddings.ipynb](https://cookbook.openai.com/examples/classification_using_embeddings)

This time, instead of having the algorithm predict a value anywhere between 1 and 5, we will attempt to classify the exact number of stars for a review into 5 buckets, ranging from 1 to 5 stars.

After the training, the model learns to predict 1 and 5-star reviews much better than the more nuanced reviews (2-4 stars), likely due to more extreme sentiment expression.

```python
1
2
3
4
5
6
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score

clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)
preds = clf.predict(X_test)
```

Zero-shot classification

[Zero-shot\_classification\_with\_embeddings.ipynb](https://cookbook.openai.com/examples/zero-shot_classification_with_embeddings)

We can use embeddings for zero shot classification without any labeled training data. For each class, we embed the class name or a short description of the class. To classify some new text in a zero-shot manner, we compare its embedding to all class embeddings and predict the class with the highest similarity.

```python
1
2
3
4
5
6
7
8
9
10
11
12
from openai.embeddings_utils import cosine_similarity, get_embedding

df= df[df.Score!=3]
df['sentiment'] = df.Score.replace({1:'negative', 2:'negative', 4:'positive', 5:'positive'})

labels = ['negative', 'positive']
label_embeddings = [get_embedding(label, model=model) for label in labels]

def label_score(review_embedding, label_embeddings):
    return cosine_similarity(review_embedding, label_embeddings[1]) - cosine_similarity(review_embedding, label_embeddings[0])

prediction = 'positive' if label_score('Sample Review', label_embeddings) > 0 else 'negative'
```

Obtaining user and product embeddings for cold-start recommendation

[User\_and\_product\_embeddings.ipynb](https://cookbook.openai.com/examples/user_and_product_embeddings)

We can obtain a user embedding by averaging over all of their reviews. Similarly, we can obtain a product embedding by averaging over all the reviews about that product. In order to showcase the usefulness of this approach we use a subset of 50k reviews to cover more reviews per user and per product.

We evaluate the usefulness of these embeddings on a separate test set, where we plot similarity of the user and product embedding as a function of the rating. Interestingly, based on this approach, even before the user receives the product we can predict better than random whether they would like the product.

![Boxplot grouped by Score](https://cdn.openai.com/API/docs/images/embeddings-boxplot.png)

```python
user_embeddings = df.groupby('UserId').ada_embedding.apply(np.mean)
prod_embeddings = df.groupby('ProductId').ada_embedding.apply(np.mean)
```

Clustering

[Clustering.ipynb](https://cookbook.openai.com/examples/clustering)

Clustering is one way of making sense of a large volume of textual data. Embeddings are useful for this task, as they provide semantically meaningful vector representations of each text. Thus, in an unsupervised way, clustering will uncover hidden groupings in our dataset.

In this example, we discover four distinct clusters: one focusing on dog food, one on negative reviews, and two on positive reviews.

![Clusters identified visualized in language 2d using t-SNE](https://cdn.openai.com/API/docs/images/embeddings-cluster.png)

```python
1
2
3
4
5
6
7
8
9
import numpy as np
from sklearn.cluster import KMeans

matrix = np.vstack(df.ada_embedding.values)
n_clusters = 4

kmeans = KMeans(n_clusters = n_clusters, init='k-means++', random_state=42)
kmeans.fit(matrix)
df['Cluster'] = kmeans.labels_
```

## FAQ

### How can I tell how many tokens a string has before I embed it?

In Python, you can split a string into tokens with OpenAI's tokenizer [`tiktoken`](https://github.com/openai/tiktoken).

Example code:

```python
1
2
3
4
5
6
7
8
9
import tiktoken

def num_tokens_from_string(string: str, encoding_name: str) -> int:
    """Returns the number of tokens in a text string."""
    encoding = tiktoken.get_encoding(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

num_tokens_from_string("tiktoken is great!", "cl100k_base")
```

For third-generation embedding models like `text-embedding-3-small`, use the `cl100k_base` encoding.

More details and example code are in the OpenAI Cookbook guide [how to count tokens with tiktoken](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken).

### How can I retrieve K nearest embedding vectors quickly?

For searching over many vectors quickly, we recommend using a vector database. You can find examples of working with vector databases and the OpenAI API [in our Cookbook](https://cookbook.openai.com/examples/vector_databases/readme) on GitHub.

### Which distance function should I use?

We recommend [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity). The choice of distance function typically doesn't matter much.

OpenAI embeddings are normalized to length 1, which means that:

- Cosine similarity can be computed slightly faster using just a dot product
- Cosine similarity and Euclidean distance will result in the identical rankings

### Can I share my embeddings online?

Yes, customers own their input and output from our models, including in the case of embeddings. You are responsible for ensuring that the content you input to our API does not violate any applicable law or our [Terms of Use](https://openai.com/policies/terms-of-use).

### Do V3 embedding models know about recent events?

No, the `text-embedding-3-large` and `text-embedding-3-small` models lack knowledge of events that occurred after September 2021. This is generally not as much of a limitation as it would be for text generation models but in certain edge cases it can reduce performance. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_evals.md
---

---

url: "<https://platform.openai.com/docs/guides/evals>"
title: "Evaluating model performance - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Evaluating model performance

Test and improve model outputs through evaluations.

Copy page

Evaluations (often called **evals**) test model outputs to ensure they meet style and content criteria that you specify. Writing evals to understand how your LLM applications are performing against your expectations, especially when upgrading or trying new models, is an essential component to building reliable applications.

In this guide, we will focus on **configuring evals programmatically using the [Evals API](https://platform.openai.com/docs/api-reference/evals)**. If you prefer, you can also configure evals [in the OpenAI dashboard](https://platform.openai.com/evaluations).

Broadly, there are three steps to build and run evals for your LLM application.

1. Describe the task to be done as an eval
2. Run your eval with test inputs (a prompt and input data)
3. Analyze the results, then iterate and improve on your prompt

This process is somewhat similar to behavior-driven development (BDD), where you begin by specifying how the system should behave before implementing and testing the system. Let's see how we would complete each of the steps above using the [Evals API](https://platform.openai.com/docs/api-reference/evals).

## Create an eval for a task

Creating an eval begins by describing a task to be done by a model. Let's say that we would like to use a model to classify the contents of IT support tickets into one of three categories: `Hardware`, `Software`, or `Other`.

To implement this use case with the [Chat Completions API](https://platform.openai.com/docs/api-reference/chat), you might write code like this that combines a [developer message](https://platform.openai.com/docs/guides/text) with a user message containing the text of a support ticket.

Categorize IT support tickets

python

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
curl https://api.openai.com/v1/chat/completions \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "messages": [\
            {\
                "role": "developer",\
                "content": "Categorize the following support ticket into one of Hardware, Software, or Other."\
            },\
            {\
                "role": "user",\
                "content": "My monitor wont turn on - help!"\
            }\
        ]
    }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import OpenAI from "openai";
const client = new OpenAI();

const instructions = `
You are an expert in categorizing IT support tickets. Given the support
ticket below, categorize the request into one of "Hardware", "Software",
or "Other". Respond with only one of those words.
`;

const ticket = "My monitor won't turn on - help!";

const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [\
        { role: "developer", content: instructions },\
        { role: "user", content: ticket },\
    ],
});

console.log(completion.choices[0].message.content);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
from openai import OpenAI
client = OpenAI()

instructions = """
You are an expert in categorizing IT support tickets. Given the support
ticket below, categorize the request into one of "Hardware", "Software",
or "Other". Respond with only one of those words.
"""

ticket = "My monitor won't turn on - help!"

completion = client.chat.completions.create(
    model="gpt-4.1",
    messages=[\
        {"role": "developer", "content": instructions},\
        {"role": "user", "content": ticket}\
    ]
)

print(completion.choices[0].message.content)
```

Let's set up an eval to test this behavior [via API](https://platform.openai.com/docs/api-reference/evals). An eval needs two key ingredients:

- `data_source_config`: A schema for the test data you will use along with the eval.
- `testing_criteria`: The [graders](https://platform.openai.com/docs/guides/graders) that determine if the model output is correct.

Create an eval

curl

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
curl https://api.openai.com/v1/evals \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "IT Ticket Categorization",
        "data_source_config": {
            "type": "custom",
            "item_schema": {
                "type": "object",
                "properties": {
                    "ticket_text": { "type": "string" },
                    "correct_label": { "type": "string" }
                },
                "required": ["ticket_text", "correct_label"]
            },
            "include_sample_schema": true
        },
        "testing_criteria": [\
            {\
                "type": "string_check",\
                "name": "Match output to human label",\
                "input": "{{ sample.output_text }}",\
                "operation": "eq",\
                "reference": "{{ item.correct_label }}"\
            }\
        ]
    }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
import OpenAI from "openai";
const openai = new OpenAI();

const evalObj = await openai.evals.create({
    name: "IT Ticket Categorization",
    data_source_config: {
        type: "custom",
        item_schema: {
            type: "object",
            properties: {
                ticket_text: { type: "string" },
                correct_label: { type: "string" }
            },
            required: ["ticket_text", "correct_label"],
        },
        include_sample_schema: true,
    },
    testing_criteria: [\
        {\
            type: "string_check",\
            name: "Match output to human label",\
            input: "{{ sample.output_text }}",\
            operation: "eq",\
            reference: "{{ item.correct_label }}",\
        },\
    ],
});

console.log(evalObj);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
from openai import OpenAI
client = OpenAI()

eval_obj = client.evals.create(
    name="IT Ticket Categorization",
    data_source_config={
        "type": "custom",
        "item_schema": {
            "type": "object",
            "properties": {
                "ticket_text": {"type": "string"},
                "correct_label": {"type": "string"},
            },
            "required": ["ticket_text", "correct_label"],
        },
        "include_sample_schema": True,
    },
    testing_criteria=[\
        {\
            "type": "string_check",\
            "name": "Match output to human label",\
            "input": "{{ sample.output_text }}",\
            "operation": "eq",\
            "reference": "{{ item.correct_label }}",\
        }\
    ],
)

print(eval_obj)
```

Explanation: data\_source\_config parameter

Running this eval will require a test data set that represents the type of data you expect your prompt to work with (more on creating the test data set later in this guide). In our `data_source_config` parameter, we specify that each **item** in the data set will conform to a [JSON schema](https://json-schema.org/) with two properties:

- `ticket_text`: a string of text with the contents of a support ticket
- `correct_label`: a "ground truth" output that the model should match, provided by a human

Since we will be referencing a **sample** in our test criteria (the output generated by a model given our prompt), we also set `include_sample_schema` to `true`.

```json
1
2
3
4
5
6
7
8
9
10
11
12
{
    "type": "custom",
    "item_schema": {
        "type": "object",
        "properties": {
            "ticket": { "type": "string" },
            "category": { "type": "string" }
        },
        "required": ["ticket", "category"]
    },
    "include_sample_schema": true
}
```

Explanation: testing\_criteria parameter

In our `testing_criteria`, we define how we will conclude if the model output satisfies our requirements for each item in the data set. In this case, we just want the model to output one of three category strings based on the input ticket. The string it outputs should exactly match the human-labeled `correct_label` field in our test data. So in this case, we will want to use a `string_check` grader to evaluate the output.

In the test configuration, we will introduce template syntax, represented by the `{{` and `}}` brackets below. This is how we will insert dynamic content into the test for this eval.

- `{{ item.correct_label }}` refers to the ground truth value in our test data.
- `{{ sample.output_text }}` refers to the content we will generate from a model to evaluate our prompt - we'll show how to do that when we actually kick off the eval run.

```json
1
2
3
4
5
6
7
{
    "type": "string_check",
    "name": "Category string match",
    "input": "{{ sample.output_text }}",
    "operation": "eq",
    "reference": "{{ item.category }}"
}
```

After creating the eval, it will be assigned a UUID that you will need to address it later when kicking off a run.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
{
  "object": "eval",
  "id": "eval_67e321d23b54819096e6bfe140161184",
  "data_source_config": {
    "type": "custom",
    "schema": { ... omitted for brevity... }
  },
  "testing_criteria": [\
    {\
      "name": "Match output to human label",\
      "id": "Match output to human label-c4fdf789-2fa5-407f-8a41-a6f4f9afd482",\
      "type": "string_check",\
      "input": "{{ sample.output_text }}",\
      "reference": "{{ item.correct_label }}",\
      "operation": "eq"\
    }\
  ],
  "name": "IT Ticket Categorization",
  "created_at": 1742938578,
  "metadata": {}
}
```

Now that we've created an eval that describes the desired behavior of our application, let's test a prompt with a set of test data.

## Test a prompt with your eval

Now that we have defined how we want our app to behave in an eval, let's construct a prompt that reliably generates the correct output for a representative sample of test data.

### Uploading test data

There are several ways to provide test data for eval runs, but it may be convenient to upload a [JSONL](https://jsonlines.org/) file that contains data in the schema we specified when we created our eval. A sample JSONL file that conforms to the schema we set up is below:

```json
1
2
3
{ "item": { "ticket_text": "My monitor won't turn on!", "correct_label": "Hardware" } }
{ "item": { "ticket_text": "I'm in vim and I can't quit!", "correct_label": "Software" } }
{ "item": { "ticket_text": "Best restaurants in Cleveland?", "correct_label": "Other" } }
```

This data set contains both test inputs and ground truth labels to compare model outputs against.

Next, let's upload our test data file to the OpenAI platform so we can reference it later. You can upload files [in the dashboard here](https://platform.openai.com/storage/files), but it's possible to [upload files via API](https://platform.openai.com/docs/api-reference/files/create) as well. The samples below assume you are running the command in a directory where you saved the sample JSON data above to a file called `tickets.jsonl`:

Upload a test data file

curl

```bash
1
2
3
4
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F purpose="evals" \
  -F file="@tickets.jsonl"
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const file = await openai.files.create({
    file: fs.createReadStream("tickets.jsonl"),
    purpose: "evals",
});

console.log(file);
```

```python
1
2
3
4
5
6
7
8
9
from openai import OpenAI
client = OpenAI()

file = client.files.create(
    file=open("tickets.jsonl", "rb"),
    purpose="evals"
)

print(file)
```

When you upload the file, make note of the unique `id` property in the response payload (also available in the UI if you uploaded via the browser) - we will need to reference that value later:

```json
1
2
3
4
5
6
7
8
9
10
11
{
    "object": "file",
    "id": "file-CwHg45Fo7YXwkWRPUkLNHW",
    "purpose": "evals",
    "filename": "tickets.jsonl",
    "bytes": 208,
    "created_at": 1742834798,
    "expires_at": null,
    "status": "processed",
    "status_details": null
}
```

### Creating an eval run

With our test data in place, let's evaluate a prompt and see how it performs against our test criteria. Via API, we can do this by [creating an eval run](https://platform.openai.com/docs/api-reference/evals/createRun).

Make sure to replace `YOUR_EVAL_ID` and `YOUR_FILE_ID` with the unique IDs of the eval configuration and test data files you created in the steps above.

Create an eval run

curl

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
curl https://api.openai.com/v1/evals/YOUR_EVAL_ID/runs \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Categorization text run",
        "data_source": {
            "type": "completions",
            "model": "gpt-4.1",
            "input_messages": {
                "type": "template",
                "template": [\
                    {"role": "developer", "content": "You are an expert in categorizing IT support tickets. Given the support ticket below, categorize the request into one of Hardware, Software, or Other. Respond with only one of those words."},\
                    {"role": "user", "content": "{{ item.ticket_text }}"}\
                ]
            },
            "source": { "type": "file_id", "id": "YOUR_FILE_ID" }
        }
    }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import OpenAI from "openai";
const openai = new OpenAI();

const run = await openai.evals.runs.create("YOUR_EVAL_ID", {
    name: "Categorization text run",
    data_source: {
        type: "completions",
        model: "gpt-4.1",
        input_messages: {
            type: "template",
            template: [\
                { role: "developer", content: "You are an expert in categorizing IT support tickets. Given the support ticket below, categorize the request into one of 'Hardware', 'Software', or 'Other'. Respond with only one of those words." },\
                { role: "user", content: "{{ item.ticket_text }}" },\
            ],
        },
        source: { type: "file_id", id: "YOUR_FILE_ID" },
    },
});

console.log(run);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
from openai import OpenAI
client = OpenAI()

run = client.evals.runs.create(
    "YOUR_EVAL_ID",
    name="Categorization text run",
    data_source={
        "type": "completions",
        "model": "gpt-4.1",
        "input_messages": {
            "type": "template",
            "template": [\
                {"role": "developer", "content": "You are an expert in categorizing IT support tickets. Given the support ticket below, categorize the request into one of 'Hardware', 'Software', or 'Other'. Respond with only one of those words."},\
                {"role": "user", "content": "{{ item.ticket_text }}"},\
            ],
        },
        "source": {"type": "file_id", "id": "YOUR_FILE_ID"},
    },
)

print(run)
```

When we create the run, we set up a [Chat Completions](https://platform.openai.com/docs/guides/text?api-mode=chat) messages array with the prompt we would like to test. This prompt is used to generate a model response for every line of test data in your data set. We can use the double curly brace syntax to template in the dynamic variable `item.ticket_text`, which is drawn from the current test data item.

If the eval run is successfully created, you'll receive an API response that looks like this:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
{
    "object": "eval.run",
    "id": "evalrun_67e44c73eb6481909f79a457749222c7",
    "eval_id": "eval_67e44c5becec81909704be0318146157",
    "report_url": "https://platform.openai.com/evaluations/abc123",
    "status": "queued",
    "model": "gpt-4.1",
    "name": "Categorization text run",
    "created_at": 1743015028,
    "result_counts": { ... },
    "per_model_usage": null,
    "per_testing_criteria_results": null,
    "data_source": {
        "type": "completions",
        "source": {
            "type": "file_id",
            "id": "file-J7MoX9ToHXp2TutMEeYnwj"
        },
        "input_messages": {
            "type": "template",
            "template": [\
                {\
                    "type": "message",\
                    "role": "developer",\
                    "content": {\
                        "type": "input_text",\
                        "text": "You are an expert in...."\
                    }\
                },\
                {\
                    "type": "message",\
                    "role": "user",\
                    "content": {\
                        "type": "input_text",\
                        "text": "{{item.ticket_text}}"\
                    }\
                }\
            ]
        },
        "model": "gpt-4.1",
        "sampling_params": null
    },
    "error": null,
    "metadata": {}
}
```

Your eval run has now been queued, and it will execute asynchronously as it processes every row in your data set. With our configuration, it will generate completions for testing with the prompt and model we specified.

## Analyze the results

Depending on the size of your dataset, the eval run may take some time to complete. You can view current status in the dashboard, but you can also [fetch the current status of an eval run via API](https://platform.openai.com/docs/api-reference/evals/getRun):

Retrieve eval run status

curl

```bash
1
2
3
curl https://api.openai.com/v1/evals/YOUR_EVAL_ID/runs/YOUR_RUN_ID \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json"
```

```javascript
1
2
3
4
5
6
7
import OpenAI from "openai";
const openai = new OpenAI();

const run = await openai.evals.runs.retrieve("YOUR_RUN_ID", {
    eval_id: "YOUR_EVAL_ID",
});
console.log(run);
```

```python
1
2
3
4
5
from openai import OpenAI
client = OpenAI()

run = client.evals.runs.retrieve("YOUR_EVAL_ID", "YOUR_RUN_ID")
print(run)
```

You'll need the UUID of both your eval and eval run to fetch its status. When you do, you'll see eval run data that looks like this:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
{
  "object": "eval.run",
  "id": "evalrun_67e44c73eb6481909f79a457749222c7",
  "eval_id": "eval_67e44c5becec81909704be0318146157",
  "report_url": "https://platform.openai.com/evaluations/xxx",
  "status": "completed",
  "model": "gpt-4.1",
  "name": "Categorization text run",
  "created_at": 1743015028,
  "result_counts": {
    "total": 3,
    "errored": 0,
    "failed": 0,
    "passed": 3
  },
  "per_model_usage": [\
    {\
      "model_name": "gpt-4o-2024-08-06",\
      "invocation_count": 3,\
      "prompt_tokens": 166,\
      "completion_tokens": 6,\
      "total_tokens": 172,\
      "cached_tokens": 0\
    }\
  ],
  "per_testing_criteria_results": [\
    {\
      "testing_criteria": "Match output to human label-40d67441-5000-4754-ab8c-181c125803ce",\
      "passed": 3,\
      "failed": 0\
    }\
  ],
  "data_source": {
    "type": "completions",
    "source": {
      "type": "file_id",
      "id": "file-J7MoX9ToHXp2TutMEeYnwj"
    },
    "input_messages": {
      "type": "template",
      "template": [\
        {\
          "type": "message",\
          "role": "developer",\
          "content": {\
            "type": "input_text",\
            "text": "You are an expert in categorizing IT support tickets. Given the support ticket below, categorize the request into one of Hardware, Software, or Other. Respond with only one of those words."\
          }\
        },\
        {\
          "type": "message",\
          "role": "user",\
          "content": {\
            "type": "input_text",\
            "text": "{{item.ticket_text}}"\
          }\
        }\
      ]
    },
    "model": "gpt-4.1",
    "sampling_params": null
  },
  "error": null,
  "metadata": {}
}
```

The API response contains granular information about test criteria results, API usage for generating model responses, and a `report_url` property that takes you to a page in the dashboard where you can explore the results visually.

In our simple test, the model reliably generated the content we wanted for a small test case sample. In reality, you will often have to run your eval with more criteria, different prompts, and different data sets. But the process above gives you all the tools you need to build robust evals for your LLM apps!

## Video: evals in the dashboard

The Evaulations tooling [in the OpenAI dashboard](https://platform.openai.com/evaluations) evolves quickly and may not match exactly the UI shown below, but this video will give you a quick overview of how to set up and run evals using the browser-based UI.

## Next steps

Now you know how to create and run evals via API, and using the dashboard! Here are a few other resources that may be useful to you as you continue to improve your model results.

[Cookbook: Detecting prompt regressions\\
\\
Keep tabs on the performance of your prompts as you iterate on them.](https://cookbook.openai.com/examples/evaluation/use-cases/regression) [Cookbook: Bulk model and prompt experimentation\\
\\
Compare the results of many different prompts and models at once.](https://cookbook.openai.com/examples/evaluation/use-cases/bulk-experimentation) [Cookbook: Monitoring stored completions\\
\\
Examine stored completions to test for prompt regressions.](https://cookbook.openai.com/examples/evaluation/use-cases/completion-monitoring) [Fine-tuning\\
\\
Improve a model's ability to generate responses tailored to your use case.](https://platform.openai.com/docs/guides/fine-tuning) [Model distillation\\
\\
Learn how to distill large model results to smaller, cheaper, and faster models.](https://platform.openai.com/docs/guides/distillation) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_evals-design.md
---

---

url: "<https://platform.openai.com/docs/guides/evals-design>"
title: "Evals design best practices - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Evals design best practices

Learn best practices for designing evals to test model performance in production environments.

Copy page

Generative AI is variable. Models sometimes produce different output from the same input, which makes traditional software testing methods insufficient for AI architectures. Evaluations ( **evals**) are a way to test your AI system despite this variability.

This guide provides high-level guidance on designing evals. To get started with the [Evals API](https://platform.openai.com/docs/api-reference/evals), see [evaluating model performance](https://platform.openai.com/docs/guides/evals).

## What are evals?

Evals are structured tests for measuring a model's performance. They help ensure accuracy, performance, and reliability, despite the nondeterministic nature of AI systems. They're also one of the only ways to _improve_ performance of an LLM-based application (through [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)).

### Types of evals

When you see the word "evals," it could refer to a few things:

- Industry benchmarks for comparing models in isolation, like [MMLU](https://github.com/openai/evals/blob/main/examples/mmlu.ipynb) and those listed on [HuggingFace's leaderboard](https://huggingface.co/collections/open-llm-leaderboard/the-big-benchmarks-collection-64faca6335a7fc7d4ffe974a)
- Standard numerical scores—like [ROUGE](https://aclanthology.org/W04-1013/), [BERTScore](https://arxiv.org/abs/1904.09675)—that you can use as you design evals for your use case
- Specific tests you implement to measure your LLM application's performance

This guide is about the third type: designing your own evals.

### How to read evals

You'll often see numerical eval scores between 0 and 1. There's more to evals than just scores. Combine metrics with human judgment to ensure you're answering the right questions.

**Evals tips**

- Adopt eval-driven development: Evaluate early and often. Write scoped tests at every stage.
- Design task-specific evals: Make tests reflect model capability in real-world distributions.
- Log everything: Log as you develop so you can mine your logs for good eval cases.
- Automate when possible: Structure evaluations to allow for automated scoring.
- It's a journey, not a destination: Evaluation is a continuous process.
- Maintain agreement: Use human feedback to calibrate automated scoring.

**Anti-patterns**

- Overly generic metrics: Relying solely on academic metrics like perplexity or BLEU score.
- Biased design: Creating eval datasets that don't faithfully reproduce production traffic patterns.
- Vibe-based evals: Using "it seems like it's working" as an evaluation strategy, or waiting until you ship before implementing any evals.
- Ignoring human feedback: Not calibrating your automated metrics against human evals.

## Design your eval process

There are a few important components of an eval workflow:

1. **Define eval objective**. What's the success criteria for the eval?
2. **Collect dataset**. Which data will help you evaluate against your objective? Consider synthetic eval data, domain-specific eval data, purchased eval data, human-curated eval data, production data, and historical data.
3. **Define eval metrics**. How will you check that the success criteria are met?
4. **Run and compare evals**. Iterate and improve model performance for your task or system.
5. **Continuously evaluate**. Set up continuous evaluation (CE) to run evals on every change, monitor your app to identify new cases of nondeterminism, and grow the eval set over time.

Let's run through a few examples.

### Example: Summarizing transcripts

To test your LLM-based application's ability to summarize transcripts, your eval design might be:

1. **Define eval objective**

The model should be able to compete with reference summaries for relevance and accuracy.
2. **Collect dataset**

Use a mix of production data (collected from user feedback on generated summaries) and datasets created by domain experts (writers) to determine a "good" summary.
3. **Define eval metrics**

On a held-out set of 1000 reference transcripts → summaries, the implementation should achieve a ROUGE-L score of at least 0.40 and coherence score of at least 80% using G-Eval.
4. **Run and compare evals**

Use the [Evals API](https://platform.openai.com/docs/guides/evals) to create and run evals in the OpenAI dashboard.
5. **Continuously evaluate**

Set up continuous evaluation (CE) to run evals on every change, monitor your app to identify new cases of nondeterminism, and grow the eval set over time.

LLMs are better at discriminating between options. Therefore, evaluations should focus on tasks like pairwise comparisons, classification, or scoring against specific criteria instead of open-ended generation. Aligning evaluation methods with LLMs' strengths in comparison leads to more reliable assessments of LLM outputs or model comparisons.

### Example: Q&A over docs

To test your LLM-based application's ability to do Q&A over docs, your eval design might be:

1. **Define eval objective**

The model should be able to provide precise answers, recall context as needed to reason through user prompts, and provide an answer that satisfies the user's need.
2. **Collect dataset**

Use a mix of production data (collected from users' satisfaction with answers provided to their questions), hard-coded correct answers to questions created by domain experts, and historical data from logs.
3. **Define eval metrics**

Context recall of at least 0.85, context precision of over 0.7, and 70+% positively rated answers.
4. **Run and compare evals**

Use the [Evals API](https://platform.openai.com/docs/guides/evals) to create and run evals in the OpenAI dashboard.
5. **Continuously evaluate**

Set up continuous evaluation (CE) to run evals on every change, monitor your app to identify new cases of nondeterminism, and grow the eval set over time.

When creating an eval dataset, o3 and GPT-4.1 are useful for collecting eval examples and edge cases. Consider using o3 to help you generate a diverse set of test data across various scenarios. Ensure your test data includes typical cases, edge cases, and adversarial cases. Use human expert labellers.

## Identify where you need evals

Complexity increases as you move from simple to more complex architectures. Here are four common architecture patterns:

- [Single-turn model interactions](https://platform.openai.com/docs/guides/evals-design#single-turn-model-interactions)
- [Workflows](https://platform.openai.com/docs/guides/evals-design#workflow-architectures)
- [Single-agent](https://platform.openai.com/docs/guides/evals-design#single-agent-architectures)
- [Multi-agent](https://platform.openai.com/docs/guides/evals-design#multi-agent-architectures)

Read about each architecture below to identify where nondeterminism enters your system. That's where you'll want to implement evals.

### Single-turn model interactions

In this kind of architecture, the user provides input to the model, and the model processes these inputs (along with any developer prompts provided) to generate a corresponding output.

#### Example

As an example, consider an online retail scenario. Your system prompt instructs the model to **categorize the customer's question** into one of the following:

- `order_status`
- `return_policy`
- `technical_issue`
- `cancel_order`
- `other`

To ensure a consistent, efficient user experience, the model should **only return the label that matches user intent**. Let's say the customer asks, "What's the status of my order?"

| Nondeterminism introduced | Corresponding area to evaluate | Example eval questions |
| --- | --- | --- |
| Inputs provided by the developer and user | **Instruction following**: Does the model accurately understand and act according to the provided instructions?<br>**Instruction following**: Does the model prioritize the system prompt over a conflicting user prompt? | Does the model stay focused on the triage task or get swayed by the user's question? |
| Outputs generated by the model | **Functional correctness**: Are the model's outputs accurate, relevant, and thorough enough to fulfill the intended task or objective? | Does the model's determination of intent correctly match the expected intent? |

### Workflow architectures

As you look to solve more complex problems, you'll likely transition from a single-turn model interaction to a multistep workflow that chains together several model calls. Workflows don't introduce any new elements of nondeterminism, but they involve multiple underlying model interactions, which you can evaluate in isolation.

#### Example

Take the same example as before, where the customer asks about their order status. A workflow architecture triages the customer request and routes it through a step-by-step process:

1. Extracting an Order ID
2. Looking up the order details
3. Providing the order details to a model for a final response

Each step in this workflow has its own system prompt that the model must follow, putting all fetched data into a friendly output.

| Nondeterminism introduced | Corresponding area to evaluate | Example eval questions |
| --- | --- | --- |
| Inputs provided by the developer and user | **Instruction following**: Does the model accurately understand and act according to the provided instructions?<br>**Instruction following**: Does the model prioritize the system prompt over a conflicting user prompt? | Does the model stay focused on the triage task or get swayed by the user's question?<br> Does the model follow instructions to attempt to extract an Order ID?<br>Does the final response include the order status, estimated arrival date, and tracking number? |
| Outputs generated by the model | **Functional correctness**: Are the model's outputs are accurate, relevant, and thorough enough to fulfill the intended task or objective? | Does the model's determination of intent correctly match the expected intent?<br>Does the final response have the correct order status, estimated arrival date, and tracking number? |

### Single-agent architectures

Unlike workflows, agents solve unstructured problems that require flexible decision making. An agent has instructions and a set of tools and dynamically selects which tool to use. This introduces a new opportunity for nondeterminism.

Tools are developer defined chunks of code that the model can execute. This can range from small helper functions to API calls for existing services. For example, `check_order_status(order_id)` could be a tool, where it takes the argument `order_id` and calls an API to check the order status.

#### Example

Let's adapt our customer service example to use a single agent. The agent has access to three distinct tools:

- Order lookup tool
- Password reset tool
- Product FAQ tool

When the customer asks about their order status, the agent dynamically decides to either invoke a tool or respond to the customer. For example, if the customer asks, "What is my order status?" the agent can now follow up by requesting the order ID from the customer. This helps create a more natural user experience.

| Nondeterminism | Corresponding area to evaluate | Example eval questions |
| --- | --- | --- |
| Inputs provided by the developer and user | **Instruction following**: Does the model accurately understand and act according to the provided instructions?<br>**Instruction following**: Does the model prioritize the system prompt over a conflicting user prompt? | Does the model stay focused on the triage task or get swayed by the user's question?<br>Does the model follow instructions to attempt to extract an Order ID? |
| Outputs generated by the model | **Functional correctness**: Are the model's outputs are accurate, relevant, and thorough enough to fulfill the intended task or objective? | Does the model's determination of intent correctly match the expected intent? |
| Tools chosen by the model | **Tool selection**: Evaluations that test whether the agent is able to select the correct tool to use.<br>**Data precision**: Evaluations that verify the agent calls the tool with the correct arguments. Typically these arguments are extracted from the conversation history, so the goal is to validate this extraction was correct. | When the user asks about their order status, does the model correctly recommend invoking the order lookup tool?<br>Does the model correctly extract the user-provided order ID to the lookup tool? |

### Multi-agent architectures

As you add tools and tasks to your single-agent architecture, the model may struggle to follow instructions or select the correct tool to call. Multi-agent architectures help by creating several distinct agents who specialize in different areas. This triaging and handoff among multiple agents introduces a new opportunity for nondeterminism.

The decision to use a multi-agent architecture should be driven by your evals. Starting with a multi-agent architecture adds unnecessary complexity that can slow down your time to production.

#### Example

Splitting the single-agent example into a multi-agent architecture, we'll have four distinct agents:

1. Triage agent
2. Order agent
3. Account management agent
4. Sales agent

When the customer asks about their order status, the triage agent may hand off the conversation to the order agent to look up the order. If the customer changes the topic to ask about a product, the order agent should hand the request back to the triage agent, who then hands off to the sales agent to fetch product information.

| Nondeterminism | Corresponding area to evaluate | Example eval questions |
| --- | --- | --- |
| Inputs provided by the developer and user | **Instruction following**: Does the model accurately understand and act according to the provided instructions?<br>**Instruction following**: Does the model prioritize the system prompt over a conflicting user prompt? | Does the model stay focused on the triage task or get swayed by the user's question?<br>Assuming the `lookup_order` call returned, does the order agent return a tracking number and delivery date (doesn't have to be the correct one)? |
| Outputs generated by the model | **Functional correctness**: Are the model's outputs are accurate, relevant, and thorough enough to fulfill the intended task or objective? | Does the model's determination of intent correctly match the expected intent?<br>Assuming the `lookup_order` call returned, does the order agent provide the correct tracking number and delivery date in its response?<br>Does the order agent follow system instructions to ask the customer their reason for requesting a return before processing the return? |
| Tools chosen by the model | **Tool selection**: Evaluations that test whether the agent is able to select the correct tool to use.<br>**Data precision**: Evaluations that verify the agent calls the tool with the correct arguments. Typically these arguments are extracted from the conversation history, so the goal is to validate this extraction was correct. | Does the order agent correctly call the lookup order tool?<br>Does the order agent correctly call the `refund_order` tool?<br>Does the order agent call the lookup order tool with the correct order ID?<br>Does the account agent correctly call the `reset_password` tool with the correct account ID? |
| Agent handoff | **Agent handoff accuracy**: Evaluations that test whether each agent can appropriately recognize the decision boundary for triaging to another agent | When a user asks about order status, does the triage agent correctly pass to the order agent?<br>When the user changes the subject to talk about the latest product, does the order agent hand back control to the triage agent? |

## Create and combine different types of evaluators

As you design your own evals, there are several specific evaluator types to choose from. Another way to think about this is what role you want the evaluator to play.

### Metric-based evals

Quantitative evals provide a numerical score you can use to filter and rank results. They provide useful benchmarks for automated regression testing.

- **Examples**: Exact match, string match, ROUGE/BLEU scoring, function call accuracy, executable evals (executed to assess functionality or behavior—e.g., text2sql)
- **Challenges**: May not be tailored to specific use cases, may miss nuance

### Human evals

Human judgment evals provide the highest quality but are slow and expensive.

- **Examples**: Skim over system outputs to get a sense of whether they look better or worse; create a randomized, blinded test in which employees, contractors, or outsourced labeling agencies judge the quality of system outputs (e.g., ranking a small set of possible outputs, or giving each a grade of 1-5)
- **Challenges**: Disagreement among human experts, expensive, slow
- **Recommendations**:

  - Conduct multiple rounds of detailed human review to refine the scorecard
  - Implement a "show rather than tell" policy by providing examples of different score levels (e.g., 1, 3, and 8 out of 10)
  - Include a pass/fail threshold in addition to the numerical score
  - A simple way to aggregate multiple reviewers is to take consensus votes

### LLM-as-a-judge and model graders

Using models to judge output is cheaper to run and more scalable than human evaluation. Strong LLM judges like GPT-4.1 can match both controlled and crowdsourced human preferences, achieving over 80% agreement (the same level of agreement between humans).

- **Examples**:

  - Pairwise comparison: Present the judge model with two responses and ask it to determine which one is better based on specific criteria
  - Single answer grading: The judge model evaluates a single response in isolation, assigning a score or rating based on predefined quality metrics
  - Reference-guided grading: Provide the judge model with a reference or "gold standard" answer, which it uses as a benchmark to evaluate the given response
- **Challenges**: Position bias (response order), verbosity bias (preferring longer responses)
- **Recommendations**:

  - Use pairwise comparison or pass/fail for more reliability
  - Use the most capable model to grade if you can (e.g., o3)—o-series models excel at auto-grading from rubics or from a collection of reference expert answers
  - Control for response lengths as LLMs bias towards longer responses in general
  - Add reasoning and chain-of-thought as reasoning before scoring improves eval performance
  - Once the LLM judge reaches a point where it's faster, cheaper, and consistently agrees with human annotations, scale up
  - Structure questions to allow for automated grading while maintaining the integrity of the task—a common approach is to reformat questions into multiple choice formats
  - Ensure eval rubrics are clear and detailed

No strategy is perfect. The quality of LLM-as-Judge varies depending on problem context while using expert human annotators to provide ground-truth labels is expensive and time-consuming.

## Handle edge cases

While your evaluations should cover primary, happy-path scenarios for each architecture, real-world AI systems frequently encounter edge cases that challenge system performance. Evaluating these edge cases is important for ensuring reliability and a good user experience.

We see these edge cases fall into a few buckets:

### Input variability

Because users provide input to the model, our system must be flexible to handle the different ways our users may interact, like:

- Non-English or multilingual inputs
- Formats other than input text (e.g., XML, JSON, Markdown, CSV)
- Input modalities (e.g., images)

Your evals for instruction following and functional correctness need to accomodate inputs that users might try.

### Contextual complexity

Many LLM-based applications fail due to poor understanding of the context of the request. This context could be from the user or noise in the past conversation history.

Examples include:

- Multiple questions or intents in a single request
- Typos and misspellings
- Short requests with minimal context (e.g., if a user just says: "returns")
- Long context or long-running conversations
- Tool calls that return data with ambiguous property names (e.g., `"on: 123"`, where "on" is the order number)
- Multiple tool calls, sometimes leading to incorrect arguments
- Multiple agent handoffs, sometimes leading to circular handoffs

### Personalization and customization

While AI improves UX by adapting to user-specific requests, this flexibility introduces many edge cases. Clearly define evals for use cases you want to specifically support and block:

- Jailbreak attempts to get the model to do something different
- Formatting requests (e.g., format as JSON, or use bullet points)
- Cases where user prompts conflict with your system prompts

## Use evals to improve performance

When your evals reach a level of maturity that consistently measures performance, shift to using your evals data to improve your application's performance.

Learn more about [reinforcement fine-tuning](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) to create a data flywheel.

## Other resources

For more inspiration, visit the [OpenAI Cookbook](https://cookbook.openai.com/), which contains example code and links to third-party resources, or learn more about our tools for evals:

- [Evaluating model performance](https://platform.openai.com/docs/guides/evals)
- [How to evaluate a summarization task](https://cookbook.openai.com/examples/evaluation/how_to_eval_abstractive_summarization)
- [Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
- [Graders](https://platform.openai.com/docs/guides/graders)
- [Evals API reference](https://platform.openai.com/docs/api-reference/evals) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_fine-tuning.md
---

---

url: "<https://platform.openai.com/docs/guides/fine-tuning>"
title: "Fine-tuning - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Fine-tuning

Fine-tune models for better results and efficiency.

Copy page

Fine-tuning lets you customize a pre-trained model to excel at a particular task. Fine-tuning can be used with [prompt engineering](https://platform.openai.com/docs/guides/text) to realize a few more benefits over prompting alone:

- You can provide more example inputs and outputs than could fit within the context window of a single request, enabling the model handle a wider variety of prompts.
- You can use shorter prompts with fewer examples and context data, which saves on token costs at scale and can be lower latency.
- You can train on proprietary or sensitive data without having to include it via examples in every request.
- You can train a smaller, cheaper, faster model to excel at a particular task where a larger model is not cost-effective.

Visit our [pricing page](https://openai.com/api/pricing) to learn more about how fine-tuned model training and usage are billed.

## Fine-tuning methods

There are three fine-tuning methods supported in the OpenAI platform today.

| Method | How it works | Use cases |
| --- | --- | --- |
| [Supervised fine-tuning (SFT)](https://platform.openai.com/docs/guides/supervised-fine-tuning)<br>+<br>[Vision fine-tuning](https://platform.openai.com/docs/guides/vision-fine-tuning) | Provide examples of correct responses to prompts to guide the model's behavior. Often uses human-generated "ground truth" responses to show the model how it should respond. | - Classification<br>- Nuanced translation<br>- Generating content in a specific format<br>- Correcting failures in instruction following for complex prompts |
| [Direct preference optimization (DPO)](https://platform.openai.com/docs/guides/direct-preference-optimization) | For a prompt, provide both a correct and incorrect example response. Indicating the correct response helps the model perform better when the correct output is more subjective. | - Summarizing text, focusing on the right things<br>- Generating chat messages with the right tone and style |
| [Reinforcement fine-tuning (RFT)](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) | **Reasoning models only:** Generate a response for a prompt, provide an expert [grade](https://platform.openai.com/docs/guides/graders) for the result, and use the resulting score to reinforce the model's chain-of-thought for higher-scored responses. Works when expert graders can agree on the ideal output from the model. | - Complex domain-specific tasks that require advanced reasoning<br>- Medical diagnosis based on history and diagnostic guidelines<br>- Determining relevant passages from legal case law |

## How it works

In the OpenAI platform, you can create fine-tuned models either in the [dashboard](https://platform.openai.com/finetune) or [with the API](https://platform.openai.com/docs/api-reference/fine-tuning).

![Provide example data and create a fine-tuning job to optimize model performance for your use case](https://cdn.openai.com/API/docs/images/fine-tuning-cycle.png)

The general idea of fine-tuning is much like training a human in a particular subject, where you come up with the curriculum, then teach and test until the student excels. This is the general shape of the fine-tuning process:

1. Collect a dataset of examples to use as training data
2. Upload that dataset to OpenAI, formatted in JSONL
3. Create a fine-tuning job using one of the methods above, depending on your goals—this begins the fine-tuning training process
4. In the case of RFT, you'll also define a grader to score the model's behavior
5. Evaluate the results

Fine-tuning is the process of adjusting a pre-trained model's weights using a smaller, task-specific dataset. OpenAI models are already pre-trained to perform across a broad range of subjects and tasks. Fine-tuning lets you take an OpenAI base model, provide the kinds of inputs and outputs you expect in your application, and get a model that excels in the tasks you'll use it for.

## Get started

Follow the guides linked below for examples and more information about how to fine-tune models using each of these methods.

[Supervised fine-tuning\\
\\
Fine-tune a model by providing correct outputs for sample inputs.](https://platform.openai.com/docs/guides/supervised-fine-tuning) [Vision fine-tuning\\
\\
Learn to fine-tune for computer vision with image inputs.](https://platform.openai.com/docs/guides/vision-fine-tuning) [Direct preference optimization\\
\\
Fine-tune a model using direct preference optimization (DPO).](https://platform.openai.com/docs/guides/direct-preference-optimization) [Reinforcement fine-tuning\\
\\
Fine-tune a reasoning model by grading its outputs.](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_fine-tuning-best-practices.md
---

---

url: "<https://platform.openai.com/docs/guides/fine-tuning-best-practices>"
title: "Fine-tuning best practices - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Fine-tuning best practices

Learn best practices to fine-tune OpenAI models and get better peformance, optimization, and task-specific model behavior.

Copy page

If you're not getting strong results with a fine-tuned model, consider the following iterations on your process.

### Iterating on data quality

Below are a few ways to consider improving the quality of your training data set:

- Collect examples to target remaining issues.
  - If the model still isn't good at certain aspects, add training examples that directly show the model how to do these aspects correctly.
- Scrutinize existing examples for issues.
  - If your model has grammar, logic, or style issues, check if your data has any of the same issues. For instance, if the model now says "I will schedule this meeting for you" (when it shouldn't), see if existing examples teach the model to say it can do new things that it can't do
- Consider the balance and diversity of data.
  - If 60% of the assistant responses in the data says "I cannot answer this", but at inference time only 5% of responses should say that, you will likely get an overabundance of refusals.
- Make sure your training examples contain all of the information needed for the response.
  - If we want the model to compliment a user based on their personal traits and a training example includes assistant compliments for traits not found in the preceding conversation, the model may learn to hallucinate information.
- Look at the agreement and consistency in the training examples.
  - If multiple people created the training data, it's likely that model performance will be limited by the level of agreement and consistency between people. For instance, in a text extraction task, if people only agreed on 70% of extracted snippets, the model would likely not be able to do better than this.
- Make sure your all of your training examples are in the same format, as expected for inference.

### Iterating on data quantity

Once you're satisfied with the quality and distribution of the examples, you can consider scaling up the number of training examples. This tends to help the model learn the task better, especially around possible "edge cases". We expect a similar amount of improvement every time you double the number of training examples. You can loosely estimate the expected quality gain from increasing the training data size by:

- Fine-tuning on your current dataset
- Fine-tuning on half of your current dataset
- Observing the quality gap between the two

In general, if you have to make a tradeoff, a smaller amount of high-quality data is generally more effective than a larger amount of low-quality data.

### Iterating on hyperparameters

Hyperparameters control how the model's weights are updated during the training process. A few common options are:

- **Epochs**: An epoch is a single complete pass through your entire training dataset during model training. You will typically run multiple epochs so the model can iteratively refine its weights.
- **Learning rate multiplier**: Adjusts the size of changes made to the model's learned parameters. A larger multiplier can speed up training, while a smaller one can lean to slower but more stable training.
- **Batch size**: The number of examples the model processes in one forward and backward pass before updating its weights. Larger batches slow down training, but may produce more stable results.

We recommend initially training without specifying any of these, allowing us to pick a default for you based on dataset size, then adjusting if you observe the following:

- If the model doesn't follow the training data as much as expected, increase the number of epochs by 1 or 2.
  - This is more common for tasks for which there is a single ideal completion (or a small set of ideal completions which are similar). Some examples include classification, entity extraction, or structured parsing. These are often tasks for which you can compute a final accuracy metric against a reference answer.
- If the model becomes less diverse than expected, decrease the number of epochs by 1 or 2.
  - This is more common for tasks for which there are a wide range of possible good completions.
- If the model doesn't appear to be converging, increase the learning rate multiplier.

You can set the hyperparameters as shown below:

Setting hyperparameters

python

```javascript
1
2
3
4
5
6
7
8
9
10
const fineTune = await openai.fineTuning.jobs.create({
  training_file: "file-abc123",
  model: "gpt-4o-mini-2024-07-18",
  method: {
    type: "supervised",
    supervised: {
      hyperparameters: { n_epochs: 2 },
    },
  },
});
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from openai import OpenAI
client = OpenAI()

client.fine_tuning.jobs.create(
    training_file="file-abc123",
    model="gpt-4o-mini-2024-07-18",
    method={
        "type": "supervised",
        "supervised": {
            "hyperparameters": {"n_epochs": 2},
        },
    },
)
```

## Adjust your dataset

Another option if you're not seeing strong fine-tuning results is to go back and revise your training data. Here are a few best practices as you collect examples to use in your dataset.

### Training vs. testing datasets

After collecting your examples, split the dataset into training and test portions. The training set is for fine-tuning jobs, and the test set is for [evals](https://platform.openai.com/docs/guides/evals).

When you submit a fine-tuning job with both training and test files, we'll provide statistics on both during the course of training. These statistics give you signal on how much the model's improving. Constructing a test set early on helps you [evaluate the model after training](https://platform.openai.com/docs/guides/evals) by comparing with the test set benchmark.

### Crafting prompts for training data

Take the set of instructions and prompts that worked best for the model prior to fine-tuning, and include them in every training example. This should let you reach the best and most general results, especially if you have relatively few (under 100) training examples.

You may be tempted to shorten the instructions or prompts repeated in every example to save costs. Without repeated instructions, it may take more training examples to arrive at good results, as the model has to learn entirely through demonstration.

### Multi-turn chat in training data

To train the model on [multi-turn conversations](https://platform.openai.com/docs/guides/conversation-state), include multiple `user` and `assistant` messages in the `messages` array for each line of your training data.

Use the optional `weight` key (value set to either 0 or 1) to disable fine-tuning on specific assistant messages. Here are some examples of controlling `weight` in a chat format:

```jsonl
1
2
3
{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "What's the capital of France?"}, {"role": "assistant", "content": "Paris", "weight": 0}, {"role": "user", "content": "Can you be more sarcastic?"}, {"role": "assistant", "content": "Paris, as if everyone doesn't know that already.", "weight": 1}]}
{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "Who wrote 'Romeo and Juliet'?"}, {"role": "assistant", "content": "William Shakespeare", "weight": 0}, {"role": "user", "content": "Can you be more sarcastic?"}, {"role": "assistant", "content": "Oh, just some guy named William Shakespeare. Ever heard of him?", "weight": 1}]}
{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "How far is the Moon from Earth?"}, {"role": "assistant", "content": "384,400 kilometers", "weight": 0}, {"role": "user", "content": "Can you be more sarcastic?"}, {"role": "assistant", "content": "Around 384,400 kilometers. Give or take a few, like that really matters.", "weight": 1}]}
```

### Token limits

Token limits depend on model. Here's an overview of the maximum allowed context lengths:

| Model | Inference context length | Examples context length |
| --- | --- | --- |
| `gpt-4.1-2025-04-14` | 128,000 tokens | 65,536 tokens |
| `gpt-4.1-mini-2025-04-14` | 128,000 tokens | 65,536 tokens |
| `gpt-4.1-nano-2025-04-14` | 128,000 tokens | 65,536 tokens |
| `gpt-4o-2024-08-06` | 128,000 tokens | 65,536 tokens |
| `gpt-4o-mini-2024-07-18` | 128,000 tokens | 65,536 tokens |

Examples longer than the default are truncated to the maximum context length, which removes tokens from the end of the training example. To make sure your entire training example fits in context, keep the total token counts in the message contents under the limit.

Compute token counts with [the tokenizer tool](https://platform.openai.com/tokenizer) or by using code, as in this [cookbook example](https://cookbook.openai.com/examples/How_to_count_tokens_with_tiktoken.ipynb).

Before uploading your data, you may want to check formatting and potential token costs - an example of how to do this can be found in the cookbook.

[Fine-tuning data format validation\\
\\
Learn about fine-tuning data formatting](https://cookbook.openai.com/examples/chat_finetuning_data_prep) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_function-calling_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/function-calling?api-mode=responses>"
title: "Function calling - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Function calling

Enable models to fetch data and take actions.

Copy page

**Function calling** provides a powerful and flexible way for OpenAI models to interface with your code or external services. This guide will explain how to connect the models to your own custom code to fetch data or take action.

Get weatherGet weatherSend emailSend emailSearch knowledge baseSearch knowledge base

Get weather

Function calling example with get\_weather function

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
from openai import OpenAI

client = OpenAI()

tools = [{\
    "type": "function",\
    "name": "get_weather",\
    "description": "Get current temperature for a given location.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "location": {\
                "type": "string",\
                "description": "City and country e.g. Bogotá, Colombia"\
            }\
        },\
        "required": [\
            "location"\
        ],\
        "additionalProperties": False\
    }\
}]

response = client.responses.create(
    model="gpt-4.1",
    input=[{"role": "user", "content": "What is the weather like in Paris today?"}],
    tools=tools
)

print(response.output)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
import { OpenAI } from "openai";

const openai = new OpenAI();

const tools = [{\
    "type": "function",\
    "name": "get_weather",\
    "description": "Get current temperature for a given location.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "location": {\
                "type": "string",\
                "description": "City and country e.g. Bogotá, Colombia"\
            }\
        },\
        "required": [\
            "location"\
        ],\
        "additionalProperties": false\
    }\
}];

const response = await openai.responses.create({
    model: "gpt-4.1",
    input: [{ role: "user", content: "What is the weather like in Paris today?" }],
    tools,
});

console.log(response.output);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
curl https://api.openai.com/v1/responses \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $OPENAI_API_KEY" \
-d '{
    "model": "gpt-4.1",
    "input": "What is the weather like in Paris today?",
    "tools": [\
        {\
            "type": "function",\
            "name": "get_weather",\
            "description": "Get current temperature for a given location.",\
            "parameters": {\
                "type": "object",\
                "properties": {\
                    "location": {\
                        "type": "string",\
                        "description": "City and country e.g. Bogotá, Colombia"\
                    }\
                },\
                "required": [\
                    "location"\
                ],\
                "additionalProperties": false\
            }\
        }\
    ]
}'
```

Output

```json
1
2
3
4
5
6
7
[{\
    "type": "function_call",\
    "id": "fc_12345xyz",\
    "call_id": "call_12345xyz",\
    "name": "get_weather",\
    "arguments": "{\"location\":\"Paris, France\"}"\
}]
```

Send email

Function calling example with send\_email function

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
from openai import OpenAI

client = OpenAI()

tools = [{\
    "type": "function",\
    "name": "send_email",\
    "description": "Send an email to a given recipient with a subject and message.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "to": {\
                "type": "string",\
                "description": "The recipient email address."\
            },\
            "subject": {\
                "type": "string",\
                "description": "Email subject line."\
            },\
            "body": {\
                "type": "string",\
                "description": "Body of the email message."\
            }\
        },\
        "required": [\
            "to",\
            "subject",\
            "body"\
        ],\
        "additionalProperties": False\
    }\
}]

response = client.responses.create(
    model="gpt-4.1",
    input=[{"role": "user", "content": "Can you send an email to ilan@example.com and katia@example.com saying hi?"}],
    tools=tools
)

print(response.output)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
import { OpenAI } from "openai";

const openai = new OpenAI();

const tools = [{\
    "type": "function",\
    "name": "send_email",\
    "description": "Send an email to a given recipient with a subject and message.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "to": {\
                "type": "string",\
                "description": "The recipient email address."\
            },\
            "subject": {\
                "type": "string",\
                "description": "Email subject line."\
            },\
            "body": {\
                "type": "string",\
                "description": "Body of the email message."\
            }\
        },\
        "required": [\
            "to",\
            "subject",\
            "body"\
        ],\
        "additionalProperties": false\
    }\
}];

const response = await openai.responses.create({
    model: "gpt-4.1",
    input: [{ role: "user", content: "Can you send an email to ilan@example.com and katia@example.com saying hi?" }],
    tools,
});

console.log(response.output);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
curl https://api.openai.com/v1/responses \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $OPENAI_API_KEY" \
-d '{
    "model": "gpt-4.1",
    "input": "Can you send an email to ilan@example.com and katia@example.com saying hi?",
    "tools": [\
        {\
            "type": "function",\
            "name": "send_email",\
            "description": "Send an email to a given recipient with a subject and message.",\
            "parameters": {\
                "type": "object",\
                "properties": {\
                    "to": {\
                        "type": "string",\
                        "description": "The recipient email address."\
                    },\
                    "subject": {\
                        "type": "string",\
                        "description": "Email subject line."\
                    },\
                    "body": {\
                        "type": "string",\
                        "description": "Body of the email message."\
                    }\
                },\
                "required": [\
                    "to",\
                    "subject",\
                    "body"\
                ],\
                "additionalProperties": false\
            }\
        }\
    ]
}'
```

Output

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
[\
    {\
        "type": "function_call",\
        "id": "fc_12345xyz",\
        "call_id": "call_9876abc",\
        "name": "send_email",\
        "arguments": "{\"to\":\"ilan@example.com\",\"subject\":\"Hello!\",\"body\":\"Just wanted to say hi\"}"\
    },\
    {\
        "type": "function_call",\
        "id": "fc_12345xyz",\
        "call_id": "call_9876abc",\
        "name": "send_email",\
        "arguments": "{\"to\":\"katia@example.com\",\"subject\":\"Hello!\",\"body\":\"Just wanted to say hi\"}"\
    }\
]
```

Search knowledge base

Function calling example with search\_knowledge\_base function

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
from openai import OpenAI

client = OpenAI()

tools = [{\
    "type": "function",\
    "name": "search_knowledge_base",\
    "description": "Query a knowledge base to retrieve relevant info on a topic.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "query": {\
                "type": "string",\
                "description": "The user question or search query."\
            },\
            "options": {\
                "type": "object",\
                "properties": {\
                    "num_results": {\
                        "type": "number",\
                        "description": "Number of top results to return."\
                    },\
                    "domain_filter": {\
                        "type": [\
                            "string",\
                            "null"\
                        ],\
                        "description": "Optional domain to narrow the search (e.g. 'finance', 'medical'). Pass null if not needed."\
                    },\
                    "sort_by": {\
                        "type": [\
                            "string",\
                            "null"\
                        ],\
                        "enum": [\
                            "relevance",\
                            "date",\
                            "popularity",\
                            "alphabetical"\
                        ],\
                        "description": "How to sort results. Pass null if not needed."\
                    }\
                },\
                "required": [\
                    "num_results",\
                    "domain_filter",\
                    "sort_by"\
                ],\
                "additionalProperties": False\
            }\
        },\
        "required": [\
            "query",\
            "options"\
        ],\
        "additionalProperties": False\
    }\
}]

response = client.responses.create(
    model="gpt-4.1",
    input=[{"role": "user", "content": "Can you find information about ChatGPT in the AI knowledge base?"}],
    tools=tools
)

print(response.output)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
import { OpenAI } from "openai";

const openai = new OpenAI();

const tools = [{\
    "type": "function",\
    "name": "search_knowledge_base",\
    "description": "Query a knowledge base to retrieve relevant info on a topic.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "query": {\
                "type": "string",\
                "description": "The user question or search query."\
            },\
            "options": {\
                "type": "object",\
                "properties": {\
                    "num_results": {\
                        "type": "number",\
                        "description": "Number of top results to return."\
                    },\
                    "domain_filter": {\
                        "type": [\
                            "string",\
                            "null"\
                        ],\
                        "description": "Optional domain to narrow the search (e.g. 'finance', 'medical'). Pass null if not needed."\
                    },\
                    "sort_by": {\
                        "type": [\
                            "string",\
                            "null"\
                        ],\
                        "enum": [\
                            "relevance",\
                            "date",\
                            "popularity",\
                            "alphabetical"\
                        ],\
                        "description": "How to sort results. Pass null if not needed."\
                    }\
                },\
                "required": [\
                    "num_results",\
                    "domain_filter",\
                    "sort_by"\
                ],\
                "additionalProperties": false\
            }\
        },\
        "required": [\
            "query",\
            "options"\
        ],\
        "additionalProperties": false\
    }\
}];

const response = await openai.responses.create({
    model: "gpt-4.1",
    input: [{ role: "user", content: "Can you find information about ChatGPT in the AI knowledge base?" }],
    tools,
});

console.log(response.output);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
curl https://api.openai.com/v1/responses \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $OPENAI_API_KEY" \
-d '{
    "model": "gpt-4.1",
    "input": "Can you find information about ChatGPT in the AI knowledge base?",
    "tools": [\
        {\
            "type": "function",\
            "name": "search_knowledge_base",\
            "description": "Query a knowledge base to retrieve relevant info on a topic.",\
            "parameters": {\
                "type": "object",\
                "properties": {\
                    "query": {\
                        "type": "string",\
                        "description": "The user question or search query."\
                    },\
                    "options": {\
                        "type": "object",\
                        "properties": {\
                            "num_results": {\
                                "type": "number",\
                                "description": "Number of top results to return."\
                            },\
                            "domain_filter": {\
                                "type": [\
                                    "string",\
                                    "null"\
                                ],\
                                "description": "Optional domain to narrow the search (e.g. 'finance', 'medical'). Pass null if not needed."\
                            },\
                            "sort_by": {\
                                "type": [\
                                    "string",\
                                    "null"\
                                ],\
                                "enum": [\
                                    "relevance",\
                                    "date",\
                                    "popularity",\
                                    "alphabetical"\
                                ],\
                                "description": "How to sort results. Pass null if not needed."\
                            }\
                        },\
                        "required": [\
                            "num_results",\
                            "domain_filter",\
                            "sort_by"\
                        ],\
                        "additionalProperties": false\
                    }\
                },\
                "required": [\
                    "query",\
                    "options"\
                ],\
                "additionalProperties": false\
            }\
        }\
    ]
}'
```

Output

```json
1
2
3
4
5
6
7
[{\
    "type": "function_call",\
    "id": "fc_12345xyz",\
    "call_id": "call_4567xyz",\
    "name": "search_knowledge_base",\
    "arguments": "{\"query\":\"What is ChatGPT?\",\"options\":{\"num_results\":3,\"domain_filter\":null,\"sort_by\":\"relevance\"}}"\
}]
```

Experiment with function calling and [generate function schemas](https://platform.openai.com/docs/guides/prompt-generation) in the [Playground](https://platform.openai.com/playground)!

## Overview

You can give the model access to your own custom code through **function calling**. Based on the system prompt and messages, the model may decide to call these functions — **instead of (or in addition to) generating text or audio**.

You'll then execute the function code, send back the results, and the model will incorporate them into its final response.

![Function Calling Diagram Steps](https://cdn.openai.com/API/docs/images/function-calling-diagram-steps.png)

Function calling has two primary use cases:

|  |  |
| --- | --- |
| **Fetching Data** | Retrieve up-to-date information to incorporate into the model's response (RAG). Useful for searching knowledge bases and retrieving specific data from APIs (e.g. current weather data). |
| **Taking Action** | Perform actions like submitting a form, calling APIs, modifying application state (UI/frontend or backend), or taking agentic workflow actions (like [handing off](https://cookbook.openai.com/examples/orchestrating_agents) the conversation). |

### Sample function

Let's look at the steps to allow a model to use a real `get_weather` function defined below:

Sample get\_weather function implemented in your codebase

python

```python
1
2
3
4
5
6
import requests

def get_weather(latitude, longitude):
    response = requests.get(f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    data = response.json()
    return data['current']['temperature_2m']
```

```javascript
1
2
3
4
5
async function getWeather(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
    const data = await response.json();
    return data.current.temperature_2m;
}
```

Unlike the diagram earlier, this function expects precise `latitude` and `longitude` instead of a general `location` parameter. (However, our models can automatically determine the coordinates for many locations!)

### Function calling steps

**Call model with [functions defined](https://platform.openai.com/docs/guides/function-calling?api-mode=responses#defining-functions)** – along with your system and user messages.

Step 1: Call model with get\_weather tool defined

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
from openai import OpenAI
import json

client = OpenAI()

tools = [{\
    "type": "function",\
    "name": "get_weather",\
    "description": "Get current temperature for provided coordinates in celsius.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "latitude": {"type": "number"},\
            "longitude": {"type": "number"}\
        },\
        "required": ["latitude", "longitude"],\
        "additionalProperties": False\
    },\
    "strict": True\
}]

input_messages = [{"role": "user", "content": "What's the weather like in Paris today?"}]

response = client.responses.create(
    model="gpt-4.1",
    input=input_messages,
    tools=tools,
)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
import { OpenAI } from "openai";

const openai = new OpenAI();

const tools = [{\
    type: "function",\
    name: "get_weather",\
    description: "Get current temperature for provided coordinates in celsius.",\
    parameters: {\
        type: "object",\
        properties: {\
            latitude: { type: "number" },\
            longitude: { type: "number" }\
        },\
        required: ["latitude", "longitude"],\
        additionalProperties: false\
    },\
    strict: true\
}];

const input = [\
    {\
        role: "user",\
        content: "What's the weather like in Paris today?"\
    }\
];

const response = await openai.responses.create({
    model: "gpt-4.1",
    input,
    tools,
});
```

**Model decides to call function(s)** – model returns the **name** and **input arguments**.

response.output

```json
1
2
3
4
5
6
7
[{\
    "type": "function_call",\
    "id": "fc_12345xyz",\
    "call_id": "call_12345xyz",\
    "name": "get_weather",\
    "arguments": "{\"latitude\":48.8566,\"longitude\":2.3522}"\
}]
```

**Execute function code** – parse the model's response and [handle function calls](https://platform.openai.com/docs/guides/function-calling?api-mode=responses#handling-function-calls).

Step 3: Execute get\_weather function

python

```python
1
2
3
4
tool_call = response.output[0]
args = json.loads(tool_call.arguments)

result = get_weather(args["latitude"], args["longitude"])
```

```javascript
1
2
3
4
const toolCall = response.output[0];
const args = JSON.parse(toolCall.arguments);

const result = await getWeather(args.latitude, args.longitude);
```

**Supply model with results** – so it can incorporate them into its final response.

Step 4: Supply result and call model again

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
input_messages.append(tool_call)  # append model's function call message
input_messages.append({                               # append result message
    "type": "function_call_output",
    "call_id": tool_call.call_id,
    "output": str(result)
})

response_2 = client.responses.create(
    model="gpt-4.1",
    input=input_messages,
    tools=tools,
)
print(response_2.output_text)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
input.push(toolCall); // append model's function call message
input.push({                               // append result message
    type: "function_call_output",
    call_id: toolCall.call_id,
    output: result.toString()
});

const response2 = await openai.responses.create({
    model: "gpt-4.1",
    input,
    tools,
    store: true,
});

console.log(response2.output_text)
```

**Model responds** – incorporating the result in its output.

response\_2.output\_text

```json
"The current temperature in Paris is 14°C (57.2°F)."
```

## Defining functions

Functions can be set in the `tools` parameter of each API request.

A function is defined by its schema, which informs the model what it does and what input arguments it expects. It comprises the following fields:

| Field | Description |
| --- | --- |
| `type` | This should always be `function` |
| `name` | The function's name (e.g. `get_weather`) |
| `description` | Details on when and how to use the function |
| `parameters` | [JSON schema](https://json-schema.org/) defining the function's input arguments |
| `strict` | Whether to enforce strict mode for the function call |

Take a look at this example or generate your own below (or in our [Playground](https://platform.openai.com/playground)).

Generate

Example function schema

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Retrieves current weather for the given location.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City and country e.g. Bogotá, Colombia"
                },
                "units": {
                    "type": "string",
                    "enum": [\
                        "celsius",\
                        "fahrenheit"\
                    ],
                    "description": "Units the temperature will be returned in."
                }
            },
            "required": [\
                "location",\
                "units"\
            ],
            "additionalProperties": false
        },
        "strict": true
    }
}
```

Because the `parameters` are defined by a [JSON schema](https://json-schema.org/), you can leverage many of its rich features like property types, enums, descriptions, nested objects, and, recursive objects.

### Best practices for defining functions

1. **Write clear and detailed function names, parameter descriptions, and instructions.**
   - **Explicitly describe the purpose of the function and each parameter** (and its format), and what the output represents.
   - **Use the system prompt to describe when (and when not) to use each function.** Generally, tell the model _exactly_ what to do.
   - **Include examples and edge cases**, especially to rectify any recurring failures. ( **Note:** Adding examples may hurt performance for [reasoning models](https://platform.openai.com/docs/guides/reasoning).)
2. **Apply software engineering best practices.**
   - **Make the functions obvious and intuitive**. ( [principle of least surprise](https://en.wikipedia.org/wiki/Principle_of_least_astonishment))
   - **Use enums** and object structure to make invalid states unrepresentable. (e.g. `toggle_light(on: bool, off: bool)` allows for invalid calls)
   - **Pass the intern test.** Can an intern/human correctly use the function given nothing but what you gave the model? (If not, what questions do they ask you? Add the answers to the prompt.)
3. **Offload the burden from the model and use code where possible.**
   - **Don't make the model fill arguments you already know.** For example, if you already have an `order_id` based on a previous menu, don't have an `order_id` param – instead, have no params `submit_refund()` and pass the `order_id` with code.
   - **Combine functions that are always called in sequence.** For example, if you always call `mark_location()` after `query_location()`, just move the marking logic into the query function call.
4. **Keep the number of functions small for higher accuracy.**
   - **Evaluate your performance** with different numbers of functions.
   - **Aim for fewer than 20 functions** at any one time, though this is just a soft suggestion.
5. **Leverage OpenAI resources.**
   - **Generate and iterate on function schemas** in the [Playground](https://platform.openai.com/playground).
   - **Consider [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) to increase function calling accuracy** for large numbers of functions or difficult tasks. ( [cookbook](https://cookbook.openai.com/examples/fine_tuning_for_function_calling))

### Token Usage

Under the hood, functions are injected into the system message in a syntax the model has been trained on. This means functions count against the model's context limit and are billed as input tokens. If you run into token limits, we suggest limiting the number of functions or the length of the descriptions you provide for function parameters.

It is also possible to use [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning#fine-tuning-examples) to reduce the number of tokens used if you have many functions defined in your tools specification.

## Handling function calls

When the model calls a function, you must execute it and return the result. Since model responses can include zero, one, or multiple calls, it is best practice to assume there are several.

The response `output` array contains an entry with the `type` having a value of `function_call`. Each entry with a `call_id` (used later to submit the function result), `name`, and JSON-encoded `arguments`.

Sample response with multiple function calls

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
[\
    {\
        "id": "fc_12345xyz",\
        "call_id": "call_12345xyz",\
        "type": "function_call",\
        "name": "get_weather",\
        "arguments": "{\"location\":\"Paris, France\"}"\
    },\
    {\
        "id": "fc_67890abc",\
        "call_id": "call_67890abc",\
        "type": "function_call",\
        "name": "get_weather",\
        "arguments": "{\"location\":\"Bogotá, Colombia\"}"\
    },\
    {\
        "id": "fc_99999def",\
        "call_id": "call_99999def",\
        "type": "function_call",\
        "name": "send_email",\
        "arguments": "{\"to\":\"bob@email.com\",\"body\":\"Hi bob\"}"\
    }\
]
```

Execute function calls and append results

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
for tool_call in response.output:
    if tool_call.type != "function_call":
        continue

    name = tool_call.name
    args = json.loads(tool_call.arguments)

    result = call_function(name, args)
    input_messages.append({
        "type": "function_call_output",
        "call_id": tool_call.call_id,
        "output": str(result)
    })
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
for (const toolCall of response.output) {
    if (toolCall.type !== "function_call") {
        continue;
    }

    const name = toolCall.name;
    const args = JSON.parse(toolCall.arguments);

    const result = callFunction(name, args);
    input.push({
        type: "function_call_output",
        call_id: toolCall.call_id,
        output: result.toString()
    });
}
```

In the example above, we have a hypothetical `call_function` to route each call. Here’s a possible implementation:

Execute function calls and append results

python

```python
1
2
3
4
5
def call_function(name, args):
    if name == "get_weather":
        return get_weather(**args)
    if name == "send_email":
        return send_email(**args)
```

```javascript
1
2
3
4
5
6
7
8
const callFunction = async (name, args) => {
    if (name === "get_weather") {
        return getWeather(args.latitude, args.longitude);
    }
    if (name === "send_email") {
        return sendEmail(args.to, args.body);
    }
};
```

### Formatting results

A result must be a string, but the format is up to you (JSON, error codes, plain text, etc.). The model will interpret that string as needed.

If your function has no return value (e.g. `send_email`), simply return a string to indicate success or failure. (e.g. `"success"`)

### Incorporating results into response

After appending the results to your `input`, you can send them back to the model to get a final response.

Send results back to model

python

```python
1
2
3
4
5
response = client.responses.create(
    model="gpt-4.1",
    input=input_messages,
    tools=tools,
)
```

```javascript
1
2
3
4
5
const response = await openai.responses.create({
    model: "gpt-4.1",
    input,
    tools,
});
```

Final response

```json
"It's about 15°C in Paris, 18°C in Bogotá, and I've sent that email to Bob."
```

## Additional configurations

### Tool choice

By default the model will determine when and how many tools to use. You can force specific behavior with the `tool_choice` parameter.

1. **Auto:** ( _Default_) Call zero, one, or multiple functions. `tool_choice: "auto"`
2. **Required:** Call one or more functions.
`tool_choice: "required"`

3. **Forced Function:** Call exactly one specific function.
`tool_choice: {"type": "function", "name": "get_weather"}`

![Function Calling Diagram Steps](https://cdn.openai.com/API/docs/images/function-calling-diagram-tool-choice.png)

You can also set `tool_choice` to `"none"` to imitate the behavior of passing no functions.

### Parallel function calling

The model may choose to call multiple functions in a single turn. You can prevent this by setting `parallel_tool_calls` to `false`, which ensures exactly zero or one tool is called.

**Note:** Currently, if you are using a fine tuned model and the model calls multiple functions in one turn then [strict mode](https://platform.openai.com/docs/guides/function-calling?api-mode=responses#strict-mode) will be disabled for those calls.

**Note for `gpt-4.1-nano-2025-04-14`:** This snapshot of `gpt-4.1-nano` can sometimes include multiple tools calls for the same tool if parallel tool calls are enabled. It is recommended to disable this feature when using this nano snapshot.

### Strict mode

Setting `strict` to `true` will ensure function calls reliably adhere to the function schema, instead of being best effort. We recommend always enabling strict mode.

Under the hood, strict mode works by leveraging our [structured outputs](https://platform.openai.com/docs/guides/structured-outputs) feature and therefore introduces a couple requirements:

1. `additionalProperties` must be set to `false` for each object in the `parameters`.
2. All fields in `properties` must be marked as `required`.

You can denote optional fields by adding `null` as a `type` option (see example below).

Strict mode enabledStrict mode enabledStrict mode disabledStrict mode disabled

Strict mode enabled

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
{
    "type": "function",
    "name": "get_weather",
    "description": "Retrieves current weather for the given location.",
    "strict": true,
    "parameters": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City and country e.g. Bogotá, Colombia"
            },
            "units": {
                "type": ["string", "null"],
                "enum": ["celsius", "fahrenheit"],
                "description": "Units the temperature will be returned in."
            }
        },
        "required": ["location", "units"],
        "additionalProperties": false
    }
}
```

Strict mode disabled

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
{
    "type": "function",
    "name": "get_weather",
    "description": "Retrieves current weather for the given location.",
    "parameters": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City and country e.g. Bogotá, Colombia"
            },
            "units": {
                "type": "string",
                "enum": ["celsius", "fahrenheit"],
                "description": "Units the temperature will be returned in."
            }
        },
        "required": ["location"],
    }
}
```

All schemas generated in the [playground](https://platform.openai.com/playground) have strict mode enabled.

While we recommend you enable strict mode, it has a few limitations:

1. Some features of JSON schema are not supported. (See [supported schemas](https://platform.openai.com/docs/guides/structured-outputs?context=with_parse#supported-schemas).)

Specifically for fine tuned models:

1. Schemas undergo additional processing on the first request (and are then cached). If your schemas vary from request to request, this may result in higher latencies.
2. Schemas are cached for performance, and are not eligible for [zero data retention](https://platform.openai.com/docs/models#how-we-use-your-data).

## Streaming

Streaming can be used to surface progress by showing which function is called as the model fills its arguments, and even displaying the arguments in real time.

Streaming function calls is very similar to streaming regular responses: you set `stream` to `true` and get different `event` objects.

Streaming function calls

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
from openai import OpenAI

client = OpenAI()

tools = [{\
    "type": "function",\
    "name": "get_weather",\
    "description": "Get current temperature for a given location.",\
    "parameters": {\
        "type": "object",\
        "properties": {\
            "location": {\
                "type": "string",\
                "description": "City and country e.g. Bogotá, Colombia"\
            }\
        },\
        "required": [\
            "location"\
        ],\
        "additionalProperties": False\
    }\
}]

stream = client.responses.create(
    model="gpt-4.1",
    input=[{"role": "user", "content": "What's the weather like in Paris today?"}],
    tools=tools,
    stream=True
)

for event in stream:
    print(event)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
import { OpenAI } from "openai";

const openai = new OpenAI();

const tools = [{\
    type: "function",\
    name: "get_weather",\
    description: "Get current temperature for provided coordinates in celsius.",\
    parameters: {\
        type: "object",\
        properties: {\
            latitude: { type: "number" },\
            longitude: { type: "number" }\
        },\
        required: ["latitude", "longitude"],\
        additionalProperties: false\
    },\
    strict: true\
}];

const stream = await openai.responses.create({
    model: "gpt-4.1",
    input: [{ role: "user", content: "What's the weather like in Paris today?" }],
    tools,
    stream: true,
    store: true,
});

for await (const event of stream) {
    console.log(event)
}
```

Output events

```json
1
2
3
4
5
6
7
8
9
10
{"type":"response.output_item.added","response_id":"resp_1234xyz","output_index":0,"item":{"type":"function_call","id":"fc_1234xyz","call_id":"call_1234xyz","name":"get_weather","arguments":""}}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":"{\""}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":"location"}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":"\":\""}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":"Paris"}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":","}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":" France"}
{"type":"response.function_call_arguments.delta","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"delta":"\"}"}
{"type":"response.function_call_arguments.done","response_id":"resp_1234xyz","item_id":"fc_1234xyz","output_index":0,"arguments":"{\"location\":\"Paris, France\"}"}
{"type":"response.output_item.done","response_id":"resp_1234xyz","output_index":0,"item":{"type":"function_call","id":"fc_1234xyz","call_id":"call_2345abc","name":"get_weather","arguments":"{\"location\":\"Paris, France\"}"}}
```

Instead of aggregating chunks into a single `content` string, however, you're aggregating chunks into an encoded `arguments` JSON object.

When the model calls one or more functions an event of type `response.output_item.added` will be emitted for each function call that contains the following fields:

| Field | Description |
| --- | --- |
| `response_id` | The id of the response that the function call belongs to |
| `output_index` | The index of the output item in the response. This respresents the individual function calls in the response. |
| `item` | The in-progress function call item that includes a `name`, `arguments` and `id` field |

Afterwards you will receive a series of events of type `response.function_call_arguments.delta` which will contain the `delta` of the `arguments` field. These events contain the following fields:

| Field | Description |
| --- | --- |
| `response_id` | The id of the response that the function call belongs to |
| `item_id` | The id of the function call item that the delta belongs to |
| `output_index` | The index of the output item in the response. This respresents the individual function calls in the response. |
| `delta` | The delta of the `arguments` field. |

Below is a code snippet demonstrating how to aggregate the `delta` s into a final `tool_call` object.

Accumulating tool\_call deltas

python

```python
1
2
3
4
5
6
7
8
9
10
final_tool_calls = {}

for event in stream:
    if event.type === 'response.output_item.added':
        final_tool_calls[event.output_index] = event.item;
    elif event.type === 'response.function_call_arguments.delta':
        index = event.output_index

        if final_tool_calls[index]:
            final_tool_calls[index].arguments += event.delta
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
const finalToolCalls = {};

for await (const event of stream) {
    if (event.type === 'response.output_item.added') {
        finalToolCalls[event.output_index] = event.item;
    } else if (event.type === 'response.function_call_arguments.delta') {
        const index = event.output_index;

        if (finalToolCalls[index]) {
            finalToolCalls[index].arguments += event.delta;
        }
    }
}
```

Accumulated final\_tool\_calls\[0\]

```json
1
2
3
4
5
6
7
{
    "type": "function_call",
    "id": "fc_1234xyz",
    "call_id": "call_2345abc",
    "name": "get_weather",
    "arguments": "{\"location\":\"Paris, France\"}"
}
```

When the model has finished calling the functions an event of type `response.function_call_arguments.done` will be emitted. This event contains the entire function call including the following fields:

| Field | Description |
| --- | --- |
| `response_id` | The id of the response that the function call belongs to |
| `output_index` | The index of the output item in the response. This respresents the individual function calls in the response. |
| `item` | The function call item that includes a `name`, `arguments` and `id` field. |

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_graders.md
---

---

url: "<https://platform.openai.com/docs/guides/graders>"
title: "Graders - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Graders

Learn about graders used for evals and fine-tuning.

Copy page

Graders are a way to evaluate your model's performance against reference answers. Our [graders API](https://platform.openai.com/docs/api-reference/graders) is a way to test your graders, experiment with results, and improve your fine-tuning or evaluation framework to get the results you want.

## Overview

Graders let you compare a reference answers to the corresponding model-generated answer and return a grade in the range from 0 to 1. It's sometimes helpful to give the model partial credit for an answer, rather than a binary 0 or 1.

Graders are specified in JSON format, and there are several types:

- [String check](https://platform.openai.com/docs/guides/graders#string-check-graders)
- [Text similarity](https://platform.openai.com/docs/guides/graders#text-similarity-graders)
- [Score model grader](https://platform.openai.com/docs/guides/graders#score-model-graders)
- [Label model grader](https://platform.openai.com/docs/guides/graders#label-model-graders)
- [Python code execution](https://platform.openai.com/docs/guides/graders#python-graders)

In reinforcement fine-tuning, you can nest and combine graders by using [multigraders](https://platform.openai.com/docs/guides/graders#multigraders).

Use this guide to learn about each grader type and see starter examples. To build a grader and get started with reinforcement fine-tuning, see the [RFT guide](https://platform.openai.com/docs/guides/reinforcement-fine-tuning). Or to get started with evals, see the [Evals guide](https://platform.openai.com/docs/guides/evals).

## Templating

The inputs to certain graders use a templating syntax to grade multiple examples with the same configuration. Any string with `{{ }}` double curly braces will be substituted with the variable value.

Each input inside the `{{}}` must include a _namespace_ and a _variable_ with the following format `{{ namespace.variable }}`. The only supported namespaces are `item` and `sample`.

All nested variables can be accessed with JSON path like syntax.

### Item namespace

The item namespace will be populated with variables from the input data source for evals, and from each dataset item for fine-tuning. For example, if a row contains the following

```json
1
2
3
{
    "reference_answer": "..."
}
```

This can be used within the grader as `{{ item.reference_answer }}`.

### Sample namespace

The sample namespace will be populated with variables from the model sampling step during evals or during the fine-tuning step. The following variables are included

- `output_text`, the model output content as a string.
- `output_json`, the model output content as a JSON object, only if `response_format` is included in the sample.
- `output_tools`, the model output `tool_calls`, which have the same structure as output tool calls in the [chat completions API](https://platform.openai.com/docs/api-reference/chat/object).
- `choices`, the output choices, which has the same structure as output choices in the [chat completions API](https://platform.openai.com/docs/api-reference/chat/object).

For example, to access the model output content as a string, `{{ sample.output_text }}` can be used within the grader.

Details on grading tool calls

When training a model to improve tool-calling behavior, you will need to write your grader to operate over the `sample.output_tools` variable. The contents of this variable will be the same as the contents of the `response.choices[0].message.tool_calls` ( [see function calling docs](https://platform.openai.com/docs/guides/function-calling?api-mode=chat)).

A common way of grading tool calls is to use two graders, one that checks the name of the tool that is called and another that checks the arguments of the called function. An example of a grader that does this is shown below:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
{
    "type": "multi",
    "graders": {
        "function_name": {
            "name": "function_name",
            "type": "string_check",
            "input": "get_acceptors",
            "reference": "{{sample.output_tools[0].function.name}}",
            "operation": "eq",
        },
        "arguments": {
            "name": "arguments",
            "type": "string_check",
            "input": "{\"smiles\": \"{{item.smiles}}\"}",
            "reference": "{{sample.output_tools[0].function.arguments}}",
            "operation": "eq",
        },
    },
    "calculate_output": "0.5 * function_name + 0.5 * arguments",
}
```

This is a `multi` grader that combined two simple `string_check` graders, the first checks the name of the tool called via the `sample.output_tools[0].function.name` variable, and the second checks the arguments of the called function via the `sample.output_tools[0].function.arguments` variable. The `calculate_output` field is used to combine the two scores into a single score.

The `arguments` grader is prone to under-rewarding the model if the function arguments are subtly incorrect, like if `1` is submitted instead of the floating point `1.0`, or if a state name is given as an abbreviation instead of spelling it out. To avoid this, you can use a `text_similarity` grader instead of a `string_check` grader, or a `score_model` grader to have a LLM check for semantic similarity.

## String check grader

Use these simple string operations to return a 0 or 1. String check graders are good for scoring straightforward pass or fail answers—for example, the correct name of a city, a yes or no answer, or an answer containing or starting with the correct information.

```json
1
2
3
4
5
6
7
{
    "type": "string_check",
    "name": string,
    "operation": "eq" | "ne" | "like" | "ilike",
    "input": string,
    "reference": string,
}
```

Operations supported for string-check-grader are:

- `eq`: Returns 1 if the input matches the reference (case-sensitive), 0 otherwise
- `neq`: Returns 1 if the input does not match the reference (case-sensitive), 0 otherwise
- `like`: Returns 1 if the input contains the reference (case-sensitive), 0 otherwise
- `ilike`: Returns 1 if the input contains the reference (not case-sensitive), 0 otherwise

## Text similarity grader

Use text similarity graders when to evaluate how close the model-generated output is to the reference, scored with various evaluation frameworks.

This is useful for open-ended text responses. For example, if your dataset contains reference answers from experts in paragraph form, it's helpful to see how close your model-generated answer is to that content, in numerical form.

```json
1
2
3
4
5
6
7
8
{
    "type": "text_similarity",
    "name": string,
    "input": string,
    "reference": string,
    "pass_threshold": number,
    "evaluation_metric": "fuzzy_match" | "bleu" | "gleu" | "meteor" | "cosine" | "rouge_1" | "rouge_2" | "rouge_3" | "rouge_4" | "rouge_5" | "rouge_l"
}
```

Operations supported for `string-similarity-grader` are:

- `fuzzy_match`: Fuzzy string match between input and reference, using `rapidfuzz`
- `bleu`: Computes the BLEU score between input and reference
- `gleu`: Computes the Google BLEU score between input and reference
- `meteor`: Computes the METEOR score between input and reference
- `cosine`: Computes Cosine similarity between embedded input and reference, using `text-embedding-3-large`. Only available for evals.
- `rouge-*`: Computes the ROUGE score between input and reference

## Model graders

In general, using a model grader means prompting a separate model to grade the outputs of the model you're fine-tuning. Your two models work together to do reinforcement fine-tuning. The _grader model_ evaluates the _training model_.

A **score model grader** provides and evaluates a numerical score, whereas a **label model grader** provides a classification label.

### Score model graders

A score model grader will take the input and return a score based on the prompt within the given range.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
{
    "type": "score_model",
    "name": string,
    "input": Message[],
    "model": string,
    "pass_threshold": number,
    "range": number[],
    "sampling_params": {
        "seed": number,
        "top_p": number,
        "temperature": number,
        "max_completion_tokens": number,
        "reasoning_effort": "low" | "medium" | "high"
    }
}
```

Where each message is of the following form:

```json
1
2
3
4
{
    "role": "system" | "developer" | "user" | "assistant",
    "content": str
}
```

To use a score model grader, the input is a list of chat messages, each containing a `role` and `content`. The output of the grader will be truncated to the given `range`, and default to 0 for all non-numeric outputs.
Within each message, the same templating can be used as with other common graders to reference the ground truth or model sample.

Here’s a full runnable code sample:

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
import os
import requests

# get the API key from environment
api_key = os.environ["OPENAI_API_KEY"]
headers = {"Authorization": f"Bearer {api_key}"}

# define a dummy grader for illustration purposes
grader = {
   "type": "score_model",
   "name": "my_score_model",
   "input": [\
        {\
            "role": "system",\
            "content": "You are an expert grader. If the reference and model answer are exact matches, output a score of 1. If they are somewhat similar in meaning, output a score in 0.5. Otherwise, give a score of 0."\
        },\
        {\
            "role": "user",\
            "content": "Reference: {{ item.reference_answer }}. Model answer: {{ sample.output_text }}"\
        }\
   ],
   "pass_threshold": 0.5,
   "model": "o3-mini-2024-01-31",
   "range": [0, 1],
   "sampling_params": {
       "max_tokens": 32768,
       "top_p": 1,
       "reasoning_effort": "medium"
   },
}

# validate the grader
payload = {"grader": grader}
response = requests.post(
    "https://api.openai.com/v1/fine_tuning/alpha/graders/validate",
    json=payload,
    headers=headers
)
print("validate response:", response.text)

# run the grader with a test reference and sample
payload = {
  "grader": grader,
  "item": {
     "reference_answer": 1.0
  },
  "model_sample": "0.9"
}
response = requests.post(
    "https://api.openai.com/v1/fine_tuning/alpha/graders/run",
    json=payload,
    headers=headers
)
print("run response:", response.text)
```

#### Score model grader outputs

Under the hood, the `score_model` grader will query the requested model with the provided prompt and sampling parameters and will request a response in a specific response format. The response format that is used is provided below

```json
1
2
3
4
{
  "result": float,
  "steps": ReasoningStep[],
}
```

Where each reasoning step is of the form

```json
1
2
3
4
{
    description: string,
    conclusion: string
}
```

This format queries the model not just for the numeric `result` (the reward value for the query), but also provides the model some space to think through the reasoning behind the score. When you are writing your grader prompt, it may be useful to refer to these two fields by name explicitly (e.g. "include reasoning about the type of chemical bonds present in the molecule in the conclusion of your reasoning step", or "return a value of -1.0 in the `result` field if the inputs do not satisfy condition X").

### Label model graders

A label model grader will take the input and a set of passing labels and return a 1 if the model output is within the label set and 0 otherwise.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
{
 "type": "label_model",
    "name": string,
 "model": string,
 "input": Message[],
 "passing_labels": string[],
 "labels": string[],
 "sampling_params": {
        "max_tokens": 32768,
        "top_p": 1,
        "reasoning_effort": "medium"
    }
}
```

To use a label model grader, the input is a list of chat messages, each containing a `role` and `content`. The output of the grader will be limited to the given set of labels.
Within each message, the same templating can be used as with other common graders to reference the ground truth or model sample.

Here’s a full runnable code sample:

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
import os
import requests

# get the API key from environment
api_key = os.environ["OPENAI_API_KEY"]
headers = {"Authorization": f"bearer {api_key}"}

# define a dummy grader for illustration purposes
grader = {
   "type": "label_model",
   "name": "my_label_model",
   "input": [\
        {\
            "role": "system",\
            "content": "You are an expert grader."\
        },\
        {\
            "role": "user",\
            "content": "Classify this: {{ sample.output_text }} as either good or bad, where closer to 1 is good."\
        }\
   ],
   "passing_labels": ["good"],
   "labels": ["good", "bad"],
   "model": "o3-mini-2024-01-31",
   "sampling_params": {
       "max_tokens": 32768,
       "top_p": 1,
       "seed": 42,
       "reasoning_effort": "medium"
   },
}

# validate the grader
payload = {"grader": grader}
response = requests.post(
    "https://api.openai.com/v1/fine_tuning/alpha/graders/validate",
    json=payload,
    headers=headers
)
print("validate response:", response.text)

# run the grader with a test reference and sample
payload = {
  "grader": grader,
  "item": {},
  "model_sample": "0.9"
}
response = requests.post(
    "https://api.openai.com/v1/fine_tuning/alpha/graders/run",
    json=payload,
    headers=headers
)
print("run response:", response.text)
```

### Model grader constraints

- Only the following models are supported for the `model` parameter\`

  - `gpt-4o-2024-08-06`
  - `gpt-4o-mini-2024-07-18`
  - `gpt-4.1-2025-04-14`
  - `gpt-4.1-mini-2025-04-14`
  - `gpt-4.1-nano-2025-04-14`
  - `o1-2024-12-17`
  - `o3-mini-2025-01-31`
  - `o3-2025-04-16`
  - `o4-mini-2025-04-16`
- `temperature` changes not supported for reasoning models.
- `reasoning_effort` is not supported for non-reasoning models.

### How to write grader prompts

Writing grader prompts is an iterative process. The best way to iterate on a model grader prompt is to create a model grader eval. To do this, you need:

1. **Task prompts**: Write extremely detailed prompts for the desired task, with step-by-step instructions and many specific examples in context.
2. **Answers generated by a model or human expert**: Provide many high quality examples of answers, both from the model and trusted human experts.
3. **Corresponding ground truth grades for those answers**: Establish what a good grade looks like. For example, your human expert grades should be 1.

Then you can automatically evaluate how effectively the model grader distinguishes answers of different quality levels. Over time, add edge cases into your model grader eval as you discover and patch them with changes to the prompt.

For example, say you know from your human experts which answers are best:

```text
answer_1 > answer_2 > answer_3
```

Verify that the model grader's answers match that:

```text
model_grader(answer_1, reference_answer) > model_grader(answer_2, reference_answer) > model_grader(answer_3, reference_answer)
```

### Grader hacking

Models being trained sometimes learn to exploit weaknesses in model graders, also known as “grader hacking” or “reward hacking." You can detect this by checking the model's performance across model grader evals and expert human evals. A model that's hacked the grader will score highly on model grader evals but score poorly on expert human evaluations. Over time, we intend to improve observability in the API to make it easier to detect this during training.

## Python graders

This grader allows you to execute arbitrary python code to grade the model output. The grader expects a grade function to be present that takes in two arguments and outputs a float value. Any other result (exception, invalid float value, etc.) will be marked as invalid and return a 0 grade.

```json
1
2
3
4
5
{
    "type": "python",
    "source": "def grade(sample, item):\n    return 1.0",
    "image_tag": "2025-05-08"
}
```

The python source code must contain a grade function that takes in exactly two arguments and returns a float value as a grade.

```python
1
2
3
4
5
from typing import Any

def grade(sample: dict[str, Any], item: dict[str, Any]) -> float:
    # your logic here
    return 1.0
```

The first argument supplied to the grading function will be a dictionary populated with the model’s output during training for you to grade. `output_json` will only be populated if the output uses `response_format`.

```json
1
2
3
4
5
6
{
    "choices": [...],
    "output_text": "...",
    "output_json": {},
    "output_tools": [...]
}
```

The second argument supplied is a dictionary populated with input grading context. For evals, this will include keys from the data source. For fine-tuning this will include keys from each training data row.

```json
1
2
3
4
{
    "reference_answer": "...",
    "my_key": {...}
}
```

Here's a working example:

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
import os
import requests

# get the API key from environment
api_key = os.environ["OPENAI_API_KEY"]
headers = {"Authorization": f"Bearer {api_key}"}

grading_function = """
from rapidfuzz import fuzz, utils

def grade(sample, item) -> float:
    output_text = sample["output_text"]
    reference_answer = item["reference_answer"]
    return fuzz.WRatio(output_text, reference_answer, processor=utils.default_process) / 100.0
"""

# define a dummy grader for illustration purposes
grader = {
    "type": "python",
    "source": grading_function
}

# validate the grader
payload = {"grader": grader}
response = requests.post(
    "https://api.openai.com/v1/fine_tuning/alpha/graders/validate",
    json=payload,
    headers=headers
)
print("validate request_id:", response.headers["x-request-id"])
print("validate response:", response.text)

# run the grader with a test reference and sample
payload = {
  "grader": grader,
  "item": {
     "reference_answer": "fuzzy wuzzy had no hair"
  },
  "model_sample": "fuzzy wuzzy was a bear"
}
response = requests.post(
    "https://api.openai.com/v1/fine_tuning/alpha/graders/run",
    json=payload,
    headers=headers
)
print("run request_id:", response.headers["x-request-id"])
print("run response:", response.text)
```

### Technical constraints

- Your uploaded code must be less than `256kB` and will not have network access.
- The grading execution itself is limited to 2 minutes.
- At runtime you will be given a limit of 2Gb of memory and 1Gb of disk space to use.
- There's a limit of 2 CPU cores—any usage above this amount will result in throttling

The following third-party packages are available at execution time for the image tag `2025-05-08`

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
numpy==2.2.4
scipy==1.15.2
sympy==1.13.3
pandas==2.2.3
rapidfuzz==3.10.1
scikit-learn==1.6.1
rouge-score==0.1.2
deepdiff==8.4.2
jsonschema==4.23.0
pydantic==2.10.6
pyyaml==6.0.2
nltk==3.9.1
sqlparse==0.5.3
rdkit==2024.9.6
scikit-bio==0.6.3
ast-grep-py==0.36.2
```

Additionally the following nltk corpora are available:

```text
1
2
3
4
5
punkt
stopwords
wordnet
omw-1.4
names
```

## Multigraders

> Currently, this grader is only used for Reinforcement fine-tuning

A `multigrader` object combines the output of multiple graders to produce a single score. Multigraders work by computing grades over the fields of other grader objects and turning those sub-grades into an overall grade. This is useful when a correct answer depends on multiple things being true—for example, that the text is similar _and_ that the answer contains a specific string.

As an example, say you wanted the model to output JSON with the following two fields:

```json
1
2
3
4
{
  "name": "John Doe",
  "email": "john.doe@gmail.com"
}
```

You'd want your grader to compare the two fields and then take the average between them.

You can do this by combining multiple graders into an object grader, and then defining a formula to calculate the output score based on each field:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
{
    "type": "multi",
    "graders": {
        "name": {
            "name": "name_grader",
            "type": "text_similarity",
            "input": "{{sample.output_json.name}}",
            "reference": "{{item.name}}",
            "evaluation_metric": "fuzzy_match",
            "pass_threshold": 0.9
        },
        "email": {
            "name": "email_grader",
            "type": "string_check",
            "input": "{{sample.output_json.email}}",
            "reference": "{{item.email}}",
            "operation": "eq"
        }
    },
    "calculate_output": "(name + email) / 2"
}
```

In this example, it’s important for the model to get the email exactly right ( `string_check` returns either 0 or 1) but we tolerate some misspellings on the name ( `text_similarity` returns range from 0 to 1). Samples that get the email wrong will score between 0-0.5, and samples that get the email right will score between 0.5-1.0.

You cannot create a multigrader with a nested multigrader inside.

The calculate output field will have the keys of the input `graders` as possible variables and the following features are supported:

**Operators**

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `^` (power)

**Functions**

- `min`
- `max`
- `abs`
- `floor`
- `ceil`
- `exp`
- `sqrt`
- `log`

## Limitations and tips

Designing and creating graders is an iterative process. Start small, experiment, and continue to make changes to get better results.

### Design tips

To get the most value from your graders, use these design principles:

- **Produce a smooth score, not a pass/fail stamp**. A score that shifts gradually as answers improve helps the optimizer see which changes matter.
- **Guard against reward hacking**. This happens when the model finds a shortcut that earns high scores without real skill. Make it hard to loophole your grading system.
- **Avoid skewed data**. Datasets in which one label shows up most of the time invite the model to guess that label. Balance the set or up‑weight rare cases so the model must think.
- **Use an LLM‑as‑a-judge when code falls short**. For rich, open‑ended answers, ask another language model to grade. When building LLM graders, run multiple candidate responses and ground truths through your LLM judge to ensure grading is stable and aligned with preference. Provide few-shot examples of great, fair, and poor answers in the prompt. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_images-vision_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/images-vision?api-mode=responses>"
title: "Images and vision - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Images and vision

Learn how to understand or generate images.

Copy page

## Overview

[![Create images](https://cdn.openai.com/API/docs/images/images.png)\\
\\
Create images\\
\\
Use GPT Image or DALL·E to generate or edit images.](https://platform.openai.com/docs/guides/image-generation) [![Process image inputs](https://cdn.openai.com/API/docs/images/vision.png)\\
\\
Process image inputs\\
\\
Use our models' vision capabilities to analyze images.](https://platform.openai.com/docs/guides/images-vision#analyze-images)

In this guide, you will learn about building applications involving images with the OpenAI API.
If you know what you want to build, find your use case below to get started. If you're not sure where to start, continue reading to get an overview.

### A tour of image-related use cases

Recent language models can process image inputs and analyze them — a capability known as **vision**. With `gpt-image-1`, they can both analyze visual inputs and create images.

The OpenAI API offers several endpoints to process images as input or generate them as output, enabling you to build powerful multimodal applications.

| API | Supported use cases |
| --- | --- |
| [Responses API](https://platform.openai.com/docs/api-reference/responses) | Analyze images and use them as input and/or generate images as output |
| [Images API](https://platform.openai.com/docs/api-reference/images) | Generate images as output, optionally using images as input |
| [Chat Completions API](https://platform.openai.com/docs/api-reference/chat) | Analyze images and use them as input to generate text or audio |

To learn more about the input and output modalities supported by our models, refer to our [models page](https://platform.openai.com/docs/models).

## Generate or edit images

You can generate or edit images using the Image API or the Responses API.

Our latest image generation model, `gpt-image-1`, is a natively multimodal large language model.
It can understand text and images and leverage its broad world knowledge to generate images with better instruction following and contextual awareness.

In constrast, we also offer specialized image generation models - DALL·E 2 and 3 - which don't have the same inherent understanding of the world as GPT Image.

Generate images with Responses

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: "Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools: [{type: "image_generation"}],
});

// Save the image to a file
const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("cat_and_otter.png", Buffer.from(imageBase64, "base64"));
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
from openai import OpenAI
import base64

client = OpenAI()

response = client.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

// Save the image to a file
image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]
    with open("cat_and_otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

You can learn more about image generation in our [Image generation](https://platform.openai.com/docs/guides/image-generation) guide.

### Using world knowledge for image generation

The difference between DALL·E models and GPT Image is that a natively multimodal language model can use its visual understanding of the world to generate lifelike images including real-life details without a reference.

For example, if you prompt GPT Image to generate an image of a glass cabinet with the most popular semi-precious stones, the model knows enough to select gemstones like amethyst, rose quartz, jade, etc, and depict them in a realistic way.

## Analyze images

**Vision** is the ability for a model to "see" and understand images. If there is text in an image, the model can also understand the text.
It can understand most visual elements, including objects, shapes, colors, and textures, even if there are some [limitations](https://platform.openai.com/docs/guides/images-vision?api-mode=responses#limitations).

### Giving a model images as input

You can provide images as input to generation requests in multiple ways:

- By providing a fully qualified URL to an image file
- By providing an image as a Base64-encoded data URL
- By providing a file ID (created with the [Files API](https://platform.openai.com/docs/api-reference/files))

You can provide multiple images as input in a single request by including multiple images in the `content` array, but keep in mind that [images count as tokens](https://platform.openai.com/docs/guides/images-vision?api-mode=responses#calculating-costs) and will be billed accordingly.

Passing a URLPassing a URLPassing a Base64 encoded imagePassing a Base64 encoded imagePassing a file IDPassing a file ID

Passing a URL

Analyze the content of an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [{\
        role: "user",\
        content: [\
            { type: "input_text", text: "what's in this image?" },\
            {\
                type: "input_image",\
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",\
            },\
        ],\
    }],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-4.1-mini",
    input=[{\
        "role": "user",\
        "content": [\
            {"type": "input_text", "text": "what's in this image?"},\
            {\
                "type": "input_image",\
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",\
            },\
        ],\
    }],
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-4.1-mini",
    "input": [\
      {\
        "role": "user",\
        "content": [\
          {"type": "input_text", "text": "what is in this image?"},\
          {\
            "type": "input_image",\
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"\
          }\
        ]\
      }\
    ]
  }'
```

Passing a Base64 encoded image

Analyze the content of an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const imagePath = "path_to_your_image.jpg";
const base64Image = fs.readFileSync(imagePath, "base64");

const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [\
        {\
            role: "user",\
            content: [\
                { type: "input_text", text: "what's in this image?" },\
                {\
                    type: "input_image",\
                    image_url: `data:image/jpeg;base64,${base64Image}`,\
                },\
            ],\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
import base64
from openai import OpenAI

client = OpenAI()

# Function to encode the image
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

# Path to your image
image_path = "path_to_your_image.jpg"

# Getting the Base64 string
base64_image = encode_image(image_path)

response = client.responses.create(
    model="gpt-4.1",
    input=[\
        {\
            "role": "user",\
            "content": [\
                { "type": "input_text", "text": "what's in this image?" },\
                {\
                    "type": "input_image",\
                    "image_url": f"data:image/jpeg;base64,{base64_image}",\
                },\
            ],\
        }\
    ],
)

print(response.output_text)
```

Passing a file ID

Analyze the content of an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI();

// Function to create a file with the Files API
async function createFile(filePath) {
  const fileContent = fs.createReadStream(filePath);
  const result = await openai.files.create({
    file: fileContent,
    purpose: "vision",
  });
  return result.id;
}

// Getting the file ID
const fileId = await createFile("path_to_your_image.jpg");

const response = await openai.responses.create({
  model: "gpt-4.1-mini",
  input: [\
    {\
      role: "user",\
      content: [\
        { type: "input_text", text: "what's in this image?" },\
        {\
          type: "input_image",\
          file_id: fileId,\
        },\
      ],\
    },\
  ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
from openai import OpenAI

client = OpenAI()

# Function to create a file with the Files API
def create_file(file_path):
  with open(file_path, "rb") as file_content:
    result = client.files.create(
        file=file_content,
        purpose="vision",
    )
    return result.id

# Getting the file ID
file_id = create_file("path_to_your_image.jpg")

response = client.responses.create(
    model="gpt-4.1-mini",
    input=[{\
        "role": "user",\
        "content": [\
            {"type": "input_text", "text": "what's in this image?"},\
            {\
                "type": "input_image",\
                "file_id": file_id,\
            },\
        ],\
    }],
)

print(response.output_text)
```

### Image input requirements

Input images must meet the following requirements to be used in the API.

|     |     |
| --- | --- |
| Supported file types | - PNG (.png)<br>- JPEG (.jpeg and .jpg)<br>- WEBP (.webp)<br>- Non-animated GIF (.gif) |
| Size limit | Up to 50MB per image |
| Other requirements | - No watermarks or logos<br>- No text<br>- No NSFW content<br>- Clear enough for a human to understand |

### Specify image input detail level

The `detail` parameter tells the model what level of detail to use when processing and understanding the image ( `low`, `high`, or `auto` to let the model decide). If you skip the parameter, the model will use `auto`.

```plain
1
2
3
4
5
{
    "type": "input_image",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
    "detail": "high"
}
```

You can save tokens and speed up responses by using `"detail": "low"`. This lets the model process the image with a budget of 85 tokens. The model receives a low-resolution 512px x 512px version of the image. This is fine if your use case doesn't require the model to see with high-resolution detail (for example, if you're asking about the dominant shape or color in the image).

On the other hand, you can use `"detail": "high"` if you want the model to have a better understanding of the image.

Read more about calculating image processing costs in the [Calculating costs](https://platform.openai.com/docs/guides/images-vision?api-mode=responses#calculating-costs) section below.

## Limitations

While models with vision capabilities are powerful and can be used in many situations, it's important to understand the limitations of these models. Here are some known limitations:

- **Medical images**: The model is not suitable for interpreting specialized medical images like CT scans and shouldn't be used for medical advice.
- **Non-English**: The model may not perform optimally when handling images with text of non-Latin alphabets, such as Japanese or Korean.
- **Small text**: Enlarge text within the image to improve readability, but avoid cropping important details.
- **Rotation**: The model may misinterpret rotated or upside-down text and images.
- **Visual elements**: The model may struggle to understand graphs or text where colors or styles—like solid, dashed, or dotted lines—vary.
- **Spatial reasoning**: The model struggles with tasks requiring precise spatial localization, such as identifying chess positions.
- **Accuracy**: The model may generate incorrect descriptions or captions in certain scenarios.
- **Image shape**: The model struggles with panoramic and fisheye images.
- **Metadata and resizing**: The model doesn't process original file names or metadata, and images are resized before analysis, affecting their original dimensions.
- **Counting**: The model may give approximate counts for objects in images.
- **CAPTCHAS**: For safety reasons, our system blocks the submission of CAPTCHAs.

## Calculating costs

Image inputs are metered and charged in tokens, just as text inputs are. How images are converted to text token inputs varies based on the model. You can find a vision pricing calculator in the FAQ section of the [pricing page](https://openai.com/api/pricing/).

### GPT-4.1-mini, GPT-4.1-nano, o4-mini

Image inputs are metered and charged in tokens based on their dimensions. The token cost of an image is determined as follows:

- Calculate the number of 32px x 32px patches that are needed to fully cover the image
- If the number of patches exceeds 1536, we scale down the image so that it can be covered by no more than 1536 patches
- The token cost is the number of patches, capped at a maximum of 1536 tokens
- For `gpt-4.1-mini` we multiply image tokens by 1.62 to get total tokens, for `gpt-4.1-nano` we multiply image tokens by 2.46 to get total tokens, and for `o4-mini` we multiply image tokens by 1.72 to get total tokens, that are then billed at normal text token rates.

Note:

**Cost calculation examples**

- A 1024 x 1024 image is **1024 tokens**
  - Width is 1024, resulting in `(1024 + 32 - 1) // 32 = 32` patches
  - Height is 1024, resulting in `(1024 + 32 - 1) // 32 = 32` patches
  - Tokens calculated as `32 * 32 = 1024`, below the cap of 1536
- A 1800 x 2400 image is **1452 tokens**
  - Width is 1800, resulting in `(1800 + 32 - 1) // 32 = 57` patches
  - Height is 2400, resulting in `(2400 + 32 - 1) // 32 = 75` patches
  - We need `57 * 75 = 4275` patches to cover the full image. Since that exceeds 1536, we need to scale down the image while preserving the aspect ratio.
  - We can calculate the shrink factor as `sqrt(token_budget × patch_size^2 / (width * height))`. In our example, the shrink factor is `sqrt(1536 * 32^2 / (1800 * 2400)) = 0.603`.
  - Width is now 1086, resulting in `1086 / 32 = 33.94` patches
  - Height is now 1448, resulting in `1448 / 32 = 45.25` patches
  - We want to make sure the image fits in a whole number of patches. In this case we scale again by `33 / 33.94 = 0.97` to fit the width in 33 patches.
  - The final width is then `1086 * (33 / 33.94) = 1056)` and the final height is `1448 * (33 / 33.94) = 1408`
  - The image now requires `1056 / 32 = 33` patches to cover the width and `1408 / 32 = 44` patches to cover the height
  - The total number of tokens is the `33 * 44 = 1452`, below the cap of 1536

### GPT 4o, GPT-4.1, GPT-4o-mini, CUA, and o-series (except o4-mini)

The token cost of an image is determined by two factors: size and detail.

Any image with `"detail": "low"` costs a set, base number of tokens. This amount varies by model (see charte below). To calculate the cost of an image with `"detail": "high"`, we do the following:

- Scale to fit in a 2048px x 2048px square, maintaining original aspect ratio
- Scale so that the image's shortest side is 768px long
- Count the number of 512px squares in the image—each square costs a set amount of tokens (see chart below)
- Add the base tokens to the total

| Model | Base tokens | Tile tokens |
| --- | --- | --- |
| 4o, 4.1, 4.5 | 85 | 170 |
| 4o-mini | 2833 | 5667 |
| o1, o1-pro, o3 | 75 | 150 |
| computer-use-preview | 65 | 129 |

**Cost calculation examples (for gpt-4o)**

- A 1024 x 1024 square image in `"detail": "high"` mode costs 765 tokens

  - 1024 is less than 2048, so there is no initial resize.
  - The shortest side is 1024, so we scale the image down to 768 x 768.
  - 4 512px square tiles are needed to represent the image, so the final token cost is `170 * 4 + 85 = 765`.
- A 2048 x 4096 image in `"detail": "high"` mode costs 1105 tokens

  - We scale down the image to 1024 x 2048 to fit within the 2048 square.
  - The shortest side is 1024, so we further scale down to 768 x 1536.
  - 6 512px tiles are needed, so the final token cost is `170 * 6 + 85 = 1105`.
- A 4096 x 8192 image in `"detail": "low"` most costs 85 tokens

  - Regardless of input size, low detail images are a fixed cost.

### GPT Image 1

For GPT Image 1, we calculate the cost of an image input the same way as described above, except that we scale down the image so that the shortest side is 512px instead of 768px.
There is no detail level configuration for this model, so the price depends on the dimensions of the image.

The base cost is 65 image tokens, and each tile costs 129 image tokens.

To see pricing for image input tokens, refer to our [pricing page](https://platform.openai.com/docs/pricing#latest-models).

* * *

We process images at the token level, so each image we process counts towards your tokens per minute (TPM) limit.

For the most precise and up-to-date estimates for image processing, please use our image pricing calculator available [here](https://openai.com/api/pricing/).

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_image-generation_image-generation-model=gpt-image-1.md
---

---

url: "<https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1>"
title: "Image generation - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Image generation

Learn how to generate or edit images.

Copy page

Explore

[![](https://cdn.openai.com/API/docs/images/images-gallery/color-wheel.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=logo)[![](https://cdn.openai.com/API/docs/images/images-gallery/business-card-result.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=business-card)[![](https://cdn.openai.com/API/docs/images/images-gallery/furniture-poster.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=furniture)[![](https://cdn.openai.com/API/docs/images/images-gallery/handbag-output.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=handbag)[![](https://cdn.openai.com/API/docs/images/images-gallery/speaker-output.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=speaker)[![](https://cdn.openai.com/API/docs/images/images-gallery/sneakers-poster.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=sneakers)[![](https://cdn.openai.com/API/docs/images/images-gallery/3d-city.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=3d-city)[![](https://cdn.openai.com/API/docs/images/images-gallery/glass-speaker.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=glass-speaker)[![](https://cdn.openai.com/API/docs/images/images-gallery/chocolate-poster.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=chocolate)[![](https://cdn.openai.com/API/docs/images/images-gallery/kyoto-poster.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=kyoto-poster)[![](https://cdn.openai.com/API/docs/images/images-gallery/gift-basket.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=birthday-card)[![](https://cdn.openai.com/API/docs/images/images-gallery/magazine-cover.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=magazine-cover)[![](https://cdn.openai.com/API/docs/images/images-gallery/food-truck-output.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=food-truck)[![](https://cdn.openai.com/API/docs/images/images-gallery/italian-menu.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=restaurant-menu)[![](https://cdn.openai.com/API/docs/images/images-gallery/parking-poster.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=parking)[![](https://cdn.openai.com/API/docs/images/images-gallery/guacamole-recipe.png)](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&gallery=open&galleryItem=guacamole-recipe)

## Overview

The OpenAI API lets you generate and edit images from text prompts, using the GPT Image or DALL·E models. You can access image generation capabilities through two APIs:

### Image API

The [Image API](https://platform.openai.com/docs/api-reference/images) provides three endpoints, each with distinct capabilities:

- **Generations**: [Generate images](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#generate-images) from scratch based on a text prompt
- **Edits**: [Modify existing images](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#edit-images) using a new prompt, either partially or entirely
- **Variations**: [Generate variations](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#image-variations) of an existing image (available with DALL·E 2 only)

This API supports `gpt-image-1` as well as `dall-e-2` and `dall-e-3`.

### Responses API

The [Responses API](https://platform.openai.com/docs/api-reference/responses/create#responses-create-tools) allows you to generate images as part of conversations or multi-step flows. It supports image generation as a [built-in tool](https://platform.openai.com/docs/guides/tools?api-mode=responses), and accepts image inputs and outputs within context.

Compared to the Image API, it adds:

- **Multi-turn editing**: Iteratively make high fidelity edits to images with prompting
- **Streaming**: Display partial images as the final output is being generated to improve perceived latency
- **Flexible inputs**: Accept image [File](https://platform.openai.com/docs/api-reference/files) IDs as input images, not just bytes

The image generation tool in responses only supports `gpt-image-1`. For a list of mainline models that support calling this tool, refer to the [supported models](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#supported-models) below.

### Choosing the right API

- If you only need to generate or edit a single image from one prompt, the Image API is your best choice.
- If you want to build conversational, editable image experiences with GPT Image or display partial images during generation, go with the Responses API.

Both APIs let you [customize output](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#customize-image-output) — adjust quality, size, format, compression, and enable transparent backgrounds.

### Model comparison

Our latest and most advanced model for image generation is `gpt-image-1`, a natively multimodal language model.

We recommend this model for its high-quality image generation and ability to use world knowledge in image creation. However, you can also use specialized image generation models—DALL·E 2 and DALL·E 3—with the Image API.

| Model | Endpoints | Use case |
| --- | --- | --- |
| DALL·E 2 | Image API: Generations, Edits, Variations | Lower cost, concurrent requests, inpainting (image editing with a mask) |
| DALL·E 3 | Image API: Generations only | Higher image quality than DALL·E 2, support for larger resolutions |
| GPT Image | Image API: Generations, Edits – Responses API support coming soon | Superior instruction following, text rendering, detailed editing, real-world knowledge |

This guide focuses on GPT Image, but you can also switch to the docs for [DALL·E 2](https://platform.openai.com/docs/guides/image-generation?image-generation-model=dall-e-2) and [DALL·E 3](https://platform.openai.com/docs/guides/image-generation?image-generation-model=dall-e-3).

To ensure this model is used responsibly, you may need to complete the [API Organization Verification](https://help.openai.com/en/articles/10910291-api-organization-verification) from your [developer console](https://platform.openai.com/settings/organization/general) before using `gpt-image-1`.

![a vet with a baby otter](https://cdn.openai.com/API/docs/images/otter.png)

## Generate Images

You can use the [image generation endpoint](https://platform.openai.com/docs/api-reference/images/create) to create images based on text prompts, or the [image generation tool](https://platform.openai.com/docs/guides/tools?api-mode=responses) in the Responses API to generate images as part of a conversation.

To learn more about customizing the output (size, quality, format, transparency), refer to the [customize image output](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#customize-image-output) section below.

You can set the `n` parameter to generate multiple images at once in a single request (by default, the API returns a single image).

Responses APIResponses APIImage APIImage API

Responses API

Generate an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: "Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools: [{type: "image_generation"}],
});

// Save the image to a file
const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("otter.png", Buffer.from(imageBase64, "base64"));
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
from openai import OpenAI
import base64

client = OpenAI()

response = client.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

# Save the image to a file
image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]
    with open("otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

Image API

Generate an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
import OpenAI from "openai";
import fs from "fs";
const openai = new OpenAI();

const prompt = `
A children's book drawing of a veterinarian using a stethoscope to
listen to the heartbeat of a baby otter.
`;

const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
});

// Save the image to a file
const image_base64 = result.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("otter.png", image_bytes);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
from openai import OpenAI
import base64
client = OpenAI()

prompt = """
A children's book drawing of a veterinarian using a stethoscope to
listen to the heartbeat of a baby otter.
"""

result = client.images.generate(
    model="gpt-image-1",
    prompt=prompt
)

image_base64 = result.data[0].b64_json
image_bytes = base64.b64decode(image_base64)

# Save the image to a file
with open("otter.png", "wb") as f:
    f.write(image_bytes)
```

```bash
1
2
3
4
5
6
7
curl -X POST "https://api.openai.com/v1/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-type: application/json" \
    -d '{
        "model": "gpt-image-1",
        "prompt": "A childrens book drawing of a veterinarian using a stethoscope to listen to the heartbeat of a baby otter."
    }' | jq -r '.data[0].b64_json' | base64 --decode > otter.png
```

### Multi-turn image generation

With the Responses API, you can build multi-turn conversations involving image generation either by providing image generation calls outputs within context (you can also just use the image ID), or by using the [`previous_response_id` parameter](https://platform.openai.com/docs/guides/conversation-state?api-mode=responses#openai-apis-for-conversation-state).
This makes it easy to iterate on images across multiple turns—refining prompts, applying new instructions, and evolving the visual output as the conversation progresses.

Using previous response IDUsing previous response IDUsing image IDUsing image ID

Using previous response ID

Multi-turn image generation

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
  model: "gpt-4.1-mini",
  input:
    "Generate an image of gray tabby cat hugging an otter with an orange scarf",
  tools: [{ type: "image_generation" }],
});

const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("cat_and_otter.png", Buffer.from(imageBase64, "base64"));
}

// Follow up

const response_fwup = await openai.responses.create({
  model: "gpt-4.1-mini",
  previous_response_id: response.id,
  input: "Now make it look realistic",
  tools: [{ type: "image_generation" }],
});

const imageData_fwup = response_fwup.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData_fwup.length > 0) {
  const imageBase64 = imageData_fwup[0];
  const fs = await import("fs");
  fs.writeFileSync(
    "cat_and_otter_realistic.png",
    Buffer.from(imageBase64, "base64")
  );
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
from openai import OpenAI
import base64

client = OpenAI()

response = client.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]

    with open("cat_and_otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))

# Follow up

response_fwup = client.responses.create(
    model="gpt-4.1-mini",
    previous_response_id=response.id,
    input="Now make it look realistic",
    tools=[{"type": "image_generation"}],
)

image_data_fwup = [\
    output.result\
    for output in response_fwup.output\
    if output.type == "image_generation_call"\
]

if image_data_fwup:
    image_base64 = image_data_fwup[0]
    with open("cat_and_otter_realistic.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

Using image ID

Multi-turn image generation

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
  model: "gpt-4.1-mini",
  input:
    "Generate an image of gray tabby cat hugging an otter with an orange scarf",
  tools: [{ type: "image_generation" }],
});

const imageGenerationCalls = response.output.filter(
  (output) => output.type === "image_generation_call"
);

const imageData = imageGenerationCalls.map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("cat_and_otter.png", Buffer.from(imageBase64, "base64"));
}

// Follow up

const response_fwup = await openai.responses.create({
  model: "gpt-4.1-mini",
  input: [\
    {\
      role: "user",\
      content: [{ type: "input_text", text: "Now make it look realistic" }],\
    },\
    {\
      type: "image_generation_call",\
      id: imageGenerationCalls[0].id,\
    },\
  ],
  tools: [{ type: "image_generation" }],
});

const imageData_fwup = response_fwup.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData_fwup.length > 0) {
  const imageBase64 = imageData_fwup[0];
  const fs = await import("fs");
  fs.writeFileSync(
    "cat_and_otter_realistic.png",
    Buffer.from(imageBase64, "base64")
  );
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
import openai
import base64

response = openai.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

image_generation_calls = [\
    output\
    for output in response.output\
    if output.type == "image_generation_call"\
]

image_data = [output.result for output in image_generation_calls]

if image_data:
    image_base64 = image_data[0]

    with open("cat_and_otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))

# Follow up

response_fwup = openai.responses.create(
    model="gpt-4.1-mini",
    input=[\
        {\
            "role": "user",\
            "content": [{"type": "input_text", "text": "Now make it look realistic"}],\
        },\
        {\
            "type": "image_generation_call",\
            "id": image_generation_calls[0].id,\
        },\
    ],
    tools=[{"type": "image_generation"}],
)

image_data_fwup = [\
    output.result\
    for output in response_fwup.output\
    if output.type == "image_generation_call"\
]

if image_data_fwup:
    image_base64 = image_data_fwup[0]
    with open("cat_and_otter_realistic.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

#### Result

|     |     |
| --- | --- |
| "Generate an image of gray tabby cat hugging an otter with an orange scarf" | ![A cat and an otter](https://cdn.openai.com/API/docs/images/cat_and_otter.png) |
| "Now make it look realistic" | ![A cat and an otter](https://cdn.openai.com/API/docs/images/cat_and_otter_realistic.png) |

### Streaming

The Responses API also supports streaming image generation. This allows you to stream partial images as they are generated, providing a more interactive experience.

You can adjust the `partial_images` parameter to receive 1-3 partial images.

Stream an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import OpenAI from "openai";
import fs from "fs";
const openai = new OpenAI();

const stream = await openai.responses.create({
  model: "gpt-4.1",
  input:
    "Draw a gorgeous image of a river made of white owl feathers, snaking its way through a serene winter landscape",
  stream: true,
  tools: [{ type: "image_generation", partial_images: 2 }],
});

for await (const event of stream) {
  if (event.type === "response.image_generation_call.partial_image") {
    const idx = event.partial_image_index;
    const imageBase64 = event.partial_image_b64;
    const imageBuffer = Buffer.from(imageBase64, "base64");
    fs.writeFileSync(`river${idx}.png`, imageBuffer);
  }
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
from openai import OpenAI
import base64

client = OpenAI()

stream = client.responses.create(
    model="gpt-4.1",
    input="Draw a gorgeous image of a river made of white owl feathers, snaking its way through a serene winter landscape",
    stream=True,
    tools=[{"type": "image_generation", "partial_images": 2}],
)

for event in stream:
    if event.type == "response.image_generation_call.partial_image":
        idx = event.partial_image_index
        image_base64 = event.partial_image_b64
        image_bytes = base64.b64decode(image_base64)
        with open(f"river{idx}.png", "wb") as f:
            f.write(image_bytes)
```

#### Result

| Partial 1 | Partial 2 | Final image |
| --- | --- | --- |
| ![1st partial](https://cdn.openai.com/API/docs/images/imgen-streaming1.jpg) | ![2nd partial](https://cdn.openai.com/API/docs/images/imgen-streaming2.jpg) | ![3rd partial](https://cdn.openai.com/API/docs/images/imgen-streaming3.png) |

Prompt: Draw a gorgeous image of a river made of white owl feathers, snaking its way through a serene winter landscape

### Revised prompt

When using the image generation tool in the Responses API, the mainline model (e.g. `gpt-4.1`) will automatically revise your prompt for improved performance.

You can access the revised prompt in the `revised_prompt` field of the image generation call:

```json
1
2
3
4
5
6
7
{
  "id": "ig_123",
  "type": "image_generation_call",
  "status": "completed",
  "revised_prompt": "A gray tabby cat hugging an otter. The otter is wearing an orange scarf. Both animals are cute and friendly, depicted in a warm, heartwarming style.",
  "result": "..."
}
```

## Edit Images

The [image edits](https://platform.openai.com/docs/api-reference/images/createEdit) endpoint lets you:

- Edit existing images
- Generate new images using other images as a reference
- Edit parts of an image by uploading an image and mask indicating which areas should be replaced (a process known as **inpainting**)

### Create a new image using image references

You can use one or more images as a reference to generate a new image.

In this example, we'll use 4 input images to generate a new image of a gift basket containing the items in the reference images.

[![Body Lotion](https://cdn.openai.com/API/docs/images/body-lotion.png)](https://cdn.openai.com/API/docs/images/body-lotion.png)[![Soap](https://cdn.openai.com/API/docs/images/soap.png)](https://cdn.openai.com/API/docs/images/soap.png)[![Incense Kit](https://cdn.openai.com/API/docs/images/incense-kit.png)](https://cdn.openai.com/API/docs/images/incense-kit.png)[![Bath Bomb](https://cdn.openai.com/API/docs/images/bath-bomb.png)](https://cdn.openai.com/API/docs/images/bath-bomb.png)

![Bath Gift Set](https://cdn.openai.com/API/docs/images/bath-set-result.png)

Responses APIResponses APIImage APIImage API

Responses API

With the Responses API, you can provide input images in 2 different ways:

- By providing an image as a Base64-encoded data URL
- By providing a file ID (created with the [Files API](https://platform.openai.com/docs/api-reference/files))

We're actively working on supporting fully qualified URLs to image files as input as well.

Create a File

Edit an image

python

```python
1
2
3
4
5
6
7
8
9
10
from openai import OpenAI
client = OpenAI()

def create_file(file_path):
  with open(file_path, "rb") as file_content:
    result = client.files.create(
        file=file_content,
        purpose="vision",
    )
    return result.id
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

async function createFile(filePath) {
  const fileContent = fs.createReadStream(filePath);
  const result = await openai.files.create({
    file: fileContent,
    purpose: "vision",
  });
  return result.id;
}
```

Create a base64 encoded image

Edit an image

python

```python
1
2
3
4
def encode_image(file_path):
    with open(file_path, "rb") as f:
        base64_image = base64.b64encode(f.read()).decode("utf-8")
    return base64_image
```

```javascript
1
2
3
4
function encodeImage(filePath) {
  const base64Image = fs.readFileSync(filePath, "base64");
  return base64Image;
}
```

Edit an image

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
from openai import OpenAI
import base64

client = OpenAI()

prompt = """Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures."""

base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
    model="gpt-4.1",
    input=[\
        {\
            "role": "user",\
            "content": [\
                {"type": "input_text", "text": prompt},\
                {\
                    "type": "input_image",\
                    "image_url": f"data:image/jpeg;base64,{base64_image1}",\
                },\
                {\
                    "type": "input_image",\
                    "image_url": f"data:image/jpeg;base64,{base64_image2}",\
                },\
                {\
                    "type": "input_image",\
                    "file_id": file_id1,\
                },\
                {\
                    "type": "input_image",\
                    "file_id": file_id2,\
                }\
            ],\
        }\
    ],
    tools=[{"type": "image_generation"}],
)

image_generation_calls = [\
    output\
    for output in response.output\
    if output.type == "image_generation_call"\
]

image_data = [output.result for output in image_generation_calls]

if image_data:
    image_base64 = image_data[0]
    with open("gift-basket.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
else:
    print(response.output.content)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = `Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures.`;

const base64Image1 = encodeImage("body-lotion.png");
const base64Image2 = encodeImage("soap.png");
const fileId1 = await createFile("body-lotion.png");
const fileId2 = await createFile("incense-kit.png");

const response = await openai.responses.create({
  model: "gpt-4.1",
  input: [\
    {\
      role: "user",\
      content: [\
        { type: "input_text", text: prompt },\
        {\
          type: "input_image",\
          image_url: `data:image/jpeg;base64,${base64Image1}`,\
        },\
        {\
          type: "input_image",\
          image_url: `data:image/jpeg;base64,${base64Image2}`,\
        },\
        {\
          type: "input_image",\
          file_id: fileId1,\
        },\
        {\
          type: "input_image",\
          file_id: fileId2,\
        },\
      ],\
    },\
  ],
  tools: [{ type: "image_generation" }],
});

const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("gift-basket.png", Buffer.from(imageBase64, "base64"));
} else {
  console.log(response.output.content);
}
```

Image API

Edit an image

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
import base64
from openai import OpenAI
client = OpenAI()

prompt = """
Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures.
"""

result = client.images.edit(
    model="gpt-image-1",
    image=[\
        open("body-lotion.png", "rb"),\
        open("bath-bomb.png", "rb"),\
        open("incense-kit.png", "rb"),\
        open("soap.png", "rb"),\
    ],
    prompt=prompt
)

image_base64 = result.data[0].b64_json
image_bytes = base64.b64decode(image_base64)

# Save the image to a file
with open("gift-basket.png", "wb") as f:
    f.write(image_bytes)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
import fs from "fs";
import OpenAI, { toFile } from "openai";

const client = new OpenAI();

const prompt = `
Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures.
`;

const imageFiles = [\
    "bath-bomb.png",\
    "body-lotion.png",\
    "incense-kit.png",\
    "soap.png",\
];

const images = await Promise.all(
    imageFiles.map(async (file) =>
        await toFile(fs.createReadStream(file), null, {
            type: "image/png",
        })
    ),
);

const response = await client.images.edit({
    model: "gpt-image-1",
    image: images,
    prompt,
});

// Save the image to a file
const image_base64 = response.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("basket.png", image_bytes);
```

```bash
1
2
3
4
5
6
7
8
9
10
curl -s -D >(grep -i x-request-id >&2) \
  -o >(jq -r '.data[0].b64_json' | base64 --decode > gift-basket.png) \
  -X POST "https://api.openai.com/v1/images/edits" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "model=gpt-image-1" \
  -F "image[]=@body-lotion.png" \
  -F "image[]=@bath-bomb.png" \
  -F "image[]=@incense-kit.png" \
  -F "image[]=@soap.png" \
  -F 'prompt=Generate a photorealistic image of a gift basket on a white background labeled "Relax & Unwind" with a ribbon and handwriting-like font, containing all the items in the reference pictures'
```

### Edit an image using a mask (inpainting)

You can provide a mask to indicate which part of the image should be edited.

When using a mask with GPT Image, additional instructions are sent to the model to help guide the editing process accordingly.

Unlike with DALL·E 2, masking with GPT Image is entirely prompt-based. This means the model uses the mask as guidance, but may not follow its exact shape with complete precision.

If you provide multiple input images, the mask will be applied to the first image.

Responses APIResponses APIImage APIImage API

Responses API

Edit an image with a mask

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
from openai import OpenAI
client = OpenAI()

fileId = create_file("sunlit_lounge.png")
maskId = create_file("mask.png")

response = client.responses.create(
    model="gpt-4o",
    input=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "input_text",\
                    "text": "generate an image of the same sunlit indoor lounge area with a pool but the pool should contain a flamingo",\
                },\
                {\
                    "type": "input_image",\
                    "file_id": fileId,\
                }\
            ],\
        },\
    ],
    tools=[\
        {\
            "type": "image_generation",\
            "quality": "high",\
            "input_image_mask": {\
                "file_id": maskId,\
            },\
        },\
    ],
)

image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]
    with open("lounge.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
import OpenAI from "openai";
const openai = new OpenAI();

const fileId = await createFile("sunlit_lounge.png");
const maskId = await createFile("mask.png");

const response = await openai.responses.create({
  model: "gpt-4o",
  input: [\
    {\
      role: "user",\
      content: [\
        {\
          type: "input_text",\
          text: "generate an image of the same sunlit indoor lounge area with a pool but the pool should contain a flamingo",\
        },\
        {\
          type: "input_image",\
          file_id: fileId,\
        }\
      ],\
    },\
  ],
  tools: [\
    {\
      type: "image_generation",\
      quality: "high",\
      input_image_mask: {\
        file_id: maskId,\
      },\
    },\
  ],
});

const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("lounge.png", Buffer.from(imageBase64, "base64"));
}
```

Image API

Edit an image with a mask

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
from openai import OpenAI
client = OpenAI()

result = client.images.edit(
    model="gpt-image-1",
    image=open("sunlit_lounge.png", "rb"),
    mask=open("mask.png", "rb"),
    prompt="A sunlit indoor lounge area with a pool containing a flamingo"
)

image_base64 = result.data[0].b64_json
image_bytes = base64.b64decode(image_base64)

# Save the image to a file
with open("composition.png", "wb") as f:
    f.write(image_bytes)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import fs from "fs";
import OpenAI, { toFile } from "openai";

const client = new OpenAI();

const rsp = await client.images.edit({
    model: "gpt-image-1",
    image: await toFile(fs.createReadStream("sunlit_lounge.png"), null, {
        type: "image/png",
    }),
    mask: await toFile(fs.createReadStream("mask.png"), null, {
        type: "image/png",
    }),
    prompt: "A sunlit indoor lounge area with a pool containing a flamingo",
});

// Save the image to a file
const image_base64 = rsp.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("lounge.png", image_bytes);
```

```bash
1
2
3
4
5
6
7
8
curl -s -D >(grep -i x-request-id >&2) \
  -o >(jq -r '.data[0].b64_json' | base64 --decode > lounge.png) \
  -X POST "https://api.openai.com/v1/images/edits" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "model=gpt-image-1" \
  -F "mask=@mask.png" \
  -F "image[]=@sunlit_lounge.png" \
  -F 'prompt=A sunlit indoor lounge area with a pool containing a flamingo'
```

| Image | Mask | Output |
| --- | --- | --- |
| ![A pink room with a pool](https://cdn.openai.com/API/docs/images/sunlit_lounge.png) | ![A mask in part of the pool](https://cdn.openai.com/API/docs/images/mask.png) | ![The original pool with an inflatable flamigo replacing the mask](https://cdn.openai.com/API/docs/images/sunlit_lounge_result.png) |

Prompt: a sunlit indoor lounge area with a pool containing a flamingo

#### Mask requirements

The image to edit and mask must be of the same format and size (less than 50MB in size).

The mask image must also contain an alpha channel. If you're using an image editing tool to create the mask, make sure to save the mask with an alpha channel.

Add an alpha channel to a black and white mask

You can modify a black and white image programmatically to add an alpha channel.

Add an alpha channel to a black and white mask

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
from PIL import Image
from io import BytesIO

# 1. Load your black & white mask as a grayscale image
mask = Image.open(img_path_mask).convert("L")

# 2. Convert it to RGBA so it has space for an alpha channel
mask_rgba = mask.convert("RGBA")

# 3. Then use the mask itself to fill that alpha channel
mask_rgba.putalpha(mask)

# 4. Convert the mask into bytes
buf = BytesIO()
mask_rgba.save(buf, format="PNG")
mask_bytes = buf.getvalue()

# 5. Save the resulting file
img_path_mask_alpha = "mask_alpha.png"
with open(img_path_mask_alpha, "wb") as f:
    f.write(mask_bytes)
```

## Customize Image Output

You can configure the following output options:

- **Size**: Image dimensions (e.g., `1024x1024`, `1024x1536`)
- **Quality**: Rendering quality (e.g. `low`, `medium`, `high`)
- **Format**: File output format
- **Compression**: Compression level (0-100%) for JPEG and WebP formats
- **Background**: Transparent or opaque

`size`, `quality`, and `background` support the `auto` option, where the model will automatically select the best option based on the prompt.

### Size and quality options

Square images with standard quality are the fastest to generate. The default size is 1024x1024 pixels.

|     |     |
| --- | --- |
| Available sizes | - `1024x1024` (square)<br>- `1536x1024` (landscape)<br>- `1024x1536` (portrait)<br>- `auto` (default) |
| Quality options | - `low`<br>- `medium`<br>- `high`<br>- `auto` (default) |

### Output format

The Image API returns base64-encoded image data.
The default format is `png`, but you can also request `jpeg` or `webp`.

If using `jpeg` or `webp`, you can also specify the `output_compression` parameter to control the compression level (0-100%). For example, `output_compression=50` will compress the image by 50%.

Using `jpeg` is faster than `png`, so you should prioritize this format if latency is a concern.

### Transparency

The `gpt-image-1` model supports transparent backgrounds.
To enable transparency, set the `background` parameter to `transparent`.

It is only supported with the `png` and `webp` output formats.

Transparency works best when setting the quality to `medium` or `high`.

Responses APIResponses APIImage APIImage API

Responses API

Generate an image with a transparent background

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
import openai
import base64

response = openai.responses.create(
    model="gpt-4.1-mini",
    input="Draw a 2D pixel art style sprite sheet of a tabby gray cat",
    tools=[\
        {\
            "type": "image_generation",\
            "background": "transparent",\
            "quality": "high",\
        }\
    ],
)

image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]

    with open("sprite.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: "Draw a 2D pixel art style sprite sheet of a tabby gray cat",
  tools: [\
    {\
      type: "image_generation",\
      background: "transparent",\
      quality: "high",\
    },\
  ],
});

const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const imageBuffer = Buffer.from(imageBase64, "base64");
  fs.writeFileSync("sprite.png", imageBuffer);
}
```

Image API

Generate an image with a transparent background

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import OpenAI from "openai";
import fs from "fs";
const openai = new OpenAI();

const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt: "Draw a 2D pixel art style sprite sheet of a tabby gray cat",
    size: "1024x1024",
    background: "transparent",
    quality: "high",
});

// Save the image to a file
const image_base64 = result.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("sprite.png", image_bytes);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
from openai import OpenAI
import base64
client = OpenAI()

result = client.images.generate(
    model="gpt-image-1",
    prompt="Draw a 2D pixel art style sprite sheet of a tabby gray cat",
    size="1024x1024",
    background="transparent",
    quality="high",
)

image_base64 = result.json()["data"][0]["b64_json"]
image_bytes = base64.b64decode(image_base64)

# Save the image to a file
with open("sprite.png", "wb") as f:
    f.write(image_bytes)
```

```bash
1
2
3
4
5
6
7
8
9
curl -X POST "https://api.openai.com/v1/images" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-type: application/json" \
    -d '{
        "prompt": "Draw a 2D pixel art style sprite sheet of a tabby gray cat",
        "quality": "high",
        "size": "1024x1024",
        "background": "transparent"
    }' | jq -r 'data[0].b64_json' | base64 --decode > sprite.png
```

## Limitations

The GPT Image 1 model is a powerful and versatile image generation model, but it still has some limitations to be aware of:

- **Latency:** Complex prompts may take up to 2 minutes to process.
- **Text Rendering:** Although significantly improved over the DALL·E series, the model can still struggle with precise text placement and clarity.
- **Consistency:** While capable of producing consistent imagery, the model may occasionally struggle to maintain visual consistency for recurring characters or brand elements across multiple generations.
- **Composition Control:** Despite improved instruction following, the model may have difficulty placing elements precisely in structured or layout-sensitive compositions.

### Content Moderation

All prompts and generated images are filtered in accordance with our [content policy](https://labs.openai.com/policies/content-policy).

For image generation using `gpt-image-1`, you can control moderation strictness with the `moderation` parameter. This parameter supports two values:

- `auto` (default): Standard filtering that seeks to limit creating certain categories of potentially age-inappropriate content.
- `low`: Less restrictive filtering.

### Supported models

When using image generation in the Responses API, the models that support calling this tool are:

- `gpt-4o`
- `gpt-4o-mini`
- `gpt-4.1`
- `gpt-4.1-mini`
- `gpt-4.1-nano`
- `o3`

## Cost and latency

This model generates images by first producing specialized image tokens. Both latency and eventual cost are proportional to the number of tokens required to render an image—larger image sizes and higher quality settings result in more tokens.

The number of tokens generated depends on image dimensions and quality:

| Quality | Square (1024×1024) | Portrait (1024×1536) | Landscape (1536×1024) |
| --- | --- | --- | --- |
| Low | 272 tokens | 408 tokens | 400 tokens |
| Medium | 1056 tokens | 1584 tokens | 1568 tokens |
| High | 4160 tokens | 6240 tokens | 6208 tokens |

Note that you will also need to account for [input tokens](https://platform.openai.com/docs/guides/images-vision#gpt-image-1): text tokens for the prompt and image tokens for the input images if editing images.

So the final cost is the sum of:

- input text tokens
- input image tokens if using the edits endpoint
- image output tokens

Refer to our [pricing page](https://platform.openai.com/pricing#image-generation) for more information about price per text and image tokens.

### Partial images cost

If you want to [stream image generation](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#streaming) with the Responses API using the `partial_images` parameter, each partial image will incur an additional 100 image output tokens.

GPT Image 1 # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_model-optimization.md
---

---

url: "<https://platform.openai.com/docs/guides/model-optimization>"
title: "Model optimization - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Model optimization

Ensure quality model outputs with evals and fine-tuning in the OpenAI platform.

Copy page

LLM output is non-deterministic, and model behavior changes between model snapshots and families. Developers must constantly measure and tune the performance of LLM applications to ensure they're getting the best results. In this guide, we explore the techniques and OpenAI platform tools you can use to ensure high quality outputs from the model.

[![Evals](https://cdn.openai.com/API/docs/images/blue_card.png)\\
\\
Evals\\
\\
Systematically measure performance.](https://platform.openai.com/docs/guides/evals) [![Prompt engineering](https://cdn.openai.com/API/docs/images/orange_card.png)\\
\\
Prompt engineering\\
\\
Give context, instructions, and goals.](https://platform.openai.com/docs/guides/text?api-mode=responses#prompt-engineering) [![Fine-tuning](https://cdn.openai.com/API/docs/images/purple_card.png)\\
\\
Fine-tuning\\
\\
Train models to excel at a task.](https://platform.openai.com/docs/guides/fine-tuning)

## Model optimization workflow

Optimizing model output requires a combination of **evals**, **prompt engineering**, and **fine-tuning**, creating a flywheel of feedback that leads to better prompts and better training data for fine-tuning. The optimization process usually goes something like this.

1. Write [evals](https://platform.openai.com/docs/guides/evals) that measure model output, establishing a baseline for performance and accuracy.
2. [Prompt the model](https://platform.openai.com/docs/guides/text) for output, providing relevant context data and instructions.
3. For some use cases, it may be desirable to [fine-tune](https://platform.openai.com/docs/guides/fine-tuning) a model for a specific task.
4. Run evals using test data that is representative of real world inputs. Measure the performance of your prompt and fine-tuned model.
5. Tweak your prompt or fine-tuning dataset based on eval feedback.
6. Repeat the loop continuously to improve your model results.

Here's an overview of the major steps, and how to do them using the OpenAI platform.

## Build evals

In the OpenAI platform, you can [build and run evals](https://platform.openai.com/docs/guides/evals) either via API or in the [dashboard](https://platform.openai.com/evaluations). You might even consider writing evals _before_ you start writing prompts, taking an approach akin to behavior-driven development (BDD).

Run your evals against test inputs like you expect to see in production. Using one of several available [graders](https://platform.openai.com/docs/guides/graders), measure the results of a prompt against your test data set.

[Learn about evals\\
\\
Run tests on your model outputs to ensure you're getting the right results.](https://platform.openai.com/docs/guides/evals)

## Write effective prompts

With evals in place, you can effectively iterate on [prompts](https://platform.openai.com/docs/guides/text). The prompt engineering process may be all you need in order to get great results for your use case. Different models may require different prompting techniques, but there are several best practices you can apply across the board to get better results.

- **Include relevant context** \- in your instructions, include text or image content that the model will need to generate a response from outside its training data. This could include data from private databases or current, up-to-the-minute information.
- **Provide clear instructions** \- your prompt should contain clear goals about what kind of output you want. GPT models like `gpt-4.1` are great at following very explicit instructions, while [reasoning models](https://platform.openai.com/docs/guides/reasoning) like `o4-mini` tend to do better with high level guidance on outcomes.
- **Provide example outputs** \- give the model a few examples of correct output for a given prompt (a process called few-shot learning). The model can extrapolate from these examples how it should respond for other prompts.

[Learn about prompt engineering\\
\\
Learn the basics of writing good prompts for the model.](https://platform.openai.com/docs/guides/text)

## Fine-tune a model

Using the latest base [models](https://platform.openai.com/docs/models) and iterating on prompts might be all you need to achieve good performance for your use case, but sometimes it's useful to [fine-tune a model](https://platform.openai.com/docs/guides/fine-tuning) for a specific task. Fine-tuning exposes a model to additional training data that it can use to update its weights, and adjust how it responds to prompts.

Fine-tuning can be a time-consuming process, but it can also enable a model to consistently format responses in a certain way or handle novel inputs.

[Learn about fine-tuning\\
\\
Learn how to fine-tune a model for a specific use case.](https://platform.openai.com/docs/guides/fine-tuning)

## Learn from experts

Model optimization is a complex topic, and sometimes more art than science. Check out the videos below from members of the OpenAI team on model optimization techniques.

Cost/accuracy/latencyCost/accuracy/latencyDistillationDistillationOptimizing LLM PerformanceOptimizing LLM Performance

Cost/accuracy/latency

OpenAI DevDay 2024 \| Balancing accuracy, latency, and cost at scale - YouTube

[Photo image of OpenAI](https://www.youtube.com/channel/UCXZCJLdBC09xxGZ6gcdrc6A?embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

OpenAI

1.55M subscribers

[OpenAI DevDay 2024 \| Balancing accuracy, latency, and cost at scale](https://www.youtube.com/watch?v=Bx6sUDRMx-8)

OpenAI

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=Bx6sUDRMx-8&embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

0:00

0:00 / 33:36
•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=Bx6sUDRMx-8 "Watch on YouTube")

Distillation

OpenAI DevDay 2024 \| Tuning powerful small models with distillation - YouTube

[Photo image of OpenAI](https://www.youtube.com/channel/UCXZCJLdBC09xxGZ6gcdrc6A?embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

OpenAI

1.55M subscribers

[OpenAI DevDay 2024 \| Tuning powerful small models with distillation](https://www.youtube.com/watch?v=CqWpJFK-hOo)

OpenAI

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=CqWpJFK-hOo&embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

0:00

0:00 / 30:50
•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=CqWpJFK-hOo "Watch on YouTube")

Optimizing LLM Performance

A Survey of Techniques for Maximizing LLM Performance - YouTube

[Photo image of OpenAI](https://www.youtube.com/channel/UCXZCJLdBC09xxGZ6gcdrc6A?embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

OpenAI

1.55M subscribers

[A Survey of Techniques for Maximizing LLM Performance](https://www.youtube.com/watch?v=ahnGLM-RC1Y)

OpenAI

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=ahnGLM-RC1Y&embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

0:00

0:00 / 45:32
•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=ahnGLM-RC1Y "Watch on YouTube") # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_moderation.md
---

---

url: "<https://platform.openai.com/docs/guides/moderation>"
title: "Moderation - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Moderation

Identify potentially harmful content in text and images.

Copy page

Use the [moderations](https://platform.openai.com/docs/api-reference/moderations) endpoint to check whether text or images are potentially harmful. If harmful content is identified, you can take corrective action, like filtering content or intervening with user accounts creating offending content. The moderation endpoint is free to use.

You can use two models for this endpoint:

- `omni-moderation-latest`: This model and all snapshots support more categorization options and multi-modal inputs.
- `text-moderation-latest` **(Legacy)**: Older model that supports only text inputs and fewer input categorizations. The newer omni-moderation models will be the best choice for new applications.

## Quickstart

Use the tabs below to see how you can moderate text inputs or image inputs, using our [official SDKs](https://platform.openai.com/docs/libraries) and the [omni-moderation-latest model](https://platform.openai.com/docs/models#moderation):

Moderate text inputsModerate text inputsModerate images and textModerate images and text

Moderate text inputs

Get classification information for a text input

python

```python
1
2
3
4
5
6
7
8
9
from openai import OpenAI
client = OpenAI()

response = client.moderations.create(
    model="omni-moderation-latest",
    input="...text to classify goes here...",
)

print(response)
```

```javascript
1
2
3
4
5
6
7
8
9
import OpenAI from "openai";
const openai = new OpenAI();

const moderation = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: "...text to classify goes here...",
});

console.log(moderation);
```

```bash
1
2
3
4
5
6
7
8
curl https://api.openai.com/v1/moderations \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "omni-moderation-latest",
    "input": "...text to classify goes here..."
  }'
```

Moderate images and text

Get classification information for image and text input

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
from openai import OpenAI
client = OpenAI()

response = client.moderations.create(
    model="omni-moderation-latest",
    input=[\
        {"type": "text", "text": "...text to classify goes here..."},\
        {\
            "type": "image_url",\
            "image_url": {\
                "url": "https://example.com/image.png",\
                # can also use base64 encoded image URLs\
                # "url": "data:image/jpeg;base64,abcdefg..."\
            }\
        },\
    ],
)

print(response)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import OpenAI from "openai";
const openai = new OpenAI();

const moderation = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: [\
        { type: "text", text: "...text to classify goes here..." },\
        {\
            type: "image_url",\
            image_url: {\
                url: "https://example.com/image.png"\
                // can also use base64 encoded image URLs\
                // url: "data:image/jpeg;base64,abcdefg..."\
            }\
        }\
    ],
});

console.log(moderation);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
curl https://api.openai.com/v1/moderations \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "omni-moderation-latest",
    "input": [\
      { "type": "text", "text": "...text to classify goes here..." },\
      {\
        "type": "image_url",\
        "image_url": {\
          "url": "https://example.com/image.png"\
        }\
      }\
    ]
  }'
```

Here's a full example output, where the input is an image from a single frame of a war movie. The model correctly predicts indicators of violence in the image, with a `violence` category score of greater than 0.8.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
{
  "id": "modr-970d409ef3bef3b70c73d8232df86e7d",
  "model": "omni-moderation-latest",
  "results": [\
    {\
      "flagged": true,\
      "categories": {\
        "sexual": false,\
        "sexual/minors": false,\
        "harassment": false,\
        "harassment/threatening": false,\
        "hate": false,\
        "hate/threatening": false,\
        "illicit": false,\
        "illicit/violent": false,\
        "self-harm": false,\
        "self-harm/intent": false,\
        "self-harm/instructions": false,\
        "violence": true,\
        "violence/graphic": false\
      },\
      "category_scores": {\
        "sexual": 2.34135824776394e-7,\
        "sexual/minors": 1.6346470245419304e-7,\
        "harassment": 0.0011643905680426018,\
        "harassment/threatening": 0.0022121340080906377,\
        "hate": 3.1999824407395835e-7,\
        "hate/threatening": 2.4923252458203563e-7,\
        "illicit": 0.0005227032493135171,\
        "illicit/violent": 3.682979260160596e-7,\
        "self-harm": 0.0011175734280627694,\
        "self-harm/intent": 0.0006264858507989037,\
        "self-harm/instructions": 7.368592981140821e-8,\
        "violence": 0.8599265510337075,\
        "violence/graphic": 0.37701736389561064\
      },\
      "category_applied_input_types": {\
        "sexual": [\
          "image"\
        ],\
        "sexual/minors": [],\
        "harassment": [],\
        "harassment/threatening": [],\
        "hate": [],\
        "hate/threatening": [],\
        "illicit": [],\
        "illicit/violent": [],\
        "self-harm": [\
          "image"\
        ],\
        "self-harm/intent": [\
          "image"\
        ],\
        "self-harm/instructions": [\
          "image"\
        ],\
        "violence": [\
          "image"\
        ],\
        "violence/graphic": [\
          "image"\
        ]\
      }\
    }\
  ]
}
```

The output has several categories in the JSON response, which tell you which (if any) categories of content are present in the inputs, and to what degree the model believes them to be present.

| Output category | Description |
| --- | --- |
| `flagged` | Set to `true` if the model classifies the content as potentially harmful, `false` otherwise. |
| `categories` | Contains a dictionary of per-category violation flags. For each category, the value is `true` if the model flags the corresponding category as violated, `false` otherwise. |
| `category_scores` | Contains a dictionary of per-category scores output by the model, denoting the model's confidence that the input violates the OpenAI's policy for the category. The value is between 0 and 1, where higher values denote higher confidence. |
| `category_applied_input_types` | This property contains information on which input types were flagged in the response, for each category. For example, if the both the image and text inputs to the model are flagged for "violence/graphic", the `violence/graphic` property will be set to `["image", "text"]`. This is only available on omni models. |

We plan to continuously upgrade the moderation endpoint's underlying model. Therefore, custom policies that rely on `category_scores` may need recalibration over time.

## Content classifications

The table below describes the types of content that can be detected in the moderation API, along with which models and input types are supported for each category.

Categories marked as "Text only" do not support image inputs. If you send only images (without accompanying text) to the `omni-moderation-latest` model, it will return a score of 0 for these unsupported categories.

| **Category** | **Description** | **Models** | **Inputs** |
| --- | --- | --- | --- |
| `harassment` | Content that expresses, incites, or promotes harassing language towards any target. | All | Text only |
| `harassment/threatening` | Harassment content that also includes violence or serious harm towards any target. | All | Text only |
| `hate` | Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment. | All | Text only |
| `hate/threatening` | Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. | All | Text only |
| `illicit` | Content that gives advice or instruction on how to commit illicit acts. A phrase like "how to shoplift" would fit this category. | Omni only | Text only |
| `illicit/violent` | The same types of content flagged by the `illicit` category, but also includes references to violence or procuring a weapon. | Omni only | Text only |
| `self-harm` | Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders. | All | Text and images |
| `self-harm/intent` | Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders. | All | Text and images |
| `self-harm/instructions` | Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts. | All | Text and images |
| `sexual` | Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness). | All | Text and images |
| `sexual/minors` | Sexual content that includes an individual who is under 18 years old. | All | Text only |
| `violence` | Content that depicts death, violence, or physical injury. | All | Text and images |
| `violence/graphic` | Content that depicts death, violence, or physical injury in graphic detail. | All | Text and images | # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_pdf-files_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/pdf-files?api-mode=responses>"
title: "File inputs - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# File inputs

Learn how to use PDF files as inputs to the OpenAI API.

Copy page

OpenAI models with vision capabilities can also accept PDF files as input. Provide PDFs either as Base64-encoded data or as file IDs obtained after uploading files to the `/v1/files` endpoint through the [API](https://platform.openai.com/docs/api-reference/files) or [dashboard](https://platform.openai.com/storage/files/).

## How it works

To help models understand PDF content, we put into the model's context both the extracted text and an image of each page. The model can then use both the text and the images to generate a response. This is useful, for example, if diagrams contain key information that isn't in the text.

## Uploading files

In the example below, we first upload a PDF using the [Files API](https://platform.openai.com/docs/api-reference/files), then reference its file ID in an API request to the model.

Upload a file to use in a response

curl

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
curl https://api.openai.com/v1/files \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -F purpose="user_data" \
    -F file="@draconomicon.pdf"

curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "input": [\
            {\
                "role": "user",\
                "content": [\
                    {\
                        "type": "input_file",\
                        "file_id": "file-6F2ksmvXxt4VdoqmHRw6kL"\
                    },\
                    {\
                        "type": "input_text",\
                        "text": "What is the first dragon in the book?"\
                    }\
                ]\
            }\
        ]
    }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
import fs from "fs";
import OpenAI from "openai";
const client = new OpenAI();

const file = await client.files.create({
    file: fs.createReadStream("draconomicon.pdf"),
    purpose: "user_data",
});

const response = await client.responses.create({
    model: "gpt-4.1",
    input: [\
        {\
            role: "user",\
            content: [\
                {\
                    type: "input_file",\
                    file_id: file.id,\
                },\
                {\
                    type: "input_text",\
                    text: "What is the first dragon in the book?",\
                },\
            ],\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
from openai import OpenAI
client = OpenAI()

file = client.files.create(
    file=open("draconomicon.pdf", "rb"),
    purpose="user_data"
)

response = client.responses.create(
    model="gpt-4.1",
    input=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "input_file",\
                    "file_id": file.id,\
                },\
                {\
                    "type": "input_text",\
                    "text": "What is the first dragon in the book?",\
                },\
            ]\
        }\
    ]
)

print(response.output_text)
```

## Base64-encoded files

You can send PDF file inputs as Base64-encoded inputs as well.

Base64 encode a file to use in a response

curl

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "input": [\
            {\
                "role": "user",\
                "content": [\
                    {\
                        "type": "input_file",\
                        "filename": "draconomicon.pdf",\
                        "file_data": "...base64 encoded PDF bytes here..."\
                    },\
                    {\
                        "type": "input_text",\
                        "text": "What is the first dragon in the book?"\
                    }\
                ]\
            }\
        ]
    }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
import fs from "fs";
import OpenAI from "openai";
const client = new OpenAI();

const data = fs.readFileSync("draconomicon.pdf");
const base64String = data.toString("base64");

const response = await client.responses.create({
    model: "gpt-4.1",
    input: [\
        {\
            role: "user",\
            content: [\
                {\
                    type: "input_file",\
                    filename: "draconomicon.pdf",\
                    file_data: `data:application/pdf;base64,${base64String}`,\
                },\
                {\
                    type: "input_text",\
                    text: "What is the first dragon in the book?",\
                },\
            ],\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
import base64
from openai import OpenAI
client = OpenAI()

with open("draconomicon.pdf", "rb") as f:
    data = f.read()

base64_string = base64.b64encode(data).decode("utf-8")

response = client.responses.create(
    model="gpt-4.1",
    input=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "input_file",\
                    "filename": "draconomicon.pdf",\
                    "file_data": f"data:application/pdf;base64,{base64_string}",\
                },\
                {\
                    "type": "input_text",\
                    "text": "What is the first dragon in the book?",\
                },\
            ],\
        },\
    ]
)

print(response.output_text)
```

## Usage considerations

Below are a few considerations to keep in mind while using PDF inputs.

**Token usage**

To help models understand PDF content, we put into the model's context both extracted text and an image of each page—regardless of whether the page includes images. Before deploying your solution at scale, ensure you understand the pricing and token usage implications of using PDFs as input. [More on pricing](https://platform.openai.com/docs/pricing).

**File size limitations**

You can upload up to 100 pages and 32MB of total content in a single request to the API, across multiple file inputs.

**Supported models**

Only models that support both text and image inputs, such as gpt-4o, gpt-4o-mini, or o1, can accept PDF files as input. [Check model features here](https://platform.openai.com/docs/models).

**File upload purpose**

You can upload these files to the Files API with any [purpose](https://platform.openai.com/docs/api-reference/files/create#files-create-purpose), but we recommend using the `user_data` purpose for files you plan to use as model inputs.

## Next steps

Now that you known the basics of text inputs and outputs, you might want to check out one of these resources next.

[Experiment with PDF inputs in the Playground\\
\\
Use the Playground to develop and iterate on prompts with PDF inputs.](https://platform.openai.com/playground) [Full API reference\\
\\
Check out the API reference for more options.](https://platform.openai.com/docs/api-reference/responses)

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_predicted-outputs.md
---

---

url: "<https://platform.openai.com/docs/guides/predicted-outputs>"
title: "OpenAI Platform"
---

Log in [Sign up](https://platform.openai.com/signup) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_production-best-practices.md
---

---

url: "<https://platform.openai.com/docs/guides/production-best-practices>"
title: "Production best practices - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Production best practices

Transition AI projects to production with best practices.

Copy page

This guide provides a comprehensive set of best practices to help you transition from prototype to production. Whether you are a seasoned machine learning engineer or a recent enthusiast, this guide should provide you with the tools you need to successfully put the platform to work in a production setting: from securing access to our API to designing a robust architecture that can handle high traffic volumes. Use this guide to help develop a plan for deploying your application as smoothly and effectively as possible.

If you want to explore best practices for going into production further, please check out our Developer Day talk:

The New Stack and Ops for AI - YouTube

[Photo image of OpenAI](https://www.youtube.com/channel/UCXZCJLdBC09xxGZ6gcdrc6A?embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

OpenAI

1.55M subscribers

[The New Stack and Ops for AI](https://www.youtube.com/watch?v=XGJNo8TpuVA)

OpenAI

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=XGJNo8TpuVA&embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

0:00

0:00 / 34:10
•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=XGJNo8TpuVA "Watch on YouTube")

## Setting up your organization

Once you [log in](https://platform.openai.com/login) to your OpenAI account, you can find your organization name and ID in your [organization settings](https://platform.openai.com/settings/organization/general). The organization name is the label for your organization, shown in user interfaces. The organization ID is the unique identifier for your organization which can be used in API requests.

Users who belong to multiple organizations can [pass a header](https://platform.openai.com/docs/api-reference/requesting-organization) to specify which organization is used for an API request. Usage from these API requests will count against the specified organization's quota. If no header is provided, the [default organization](https://platform.openai.com/settings/organization/api-keys) will be billed. You can change your default organization in your [user settings](https://platform.openai.com/settings/organization/api-keys).

You can invite new members to your organization from the [Team page](https://platform.openai.com/settings/organization/team). Members can be **readers** or **owners**.

Readers:

- Can make API requests.
- Can view basic organization information.
- Can create, update, and delete resources (like Assistants) in the organization, unless otherwise noted.

Owners:

- Have all the permissions of readers.
- Can modify billing information.
- Can manage members within the organization.

### Managing billing limits

To begin using the OpenAI API, enter your [billing information](https://platform.openai.com/settings/organization/billing/overview). If no billing information is entered, you will still have login access but will be unable to make API requests.

Once you’ve entered your billing information, you will have an approved usage limit of $100 per month, which is set by OpenAI. Your quota limit will automatically increase as your usage on your platform increases and you move from one [usage tier](https://platform.openai.com/docs/guides/rate-limits#usage-tiers) to another. You can review your current usage limit in the [limits](https://platform.openai.com/settings/organization/limits) page in your account settings.

If you’d like to be notified when your usage exceeds a certain dollar amount, you can set a notification threshold through the [usage limits](https://platform.openai.com/settings/organization/limits) page. When the notification threshold is reached, the owners of the organization will receive an email notification. You can also set a monthly budget so that, once the monthly budget is reached, any subsequent API requests will be rejected. Note that these limits are best effort, and there may be 5 to 10 minutes of delay between the usage and the limits being enforced.

### API keys

The OpenAI API uses API keys for authentication. Visit your [API keys](https://platform.openai.com/settings/organization/api-keys) page to retrieve the API key you'll use in your requests.

This is a relatively straightforward way to control access, but you must be vigilant about securing these keys. Avoid exposing the API keys in your code or in public repositories; instead, store them in a secure location. You should expose your keys to your application using environment variables or secret management service, so that you don't need to hard-code them in your codebase. Read more in our [Best practices for API key safety](https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety).

API key usage can be monitored on the [Usage page](https://platform.openai.com/usage) once tracking is enabled. If you are using an API key generated prior to Dec 20, 2023 tracking will not be enabled by default. You can enable tracking going forward on the [API key management dashboard](https://platform.openai.com/api-keys). All API keys generated past Dec 20, 2023 have tracking enabled. Any previous untracked usage will be displayed as `Untracked` in the dashboard.

### Staging projects

As you scale, you may want to create separate projects for your staging and production environments. You can create these projects in the dashboard, allowing you to isolate your development and testing work, so you don't accidentally disrupt your live application. You can also limit user access to your production project, and set custom rate and spend limits per project.

## Scaling your solution architecture

When designing your application or service for production that uses our API, it's important to consider how you will scale to meet traffic demands. There are a few key areas you will need to consider regardless of the cloud service provider of your choice:

- **Horizontal scaling**: You may want to scale your application out horizontally to accommodate requests to your application that come from multiple sources. This could involve deploying additional servers or containers to distribute the load. If you opt for this type of scaling, make sure that your architecture is designed to handle multiple nodes and that you have mechanisms in place to balance the load between them.
- **Vertical scaling**: Another option is to scale your application up vertically, meaning you can beef up the resources available to a single node. This would involve upgrading your server's capabilities to handle the additional load. If you opt for this type of scaling, make sure your application is designed to take advantage of these additional resources.
- **Caching**: By storing frequently accessed data, you can improve response times without needing to make repeated calls to our API. Your application will need to be designed to use cached data whenever possible and invalidate the cache when new information is added. There are a few different ways you could do this. For example, you could store data in a database, filesystem, or in-memory cache, depending on what makes the most sense for your application.
- **Load balancing**: Finally, consider load-balancing techniques to ensure requests are distributed evenly across your available servers. This could involve using a load balancer in front of your servers or using DNS round-robin. Balancing the load will help improve performance and reduce bottlenecks.

### Managing rate limits

When using our API, it's important to understand and plan for [rate limits](https://platform.openai.com/docs/guides/rate-limits).

## Improving latencies

Check out our most up-to-date guide on [latency optimization](https://platform.openai.com/docs/guides/latency-optimization).

Latency is the time it takes for a request to be processed and a response to be returned. In this section, we will discuss some factors that influence the latency of our text generation models and provide suggestions on how to reduce it.

The latency of a completion request is mostly influenced by two factors: the model and the number of tokens generated. The life cycle of a completion request looks like this:

Network

End user to API latency

Server

Time to process prompt tokens

Server

Time to sample/generate tokens

Network

API to end user latency

The bulk of the latency typically arises from the token generation step.

> **Intuition**: Prompt tokens add very little latency to completion calls. Time to generate completion tokens is much longer, as tokens are generated one at a time. Longer generation lengths will accumulate latency due to generation required for each token.

### Common factors affecting latency and possible mitigation techniques

Now that we have looked at the basics of latency, let’s take a look at various factors that can affect latency, broadly ordered from most impactful to least impactful.

#### Model

Our API offers different models with varying levels of complexity and generality. The most capable models, such as `gpt-4`, can generate more complex and diverse completions, but they also take longer to process your query.
Models such as `gpt-4o-mini`, can generate faster and cheaper Chat Completions, but they may generate results that are less accurate or relevant for your query. You can choose the model that best suits your use case and the trade-off between speed, cost, and quality.

#### Number of completion tokens

Requesting a large amount of generated tokens completions can lead to increased latencies:

- **Lower max tokens**: for requests with a similar token generation count, those that have a lower `max_tokens` parameter incur less latency.
- **Include stop sequences**: to prevent generating unneeded tokens, add a stop sequence. For example, you can use stop sequences to generate a list with a specific number of items. In this case, by using `11.` as a stop sequence, you can generate a list with only 10 items, since the completion will stop when `11.` is reached. [Read our help article on stop sequences](https://help.openai.com/en/articles/5072263-how-do-i-use-stop-sequences) for more context on how you can do this.
- **Generate fewer completions**: lower the values of `n` and `best_of` when possible where `n` refers to how many completions to generate for each prompt and `best_of` is used to represent the result with the highest log probability per token.

If `n` and `best_of` both equal 1 (which is the default), the number of generated tokens will be at most, equal to `max_tokens`.

If `n` (the number of completions returned) or `best_of` (the number of completions generated for consideration) are set to `> 1`, each request will create multiple outputs. Here, you can consider the number of generated tokens as `[ max_tokens * max (n, best_of) ]`

#### Streaming

Setting `stream: true` in a request makes the model start returning tokens as soon as they are available, instead of waiting for the full sequence of tokens to be generated. It does not change the time to get all the tokens, but it reduces the time for first token for an application where we want to show partial progress or are going to stop generations. This can be a better user experience and a UX improvement so it’s worth experimenting with streaming.

#### Infrastructure

Our servers are currently located in the US. While we hope to have global redundancy in the future, in the meantime you could consider locating the relevant parts of your infrastructure in the US to minimize the roundtrip time between your servers and the OpenAI servers.

#### Batching

Depending on your use case, batching _may help_. If you are sending multiple requests to the same endpoint, you can [batch the prompts](https://platform.openai.com/docs/guides/rate-limits#batching-requests) to be sent in the same request. This will reduce the number of requests you need to make. The prompt parameter can hold up to 20 unique prompts. We advise you to test out this method and see if it helps. In some cases, you may end up increasing the number of generated tokens which will slow the response time.

## Managing costs

To monitor your costs, you can set a [notification threshold](https://platform.openai.com/settings/organization/limits) in your account to receive an email alert once you pass a certain usage threshold. You can also set a [monthly budget](https://platform.openai.com/settings/organization/limits). Please be mindful of the potential for a monthly budget to cause disruptions to your application/users. Use the [usage tracking dashboard](https://platform.openai.com/settings/organization/usage) to monitor your token usage during the current and past billing cycles.

### Text generation

One of the challenges of moving your prototype into production is budgeting for the costs associated with running your application. OpenAI offers a [pay-as-you-go pricing model](https://openai.com/api/pricing/), with prices per 1,000 tokens (roughly equal to 750 words). To estimate your costs, you will need to project the token utilization. Consider factors such as traffic levels, the frequency with which users will interact with your application, and the amount of data you will be processing.

**One useful framework for thinking about reducing costs is to consider costs as a function of the number of tokens and the cost per token.** There are two potential avenues for reducing costs using this framework. First, you could work to reduce the cost per token by switching to smaller models for some tasks in order to reduce costs. Alternatively, you could try to reduce the number of tokens required. There are a few ways you could do this, such as by using shorter prompts, [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) models, or caching common user queries so that they don't need to be processed repeatedly.

You can experiment with our interactive [tokenizer tool](https://platform.openai.com/tokenizer) to help you estimate costs. The API and playground also returns token counts as part of the response. Once you’ve got things working with our most capable model, you can see if the other models can produce the same results with lower latency and costs. Learn more in our [token usage help article](https://help.openai.com/en/articles/6614209-how-do-i-check-my-token-usage).

## MLOps strategy

As you move your prototype into production, you may want to consider developing an MLOps strategy. MLOps (machine learning operations) refers to the process of managing the end-to-end life cycle of your machine learning models, including any models you may be fine-tuning using our API. There are a number of areas to consider when designing your MLOps strategy. These include

- Data and model management: managing the data used to train or fine-tune your model and tracking versions and changes.
- Model monitoring: tracking your model's performance over time and detecting any potential issues or degradation.
- Model retraining: ensuring your model stays up to date with changes in data or evolving requirements and retraining or fine-tuning it as needed.
- Model deployment: automating the process of deploying your model and related artifacts into production.

Thinking through these aspects of your application will help ensure your model stays relevant and performs well over time.

## Security and compliance

As you move your prototype into production, you will need to assess and address any security and compliance requirements that may apply to your application. This will involve examining the data you are handling, understanding how our API processes data, and determining what regulations you must adhere to. Our [security practices](https://www.openai.com/security) and [trust and compliance portal](https://trust.openai.com/) provide our most comprehensive and up-to-date documentation. For reference, here is our [Privacy Policy](https://openai.com/privacy/) and [Terms of Use](https://openai.com/api/policies/terms/).

Some common areas you'll need to consider include data storage, data transmission, and data retention. You might also need to implement data privacy protections, such as encryption or anonymization where possible. In addition, you should follow best practices for secure coding, such as input sanitization and proper error handling.

### Safety best practices

When creating your application with our API, consider our [safety best practices](https://platform.openai.com/docs/guides/safety-best-practices) to ensure your application is safe and successful. These recommendations highlight the importance of testing the product extensively, being proactive about addressing potential issues, and limiting opportunities for misuse.

## Business considerations

As projects using AI move from prototype to production, it is important to consider how to build a great product with AI and how that ties back to your core business. We certainly don't have all the answers but a great starting place is a talk from our Developer Day where we dive into this with some of our customers:

The Business of AI - YouTube

[Photo image of OpenAI](https://www.youtube.com/channel/UCXZCJLdBC09xxGZ6gcdrc6A?embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

OpenAI

1.55M subscribers

[The Business of AI](https://www.youtube.com/watch?v=knHW-p31R0c)

OpenAI

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=knHW-p31R0c&embeds_referring_euri=https%3A%2F%2Fplatform.openai.com%2F)

0:00

0:00 / 43:22
•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=knHW-p31R0c "Watch on YouTube") # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_prompt-caching.md
---

---

url: "<https://platform.openai.com/docs/guides/prompt-caching>"
title: "Prompt caching - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Prompt caching

Reduce latency and cost with prompt caching.

Copy page

Model prompts often contain repetitive content, like system prompts and common instructions. OpenAI routes API requests to servers that recently processed the same prompt, making it cheaper and faster than processing a prompt from scratch. This can reduce latency by up to 80% and cost by up to 75%. Prompt Caching works automatically on all your API requests (no code changes required) and has no additional fees associated with it. Prompt Caching is enabled for all recent [models](https://platform.openai.com/docs/models), gpt-4o and newer.

This guide describes how prompt caching works in detail, so that you can optimize your prompts for lower latency and cost.

## Structuring prompts

Cache hits are only possible for exact prefix matches within a prompt. To realize caching benefits, place static content like instructions and examples at the beginning of your prompt, and put variable content, such as user-specific information, at the end. This also applies to images and tools, which must be identical between requests.

![Prompt Caching visualization](https://openaidevs.retool.com/api/file/8593d9bb-4edb-4eb6-bed9-62bfb98db5ee)

## How it works

Caching is enabled automatically for prompts that are 1024 tokens or longer. When you make an API request, the following steps occur:

1. **Cache Routing**:

- Requests are routed to a machine based on a hash of the initial prefix of the prompt. The hash typically uses the first 256 tokens, though the exact length varies depending on the model.
- If you provide the [`user`](https://platform.openai.com/docs/api-reference/responses/create#responses-create-user) parameter, it is combined with the prefix hash, allowing you to influence routing and improve cache hit rates. This is especially beneficial when many requests share long, common prefixes.
- If requests for the same prefix and user combination exceed a certain rate (approximately 15 requests per minute), some may overflow and get routed to additional machines, reducing cache effectiveness.

2. **Cache Lookup**: The system checks if the initial portion (prefix) of your prompt exists in the cache on the selected machine.
3. **Cache Hit**: If a matching prefix is found, the system uses the cached result. This significantly decreases latency and reduces costs.
4. **Cache Miss**: If no matching prefix is found, the system processes your full prompt, caching the prefix afterward on that machine for future requests.

Cached prefixes generally remain active for 5 to 10 minutes of inactivity. However, during off-peak periods, caches may persist for up to one hour.

## Requirements

Caching is available for prompts containing 1024 tokens or more, with cache hits occurring in increments of 128 tokens. Therefore, the number of cached tokens in a request will always fall within the following sequence: 1024, 1152, 1280, 1408, and so on, depending on the prompt's length.

All requests, including those with fewer than 1024 tokens, will display a `cached_tokens` field of the `usage.prompt_tokens_details` [Chat Completions object](https://platform.openai.com/docs/api-reference/chat/object) indicating how many of the prompt tokens were a cache hit. For requests under 1024 tokens, `cached_tokens` will be zero.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
"usage": {
  "prompt_tokens": 2006,
  "completion_tokens": 300,
  "total_tokens": 2306,
  "prompt_tokens_details": {
    "cached_tokens": 1920
  },
  "completion_tokens_details": {
    "reasoning_tokens": 0,
    "accepted_prediction_tokens": 0,
    "rejected_prediction_tokens": 0
  }
}
```

### What can be cached

- **Messages:** The complete messages array, encompassing system, user, and assistant interactions.
- **Images:** Images included in user messages, either as links or as base64-encoded data, as well as multiple images can be sent. Ensure the detail parameter is set identically, as it impacts image tokenization.
- **Tool use:** Both the messages array and the list of available `tools` can be cached, contributing to the minimum 1024 token requirement.
- **Structured outputs:** The structured output schema serves as a prefix to the system message and can be cached.

## Best practices

- Structure prompts with **static or repeated content at the beginning** and dynamic, user-specific content at the end.
- Use the **[`user`](https://platform.openai.com/docs/api-reference/responses/create#responses-create-user) parameter** consistently across requests that share common prefixes. Select a `user` granularity that keeps each unique prefix-user combination below 15 requests per minute to avoid cache overflow.
- **Monitor your cache performance metrics**, including cache hit rates, latency, and the proportion of tokens cached, to refine your strategy.
- **Maintain a steady stream of requests** with identical prompt prefixes to minimize cache evictions and maximize caching benefits.

## Frequently asked questions

1. **How is data privacy maintained for caches?**

Prompt caches are not shared between organizations. Only members of the same organization can access caches of identical prompts.

2. **Does Prompt Caching affect output token generation or the final response of the API?**

Prompt Caching does not influence the generation of output tokens or the final response provided by the API. Regardless of whether caching is used, the output generated will be identical. This is because only the prompt itself is cached, while the actual response is computed anew each time based on the cached prompt.

3. **Is there a way to manually clear the cache?**

Manual cache clearing is not currently available. Prompts that have not been encountered recently are automatically cleared from the cache. Typical cache evictions occur after 5-10 minutes of inactivity, though sometimes lasting up to a maximum of one hour during off-peak periods.

4. **Will I be expected to pay extra for writing to Prompt Caching?**

No. Caching happens automatically, with no explicit action needed or extra cost paid to use the caching feature.

5. **Do cached prompts contribute to TPM rate limits?**

Yes, as caching does not affect rate limits.

6. **Is discounting for Prompt Caching available on Scale Tier and the Batch API?**

Discounting for Prompt Caching is not available on the Batch API but is available on Scale Tier. With Scale Tier, any tokens that are spilled over to the shared API will also be eligible for caching.

7. **Does Prompt Caching work on Zero Data Retention requests?**

Yes, Prompt Caching is compliant with existing Zero Data Retention policies. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_prompt-generation.md
---

---

url: "<https://platform.openai.com/docs/guides/prompt-generation>"
title: "Prompt generation - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Prompt generation

Generate prompts and schemas in Playground.

Copy page

The **Generate** button in the [Playground](https://platform.openai.com/playground/prompts) lets you generate prompts, [functions](https://platform.openai.com/docs/guides/function-calling), and [schemas](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas) from just a description of your task. This guide will walk through exactly how it works.

## Overview

Creating prompts and schemas from scratch can be time-consuming, so generating them can help you get started quickly. The Generate button uses two main approaches:

1. **Prompts:** We use **meta-prompts** that incorporate best practices to generate or improve prompts.
2. **Schemas:** We use **meta-schemas** that produce valid JSON and function syntax.

While we currently use meta prompts and schemas, we may integrate more advanced techniques in the future like [DSPy](https://arxiv.org/abs/2310.03714) and ["Gradient Descent"](https://arxiv.org/abs/2305.03495).

## Prompts

A **meta-prompt** instructs the model to create a good prompt based on your task description or improve an existing one. The meta-prompts in the Playground draw from our [prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering) best practices and real-world experience with users.

We use specific meta-prompts for different output types, like audio, to ensure the generated prompts meet the expected format.

### Meta-prompts

Text-outText-outAudio-outAudio-out

Text-out

Text meta-prompt

python

````python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
from openai import OpenAI

client = OpenAI()

META_PROMPT = """
Given a task description or existing prompt, produce a detailed system prompt to guide a language model in completing the task effectively.

# Guidelines

- Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.
- Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.
- Reasoning Before Conclusions**: Encourage reasoning steps before any conclusions are reached. ATTENTION! If the user provides examples where the reasoning happens afterward, REVERSE the order! NEVER START EXAMPLES WITH CONCLUSIONS!
    - Reasoning Order: Call out reasoning portions of the prompt and conclusion parts (specific fields by name). For each, determine the ORDER in which this is done, and whether it needs to be reversed.
    - Conclusion, classifications, or results should ALWAYS appear last.
- Examples: Include high-quality examples if helpful, using placeholders [in brackets] for complex elements.
   - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.
- Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.
- Formatting: Use markdown features for readability. DO NOT USE ``` CODE BLOCKS UNLESS SPECIFICALLY REQUESTED.
- Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.
- Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.
- Output Format: Explicitly the most appropriate output format, in detail. This should include length and syntax (e.g. short sentence, paragraph, JSON, etc.)
    - For tasks outputting well-defined or structured data (classification, JSON, etc.) bias toward outputting a JSON.
    - JSON should never be wrapped in code blocks (```) unless explicitly requested.

The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")

[Concise instruction describing the task - this should be the first line in the prompt, no section header]

[Additional details as needed.]

[Optional sections with headings or bullet points for detailed steps.]

# Steps [optional]

[optional: a detailed breakdown of the steps necessary to accomplish the task]

# Output Format

[Specifically call out how the output should be formatted, be it response length, structure e.g. JSON, markdown, etc]

# Examples [optional]

[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.]
[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! ]

# Notes [optional]

[optional: edge cases, details, and an area to call or repeat out specific important considerations]
""".strip()

def generate_prompt(task_or_prompt: str):
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[\
            {\
                "role": "system",\
                "content": META_PROMPT,\
            },\
            {\
                "role": "user",\
                "content": "Task, Goal, or Current Prompt:\n" + task_or_prompt,\
            },\
        ],
    )

    return completion.choices[0].message.content
````

Audio-out

Audio meta-prompt

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
from openai import OpenAI

client = OpenAI()

META_PROMPT = """
Given a task description or existing prompt, produce a detailed system prompt to guide a realtime audio output language model in completing the task effectively.

# Guidelines

- Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.
- Tone: Make sure to specifically call out the tone. By default it should be emotive and friendly, and speak quickly to avoid keeping the user just waiting.
- Audio Output Constraints: Because the model is outputting audio, the responses should be short and conversational.
- Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.
- Examples: Include high-quality examples if helpful, using placeholders [in brackets] for complex elements.
   - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.
  - It is very important that any examples included reflect the short, conversational output responses of the model.
Keep the sentences very short by default. Instead of 3 sentences in a row by the assistant, it should be split up with a back and forth with the user instead.
  - By default each sentence should be a few words only (5-20ish words). However, if the user specifically asks for "short" responses, then the examples should truly have 1-10 word responses max.
  - Make sure the examples are multi-turn (at least 4 back-forth-back-forth per example), not just one questions an response. They should reflect an organic conversation.
- Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.
- Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.
- Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.

The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")

[Concise instruction describing the task - this should be the first line in the prompt, no section header]

[Additional details as needed.]

[Optional sections with headings or bullet points for detailed steps.]

# Examples [optional]

[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.]
[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! ]

# Notes [optional]

[optional: edge cases, details, and an area to call or repeat out specific important considerations]
""".strip()

def generate_prompt(task_or_prompt: str):
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[\
            {\
                "role": "system",\
                "content": META_PROMPT,\
            },\
            {\
                "role": "user",\
                "content": "Task, Goal, or Current Prompt:\n" + task_or_prompt,\
            },\
        ],
    )

    return completion.choices[0].message.content
```

### Prompt edits

To edit prompts, we use a slightly modified meta-prompt. While direct edits are straightforward to apply, identifying necessary changes for more open-ended revisions can be challenging. To address this, we include a **reasoning section** at the beginning of the response. This section helps guide the model in determining what changes are needed by evaluating the existing prompt's clarity, chain-of-thought ordering, overall structure, and specificity, among other factors. The reasoning section makes suggestions for improvements and is then parsed out from the final response.

Text-outText-outAudio-outAudio-out

Text-out

Text meta-prompt for edits

python

````python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
from openai import OpenAI

client = OpenAI()

META_PROMPT = """
Given a current prompt and a change description, produce a detailed system prompt to guide a language model in completing the task effectively.

Your final output will be the full corrected prompt verbatim. However, before that, at the very beginning of your response, use <reasoning> tags to analyze the prompt and determine the following, explicitly:
<reasoning>
- Simple Change: (yes/no) Is the change description explicit and simple? (If so, skip the rest of these questions.)
- Reasoning: (yes/no) Does the current prompt use reasoning, analysis, or chain of thought?
    - Identify: (max 10 words) if so, which section(s) utilize reasoning?
    - Conclusion: (yes/no) is the chain of thought used to determine a conclusion?
    - Ordering: (before/after) is the chain of though located before or after
- Structure: (yes/no) does the input prompt have a well defined structure
- Examples: (yes/no) does the input prompt have few-shot examples
    - Representative: (1-5) if present, how representative are the examples?
- Complexity: (1-5) how complex is the input prompt?
    - Task: (1-5) how complex is the implied task?
    - Necessity: ()
- Specificity: (1-5) how detailed and specific is the prompt? (not to be confused with length)
- Prioritization: (list) what 1-3 categories are the MOST important to address.
- Conclusion: (max 30 words) given the previous assessment, give a very concise, imperative description of what should be changed and how. this does not have to adhere strictly to only the categories listed
</reasoning>

# Guidelines

- Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.
- Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.
- Reasoning Before Conclusions**: Encourage reasoning steps before any conclusions are reached. ATTENTION! If the user provides examples where the reasoning happens afterward, REVERSE the order! NEVER START EXAMPLES WITH CONCLUSIONS!
    - Reasoning Order: Call out reasoning portions of the prompt and conclusion parts (specific fields by name). For each, determine the ORDER in which this is done, and whether it needs to be reversed.
    - Conclusion, classifications, or results should ALWAYS appear last.
- Examples: Include high-quality examples if helpful, using placeholders [in brackets] for complex elements.
   - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.
- Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.
- Formatting: Use markdown features for readability. DO NOT USE ``` CODE BLOCKS UNLESS SPECIFICALLY REQUESTED.
- Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.
- Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.
- Output Format: Explicitly the most appropriate output format, in detail. This should include length and syntax (e.g. short sentence, paragraph, JSON, etc.)
    - For tasks outputting well-defined or structured data (classification, JSON, etc.) bias toward outputting a JSON.
    - JSON should never be wrapped in code blocks (```) unless explicitly requested.

The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")

[Concise instruction describing the task - this should be the first line in the prompt, no section header]

[Additional details as needed.]

[Optional sections with headings or bullet points for detailed steps.]

# Steps [optional]

[optional: a detailed breakdown of the steps necessary to accomplish the task]

# Output Format

[Specifically call out how the output should be formatted, be it response length, structure e.g. JSON, markdown, etc]

# Examples [optional]

[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.]
[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! ]

# Notes [optional]

[optional: edge cases, details, and an area to call or repeat out specific important considerations]
[NOTE: you must start with a <reasoning> section. the immediate next token you produce should be <reasoning>]
""".strip()

def generate_prompt(task_or_prompt: str):
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[\
            {\
                "role": "system",\
                "content": META_PROMPT,\
            },\
            {\
                "role": "user",\
                "content": "Task, Goal, or Current Prompt:\n" + task_or_prompt,\
            },\
        ],
    )

    return completion.choices[0].message.content
````

Audio-out

Audio meta-prompt for edits

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
from openai import OpenAI

client = OpenAI()

META_PROMPT = """
Given a current prompt and a change description, produce a detailed system prompt to guide a realtime audio output language model in completing the task effectively.

Your final output will be the full corrected prompt verbatim. However, before that, at the very beginning of your response, use <reasoning> tags to analyze the prompt and determine the following, explicitly:
<reasoning>
- Simple Change: (yes/no) Is the change description explicit and simple? (If so, skip the rest of these questions.)
- Reasoning: (yes/no) Does the current prompt use reasoning, analysis, or chain of thought?
    - Identify: (max 10 words) if so, which section(s) utilize reasoning?
    - Conclusion: (yes/no) is the chain of thought used to determine a conclusion?
    - Ordering: (before/after) is the chain of though located before or after
- Structure: (yes/no) does the input prompt have a well defined structure
- Examples: (yes/no) does the input prompt have few-shot examples
    - Representative: (1-5) if present, how representative are the examples?
- Complexity: (1-5) how complex is the input prompt?
    - Task: (1-5) how complex is the implied task?
    - Necessity: ()
- Specificity: (1-5) how detailed and specific is the prompt? (not to be confused with length)
- Prioritization: (list) what 1-3 categories are the MOST important to address.
- Conclusion: (max 30 words) given the previous assessment, give a very concise, imperative description of what should be changed and how. this does not have to adhere strictly to only the categories listed
</reasoning>

# Guidelines

- Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.
- Tone: Make sure to specifically call out the tone. By default it should be emotive and friendly, and speak quickly to avoid keeping the user just waiting.
- Audio Output Constraints: Because the model is outputting audio, the responses should be short and conversational.
- Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.
- Examples: Include high-quality examples if helpful, using placeholders [in brackets] for complex elements.
   - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.
  - It is very important that any examples included reflect the short, conversational output responses of the model.
Keep the sentences very short by default. Instead of 3 sentences in a row by the assistant, it should be split up with a back and forth with the user instead.
  - By default each sentence should be a few words only (5-20ish words). However, if the user specifically asks for "short" responses, then the examples should truly have 1-10 word responses max.
  - Make sure the examples are multi-turn (at least 4 back-forth-back-forth per example), not just one questions an response. They should reflect an organic conversation.
- Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.
- Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.
- Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.

The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")

[Concise instruction describing the task - this should be the first line in the prompt, no section header]

[Additional details as needed.]

[Optional sections with headings or bullet points for detailed steps.]

# Examples [optional]

[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.]
[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! ]

# Notes [optional]

[optional: edge cases, details, and an area to call or repeat out specific important considerations]
[NOTE: you must start with a <reasoning> section. the immediate next token you produce should be <reasoning>]
""".strip()

def generate_prompt(task_or_prompt: str):
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[\
            {\
                "role": "system",\
                "content": META_PROMPT,\
            },\
            {\
                "role": "user",\
                "content": "Task, Goal, or Current Prompt:\n" + task_or_prompt,\
            },\
        ],
    )

    return completion.choices[0].message.content
```

## Schemas

[Structured Outputs](https://platform.openai.com/guides/structured-outputs) schemas and function schemas are themselves JSON objects, so we leverage Structured Outputs to generate them.
This requires defining a schema for the desired output, which in this case is itself a schema. To do this, we use a self-describing schema – a **meta-schema**.

Because the `parameters` field in a function schema is itself a schema, we use the same meta-schema to generate functions.

### Defining a constrained meta-schema

[Structured Outputs](https://platform.openai.com/guides/structured-outputs) supports two modes: `strict=true` and `strict=false`. Both modes use the same model trained to follow the provided schema, but only "strict mode" guarantees perfect adherence through constrained sampling.

Our goal is to generate schemas for strict mode using strict mode itself. However, the official meta-schemas provided by the [JSON Schema Specification](https://json-schema.org/specification#meta-schemas) rely on features [not currently supported](https://platform.openai.com/docs/guides/structured-outputs#some-type-specific-keywords-are-not-yet-supported) in strict mode. This poses challenges that affect both input and output schemas.

1. **Input schema:** We can't use [unsupported features](https://platform.openai.com/docs/guides/structured-outputs#some-type-specific-keywords-are-not-yet-supported) in the input schema to describe the output schema.
2. **Output schema:** The generated schema must not include [unsupported features](https://platform.openai.com/docs/guides/structured-outputs#some-type-specific-keywords-are-not-yet-supported).

Because we need to generate new keys in the output schema, the input meta-schema must use `additionalProperties`. This means we can't currently use strict mode to generate schemas. However, we still want the generated schema to conform to strict mode constraints.

To overcome this limitation, we define a **pseudo-meta-schema** — a meta-schema that uses features not supported in strict mode to describe only the features that are supported in strict mode. Essentially, this approach steps outside strict mode for the meta-schema definition while still ensuring that the generated schemas adhere to strict mode constraints.

Deep dive

How we designed the pseudo-meta-schema

### Output cleaning

Strict mode guarantees perfect schema adherence. Because we can't use it during generation, however, we need to validate and transform the output after generating it.

After generating a schema, we perform the following steps:

1. **Set `additionalProperties` to `false`** for all objects.
2. **Mark all properties as required**.
3. **For structured output schemas**, wrap them in [`json_schema`](https://platform.openai.com/docs/guides/structured-outputs#how-to-use?context=without_parse) object.
4. **For functions**, wrap them in a [`function`](https://platform.openai.com/docs/guides/function-calling#step-3-pass-your-function-definitions-as-available-tools-to-the-model-along-with-the-messages) object.

The Realtime API [function](https://platform.openai.com/docs/guides/realtime#function-calls) object differs slightly from the Chat Completions API, but uses the same schema.

### Meta-schemas

Each meta-schema has a corresponding prompt which includes few-shot examples. When combined with the reliability of Structured Outputs — even without strict mode — we were able to use `gpt-4o-mini` for schema generation.

Structured output schemaStructured output schemaFunction schemaFunction schema

Structured output schema

Structured output meta-schema

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
from openai import OpenAI
import json

client = OpenAI()

META_SCHEMA = {
  "name": "metaschema",
  "schema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "The name of the schema"
      },
      "type": {
        "type": "string",
        "enum": [\
          "object",\
          "array",\
          "string",\
          "number",\
          "boolean",\
          "null"\
        ]
      },
      "properties": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/$defs/schema_definition"
        }
      },
      "items": {
        "anyOf": [\
          {\
            "$ref": "#/$defs/schema_definition"\
          },\
          {\
            "type": "array",\
            "items": {\
              "$ref": "#/$defs/schema_definition"\
            }\
          }\
        ]
      },
      "required": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "additionalProperties": {
        "type": "boolean"
      }
    },
    "required": [\
      "type"\
    ],
    "additionalProperties": False,
    "if": {
      "properties": {
        "type": {
          "const": "object"
        }
      }
    },
    "then": {
      "required": [\
        "properties"\
      ]
    },
    "$defs": {
      "schema_definition": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [\
              "object",\
              "array",\
              "string",\
              "number",\
              "boolean",\
              "null"\
            ]
          },
          "properties": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/$defs/schema_definition"
            }
          },
          "items": {
            "anyOf": [\
              {\
                "$ref": "#/$defs/schema_definition"\
              },\
              {\
                "type": "array",\
                "items": {\
                  "$ref": "#/$defs/schema_definition"\
                }\
              }\
            ]
          },
          "required": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "additionalProperties": {
            "type": "boolean"
          }
        },
        "required": [\
          "type"\
        ],
        "additionalProperties": False,
        "if": {
          "properties": {
            "type": {
              "const": "object"
            }
          }
        },
        "then": {
          "required": [\
            "properties"\
          ]
        }
      }
    }
  }
}

META_PROMPT = """
# Instructions
Return a valid schema for the described JSON.

You must also make sure:
- all fields in an object are set as required
- I REPEAT, ALL FIELDS MUST BE MARKED AS REQUIRED
- all objects must have additionalProperties set to false
    - because of this, some cases like "attributes" or "metadata" properties that would normally allow additional properties should instead have a fixed set of properties
- all objects must have properties defined
- field order matters. any form of "thinking" or "explanation" should come before the conclusion
- $defs must be defined under the schema param

Notable keywords NOT supported include:
- For strings: minLength, maxLength, pattern, format
- For numbers: minimum, maximum, multipleOf
- For objects: patternProperties, unevaluatedProperties, propertyNames, minProperties, maxProperties
- For arrays: unevaluatedItems, contains, minContains, maxContains, minItems, maxItems, uniqueItems

Other notes:
- definitions and recursion are supported
- only if necessary to include references e.g. "$defs", it must be inside the "schema" object

# Examples
Input: Generate a math reasoning schema with steps and a final answer.
Output: {
    "name": "math_reasoning",
    "type": "object",
    "properties": {
        "steps": {
            "type": "array",
            "description": "A sequence of steps involved in solving the math problem.",
            "items": {
                "type": "object",
                "properties": {
                    "explanation": {
                        "type": "string",
                        "description": "Description of the reasoning or method used in this step."
                    },
                    "output": {
                        "type": "string",
                        "description": "Result or outcome of this specific step."
                    }
                },
                "required": [\
                    "explanation",\
                    "output"\
                ],
                "additionalProperties": false
            }
        },
        "final_answer": {
            "type": "string",
            "description": "The final solution or answer to the math problem."
        }
    },
    "required": [\
        "steps",\
        "final_answer"\
    ],
    "additionalProperties": false
}

Input: Give me a linked list
Output: {
    "name": "linked_list",
    "type": "object",
    "properties": {
        "linked_list": {
            "$ref": "#/$defs/linked_list_node",
            "description": "The head node of the linked list."
        }
    },
    "$defs": {
        "linked_list_node": {
            "type": "object",
            "description": "Defines a node in a singly linked list.",
            "properties": {
                "value": {
                    "type": "number",
                    "description": "The value stored in this node."
                },
                "next": {
                    "anyOf": [\
                        {\
                            "$ref": "#/$defs/linked_list_node"\
                        },\
                        {\
                            "type": "null"\
                        }\
                    ],
                    "description": "Reference to the next node; null if it is the last node."
                }
            },
            "required": [\
                "value",\
                "next"\
            ],
            "additionalProperties": false
        }
    },
    "required": [\
        "linked_list"\
    ],
    "additionalProperties": false
}

Input: Dynamically generated UI
Output: {
    "name": "ui",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "description": "The type of the UI component",
            "enum": [\
                "div",\
                "button",\
                "header",\
                "section",\
                "field",\
                "form"\
            ]
        },
        "label": {
            "type": "string",
            "description": "The label of the UI component, used for buttons or form fields"
        },
        "children": {
            "type": "array",
            "description": "Nested UI components",
            "items": {
                "$ref": "#"
            }
        },
        "attributes": {
            "type": "array",
            "description": "Arbitrary attributes for the UI component, suitable for any element",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The name of the attribute, for example onClick or className"
                    },
                    "value": {
                        "type": "string",
                        "description": "The value of the attribute"
                    }
                },
                "required": [\
                    "name",\
                    "value"\
                ],
                "additionalProperties": false
            }
        }
    },
    "required": [\
        "type",\
        "label",\
        "children",\
        "attributes"\
    ],
    "additionalProperties": false
}
""".strip()

def generate_schema(description: str):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type": "json_schema", "json_schema": META_SCHEMA},
        messages=[\
            {\
                "role": "system",\
                "content": META_PROMPT,\
            },\
            {\
                "role": "user",\
                "content": "Description:\n" + description,\
            },\
        ],
    )

    return json.loads(completion.choices[0].message.content)
```

Function schema

Structured output meta-schema

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
from openai import OpenAI
import json

client = OpenAI()

META_SCHEMA = {
  "name": "function-metaschema",
  "schema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "The name of the function"
      },
      "description": {
        "type": "string",
        "description": "A description of what the function does"
      },
      "parameters": {
        "$ref": "#/$defs/schema_definition",
        "description": "A JSON schema that defines the function's parameters"
      }
    },
    "required": [\
      "name",\
      "description",\
      "parameters"\
    ],
    "additionalProperties": False,
    "$defs": {
      "schema_definition": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [\
              "object",\
              "array",\
              "string",\
              "number",\
              "boolean",\
              "null"\
            ]
          },
          "properties": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/$defs/schema_definition"
            }
          },
          "items": {
            "anyOf": [\
              {\
                "$ref": "#/$defs/schema_definition"\
              },\
              {\
                "type": "array",\
                "items": {\
                  "$ref": "#/$defs/schema_definition"\
                }\
              }\
            ]
          },
          "required": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "additionalProperties": {
            "type": "boolean"
          }
        },
        "required": [\
          "type"\
        ],
        "additionalProperties": False,
        "if": {
          "properties": {
            "type": {
              "const": "object"
            }
          }
        },
        "then": {
          "required": [\
            "properties"\
          ]
        }
      }
    }
  }
}

META_PROMPT = """
# Instructions
Return a valid schema for the described function.

Pay special attention to making sure that "required" and "type" are always at the correct level of nesting. For example, "required" should be at the same level as "properties", not inside it.
Make sure that every property, no matter how short, has a type and description correctly nested inside it.

# Examples
Input: Assign values to NN hyperparameters
Output: {
    "name": "set_hyperparameters",
    "description": "Assign values to NN hyperparameters",
    "parameters": {
        "type": "object",
        "required": [\
            "learning_rate",\
            "epochs"\
        ],
        "properties": {
            "epochs": {
                "type": "number",
                "description": "Number of complete passes through dataset"
            },
            "learning_rate": {
                "type": "number",
                "description": "Speed of model learning"
            }
        }
    }
}

Input: Plans a motion path for the robot
Output: {
    "name": "plan_motion",
    "description": "Plans a motion path for the robot",
    "parameters": {
        "type": "object",
        "required": [\
            "start_position",\
            "end_position"\
        ],
        "properties": {
            "end_position": {
                "type": "object",
                "properties": {
                    "x": {
                        "type": "number",
                        "description": "End X coordinate"
                    },
                    "y": {
                        "type": "number",
                        "description": "End Y coordinate"
                    }
                }
            },
            "obstacles": {
                "type": "array",
                "description": "Array of obstacle coordinates",
                "items": {
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number",
                            "description": "Obstacle X coordinate"
                        },
                        "y": {
                            "type": "number",
                            "description": "Obstacle Y coordinate"
                        }
                    }
                }
            },
            "start_position": {
                "type": "object",
                "properties": {
                    "x": {
                        "type": "number",
                        "description": "Start X coordinate"
                    },
                    "y": {
                        "type": "number",
                        "description": "Start Y coordinate"
                    }
                }
            }
        }
    }
}

Input: Calculates various technical indicators
Output: {
    "name": "technical_indicator",
    "description": "Calculates various technical indicators",
    "parameters": {
        "type": "object",
        "required": [\
            "ticker",\
            "indicators"\
        ],
        "properties": {
            "indicators": {
                "type": "array",
                "description": "List of technical indicators to calculate",
                "items": {
                    "type": "string",
                    "description": "Technical indicator",
                    "enum": [\
                        "RSI",\
                        "MACD",\
                        "Bollinger_Bands",\
                        "Stochastic_Oscillator"\
                    ]
                }
            },
            "period": {
                "type": "number",
                "description": "Time period for the analysis"
            },
            "ticker": {
                "type": "string",
                "description": "Stock ticker symbol"
            }
        }
    }
}
""".strip()

def generate_function_schema(description: str):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type": "json_schema", "json_schema": META_SCHEMA},
        messages=[\
            {\
                "role": "system",\
                "content": META_PROMPT,\
            },\
            {\
                "role": "user",\
                "content": "Description:\n" + description,\
            },\
        ],
    )

    return json.loads(completion.choices[0].message.content)
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_realtime.md
---

---
url: "https://platform.openai.com/docs/guides/realtime"
title: "Realtime API - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Realtime API  Beta

Build low-latency, multi-modal experiences with the Realtime API.

Copy page

The OpenAI Realtime API enables low-latency, multimodal interactions including speech-to-speech conversational experiences and real-time transcription.

This API works with natively multimodal models such as [GPT-4o](https://platform.openai.com/docs/models/gpt-4o-realtime) and [GPT-4o mini](https://platform.openai.com/docs/models/gpt-4o-mini-realtime), offering capabilities such as real-time text and audio processing, function calling, and speech generation, and with the latest transcription models [GPT-4o Transcribe](https://platform.openai.com/docs/models/gpt-4o-transcribe) and [GPT-4o mini Transcribe](https://platform.openai.com/docs/models/gpt-4o-mini-transcribe).

## Get started with the Realtime API

Just getting started with Realtime? Try the new [Agents SDK for TypeScript](https://openai.github.io/openai-agents-js), optimized for building voice agents with Realtime models.

You can connect to the Realtime API in two ways:

- Using [WebRTC](https://platform.openai.com/docs/guides/realtime#connect-with-webrtc), which is ideal for client-side applications (for example, a web app)
- Using [WebSockets](https://platform.openai.com/docs/guides/realtime#connect-with-websockets), which is great for server-to-server applications (from your backend or if you're building a voice agent over phone for example)

Start by exploring examples and partner integrations below, or learn how to connect to the Realtime API using the most relevant method for your use case below.

### Example applications

Check out one of the example applications below to see the Realtime API in action.

[Realtime Console\\
\\
To get started quickly, download and configure the Realtime console demo.\\
See events flowing back and forth, and inspect their contents. Learn how\\
to execute custom logic with function calling.](https://github.com/openai/openai-realtime-console) [Realtime Solar System demo\\
\\
A demo of the Realtime API with the WebRTC integration, navigating the solar system through voice thanks to function calling.](https://github.com/openai/openai-realtime-solar-system) [Twilio Integration Demo\\
\\
A demo combining the Realtime API with Twilio to build an AI calling assistant.](https://github.com/openai/openai-realtime-twilio-demo) [Realtime API Agents Demo\\
\\
A demonstration of handoffs between Realtime API voice agents with reasoning model validation.](https://github.com/openai/openai-realtime-agents)

### Partner integrations

Check out these partner integrations, which use the Realtime API in frontend
applications and telephony use cases.

[LiveKit integration guide\\
\\
How to use the Realtime API with LiveKit's WebRTC infrastructure.](https://docs.livekit.io/agents/openai/overview/) [Twilio integration guide\\
\\
Build Realtime apps using Twilio's powerful voice APIs.](https://www.twilio.com/en-us/blog/twilio-openai-realtime-api-launch-integration) [Agora integration quickstart\\
\\
How to integrate Agora's real-time audio communication capabilities with the Realtime API.](https://docs.agora.io/en/open-ai-integration/get-started/quickstart) [Pipecat integration guide\\
\\
Create voice agents with OpenAI audio models and Pipecat orchestration framework.](https://docs.pipecat.ai/guides/features/openai-audio-models-and-apis) [Stream integration guide\\
\\
Learn how to deploy voice agents in mobile and web applications using Stream's global edge network.](https://getstream.io/video/voice-agents/)

[Client-side tool calling](https://github.com/craigsdennis/talk-to-javascript-openai-workers)

[Built with Cloudflare Workers, an example application showcasing\\
client-side tool calling. Also check out the](https://github.com/craigsdennis/talk-to-javascript-openai-workers) [tutorial on YouTube](https://www.youtube.com/watch?v=TcOytsfva0o).

## Use cases

The most common use case for the Realtime API is to build a real-time, speech-to-speech, conversational experience. This is great for building [voice agents](https://platform.openai.com/docs/guides/voice-agents) and other voice-enabled applications.

The Realtime API can also be used independently for transcription and turn detection use cases. A client can stream audio in and have Realtime API produce streaming transcripts when speech is detected.

Both use-cases benefit from built-in [voice activity detection (VAD)](https://platform.openai.com/docs/guides/realtime-vad) to automatically detect when a user is done speaking. This can be helpful to seamlessly handle conversation turns, or to analyze transcriptions one phrase at a time.

Learn more about these use cases in the dedicated guides.

[Realtime Speech-to-Speech\\
\\
Learn to use the Realtime API for streaming speech-to-speech conversations.](https://platform.openai.com/docs/guides/realtime-conversations) [Realtime Transcription\\
\\
Learn to use the Realtime API for transcription-only use cases.](https://platform.openai.com/docs/guides/realtime-transcription)

Depending on your use case (conversation or transcription), you should initialize a session in different ways.
Use the switcher below to see the details for each case.

## Connect with WebRTC

[WebRTC](https://webrtc.org/) is a powerful set of standard interfaces for building real-time applications. The OpenAI Realtime API supports connecting to realtime models through a WebRTC peer connection. Follow this guide to learn how to configure a WebRTC connection to the Realtime API.

### Overview

In scenarios where you would like to connect to a Realtime model from an insecure client over the network (like a web browser), we recommend using the WebRTC connection method. WebRTC is better equipped to handle variable connection states, and provides a number of convenient APIs for capturing user audio inputs and playing remote audio streams from the model.

Connecting to the Realtime API from the browser should be done with an ephemeral API key, [generated via the OpenAI REST API](https://platform.openai.com/docs/api-reference/realtime-sessions). The process for initializing a WebRTC connection is as follows (assuming a web browser client):

1. A browser makes a request to a developer-controlled server to mint an ephemeral API key.
2. The developer's server uses a [standard API key](https://platform.openai.com/settings/organization/api-keys) to request an ephemeral key from the [OpenAI REST API](https://platform.openai.com/docs/api-reference/realtime-sessions), and returns that new key to the browser. Note that ephemeral keys currently expire one minute after being issued.
3. The browser uses the ephemeral key to authenticate a session directly with the OpenAI Realtime API as a [WebRTC peer connection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection).

![connect to realtime via WebRTC](https://openaidevs.retool.com/api/file/55b47800-9aaf-48b9-90d5-793ab227ddd3)

While it is technically possible to use a [standard API key](https://platform.openai.com/settings/organization/api-keys) to authenticate client-side WebRTC sessions, **this is a dangerous and insecure practice** because it leaks your secret key. Standard API keys grant access to your full OpenAI API account, and should only be used in secure server-side environments. We recommend ephemeral keys in client-side applications whenever possible.

### Connection details

Connecting via WebRTC requires the following connection information:

|     |     |
| --- | --- |
| **URL** | `https://api.openai.com/v1/realtime` |
| **Query Parameters** | **`model`**<br>Realtime [model ID](https://platform.openai.com/docs/models#gpt-4o-realtime) to connect to, like `gpt-4o-realtime-preview-2025-06-03` |
| **Headers** | **`Authorization: Bearer EPHEMERAL_KEY`**<br>Substitute `EPHEMERAL_KEY` with an ephemeral API token - see below for details on how to generate one. |

The following example shows how to initialize a [WebRTC session](https://webrtc.org/getting-started/overview) (including the data channel to send and receive Realtime API events). It assumes you have already fetched an ephemeral API token (example server code for this can be found in the [next section](https://platform.openai.com/docs/guides/realtime#creating-an-ephemeral-token)).

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
async function init() {
  // Get an ephemeral key from your server - see server code below
  const tokenResponse = await fetch("/session");
  const data = await tokenResponse.json();
  const EPHEMERAL_KEY = data.client_secret.value;

  // Create a peer connection
  const pc = new RTCPeerConnection();

  // Set up to play remote audio from the model
  const audioEl = document.createElement("audio");
  audioEl.autoplay = true;
  pc.ontrack = e => audioEl.srcObject = e.streams[0];

  // Add local audio track for microphone input in the browser
  const ms = await navigator.mediaDevices.getUserMedia({
    audio: true
  });
  pc.addTrack(ms.getTracks()[0]);

  // Set up data channel for sending and receiving events
  const dc = pc.createDataChannel("oai-events");
  dc.addEventListener("message", (e) => {
    // Realtime server events appear here!
    console.log(e);
  });

  // Start the session using the Session Description Protocol (SDP)
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  const baseUrl = "https://api.openai.com/v1/realtime";
  const model = "gpt-4o-realtime-preview-2025-06-03";
  const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
    method: "POST",
    body: offer.sdp,
    headers: {
      Authorization: `Bearer ${EPHEMERAL_KEY}`,
      "Content-Type": "application/sdp"
    },
  });

  const answer = {
    type: "answer",
    sdp: await sdpResponse.text(),
  };
  await pc.setRemoteDescription(answer);
}

init();
```

The WebRTC APIs provide rich controls for handling media streams and input devices. For more guidance on building user interfaces on top of WebRTC, [refer to the docs on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).

### Creating an ephemeral token

To create an ephemeral token to use on the client-side, you will need to build a small server-side application (or integrate with an existing one) to make an [OpenAI REST API](https://platform.openai.com/docs/api-reference/realtime-sessions) request for an ephemeral key. You will use a [standard API key](https://platform.openai.com/settings/organization/api-keys) to authenticate this request on your backend server.

Below is an example of a simple Node.js [express](https://expressjs.com/) server which mints an ephemeral API key using the REST API:

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
import express from "express";

const app = express();

// An endpoint which would work with the client code above - it returns
// the contents of a REST API request to this protected endpoint
app.get("/session", async (req, res) => {
  const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-realtime-preview-2025-06-03",
      voice: "verse",
    }),
  });
  const data = await r.json();

  // Send back the JSON we received from the OpenAI REST API
  res.send(data);
});

app.listen(3000);
```

You can create a server endpoint like this one on any platform that can send and receive HTTP requests. Just ensure that **you only use standard OpenAI API keys on the server, not in the browser.**

### Sending and receiving events

To learn how to send and receive events over the WebRTC data channel, refer to the [Realtime conversations guide](https://platform.openai.com/docs/guides/realtime-conversations#handling-audio-with-webrtc).

## Connect with WebSockets

[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) are a broadly supported API for realtime data transfer, and a great choice for connecting to the OpenAI Realtime API in server-to-server applications. For browser and mobile clients, we recommend connecting via [WebRTC](https://platform.openai.com/docs/guides/realtime#connect-with-webrtc).

### Overview

In a server-to-server integration with Realtime, your backend system will connect via WebSocket directly to the Realtime API. You can use a [standard API key](https://platform.openai.com/settings/organization/api-keys) to authenticate this connection, since the token will only be available on your secure backend server.

![connect directly to realtime API](https://openaidevs.retool.com/api/file/464d4334-c467-4862-901b-d0c6847f003a)

WebSocket connections can also be authenticated with an ephemeral client token ( [as shown above in the WebRTC section](https://platform.openai.com/docs/guides/realtime#creating-an-ephemeral-token)) if you choose to connect to the Realtime API via WebSocket on a client device.

Standard OpenAI API tokens **should only be used in secure server-side environments**.

### Connection details

Speech-to-SpeechSpeech-to-SpeechTranscriptionTranscription

Speech-to-Speech

Connecting via WebSocket requires the following connection information:

|     |     |
| --- | --- |
| **URL** | `wss://api.openai.com/v1/realtime` |
| **Query Parameters** | **`model`**<br>Realtime [model ID](https://platform.openai.com/docs/models#gpt-4o-realtime) to connect to, like `gpt-4o-realtime-preview-2025-06-03` |
| **Headers** | **`Authorization: Bearer YOUR_API_KEY`**<br>Substitute `YOUR_API_KEY` with a [standard API key](https://platform.openai.com/settings/organization/api-keys) on the server, or an [ephemeral token](https://platform.openai.com/docs/api-reference/realtime-sessions) on insecure clients (note that WebRTC is recommended for this use case).<br>**`OpenAI-Beta: realtime=v1`**<br>This header is required during the beta period. |

Below are several examples of using these connection details to initialize a WebSocket connection to the Realtime API.

ws module (Node.js)ws module (Node.js)websocket-client (Python)websocket-client (Python)WebSocket (browsers)WebSocket (browsers)

ws module (Node.js)

Connect using the ws module (Node.js)

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
import WebSocket from "ws";

const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17";
const ws = new WebSocket(url, {
  headers: {
    "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
    "OpenAI-Beta": "realtime=v1",
  },
});

ws.on("open", function open() {
  console.log("Connected to server.");
});

ws.on("message", function incoming(message) {
  console.log(JSON.parse(message.toString()));
});
```

websocket-client (Python)

Connect with websocket-client (Python)

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
# example requires websocket-client library:
# pip install websocket-client

import os
import json
import websocket

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17"
headers = [\
    "Authorization: Bearer " + OPENAI_API_KEY,\
    "OpenAI-Beta: realtime=v1"\
]

def on_open(ws):
    print("Connected to server.")

def on_message(ws, message):
    data = json.loads(message)
    print("Received event:", json.dumps(data, indent=2))

ws = websocket.WebSocketApp(
    url,
    header=headers,
    on_open=on_open,
    on_message=on_message,
)

ws.run_forever()
```

WebSocket (browsers)

Connect with standard WebSocket (browsers)

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
/*
Note that in client-side environments like web browsers, we recommend
using WebRTC instead. It is possible, however, to use the standard
WebSocket interface in browser-like environments like Deno and
Cloudflare Workers.
*/

const ws = new WebSocket(
  "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17",
  [\
    "realtime",\
    // Auth\
    "openai-insecure-api-key." + OPENAI_API_KEY,\
    // Optional\
    "openai-organization." + OPENAI_ORG_ID,\
    "openai-project." + OPENAI_PROJECT_ID,\
    // Beta protocol, required\
    "openai-beta.realtime-v1"\
  ]
);

ws.on("open", function open() {
  console.log("Connected to server.");
});

ws.on("message", function incoming(message) {
  console.log(message.data);
});
```

### Sending and receiving events

To learn how to send and receive events over Websockets, refer to the [Realtime conversations guide](https://platform.openai.com/docs/guides/realtime-conversations#handling-audio-with-websockets).

Transcription

Connecting via WebSocket requires the following connection information:

|     |     |
| --- | --- |
| **URL** | `wss://api.openai.com/v1/realtime` |
| **Query Parameters** | **`intent`**<br>The intent of the connection: `transcription` |
| **Headers** | **`Authorization: Bearer YOUR_API_KEY`**<br>Substitute `YOUR_API_KEY` with a [standard API key](https://platform.openai.com/settings/organization/api-keys) on the server, or an [ephemeral token](https://platform.openai.com/docs/api-reference/realtime-sessions) on insecure clients (note that WebRTC is recommended for this use case).<br>**`OpenAI-Beta: realtime=v1`**<br>This header is required during the beta period. |

Below are several examples of using these connection details to initialize a WebSocket connection to the Realtime API.

ws module (Node.js)ws module (Node.js)websocket-client (Python)websocket-client (Python)WebSocket (browsers)WebSocket (browsers)

ws module (Node.js)

Connect using the ws module (Node.js)

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
import WebSocket from "ws";

const url = "wss://api.openai.com/v1/realtime?intent=transcription";
const ws = new WebSocket(url, {
  headers: {
    "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
    "OpenAI-Beta": "realtime=v1",
  },
});

ws.on("open", function open() {
  console.log("Connected to server.");
});

ws.on("message", function incoming(message) {
  console.log(JSON.parse(message.toString()));
});
```

websocket-client (Python)

Connect with websocket-client (Python)

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
import os
import json
import websocket

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

url = "wss://api.openai.com/v1/realtime?intent=transcription"
headers = [\
    "Authorization: Bearer " + OPENAI_API_KEY,\
    "OpenAI-Beta: realtime=v1"\
]

def on_open(ws):
    print("Connected to server.")

def on_message(ws, message):
    data = json.loads(message)
    print("Received event:", json.dumps(data, indent=2))

ws = websocket.WebSocketApp(
    url,
    header=headers,
    on_open=on_open,
    on_message=on_message,
)

ws.run_forever()
```

WebSocket (browsers)

Connect with standard WebSocket (browsers)

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
/*
Note that in client-side environments like web browsers, we recommend
using WebRTC instead. It is possible, however, to use the standard
WebSocket interface in browser-like environments like Deno and
Cloudflare Workers.
*/

const ws = new WebSocket(
  "wss://api.openai.com/v1/realtime?intent=transcription",
  [\
    "realtime",\
    // Auth\
    "openai-insecure-api-key." + OPENAI_API_KEY,\
    // Optional\
    "openai-organization." + OPENAI_ORG_ID,\
    "openai-project." + OPENAI_PROJECT_ID,\
    // Beta protocol, required\
    "openai-beta.realtime-v1"\
  ]
);

ws.on("open", function open() {
  console.log("Connected to server.");
});

ws.on("message", function incoming(message) {
  console.log(message.data);
});
```

### Sending and receiving events

To learn how to send and receive events over Websockets, refer to the [Realtime transcription guide](https://platform.openai.com/docs/guides/realtime-transcription#handling-transcriptions). # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_realtime-conversations.md
---

---

url: "<https://platform.openai.com/docs/guides/realtime-conversations>"
title: "Realtime conversations - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Realtime conversations  Beta

Learn how to manage Realtime speech-to-speech conversations.

Copy page

Once you have connected to the Realtime API through either [WebRTC](https://platform.openai.com/docs/guides/realtime-webrtc) or [WebSocket](https://platform.openai.com/docs/guides/realtime-websocket), you can call a Realtime model (such as [gpt-4o-realtime-preview](https://platform.openai.com/docs/models/gpt-4o-realtime-preview)) to have speech-to-speech conversations. Doing so will require you to **send client events** to initiate actions, and **listen for server events** to respond to actions taken by the Realtime API.

This guide will walk through the event flows required to use model capabilities like audio and text generation and function calling, and how to think about the state of a Realtime Session.

If you do not need to have a conversation with the model, meaning you don't expect any response, you can use the Realtime API in [transcription mode](https://platform.openai.com/docs/guides/realtime-transcription).

## Realtime speech-to-speech sessions

A Realtime Session is a stateful interaction between the model and a connected client. The key components of the session are:

- The **Session** object, which controls the parameters of the interaction, like the model being used, the voice used to generate output, and other configuration.
- A **Conversation**, which represents user input Items and model output Items generated during the current session.
- **Responses**, which are model-generated audio or text Items that are added to the Conversation.

**Input audio buffer and WebSockets**

If you are using WebRTC, much of the media handling required to send and receive audio from the model is assisted by WebRTC APIs.

If you are using WebSockets for audio, you will need to manually interact with the **input audio buffer** by sending audio to the server, sent with JSON events with base64-encoded audio.

All these components together make up a Realtime Session. You will use client events to update the state of the session, and listen for server events to react to state changes within the session.

![diagram realtime state](https://openaidevs.retool.com/api/file/11fe71d2-611e-4a26-a587-881719a90e56)

## Session lifecycle events

After initiating a session via either [WebRTC](https://platform.openai.com/docs/guides/realtime-webrtc) or [WebSockets](https://platform.openai.com/docs/guides/realtime-websockets), the server will send a [`session.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/session/created) event indicating the session is ready. On the client, you can update the current session configuration with the [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) event. Most session properties can be updated at any time, except for the `voice` the model uses for audio output, after the model has responded with audio once during the session. The maximum duration of a Realtime session is **30 minutes**.

The following example shows updating the session with a `session.update` client event. See the [WebRTC](https://platform.openai.com/docs/guides/realtime-webrtc#sending-and-receiving-events) or [WebSocket](https://platform.openai.com/docs/guides/realtime-websocket#sending-and-receiving-events) guide for more on sending client events over these channels.

Update the system instructions used by the model in this session

javascript

```javascript
1
2
3
4
5
6
7
8
9
const event = {
  type: "session.update",
  session: {
    instructions: "Never use the word 'moist' in your responses!"
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
event = {
    "type": "session.update",
    "session": {
        "instructions": "Never use the word 'moist' in your responses!"
    }
}
ws.send(json.dumps(event))
```

When the session has been updated, the server will emit a [`session.updated`](https://platform.openai.com/docs/api-reference/realtime-server-events/session/updated) event with the new state of the session.

| Related client events | Related server events |
| --- | --- |
| [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) | [`session.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/session/created)<br>[`session.updated`](https://platform.openai.com/docs/api-reference/realtime-server-events/session/updated) |

## Text inputs and outputs

To generate text with a Realtime model, you can add text inputs to the current conversation, ask the model to generate a response, and listen for server-sent events indicating the progress of the model's response. In order to generate text, the [session must be configured](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) with the `text` modality (this is true by default).

Create a new text conversation item using the [`conversation.item.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create) client event. This is similar to sending a [user message (prompt) in Chat Completions](https://platform.openai.com/docs/guides/text-generation) in the REST API.

Create a conversation item with user input

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
const event = {
  type: "conversation.item.create",
  item: {
    type: "message",
    role: "user",
    content: [\
      {\
        type: "input_text",\
        text: "What Prince album sold the most copies?",\
      }\
    ]
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
event = {
    "type": "conversation.item.create",
    "item": {
        "type": "message",
        "role": "user",
        "content": [\
            {\
                "type": "input_text",\
                "text": "What Prince album sold the most copies?",\
            }\
        ]
    }
}
ws.send(json.dumps(event))
```

After adding the user message to the conversation, send the [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create) event to initiate a response from the model. If both audio and text are enabled for the current session, the model will respond with both audio and text content. If you'd like to generate text only, you can specify that when sending the `response.create` client event, as shown below.

Generate a text-only response

javascript

```javascript
1
2
3
4
5
6
7
8
9
const event = {
  type: "response.create",
  response: {
    modalities: [ "text" ]
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
event = {
    "type": "response.create",
    "response": {
        "modalities": [ "text" ]
    }
}
ws.send(json.dumps(event))
```

When the response is completely finished, the server will emit the [`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done) event. This event will contain the full text generated by the model, as shown below.

Listen for response.done to see the final results

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
function handleEvent(e) {
  const serverEvent = JSON.parse(e.data);
  if (serverEvent.type === "response.done") {
    console.log(serverEvent.response.output[0]);
  }
}

// Listen for server messages (WebRTC)
dataChannel.addEventListener("message", handleEvent);

// Listen for server messages (WebSocket)
// ws.on("message", handleEvent);
```

```python
1
2
3
4
def on_message(ws, message):
    server_event = json.loads(message)
    if server_event.type == "response.done":
        print(server_event.response.output[0])
```

While the model response is being generated, the server will emit a number of lifecycle events during the process. You can listen for these events, such as [`response.text.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/text/delta), to provide realtime feedback to users as the response is generated. A full listing of the events emitted by there server are found below under **related server events**. They are provided in the rough order of when they are emitted, along with relevant client-side events for text generation.

| Related client events | Related server events |
| --- | --- |
| [`conversation.item.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create)<br>[`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create) | [`conversation.item.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/conversation/item/created)<br>[`response.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/created)<br>[`response.output_item.added`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/output_item/added)<br>[`response.content_part.added`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/content_part/added)<br>[`response.text.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/text/delta)<br>[`response.text.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/text/done)<br>[`response.content_part.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/content_part/done)<br>[`response.output_item.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/output_item/done)<br>[`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done)<br>[`rate_limits.updated`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/rate_limits/updated) |

## Audio inputs and outputs

One of the most powerful features of the Realtime API is voice-to-voice interaction with the model, without an intermediate text-to-speech or speech-to-text step. This enables lower latency for voice interfaces, and gives the model more data to work with around the tone and inflection of voice input.

### Voice options

Realtime sessions can be configured to use one of several built‑in voices when producing audio output. You can set the `voice` on session creation (or on a `response.create`) to control how the model sounds. Current voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, and `verse`. Once the model has emitted audio in a session, the `voice` cannot be modified for that session.

### Handling audio with WebRTC

If you are connecting to the Realtime API using WebRTC, the Realtime API is acting as a [peer connection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) to your client. Audio output from the model is delivered to your client as a [remote media stream](hhttps://developer.mozilla.org/en-US/docs/Web/API/MediaStream). Audio input to the model is collected using audio devices ( [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)), and media streams are added as tracks to to the peer connection.

The example code from the [WebRTC connection guide](https://platform.openai.com/docs/guides/realtime-webrtc) shows a basic example of configuring both local and remote audio using browser APIs:

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
// Create a peer connection
const pc = new RTCPeerConnection();

// Set up to play remote audio from the model
const audioEl = document.createElement("audio");
audioEl.autoplay = true;
pc.ontrack = e => audioEl.srcObject = e.streams[0];

// Add local audio track for microphone input in the browser
const ms = await navigator.mediaDevices.getUserMedia({
  audio: true
});
pc.addTrack(ms.getTracks()[0]);
```

The snippet above enables simple interaction with the Realtime API, but there's much more that can be done. For more examples of different kinds of user interfaces, check out the [WebRTC samples](https://github.com/webrtc/samples) repository. Live demos of these samples can also be [found here](https://webrtc.github.io/samples/).

Using [media captures and streams](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API) in the browser enables you to do things like mute and unmute microphones, select which device to collect input from, and more.

### Client and server events for audio in WebRTC

By default, WebRTC clients don't need to send any client events to the Realtime API before sending audio inputs. Once a local audio track is added to the peer connection, your users can just start talking!

However, WebRTC clients still receive a number of server-sent lifecycle events as audio is moving back and forth between client and server over the peer connection. Examples include:

- When input is sent over the local media track, you will receive [`input_audio_buffer.speech_started`](https://platform.openai.com/docs/api-reference/realtime-server-events/input_audio_buffer/speech_started) events from the server.
- When local audio input stops, you'll receive the [`input_audio_buffer.speech_stopped`](https://platform.openai.com/docs/api-reference/realtime-server-events/input_audio_buffer/speech_started) event.
- You'll receive [delta events for the in-progress audio transcript](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio_transcript/delta).
- You'll receive a [`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done) event when the model has transcribed and completed sending a response.

Manipulating WebRTC APIs for media streams may give you all the control you need. However, it may occasionally be necessary to use lower-level interfaces for audio input and output. Refer to the WebSockets section below for more information and a listing of events required for granular audio input handling.

### Handling audio with WebSockets

When sending and receiving audio over a WebSocket, you will have a bit more work to do in order to send media from the client, and receive media from the server. Below, you'll find a table describing the flow of events during a WebSocket session that are necessary to send and receive audio over the WebSocket.

The events below are given in lifecycle order, though some events (like the `delta` events) may happen concurrently.

| Lifecycle stage | Client events | Server events |
| --- | --- | --- |
| Session initialization | [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) | [`session.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/session/created)<br>[`session.updated`](https://platform.openai.com/docs/api-reference/realtime-server-events/session/updated) |
| User audio input | [`conversation.item.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create)<br>(send whole audio message)<br>[`input_audio_buffer.append`](https://platform.openai.com/docs/api-reference/realtime-client-events/input_audio_buffer/append)<br>(stream audio in chunks)<br>[`input_audio_buffer.commit`](https://platform.openai.com/docs/api-reference/realtime-client-events/input_audio_buffer/commit)<br>(used when VAD is disabled)<br>[`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create)<br>(used when VAD is disabled) | [`input_audio_buffer.speech_started`](https://platform.openai.com/docs/api-reference/realtime-server-events/input_audio_buffer/speech_started)<br>[`input_audio_buffer.speech_stopped`](https://platform.openai.com/docs/api-reference/realtime-server-events/input_audio_buffer/speech_stopped)<br>[`input_audio_buffer.committed`](https://platform.openai.com/docs/api-reference/realtime-server-events/input_audio_buffer/committed) |
| Server audio output | [`input_audio_buffer.clear`](https://platform.openai.com/docs/api-reference/realtime-client-events/input_audio_buffer/clear)<br>(used when VAD is disabled) | [`conversation.item.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/conversation/item/created)<br>[`response.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/created)<br>[`response.output_item.created`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/output_item/created)<br>[`response.content_part.added`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/content_part/added)<br>[`response.audio.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio/delta)<br>[`response.audio_transcript.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio_transcript/delta)<br>[`response.text.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/text/delta)<br>[`response.audio.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio/done)<br>[`response.audio_transcript.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio_transcript/done)<br>[`response.text.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/text/done)<br>[`response.content_part.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/content_part/done)<br>[`response.output_item.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/output_item/done)<br>[`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done)<br>[`rate_limits.updated`](https://platform.openai.com/docs/api-reference/realtime-server-events/rate_limits/updated) |

### Streaming audio input to the server

To stream audio input to the server, you can use the [`input_audio_buffer.append`](https://platform.openai.com/docs/api-reference/realtime-client-events/input_audio_buffer/append) client event. This event requires you to send chunks of **Base64-encoded audio bytes** to the Realtime API over the socket. Each chunk cannot exceed 15 MB in size.

The format of the input chunks can be configured either for the entire session, or per response.

- Session: `session.input_audio_format` in [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update)
- Response: `response.input_audio_format` in [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create)

Append audio input bytes to the conversation

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
import fs from 'fs';
import decodeAudio from 'audio-decode';

// Converts Float32Array of audio data to PCM16 ArrayBuffer
function floatTo16BitPCM(float32Array) {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  let offset = 0;
  for (let i = 0; i < float32Array.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

// Converts a Float32Array to base64-encoded PCM16 data
base64EncodeAudio(float32Array) {
  const arrayBuffer = floatTo16BitPCM(float32Array);
  let binary = '';
  let bytes = new Uint8Array(arrayBuffer);
  const chunkSize = 0x8000; // 32KB chunk size
  for (let i = 0; i < bytes.length; i += chunkSize) {
    let chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary);
}

// Fills the audio buffer with the contents of three files,
// then asks the model to generate a response.
const files = [\
  './path/to/sample1.wav',\
  './path/to/sample2.wav',\
  './path/to/sample3.wav'\
];

for (const filename of files) {
  const audioFile = fs.readFileSync(filename);
  const audioBuffer = await decodeAudio(audioFile);
  const channelData = audioBuffer.getChannelData(0);
  const base64Chunk = base64EncodeAudio(channelData);
  ws.send(JSON.stringify({
    type: 'input_audio_buffer.append',
    audio: base64Chunk
  }));
});

ws.send(JSON.stringify({type: 'input_audio_buffer.commit'}));
ws.send(JSON.stringify({type: 'response.create'}));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
import base64
import json
import struct
import soundfile as sf
from websocket import create_connection

# ... create websocket-client named ws ...

def float_to_16bit_pcm(float32_array):
    clipped = [max(-1.0, min(1.0, x)) for x in float32_array]
    pcm16 = b''.join(struct.pack('<h', int(x * 32767)) for x in clipped)
    return pcm16

def base64_encode_audio(float32_array):
    pcm_bytes = float_to_16bit_pcm(float32_array)
    encoded = base64.b64encode(pcm_bytes).decode('ascii')
    return encoded

files = [\
    './path/to/sample1.wav',\
    './path/to/sample2.wav',\
    './path/to/sample3.wav'\
]

for filename in files:
    data, samplerate = sf.read(filename, dtype='float32')
    channel_data = data[:, 0] if data.ndim > 1 else data
    base64_chunk = base64_encode_audio(channel_data)

    # Send the client event
    event = {
        "type": "input_audio_buffer.append",
        "audio": base64_chunk
    }
    ws.send(json.dumps(event))
```

### Send full audio messages

It is also possible to create conversation messages that are full audio recordings. Use the [`conversation.item.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create) client event to create messages with `input_audio` content.

Create full audio input conversation items

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
const fullAudio = "<a base64-encoded string of audio bytes>";

const event = {
  type: "conversation.item.create",
  item: {
    type: "message",
    role: "user",
    content: [\
      {\
        type: "input_audio",\
        audio: fullAudio,\
      },\
    ],
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
fullAudio = "<a base64-encoded string of audio bytes>"

event = {
    "type": "conversation.item.create",
    "item": {
        "type": "message",
        "role": "user",
        "content": [\
            {\
                "type": "input_audio",\
                "audio": fullAudio,\
            }\
        ],
    },
}

ws.send(json.dumps(event))
```

### Working with audio output from a WebSocket

**To play output audio back on a client device like a web browser, we recommend using WebRTC rather than WebSockets**. WebRTC will be more robust sending media to client devices over uncertain network conditions.

But to work with audio output in server-to-server applications using a WebSocket, you will need to listen for [`response.audio.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio/delta) events containing the Base64-encoded chunks of audio data from the model. You will either need to buffer these chunks and write them out to a file, or maybe immediately stream them to another source like [a phone call with Twilio](https://www.twilio.com/en-us/blog/twilio-openai-realtime-api-launch-integration).

Note that the [`response.audio.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio/done) and [`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done) events won't actually contain audio data in them - just audio content transcriptions. To get the actual bytes, you'll need to listen for the [`response.audio.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/audio/delta) events.

The format of the output chunks can be configured either for the entire session, or per response.

- Session: `session.output_audio_format` in [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update)
- Response: `response.output_audio_format` in [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create)

Listen for response.audio.delta events

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
function handleEvent(e) {
  const serverEvent = JSON.parse(e.data);
  if (serverEvent.type === "response.audio.delta") {
    // Access Base64-encoded audio chunks
    // console.log(serverEvent.delta);
  }
}

// Listen for server messages (WebSocket)
ws.on("message", handleEvent);
```

```python
1
2
3
4
5
def on_message(ws, message):
    server_event = json.loads(message)
    if server_event.type == "response.audio.delta":
        # Access Base64-encoded audio chunks:
        # print(server_event.delta)
```

## Voice activity detection

By default, Realtime sessions have **voice activity detection (VAD)** enabled, which means the API will determine when the user has started or stopped speaking and respond automatically.

Read more about how to configure VAD in our [voice activity detection](https://platform.openai.com/docs/guides/realtime-vad) guide.

### Disable VAD

VAD can be disabled by setting `turn_detection` to `null` with the [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) client event. This can be useful for interfaces where you would like to take granular control over audio input, like [push to talk](https://en.wikipedia.org/wiki/Push-to-talk) interfaces.

When VAD is disabled, the client will have to manually emit some additional client events to trigger audio responses:

- Manually send [`input_audio_buffer.commit`](https://platform.openai.com/docs/api-reference/realtime-client-events/input_audio_buffer/commit), which will create a new user input item for the conversation.
- Manually send [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create) to trigger an audio response from the model.
- Send [`input_audio_buffer.clear`](https://platform.openai.com/docs/api-reference/realtime-client-events/input_audio_buffer/clear) before beginning a new user input.

### Keep VAD, but disable automatic responses

If you would like to keep VAD mode enabled, but would just like to retain the ability to manually decide when a response is generated, you can set `turn_detection.interrupt_response` and `turn_detection.create_response` to `false` with the [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) client event. This will retain all the behavior of VAD but not automatically create new Responses. Clients can trigger these manually with a [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create) event.

This can be useful for moderation or input validation or RAG patterns, where you're comfortable trading a bit more latency in the interaction for control over inputs.

## Create responses outside the default conversation

By default, all responses generated during a session are added to the session's conversation state (the "default conversation"). However, you may want to generate model responses outside the context of the session's default conversation, or have multiple responses generated concurrently. You might also want to have more granular control over which conversation items are considered while the model generates a response (e.g. only the last N number of turns).

Generating "out-of-band" responses which are not added to the default conversation state is possible by setting the `response.conversation` field to the string `none` when creating a response with the [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create) client event.

When creating an out-of-band response, you will probably also want some way to identify which server-sent events pertain to this response. You can provide `metadata` for your model response that will help you identify which response is being generated for this client-sent event.

Create an out-of-band model response

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
const prompt = `
Analyze the conversation so far. If it is related to support, output
"support". If it is related to sales, output "sales".
`;

const event = {
  type: "response.create",
  response: {
    // Setting to "none" indicates the response is out of band
    // and will not be added to the default conversation
    conversation: "none",

    // Set metadata to help identify responses sent back from the model
    metadata: { topic: "classification" },

    // Set any other available response fields
    modalities: [ "text" ],
    instructions: prompt,
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
prompt = """
Analyze the conversation so far. If it is related to support, output
"support". If it is related to sales, output "sales".
"""

event = {
    "type": "response.create",
    "response": {
        # Setting to "none" indicates the response is out of band,
        # and will not be added to the default conversation
        "conversation": "none",

        # Set metadata to help identify responses sent back from the model
        "metadata": { "topic": "classification" },

        # Set any other available response fields
        "modalities": [ "text" ],
        "instructions": prompt,
    },
}

ws.send(json.dumps(event))
```

Now, when you listen for the [`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done) server event, you can identify the result of your out-of-band response.

Create an out-of-band model response

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
function handleEvent(e) {
  const serverEvent = JSON.parse(e.data);
  if (
    serverEvent.type === "response.done" &&
    serverEvent.response.metadata?.topic === "classification"
  ) {
    // this server event pertained to our OOB model response
    console.log(serverEvent.response.output[0]);
  }
}

// Listen for server messages (WebRTC)
dataChannel.addEventListener("message", handleEvent);

// Listen for server messages (WebSocket)
// ws.on("message", handleEvent);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
def on_message(ws, message):
    server_event = json.loads(message)
    topic = ""

    # See if metadata is present
    try:
        topic = server_event.response.metadata.topic
    except AttributeError:
        print("topic not set")

    if server_event.type == "response.done" and topic == "classification":
        # this server event pertained to our OOB model response
        print(server_event.response.output[0])
```

### Create a custom context for responses

You can also construct a custom context that the model will use to generate a response, outside the default/current conversation. This can be done using the `input` array on a [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create) client event. You can use new inputs, or reference existing input items in the conversation by ID.

Listen for out-of-band model response with custom context

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
const event = {
  type: "response.create",
  response: {
    conversation: "none",
    metadata: { topic: "pizza" },
    modalities: [ "text" ],

    // Create a custom input array for this request with whatever context
    // is appropriate
    input: [\
      // potentially include existing conversation items:\
      {\
        type: "item_reference",\
        id: "some_conversation_item_id"\
      },\
      {\
        type: "message",\
        role: "user",\
        content: [\
          {\
            type: "input_text",\
            text: "Is it okay to put pineapple on pizza?",\
          },\
        ],\
      },\
    ],
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
event = {
    "type": "response.create",
    "response": {
        "conversation": "none",
        "metadata": { "topic": "pizza" },
        "modalities": [ "text" ],

        # Create a custom input array for this request with whatever
        # context is appropriate
        "input": [\
            # potentially include existing conversation items:\
            {\
                "type": "item_reference",\
                "id": "some_conversation_item_id"\
            },\
\
            # include new content as well\
            {\
                "type": "message",\
                "role": "user",\
                "content": [\
                    {\
                        "type": "input_text",\
                        "text": "Is it okay to put pineapple on pizza?",\
                    }\
                ],\
            }\
        ],
    },
}

ws.send(json.dumps(event))
```

### Create responses with no context

You can also insert responses into the default conversation, ignoring all other instructions and context. Do this by setting `input` to an empty array.

Insert no-context model responses into the default conversation

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
const prompt = `
Say exactly the following:
I'm a little teapot, short and stout!
This is my handle, this is my spout!
`;

const event = {
  type: "response.create",
  response: {
    // An empty input array removes existing context
    input: [],
    instructions: prompt,
  },
};

// WebRTC data channel and WebSocket both have .send()
dataChannel.send(JSON.stringify(event));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
prompt = """
Say exactly the following:
I'm a little teapot, short and stout!
This is my handle, this is my spout!
"""

event = {
    "type": "response.create",
    "response": {
        # An empty input array removes all prior context
        "input": [],
        "instructions": prompt,
    },
}

ws.send(json.dumps(event))
```

## Function calling

The Realtime models also support **function calling**, which enables you to execute custom code to extend the capabilities of the model. Here's how it works at a high level:

1. When [updating the session](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) or [creating a response](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create), you can specify a list of available functions for the model to call.
2. If when processing input, the model determines it should make a function call, it will add items to the conversation representing arguments to a function call.
3. When the client detects conversation items that contain function call arguments, it will execute custom code using those arguments
4. When the custom code has been executed, the client will create new conversation items that contain the output of the function call, and ask the model to respond.

Let's see how this would work in practice by adding a callable function that will provide today's horoscope to users of the model. We'll show the shape of the client event objects that need to be sent, and what the server will emit in turn.

### Configure callable functions

First, we must give the model a selection of functions it can call based on user input. Available functions can be configured either at the session level, or the individual response level.

- Session: `session.tools` property in [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update)
- Response: `response.tools` property in [`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create)

Here's an example client event payload for a `session.update` that configures a horoscope generation function, that takes a single argument (the astrological sign for which the horoscope should be generated):

[`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update)

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
{
  "type": "session.update",
  "session": {
    "tools": [\
      {\
        "type": "function",\
        "name": "generate_horoscope",\
        "description": "Give today's horoscope for an astrological sign.",\
        "parameters": {\
          "type": "object",\
          "properties": {\
            "sign": {\
              "type": "string",\
              "description": "The sign for the horoscope.",\
              "enum": [\
                "Aries",\
                "Taurus",\
                "Gemini",\
                "Cancer",\
                "Leo",\
                "Virgo",\
                "Libra",\
                "Scorpio",\
                "Sagittarius",\
                "Capricorn",\
                "Aquarius",\
                "Pisces"\
              ]\
            }\
          },\
          "required": ["sign"]\
        }\
      }\
    ],
    "tool_choice": "auto",
  }
}
```

The `description` fields for the function and the parameters help the model choose whether or not to call the function, and what data to include in each parameter. If the model receives input that indicates the user wants their horoscope, it will call this function with a `sign` parameter.

### Detect when the model wants to call a function

Based on inputs to the model, the model may decide to call a function in order to generate the best response. Let's say our application adds the following conversation item and attempts to generate a response:

[`conversation.item.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create)

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
{
  "type": "conversation.item.create",
  "item": {
    "type": "message",
    "role": "user",
    "content": [\
      {\
        "type": "input_text",\
        "text": "What is my horoscope? I am an aquarius."\
      }\
    ]
  }
}
```

Followed by a client event to generate a response:

[`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create)

```json
1
2
3
{
  "type": "response.create"
}
```

Instead of immediately returning a text or audio response, the model will instead generate a response that contains the arguments that should be passed to a function in the developer's application. You can listen for realtime updates to function call arguments using the [`response.function_call_arguments.delta`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/function_call_arguments/delta) server event, but `response.done` will also have the complete data we need to call our function.

[`response.done`](https://platform.openai.com/docs/api-reference/realtime-server-events/response/done)

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
{
  "type": "response.done",
  "event_id": "event_AeqLA8iR6FK20L4XZs2P6",
  "response": {
    "object": "realtime.response",
    "id": "resp_AeqL8XwMUOri9OhcQJIu9",
    "status": "completed",
    "status_details": null,
    "output": [\
      {\
        "object": "realtime.item",\
        "id": "item_AeqL8gmRWDn9bIsUM2T35",\
        "type": "function_call",\
        "status": "completed",\
        "name": "generate_horoscope",\
        "call_id": "call_sHlR7iaFwQ2YQOqm",\
        "arguments": "{\"sign\":\"Aquarius\"}"\
      }\
    ],
    "usage": {
      "total_tokens": 541,
      "input_tokens": 521,
      "output_tokens": 20,
      "input_token_details": {
        "text_tokens": 292,
        "audio_tokens": 229,
        "cached_tokens": 0,
        "cached_tokens_details": { "text_tokens": 0, "audio_tokens": 0 }
      },
      "output_token_details": {
        "text_tokens": 20,
        "audio_tokens": 0
      }
    },
    "metadata": null
  }
}
```

In the JSON emitted by the server, we can detect that the model wants to call a custom function:

| Property | Function calling purpose |
| --- | --- |
| `response.output[0].type` | When set to `function_call`, indicates this response contains arguments for a named function call. |
| `response.output[0].name` | The name of the configured function to call, in this case `generate_horoscope` |
| `response.output[0].arguments` | A JSON string containing arguments to the function. In our case, `"{\"sign\":\"Aquarius\"}"`. |
| `response.output[0].call_id` | A system-generated ID for this function call - **you will need this ID to pass a function call result back to the model**. |

Given this information, we can execute code in our application to generate the horoscope, and then provide that information back to the model so it can generate a response.

### Provide the results of a function call to the model

Upon receiving a response from the model with arguments to a function call, your application can execute code that satisfies the function call. This could be anything you want, like talking to external APIs or accessing databases.

Once you are ready to give the model the results of your custom code, you can create a new conversation item containing the result via the `conversation.item.create` client event.

[`conversation.item.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create)

```json
1
2
3
4
5
6
7
8
{
  "type": "conversation.item.create",
  "item": {
    "type": "function_call_output",
    "call_id": "call_sHlR7iaFwQ2YQOqm",
    "output": "{\"horoscope\": \"You will soon meet a new friend.\"}"
  }
}
```

- The conversation item type is `function_call_output`
- `item.call_id` is the same ID we got back in the `response.done` event above
- `item.output` is a JSON string containing the results of our function call

Once we have added the conversation item containing our function call results, we again emit the `response.create` event from the client. This will trigger a model response using the data from the function call.

[`response.create`](https://platform.openai.com/docs/api-reference/realtime-client-events/response/create)

```json
1
2
3
{
  "type": "response.create"
}
```

## Error handling

The [`error`](https://platform.openai.com/docs/api-reference/realtime-server-events/error) event is emitted by the server whenever an error condition is encountered on the server during the session. Occasionally, these errors can be traced to a client event that was emitted by your application.

Unlike HTTP requests and responses, where a response is implicitly tied to a request from the client, we need to use an `event_id` property on client events to know when one of them has triggered an error condition on the server. This technique is shown in the code below, where the client attempts to emit an unsupported event type.

```javascript
1
2
3
4
5
6
const event = {
  event_id: "my_awesome_event",
  type: "scooby.dooby.doo",
};

dataChannel.send(JSON.stringify(event));
```

This unsuccessful event sent from the client will emit an error event like the following:

```json
1
2
3
4
5
6
7
{
  "type": "invalid_request_error",
  "code": "invalid_value",
  "message": "Invalid value: 'scooby.dooby.doo' ...",
  "param": "type",
  "event_id": "my_awesome_event"
}
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_realtime-transcription.md
---

---
url: "https://platform.openai.com/docs/guides/realtime-transcription"
title: "Realtime transcription - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Realtime transcription  Beta

Learn how to transcribe audio in real-time with the Realtime API.

Copy page

You can use the Realtime API for transcription-only use cases, either with input from a microphone or from a file. For example, you can use it to generate subtitles or transcripts in real-time.
With the transcription-only mode, the model will not generate responses.

If you want the model to produce responses, you can use the Realtime API in [speech-to-speech conversation mode](https://platform.openai.com/docs/guides/realtime-conversations).

## Realtime transcription sessions

To use the Realtime API for transcription, you need to create a transcription session, connecting via [WebSockets](https://platform.openai.com/docs/guides/realtime?use-case=transcription#connect-with-websockets) or [WebRTC](https://platform.openai.com/docs/guides/realtime?use-case=transcription#connect-with-webrtc).

Unlike the regular Realtime API sessions for conversations, the transcription sessions typically don't contain responses from the model.

The transcription session object is also different from regular Realtime API sessions:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
{
  object: "realtime.transcription_session",
  id: string,
  input_audio_format: string,
  input_audio_transcription: [{\
    model: string,\
    prompt: string,\
    language: string\
  }],
  turn_detection: {
    type: "server_vad",
    threshold: float,
    prefix_padding_ms: integer,
    silence_duration_ms: integer,
  } | null,
  input_audio_noise_reduction: {
    type: "near_field" | "far_field"
  },
  include: list[string] | null
}
```

Some of the additional properties transcription sessions support are:

- `input_audio_transcription.model`: The transcription model to use, currently `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1` are supported
- `input_audio_transcription.prompt`: The prompt to use for the transcription, to guide the model (e.g. "Expect words related to technology")
- `input_audio_transcription.language`: The language to use for the transcription, ideally in ISO-639-1 format (e.g. "en", "fr"...) to improve accuracy and latency
- `input_audio_noise_reduction`: The noise reduction configuration to use for the transcription
- `include`: The list of properties to include in the transcription events

Possible values for the input audio format are: `pcm16` (default), `g711_ulaw` and `g711_alaw`.

You can find more information about the transcription session object in the [API reference](https://platform.openai.com/docs/api-reference/realtime-sessions/transcription_session_object).

## Handling transcriptions

When using the Realtime API for transcription, you can listen for the `conversation.item.input_audio_transcription.delta` and `conversation.item.input_audio_transcription.completed` events.

For `whisper-1` the `delta` event will contain full turn transcript, same as `completed` event. For `gpt-4o-transcribe` and `gpt-4o-mini-transcribe` the `delta` event will contain incremental transcripts as they are streamed out from the model.

Here is an example transcription delta event:

```json
1
2
3
4
5
6
7
{
  "event_id": "event_2122",
  "type": "conversation.item.input_audio_transcription.delta",
  "item_id": "item_003",
  "content_index": 0,
  "delta": "Hello,"
}
```

Here is an example transcription completion event:

```json
1
2
3
4
5
6
7
{
  "event_id": "event_2122",
  "type": "conversation.item.input_audio_transcription.completed",
  "item_id": "item_003",
  "content_index": 0,
  "transcript": "Hello, how are you?"
}
```

Note that ordering between completion events from different speech turns is not guaranteed. You should use `item_id` to match these events to the `input_audio_buffer.committed` events and use `input_audio_buffer.committed.previous_item_id` to handle the ordering.

To send audio data to the transcription session, you can use the `input_audio_buffer.append` event.

You have 2 options:

- Use a streaming microphone input
- Stream data from a wav file

## Voice activity detection

The Realtime API supports automatic voice activity detection (VAD). Enabled by default, VAD will control when the input audio buffer is committed, therefore when transcription begins.

Read more about configuring VAD in our [Voice Activity Detection](https://platform.openai.com/docs/guides/realtime-vad) guide.

You can also disable VAD by setting the `turn_detection` property to `null`, and control when to commit the input audio on your end.

## Additional configurations

### Noise reduction

You can use the `input_audio_noise_reduction` property to configure how to handle noise reduction in the audio stream.

The possible values are:

- `near_field`: Use near-field noise reduction.
- `far_field`: Use far-field noise reduction.
- `null`: Disable noise reduction.

The default value is `near_field`, and you can disable noise reduction by setting the property to `null`.

### Using logprobs

You can use the `include` property to include logprobs in the transcription events, using `item.input_audio_transcription.logprobs`.

Those logprobs can be used to calculate the confidence score of the transcription.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
{
  "type": "transcription_session.update",
  "input_audio_format": "pcm16",
  "input_audio_transcription": {
    "model": "gpt-4o-transcribe",
    "prompt": "",
    "language": ""
  },
  "turn_detection": {
    "type": "server_vad",
    "threshold": 0.5,
    "prefix_padding_ms": 300,
    "silence_duration_ms": 500,
  },
  "input_audio_noise_reduction": {
    "type": "near_field"
  },
  "include": [\
    "item.input_audio_transcription.logprobs",\
  ],
}
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_realtime-vad.md
---

---
url: "https://platform.openai.com/docs/guides/realtime-vad"
title: "Voice activity detection (VAD) - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Voice activity detection (VAD)  Beta

Learn about automatic voice activity detection in the Realtime API.

Copy page

Voice activity detection (VAD) is a feature available in the Realtime API allowing to automatically detect when the user has started or stopped speaking.
It is enabled by default in [speech-to-speech](https://platform.openai.com/docs/guides/realtime-conversations) or [transcription](https://platform.openai.com/docs/guides/realtime-transcription) Realtime sessions, but is optional and can be turned off.

## Overview

When VAD is enabled, the audio is chunked automatically and the Realtime API sends events to indicate when the user has started or stopped speaking:

- `input_audio_buffer.speech_started`: The start of a speech turn
- `input_audio_buffer.speech_stopped`: The end of a speech turn

You can use these events to handle speech turns in your application. For example, you can use them to manage conversation state or process transcripts in chunks.

You can use the `turn_detection` property of the `session.update` event to configure how audio is chunked within each speech-to-text sample.

There are two modes for VAD:

- `server_vad`: Automatically chunks the audio based on periods of silence.
- `semantic_vad`: Chunks the audio when the model believes based on the words said by the user that they have completed their utterance.

The default value is `server_vad`.

Read below to learn more about the different modes.

## Server VAD

Server VAD is the default mode for Realtime sessions, and uses periods of silence to automatically chunk the audio.

You can adjust the following properties to fine-tune the VAD settings:

- `threshold`: Activation threshold (0 to 1). A higher threshold will require louder audio to activate the model, and thus might perform better in noisy environments.
- `prefix_padding_ms`: Amount of audio (in milliseconds) to include before the VAD detected speech.
- `silence_duration_ms`: Duration of silence (in milliseconds) to detect speech stop. With shorter values turns will be detected more quickly.

Here is an example VAD configuration:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
{
  "type": "session.update",
  "session": {
    "turn_detection": {
      "type": "server_vad",
      "threshold": 0.5,
      "prefix_padding_ms": 300,
      "silence_duration_ms": 500,
      "create_response": true, // only in conversation mode
      "interrupt_response": true, // only in conversation mode
    }
  }
}
```

## Semantic VAD

Semantic VAD is a new mode that uses a semantic classifier to detect when the user has finished speaking, based on the words they have uttered.
This classifier scores the input audio based on the probability that the user is done speaking. When the probability is low, the model will wait for a timeout, whereas when it is high, there is no need to wait.
For example, user audio that trails off with an "ummm..." would result in a longer timeout than a definitive statement.

With this mode, the model is less likely to interrupt the user during a speech-to-speech conversation, or chunk a transcript before the user is done speaking.

Semantic VAD can be activated by setting `turn_detection.type` to `semantic_vad` in a [`session.update`](https://platform.openai.com/docs/api-reference/realtime-client-events/session/update) event.

It can be configured like this:

```json
1
2
3
4
5
6
7
8
9
10
11
{
  "type": "session.update",
  "session": {
    "turn_detection": {
      "type": "semantic_vad",
      "eagerness": "low" | "medium" | "high" | "auto", // optional
      "create_response": true, // only in conversation mode
      "interrupt_response": true, // only in conversation mode
    }
  }
}
```

The optional `eagerness` property is a way to control how eager the model is to interrupt the user, tuning the maximum wait timeout. In transcription mode, even if the model doesn't reply, it affects how the audio is chunked.

- `auto` is the default value, and is equivalent to `medium`.
- `low` will let the user take their time to speak.
- `high` will chunk the audio as soon as possible.

If you want the model to respond more often in conversation mode, or to return transcription events faster in transcription mode, you can set `eagerness` to `high`.

On the other hand, if you want to let the user speak uninterrupted in conversation mode, or if you would like larger transcript chunks in transcription mode, you can set `eagerness` to `low`. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_reasoning-best-practices.md
---

---

url: "<https://platform.openai.com/docs/guides/reasoning-best-practices>"
title: "Reasoning best practices - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Reasoning best practices

Learn when to use reasoning models and how they compare to GPT models.

Copy page

OpenAI offers two types of models: [reasoning models](https://platform.openai.com/docs/models#o4-mini) (o3 and o4-mini, for example) and [GPT models](https://platform.openai.com/docs/models#gpt-4.1) (like GPT-4.1). These model families behave differently.

This guide covers:

1. The difference between our reasoning and non-reasoning GPT models
2. When to use our reasoning models
3. How to prompt reasoning models effectively

Read more about [reasoning models](https://platform.openai.com/docs/guides/reasoning) and how they work.

## Reasoning models vs. GPT models

Compared to GPT models, our o-series models excel at different tasks and require different prompts. One model family isn't better than the other—they're just different.

We trained our o-series models (“the planners”) to think longer and harder about complex tasks, making them effective at strategizing, planning solutions to complex problems, and making decisions based on large volumes of ambiguous information. These models can also execute tasks with high accuracy and precision, making them ideal for domains that would otherwise require a human expert—like math, science, engineering, financial services, and legal services.

On the other hand, our lower-latency, more cost-efficient GPT models (“the workhorses”) are designed for straightforward execution. An application might use o-series models to plan out the strategy to solve a problem, and use GPT models to execute specific tasks, particularly when speed and cost are more important than perfect accuracy.

### How to choose

What's most important for your use case?

- **Speed and cost** → GPT models are faster and tend to cost less
- **Executing well defined tasks** → GPT models handle explicitly defined tasks well
- **Accuracy and reliability** → o-series models are reliable decision makers
- **Complex problem-solving** → o-series models work through ambiguity and complexity

If speed and cost are the most important factors when completing your tasks _and_ your use case is made up of straightforward, well defined tasks, then our GPT models are the best fit for you. However, if accuracy and reliability are the most important factors _and_ you have a very complex, multistep problem to solve, our o-series models are likely right for you.

Most AI workflows will use a combination of both models—o-series for agentic planning and decision-making, GPT series for task execution.

![GPT models pair well with o-series models](https://cdn.openai.com/API/docs/images/customer-service-example.png)

_Our GPT-4o and GPT-4o mini models triage order details with customer information, identify the order issues and the return policy, and then feed all of these data points into o3-mini to make the final decision about the viability of the return based on policy._

## When to use our reasoning models

Here are a few patterns of successful usage that we’ve observed from customers and internally at OpenAI. This isn't a comprehensive review of all possible use cases but, rather, some practical guidance for testing our o-series models.

[Ready to use a reasoning model? Skip to the quickstart →](https://platform.openai.com/docs/guides/reasoning)

### 1\. Navigating ambiguous tasks

Reasoning models are particularly good at taking limited information or disparate pieces of information and with a simple prompt, understanding the user’s intent and handling any gaps in the instructions. In fact, reasoning models will often ask clarifying questions before making uneducated guesses or attempting to fill information gaps.

> “o1’s reasoning capabilities enable our multi-agent platform Matrix to produce exhaustive, well-formatted, and detailed responses when processing complex documents. For example, o1 enabled Matrix to easily identify baskets available under the restricted payments capacity in a credit agreement, with a basic prompt. No former models are as performant. o1 yielded stronger results on 52% of complex prompts on dense Credit Agreements compared to other models.”
>
> — [Hebbia](https://www.hebbia.com/), AI knowledge platform company for legal and finance

### 2\. Finding a needle in a haystack

When you’re passing large amounts of unstructured information, reasoning models are great at understanding and pulling out only the most relevant information to answer a question.

> "To analyze a company's acquisition, o1 reviewed dozens of company documents—like contracts and leases—to find any tricky conditions that might affect the deal. The model was tasked with flagging key terms and in doing so, identified a crucial "change of control" provision in the footnotes: if the company was sold, it would have to pay off a $75 million loan immediately. o1's extreme attention to detail enables our AI agents to support finance professionals by identifying mission-critical information."
>
> — [Endex](https://endex.ai/), AI financial intelligence platform

### 3\. Finding relationships and nuance across a large dataset

We’ve found that reasoning models are particularly good at reasoning over complex documents that have hundreds of pages of dense, unstructured information—things like legal contracts, financial statements, and insurance claims. The models are particularly strong at drawing parallels between documents and making decisions based on unspoken truths represented in the data.

> “Tax research requires synthesizing multiple documents to produce a final, cogent answer. We swapped GPT-4o for o1 and found that o1 was much better at reasoning over the interplay between documents to reach logical conclusions that were not evident in any one single document. As a result, we saw a 4x improvement in end-to-end performance by switching to o1—incredible.”
>
> — [Blue J](https://www.bluej.com/), AI platform for tax research

Reasoning models are also skilled at reasoning over nuanced policies and rules, and applying them to the task at hand in order to reach a reasonable conclusion.

> "In financial analyses, analysts often tackle complex scenarios around shareholder equity and need to understand the relevant legal intricacies. We tested about 10 models from different providers with a challenging but common question: how does a fundraise affect existing shareholders, especially when they exercise their anti-dilution privileges? This required reasoning through pre- and post-money valuations and dealing with circular dilution loops—something top financial analysts would spend 20-30 minutes to figure out. We found that o1 and o3-mini can do this flawlessly! The models even produced a clear calculation table showing the impact on a $100k shareholder."
>
> – [BlueFlame AI](https://www.blueflame.ai/), AI platform for investment management

### 4\. Multistep agentic planning

Reasoning models are critical to agentic planning and strategy development. We’ve seen success when a reasoning model is used as “the planner,” producing a detailed, multistep solution to a problem and then selecting and assigning the right GPT model (“the doer”) for each step, based on whether high intelligence or low latency is most important.

> “We use o1 as the planner in our agent infrastructure, letting it orchestrate other models in the workflow to complete a multistep task. We find o1 is really good at selecting data types and breaking down big questions into smaller chunks, enabling other models to focus on execution.”
>
> — [Argon AI](https://argon-ai.com/), AI knowledge platform for the pharmaceutical industry

> “o1 powers many of our agentic workflows at Lindy, our AI assistant for work. The model uses function calling to pull information from your calendar or email and then can automatically help you schedule meetings, send emails, and manage other parts of your day-to-day tasks. We switched all of our agentic steps that used to cause issues to o1 and observing our agents becoming basically flawless overnight!”
>
> — [Lindy.AI](http://lindy.ai/), AI assistant for work

### 5\. Visual reasoning

As of today, o1 is the only reasoning model that supports vision capabilities. What sets it apart from GPT-4o is that o1 can grasp even the most challenging visuals, like charts and tables with ambiguous structure or photos with poor image quality.

> “We automate risk and compliance reviews for millions of products online, including luxury jewelry dupes, endangered species, and controlled substances. GPT-4o reached 50% accuracy on our hardest image classification tasks. o1 achieved an impressive 88% accuracy without any modifications to our pipeline.”
>
> — [SafetyKit](https://www.safetykit.com/), AI-powered risk and compliance platform

From our own internal testing, we’ve seen that o1 can identify fixtures and materials from highly detailed architectural drawings to generate a comprehensive bill of materials. One of the most surprising things we observed was that o1 can draw parallels across different images by taking a legend on one page of the architectural drawings and correctly applying it across another page without explicit instructions. Below you can see that, for the 4x4 PT wood posts, o1 recognized that "PT" stands for pressure treated based on the legend.

![o-series models correctly read architectural drawing details](https://cdn.openai.com/API/docs/images/architectural-drawing-example.png)

### 6\. Reviewing, debugging, and improving code quality

Reasoning models are particularly effective at reviewing and improving large amounts of code, often running code reviews in the background given the models’ higher latency.

> “We deliver automated AI Code Reviews on platforms like GitHub and GitLab. While code review process is not inherently latency-sensitive, it does require understanding the code diffs across multiple files. This is where o1 really shines—it's able to reliably detect minor changes to a codebase that could be missed by a human reviewer. We were able to increase product conversion rates by 3x after switching to o-series models.”
>
> — [CodeRabbit](https://www.coderabbit.ai/), AI code review startup

While GPT-4o and GPT-4o mini may be better designed for writing code with their lower latency, we’ve also seen o3-mini spike on code production for use cases that are slightly less latency-sensitive.

> “o3-mini consistently produces high-quality, conclusive code, and very frequently arrives at the correct solution when the problem is well-defined, even for very challenging coding tasks. While other models may only be useful for small-scale, quick code iterations, o3-mini excels at planning and executing complex software design systems.”
>
> — [Windsurf](https://codeium.com/), collaborative agentic AI-powered IDE, built by Codeium

### 7\. Evaluation and benchmarking for other model responses

We’ve also seen reasoning models do well in benchmarking and evaluating other model responses. Data validation is important for ensuring dataset quality and reliability, especially in sensitive fields like healthcare. Traditional validation methods use predefined rules and patterns, but advanced models like o1 and o3-mini can understand context and reason about data for a more flexible and intelligent approach to validation.

> "Many customers use LLM-as-a-judge as part of their eval process in Braintrust. For example, a healthcare company might summarize patient questions using a workhorse model like gpt-4o, then assess the summary quality with o1. One Braintrust customer saw the F1 score of a judge go from 0.12 with 4o to 0.74 with o1! In these use cases, they’ve found o1’s reasoning to be a game-changer in finding nuanced differences in completions, for the hardest and most complex grading tasks."
>
> — [Braintrust](https://www.braintrust.dev/), AI evals platform

## How to prompt reasoning models effectively

These models perform best with straightforward prompts. Some prompt engineering techniques, like instructing the model to "think step by step," may not enhance performance (and can sometimes hinder it). See best practices below, or [get started with prompt examples](https://platform.openai.com/docs/guides/reasoning/advice-on-prompting#prompt-examples).

- **Developer messages are the new system messages**: Starting with `o1-2024-12-17`, reasoning models support developer messages rather than system messages, to align with the chain of command behavior described in the [model spec](https://cdn.openai.com/spec/model-spec-2024-05-08.html#follow-the-chain-of-command).
- **Keep prompts simple and direct**: The models excel at understanding and responding to brief, clear instructions.
- **Avoid chain-of-thought prompts**: Since these models perform reasoning internally, prompting them to "think step by step" or "explain your reasoning" is unnecessary.
- **Use delimiters for clarity**: Use delimiters like markdown, XML tags, and section titles to clearly indicate distinct parts of the input, helping the model interpret different sections appropriately.
- **Try zero shot first, then few shot if needed**: Reasoning models often don't need few-shot examples to produce good results, so try to write prompts without examples first. If you have more complex requirements for your desired output, it may help to include a few examples of inputs and desired outputs in your prompt. Just ensure that the examples align very closely with your prompt instructions, as discrepancies between the two may produce poor results.
- **Provide specific guidelines**: If there are ways you explicitly want to constrain the model's response (like "propose a solution with a budget under $500"), explicitly outline those constraints in the prompt.
- **Be very specific about your end goal**: In your instructions, try to give very specific parameters for a successful response, and encourage the model to keep reasoning and iterating until it matches your success criteria.
- **Markdown formatting**: Starting with `o1-2024-12-17`, reasoning models in the API will avoid generating responses with markdown formatting. To signal to the model when you do want markdown formatting in the response, include the string `Formatting re-enabled` on the first line of your developer message.

## How to keep costs low and accuracy high

With the introduction of `o3` and `o4-mini` models, persisted reasoning items in the Responses API are treated differently. Previously (for `o1`, `o3-mini`, `o1-mini` and `o1-preview`), reasoning items were always ignored in follow‑up API requests, even if they were included in the input items of the requests. With `o3` and `o4-mini`, some reasoning items adjacent to function calls are included in the model’s context to help improve model performance while using the least amount of reasoning tokens.

For the best results with this change, we recommend using the [Responses API](https://platform.openai.com/docs/api-reference/responses) with the `store` parameter set to `true`, and passing in all reasoning items from previous requests (either using `previous_response_id`, or by taking all the output items from an older request and passing them in as input items for a new one). OpenAI will automatically include any relevant reasoning items in the model's context and ignore any irrelevant ones. In more advanced use‑cases where you’d like to manage what goes into the model's context more precisely, we recommend that you at least include all reasoning items between the latest function call and the previous user message. Doing this will ensure that the model doesn’t have to restart its reasoning when you respond to a function call, resulting in better function‑calling performance and lower overall token usage.

If you’re using the Chat Completions API, reasoning items are never included in the context of the model. This is because Chat Completions is a stateless API. This will result in slightly degraded model performance and greater reasoning token usage in complex agentic cases involving many function calls. In instances where complex mutliple function calling is not involved, there should be no degradation in performance regardless of the API being used.

## Other resources

For more inspiration, visit the [OpenAI Cookbook](https://cookbook.openai.com/), which contains example code and links to third-party resources, or learn more about our models and reasoning capabilities:

- [Meet the models](https://platform.openai.com/docs/models)
- [Reasoning guide](https://platform.openai.com/docs/guides/reasoning)
- [How to use reasoning for validation](https://cookbook.openai.com/examples/o1/using_reasoning_for_data_validation)
- [Video course: Reasoning with o1](https://www.deeplearning.ai/short-courses/reasoning-with-o1/)
- [Papers on advanced prompting to improve reasoning](https://cookbook.openai.com/related_resources#papers-on-advanced-prompting-to-improve-reasoning) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_reasoning_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/reasoning?api-mode=responses>"
title: "Reasoning models - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Reasoning models

Explore advanced reasoning and problem-solving models.

Copy page

**Reasoning models** like o3 and o4-mini are LLMs trained with reinforcement learning to perform reasoning. Reasoning models [think before they answer](https://openai.com/index/introducing-openai-o1-preview/), producing a long internal chain of thought before responding to the user. Reasoning models excel in complex problem solving, coding, scientific reasoning, and multi-step planning for agentic workflows. They're also the best models for [Codex CLI](https://github.com/openai/codex), our lightweight coding agent.

As with our GPT series, we provide smaller, faster models ( `o4-mini` and `o3-mini`) that are less expensive per token. The larger models ( `o3` and `o1`) are slower and more expensive but often generate better responses for complex tasks and broad domains.

To ensure safe deployment of our latest reasoning models [`o3`](https://platform.openai.com/docs/models/o3) and [`o4-mini`](https://platform.openai.com/docs/models/o4-mini), some developers may need to complete [organization verification](https://help.openai.com/en/articles/10910291-api-organization-verification) before accessing these models. Get started with verification on the [platform settings page](https://platform.openai.com/settings/organization/general).

## Get started with reasoning

Reasoning models can be used through the [Responses API](https://platform.openai.com/docs/api-reference/responses/create) as seen here.

Using a reasoning model in the Responses API

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = `
Write a bash script that takes a matrix represented as a string with
format '[1,2],[3,4],[5,6]' and prints the transpose in the same format.
`;

const response = await openai.responses.create({
    model: "o4-mini",
    reasoning: { effort: "medium" },
    input: [\
        {\
            role: "user",\
            content: prompt,\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
from openai import OpenAI

client = OpenAI()

prompt = """
Write a bash script that takes a matrix represented as a string with
format '[1,2],[3,4],[5,6]' and prints the transpose in the same format.
"""

response = client.responses.create(
    model="o4-mini",
    reasoning={"effort": "medium"},
    input=[\
        {\
            "role": "user",\
            "content": prompt\
        }\
    ]
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "o4-mini",
    "reasoning": {"effort": "medium"},
    "input": [\
      {\
        "role": "user",\
        "content": "Write a bash script that takes a matrix represented as a string with format \"[1,2],[3,4],[5,6]\" and prints the transpose in the same format."\
      }\
    ]
  }'
```

In the example above, the `reasoning.effort` parameter guides the model on how many reasoning tokens to generate before creating a response to the prompt.

Specify `low`, `medium`, or `high` for this parameter, where `low` favors speed and economical token usage, and `high` favors more complete reasoning. The default value is `medium`, which is a balance between speed and reasoning accuracy.

## How reasoning works

Reasoning models introduce **reasoning tokens** in addition to input and output tokens. The models use these reasoning tokens to "think," breaking down the prompt and considering multiple approaches to generating a response. After generating reasoning tokens, the model produces an answer as visible completion tokens and discards the reasoning tokens from its context.

Here is an example of a multi-step conversation between a user and an assistant. Input and output tokens from each step are carried over, while reasoning tokens are discarded.

![Reasoning tokens aren't retained in context](https://cdn.openai.com/API/docs/images/context-window.png)

While reasoning tokens are not visible via the API, they still occupy space in the model's context window and are billed as [output tokens](https://openai.com/api/pricing).

### Managing the context window

It's important to ensure there's enough space in the context window for reasoning tokens when creating responses. Depending on the problem's complexity, the models may generate anywhere from a few hundred to tens of thousands of reasoning tokens. The exact number of reasoning tokens used is visible in the [usage object of the response object](https://platform.openai.com/docs/api-reference/responses/object), under `output_tokens_details`:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
{
  "usage": {
    "input_tokens": 75,
    "input_tokens_details": {
      "cached_tokens": 0
    },
    "output_tokens": 1186,
    "output_tokens_details": {
      "reasoning_tokens": 1024
    },
    "total_tokens": 1261
  }
}
```

Context window lengths are found on the [model reference page](https://platform.openai.com/docs/models), and will differ across model snapshots.

### Controlling costs

If you're managing context manually across model turns, you can discard older reasoning items _unless_ you're responding to a function call, in which case you must include all reasoning items between the function call and the last user message.

To manage costs with reasoning models, you can limit the total number of tokens the model generates (including both reasoning and final output tokens) by using the [`max_output_tokens`](https://platform.openai.com/docs/api-reference/responses/create#responses-create-max_output_tokens) parameter.

### Allocating space for reasoning

If the generated tokens reach the context window limit or the `max_output_tokens` value you've set, you'll receive a response with a `status` of `incomplete` and `incomplete_details` with `reason` set to `max_output_tokens`. This might occur before any visible output tokens are produced, meaning you could incur costs for input and reasoning tokens without receiving a visible response.

To prevent this, ensure there's sufficient space in the context window or adjust the `max_output_tokens` value to a higher number. OpenAI recommends reserving at least 25,000 tokens for reasoning and outputs when you start experimenting with these models. As you become familiar with the number of reasoning tokens your prompts require, you can adjust this buffer accordingly.

Handling incomplete responses

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = `
Write a bash script that takes a matrix represented as a string with
format '[1,2],[3,4],[5,6]' and prints the transpose in the same format.
`;

const response = await openai.responses.create({
    model: "o4-mini",
    reasoning: { effort: "medium" },
    input: [\
        {\
            role: "user",\
            content: prompt,\
        },\
    ],
    max_output_tokens: 300,
});

if (
    response.status === "incomplete" &&
    response.incomplete_details.reason === "max_output_tokens"
) {
    console.log("Ran out of tokens");
    if (response.output_text?.length > 0) {
        console.log("Partial output:", response.output_text);
    } else {
        console.log("Ran out of tokens during reasoning");
    }
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
from openai import OpenAI

client = OpenAI()

prompt = """
Write a bash script that takes a matrix represented as a string with
format '[1,2],[3,4],[5,6]' and prints the transpose in the same format.
"""

response = client.responses.create(
    model="o4-mini",
    reasoning={"effort": "medium"},
    input=[\
        {\
            "role": "user",\
            "content": prompt\
        }\
    ],
    max_output_tokens=300,
)

if response.status == "incomplete" and response.incomplete_details.reason == "max_output_tokens":
    print("Ran out of tokens")
    if response.output_text:
        print("Partial output:", response.output_text)
    else:
        print("Ran out of tokens during reasoning")
```

### Keeping reasoning items in context

When doing [function calling](https://platform.openai.com/docs/guides/function-calling) with a reasoning model in the [Responses API](https://platform.openai.com/docs/apit-reference/responses), we highly recommend you pass back any reasoning items returned with the last function call (in addition to the output of your function). If the model calls multiple functions consecutively, you should pass back all reasoning items, function call items, and function call output items, since the last `user` message. This allows the model to continue its reasoning process to produce better results in the most token-efficient manner.

The simplest way to do this is to pass in all reasoning items from a previous response into the next one. Our systems will smartly ignore any reasoning items that aren't relevant to your functions, and only retain those in context that are relevant. You can pass reasoning items from previous responses either using the `previous_response_id` parameter, or by manually passing in all the [output](https://platform.openai.com/docs/api-reference/responses/object#responses/object-output) items from a past response into the [input](https://platform.openai.com/docs/api-reference/responses/create#responses-create-input) of a new one.

For advanced use cases where you might be truncating and optimizing parts of the context window before passing them on to the next response, just ensure all items between the last user message and your function call output are passed into the next response untouched. This will ensure that the model has all the context it needs.

Check out [this guide](https://platform.openai.com/docs/guides/conversation-state) to learn more about manual context management.

### Encrypted reasoning items

When using the Responses API in a stateless mode (either with `store` set to `false`, or when an organization is enrolled in zero data retention), you must still retain reasoning items across conversation turns using the techniques described above. But in order to have reasoning items that can be sent with subsequent API requests, each of your API requests must have `reasoning.encrypted_content` in the `include` parameter of API requests, like so:

```bash
1
2
3
4
5
6
7
8
9
10
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "o4-mini",
    "reasoning": {"effort": "medium"},
    "input": "What is the weather like today?",
    "tools": [ ... function config here ... ],
    "include": [ "reasoning.encrypted_content" ]
  }'
```

Any reasoning items in the `output` array will now have an `encrypted_content` property, which will contain encrypted reasoning tokens that can be passed along with future conversation turns.

## Reasoning summaries

While we don't expose the raw reasoning tokens emitted by the model, you can view a summary of the model's reasoning using the the `summary` parameter.

Different models support different reasoning summarizers—for example, our computer use model supports the `concise` summarizer, while o4-mini supports `detailed`. To simply access the most detailed summarizer available, set the value of this parameter to `auto` and view the reasoning summary as part of the `summary` array in the `reasoning` [output](https://platform.openai.com/docs/api-reference/responses/object#responses/object-output) item.

This feature is also supported with streaming, and across the following reasoning models: `o4-mini`, `o3`, `o3-mini` and `o1`.

Before using summarizers with our latest reasoning models, you may need to complete [organization verification](https://help.openai.com/en/articles/10910291-api-organization-verification) to ensure safe deployment. Get started with verification on the [platform settings page](https://platform.openai.com/settings/organization/general).

Generate a summary of the reasoning

```json
1
2
3
4
reasoning: {
  effort: "medium", // unchanged
  summary: "auto" // auto gives you the best available summary (detailed > auto > None)
}
```

## Advice on prompting

There are some differences to consider when prompting a reasoning model. Reasoning models provide better results on tasks with only high-level guidance, while GPT models often benefit from very precise instructions.

- A reasoning model is like a senior co-worker—you can give them a goal to achieve and trust them to work out the details.
- A GPT model is like a junior coworker—they'll perform best with explicit instructions to create a specific output.

For more information on best practices when using reasoning models, [refer to this guide](https://platform.openai.com/docs/guides/reasoning-best-practices).

### Prompt examples

Coding (refactoring)Coding (refactoring)Coding (planning)Coding (planning)STEM ResearchSTEM Research

Coding (refactoring)

OpenAI o-series models are able to implement complex algorithms and produce code. This prompt asks o1 to refactor a React component based on some specific criteria.

Refactor code

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = `
Instructions:
- Given the React component below, change it so that nonfiction books have red
  text.
- Return only the code in your reply
- Do not include any additional formatting, such as markdown code blocks
- For formatting, use four space tabs, and do not allow any lines of code to
  exceed 80 columns

const books = [\
  { title: 'Dune', category: 'fiction', id: 1 },\
  { title: 'Frankenstein', category: 'fiction', id: 2 },\
  { title: 'Moneyball', category: 'nonfiction', id: 3 },\
];

export default function BookList() {
  const listItems = books.map(book =>
    <li>
      {book.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
`.trim();

const response = await openai.responses.create({
    model: "o4-mini",
    input: [\
        {\
            role: "user",\
            content: prompt,\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
from openai import OpenAI

client = OpenAI()

prompt = """
Instructions:
- Given the React component below, change it so that nonfiction books have red
  text.
- Return only the code in your reply
- Do not include any additional formatting, such as markdown code blocks
- For formatting, use four space tabs, and do not allow any lines of code to
  exceed 80 columns

const books = [\
  { title: 'Dune', category: 'fiction', id: 1 },\
  { title: 'Frankenstein', category: 'fiction', id: 2 },\
  { title: 'Moneyball', category: 'nonfiction', id: 3 },\
];

export default function BookList() {
  const listItems = books.map(book =>
    <li>
      {book.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
"""

response = client.responses.create(
    model="o4-mini",
    input=[\
        {\
            "role": "user",\
            "content": prompt,\
        }\
    ]
)

print(response.output_text)
```

Coding (planning)

OpenAI o-series models are also adept in creating multi-step plans. This example prompt asks o1 to create a filesystem structure for a full solution, along with Python code that implements the desired use case.

Plan and create a Python project

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = `
I want to build a Python app that takes user questions and looks
them up in a database where they are mapped to answers. If there
is close match, it retrieves the matched answer. If there isn't,
it asks the user to provide an answer and stores the
question/answer pair in the database. Make a plan for the directory
structure you'll need, then return each file in full. Only supply
your reasoning at the beginning and end, not throughout the code.
`.trim();

const response = await openai.responses.create({
    model: "o4-mini",
    input: [\
        {\
            role: "user",\
            content: prompt,\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
from openai import OpenAI

client = OpenAI()

prompt = """
I want to build a Python app that takes user questions and looks
them up in a database where they are mapped to answers. If there
is close match, it retrieves the matched answer. If there isn't,
it asks the user to provide an answer and stores the
question/answer pair in the database. Make a plan for the directory
structure you'll need, then return each file in full. Only supply
your reasoning at the beginning and end, not throughout the code.
"""

response = client.responses.create(
    model="o4-mini",
    input=[\
        {\
            "role": "user",\
            "content": prompt,\
        }\
    ]
)

print(response.output_text)
```

STEM Research

OpenAI o-series models have shown excellent performance in STEM research. Prompts asking for support of basic research tasks should show strong results.

Ask questions related to basic scientific research

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = `
What are three compounds we should consider investigating to
advance research into new antibiotics? Why should we consider
them?
`;

const response = await openai.responses.create({
    model: "o4-mini",
    input: [\
        {\
            role: "user",\
            content: prompt,\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
from openai import OpenAI

client = OpenAI()

prompt = """
What are three compounds we should consider investigating to
advance research into new antibiotics? Why should we consider
them?
"""

response = client.responses.create(
    model="o4-mini",
    input=[\
        {\
            "role": "user",\
            "content": prompt\
        }\
    ]
)

print(response.output_text)
```

## Use case examples

Some examples of using reasoning models for real-world use cases can be found in [the cookbook](https://cookbook.openai.com/).

[Using reasoning for data validation](https://cookbook.openai.com/examples/o1/using_reasoning_for_data_validation)

[Evaluate a synthetic medical data set for discrepancies.](https://cookbook.openai.com/examples/o1/using_reasoning_for_data_validation)

[Using reasoning for routine generation](https://cookbook.openai.com/examples/o1/using_reasoning_for_routine_generation)

[Use help center articles to generate actions that an agent could perform.](https://cookbook.openai.com/examples/o1/using_reasoning_for_routine_generation)

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_reinforcement-fine-tuning.md
---

---

url: "<https://platform.openai.com/docs/guides/reinforcement-fine-tuning>"
title: "OpenAI Platform"
---

Log in [Sign up](https://platform.openai.com/signup) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_retrieval.md
---

---

url: "<https://platform.openai.com/docs/guides/retrieval>"
title: "Retrieval - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Retrieval

Search your data using semantic similarity.

Copy page

The **Retrieval API** allows you to perform [**semantic search**](https://platform.openai.com/docs/guides/retrieval#semantic-search) over your data, which is a technique that surfaces semantically similar results — even when they match few or no keywords. Retrieval is useful on its own, but is especially powerful when combined with our models to synthesize responses.

![Retrieval depiction](https://cdn.openai.com/API/docs/images/retrieval-depiction.png)

The Retrieval API is powered by [**vector stores**](https://platform.openai.com/docs/guides/retrieval#vector-stores), which serve as indices for your data. This guide will cover how to perform semantic search, and go into the details of vector stores.

## Quickstart

**Create vector store** and upload files.

Create vector store with files

python

```python
1
2
3
4
5
6
7
8
9
10
11
from openai import OpenAI
client = OpenAI()

vector_store = client.vector_stores.create(        # Create vector store
    name="Support FAQ",
)

client.vector_stores.files.upload_and_poll(        # Upload file
    vector_store_id=vector_store.id,
    file=open("customer_policies.txt", "rb")
)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
import OpenAI from "openai";
const client = new OpenAI();

const vector_store = await client.vectorStores.create({   // Create vector store
    name: "Support FAQ",
});

await client.vector_stores.files.upload_and_poll({         // Upload file
    vector_store_id: vector_store.id,
    file: fs.createReadStream("customer_policies.txt"),
});
```

**Send search query** to get relevant results.

Search query

python

```python
1
2
3
4
5
6
user_query = "What is the return policy?"

results = client.vector_stores.search(
    vector_store_id=vector_store.id,
    query=user_query,
)
```

```javascript
1
2
3
4
5
6
const userQuery = "What is the return policy?";

const results = await client.vectorStores.search({
    vector_store_id: vector_store.id,
    query: userQuery,
});
```

To learn how to use the results with our models, check out the [synthesizing responses](https://platform.openai.com/docs/guides/retrieval#synthesizing-responses) section.

## Semantic search

**Semantic search** is a technique that leverages [vector embeddings](https://platform.openai.com/docs/guides/embeddings) to surface semantically relevant results. Importantly, this includes results with few or no shared keywords, which classical search techniques might miss.

For example, let's look at potential results for `"When did we go to the moon?"`:

| Text | Keyword Similarity | Semantic Similarity |
| --- | --- | --- |
| The first lunar landing occured in July of 1969. | 0% | 65% |
| The first man on the moon was Neil Armstrong. | 27% | 43% |
| When I ate the moon cake, it was delicious. | 40% | 28% |

_( [Jaccard](https://en.wikipedia.org/wiki/Jaccard_index) used for keyword, [cosine](https://en.wikipedia.org/wiki/Cosine_similarity) with `text-embedding-3-small` used for semantic.)_

Notice how the most relevant result contains none of the words in the search query. This flexibility makes semantic search a very powerful technique for querying knowledge bases of any size.

Semantic search is powered by [vector stores](https://platform.openai.com/docs/guides/retrieval#vector-stores), which we cover in detail later in the guide. This section will focus on the mechanics of semantic search.

### Perfoming semantic search

You can query a vector store using the `search` function and specifying a `query` in natural language. This will return a list of results, each with the relevant chunks, similarity scores, and file of origin.

Search query

python

```python
1
2
3
4
results = client.vector_stores.search(
    vector_store_id=vector_store.id,
    query="How many woodchucks are allowed per passenger?",
)
```

```javascript
1
2
3
4
const results = await client.vectorStores.search({
    vector_store_id: vector_store.id,
    query: "How many woodchucks are allowed per passenger?",
});
```

Results

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
{
  "object": "vector_store.search_results.page",
  "search_query": "How many woodchucks are allowed per passenger?",
  "data": [\
    {\
      "file_id": "file-12345",\
      "filename": "woodchuck_policy.txt",\
      "score": 0.85,\
      "attributes": {\
        "region": "North America",\
        "author": "Wildlife Department"\
      },\
      "content": [\
        {\
          "type": "text",\
          "text": "According to the latest regulations, each passenger is allowed to carry up to two woodchucks."\
        },\
        {\
          "type": "text",\
          "text": "Ensure that the woodchucks are properly contained during transport."\
        }\
      ]\
    },\
    {\
      "file_id": "file-67890",\
      "filename": "transport_guidelines.txt",\
      "score": 0.75,\
      "attributes": {\
        "region": "North America",\
        "author": "Transport Authority"\
      },\
      "content": [\
        {\
          "type": "text",\
          "text": "Passengers must adhere to the guidelines set forth by the Transport Authority regarding the transport of woodchucks."\
        }\
      ]\
    }\
  ],
  "has_more": false,
  "next_page": null
}
```

A response will contain 10 results maximum by default, but you can set up to 50 using the `max_num_results` param.

### Query rewriting

Certain query styles yield better results, so we've provided a setting to automatically rewrite your queries for optimal performance. Enable this feature by setting `rewrite_query=true` when performing a `search`.

The rewritten query will be available in the result's `search_query` field.

| **Original** | **Rewritten** |
| --- | --- |
| I'd like to know the height of the main office building. | primary office building height |
| What are the safety regulations for transporting hazardous materials? | safety regulations for hazardous materials |
| How do I file a complaint about a service issue? | service complaint filing process |

### Attribute filtering

Attribute filtering helps narrow down results by applying criteria, such as restricting searches to a specific date range. You can define and combine criteria in `attribute_filter` to target files based on their attributes before performing semantic search.

Use **comparison filters** to compare a specific `key` in a file's `attributes` with a given `value`, and **compound filters** to combine multiple filters using `and` and `or`.

Comparison filter

```json
1
2
3
4
5
{
  "type": "eq" | "ne" | "gt" | "gte" | "lt" | "lte",  // comparison operators
  "property": "attributes_property",                  // attributes property
  "value": "target_value"                             // value to compare against
}
```

Compound filter

```json
1
2
3
4
{
  "type": "and" | "or",                                // logical operators
  "filters": [...]
}
```

Below are some example filters.

RegionRegionDate rangeDate rangeFilenamesFilenamesComplexComplex

Region

Filter for a region

```json
1
2
3
4
5
{
  "type": "eq",
  "property": "region",
  "value": "us"
}
```

Date range

Filter for a date range

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
{
  "type": "and",
  "filters": [\
    {\
      "type": "gte",\
      "property": "date",\
      "value": 1704067200  // unix timestamp for 2024-01-01\
    },\
    {\
      "type": "lte",\
      "property": "date",\
      "value": 1710892800  // unix timestamp for 2024-03-20\
    }\
  ]
}
```

Filenames

Filter to match any of a set of filenames

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
{
  "type": "or",
  "filters": [\
    {\
      "type": "eq",\
      "property": "filename",\
      "value": "example.txt"\
    },\
    {\
      "type": "eq",\
      "property": "filename",\
      "value": "example2.txt"\
    }\
  ]
}
```

Complex

Filter for top secret projects with certain names in english

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
{
  "type": "or",
  "filters": [\
    {\
      "type": "and",\
      "filters": [\
        {\
          "type": "or",\
          "filters": [\
            {\
              "type": "eq",\
              "property": "project_code",\
              "value": "X123"\
            },\
            {\
              "type": "eq",\
              "property": "project_code",\
              "value": "X999"\
            }\
          ]\
        },\
        {\
          "type": "eq",\
          "property": "confidentiality",\
          "value": "top_secret"\
        }\
      ]\
    },\
    {\
      "type": "eq",\
      "property": "language",\
      "value": "en"\
    }\
  ]
}
```

### Ranking

If you find that your file search results are not sufficiently relevant, you can adjust the `ranking_options` to improve the quality of responses. This includes specifying a `ranker`, such as `auto` or `default-2024-08-21`, and setting a `score_threshold` between 0.0 and 1.0. A higher `score_threshold` will limit the results to more relevant chunks, though it may exclude some potentially useful ones.

## Vector stores

Vector stores are the containers that power semantic search for the Retrieval API and the Assistants API [file search](https://platform.openai.com/docs/guides/retrieval) tool. When you add a file to a vector store it will be automatically chunked, embedded, and indexed.

Vector stores contain `vector_store_file` objects, which are backed by a `file` object.

| Object type | Description |
| --- | --- |
| `file` | Represents content uploaded through the [Files API](https://platform.openai.com/docs/api-reference/files). Often used with vector stores, but also for fine-tuning and other use cases. |
| `vector_store` | Container for searchable files. |
| `vector_store.file` | Wrapper type specifically representing a `file` that has been chunked and embedded, and has been associated with a `vector_store`. <br>Contains `attributes` map used for filtering. |

### Pricing

You will be charged based on the total storage used across all your vector stores, determined by the size of parsed chunks and their corresponding embeddings.

| Storage | Cost |
| --- | --- |
| Up to 1 GB (across all stores) | Free |
| Beyond 1 GB | $0.10/GB/day |

See [expiration policies](https://platform.openai.com/docs/guides/retrieval#expiration-policies) for options to minimize costs.

### Vector store operations

CreateCreateRetrieveRetrieveUpdateUpdateDeleteDeleteListList

Create

Create vector store

python

```python
1
2
3
4
client.vector_stores.create(
    name="Support FAQ",
    file_ids=["file_123"]
)
```

```javascript
1
2
3
4
await client.vector_stores.create({
    name: "Support FAQ",
    file_ids: ["file_123"]
});
```

Retrieve

Retrieve vector store

python

```python
1
2
3
client.vector_stores.retrieve(
    vector_store_id="vs_123"
)
```

```javascript
1
2
3
await client.vector_stores.retrieve({
    vector_store_id: "vs_123"
});
```

Update

Update vector store

python

```python
1
2
3
4
client.vector_stores.update(
    vector_store_id="vs_123",
    name="Support FAQ Updated"
)
```

```javascript
1
2
3
4
await client.vector_stores.update({
    vector_store_id: "vs_123",
    name: "Support FAQ Updated"
});
```

Delete

Delete vector store

python

```python
1
2
3
client.vector_stores.delete(
    vector_store_id="vs_123"
)
```

```javascript
1
2
3
await client.vector_stores.delete({
    vector_store_id: "vs_123"
});
```

List

List vector stores

python

```python
client.vector_stores.list()
```

```javascript
await client.vector_stores.list();
```

### Vector store file operations

Some operations, like `create` for `vector_store.file`, are asynchronous and may take time to complete — use our helper functions, like `create_and_poll` to block until it is. Otherwise, you may check the status.

CreateCreateUploadUploadRetrieveRetrieveUpdateUpdateDeleteDeleteListList

Create

Create vector store file

python

```python
1
2
3
4
client.vector_stores.files.create_and_poll(
    vector_store_id="vs_123",
    file_id="file_123"
)
```

```javascript
1
2
3
4
await client.vector_stores.files.create_and_poll({
    vector_store_id: "vs_123",
    file_id: "file_123"
});
```

Upload

Upload vector store file

python

```python
1
2
3
4
client.vector_stores.files.upload_and_poll(
    vector_store_id="vs_123",
    file=open("customer_policies.txt", "rb")
)
```

```javascript
1
2
3
4
await client.vector_stores.files.upload_and_poll({
    vector_store_id: "vs_123",
    file: fs.createReadStream("customer_policies.txt"),
});
```

Retrieve

Retrieve vector store file

python

```python
1
2
3
4
client.vector_stores.files.retrieve(
    vector_store_id="vs_123",
    file_id="file_123"
)
```

```javascript
1
2
3
4
await client.vector_stores.files.retrieve({
    vector_store_id: "vs_123",
    file_id: "file_123"
});
```

Update

Update vector store file

python

```python
1
2
3
4
5
client.vector_stores.files.update(
    vector_store_id="vs_123",
    file_id="file_123",
    attributes={"key": "value"}
)
```

```javascript
1
2
3
4
5
await client.vector_stores.files.update({
    vector_store_id: "vs_123",
    file_id: "file_123",
    attributes: { key: "value" }
});
```

Delete

Delete vector store file

python

```python
1
2
3
4
client.vector_stores.files.delete(
    vector_store_id="vs_123",
    file_id="file_123"
)
```

```javascript
1
2
3
4
await client.vector_stores.files.delete({
    vector_store_id: "vs_123",
    file_id: "file_123"
});
```

List

List vector store files

python

```python
1
2
3
client.vector_stores.files.list(
    vector_store_id="vs_123"
)
```

```javascript
1
2
3
await client.vector_stores.files.list({
    vector_store_id: "vs_123"
});
```

### Batch operations

CreateCreateRetrieveRetrieveCancelCancelListList

Create

Batch create operation

python

```python
1
2
3
4
client.vector_stores.file_batches.create_and_poll(
    vector_store_id="vs_123",
    file_ids=["file_123", "file_456"]
)
```

```javascript
1
2
3
4
await client.vector_stores.file_batches.create_and_poll({
    vector_store_id: "vs_123",
    file_ids: ["file_123", "file_456"]
});
```

Retrieve

Batch retrieve operation

python

```python
1
2
3
4
client.vector_stores.file_batches.retrieve(
    vector_store_id="vs_123",
    batch_id="vsfb_123"
)
```

```javascript
1
2
3
4
await client.vector_stores.file_batches.retrieve({
    vector_store_id: "vs_123",
    batch_id: "vsfb_123"
});
```

Cancel

Batch cancel operation

python

```python
1
2
3
4
client.vector_stores.file_batches.cancel(
    vector_store_id="vs_123",
    batch_id="vsfb_123"
)
```

```javascript
1
2
3
4
await client.vector_stores.file_batches.cancel({
    vector_store_id: "vs_123",
    batch_id: "vsfb_123"
});
```

List

Batch list operation

python

```python
1
2
3
client.vector_stores.file_batches.list(
    vector_store_id="vs_123"
)
```

```javascript
1
2
3
await client.vector_stores.file_batches.list({
    vector_store_id: "vs_123"
});
```

### Attributes

Each `vector_store.file` can have associated `attributes`, a dictionary of values that can be referenced when performing [semantic search](https://platform.openai.com/docs/guides/retrieval#semantic-search) with [attribute filtering](https://platform.openai.com/docs/guides/retrieval#attribute-filtering). The dictionary can have at most 16 keys, with a limit of 256 characters each.

Create vector store file with attributes

python

```python
1
2
3
4
5
6
7
8
9
client.vector_stores.files.create(
    vector_store_id="<vector_store_id>",
    file_id="file_123",
    attributes={
        "region": "US",
        "category": "Marketing",
        "date": 1672531200      # Jan 1, 2023
    }
)
```

```javascript
1
2
3
4
5
6
7
8
await client.vector_stores.files.create(<vector_store_id>, {
    file_id: "file_123",
    attributes: {
        region: "US",
        category: "Marketing",
        date: 1672531200, // Jan 1, 2023
    },
});
```

### Expiration policies

You can set an expiration policy on `vector_store` objects with `expires_after`. Once a vector store expires, all associated `vector_store.file` objects will be deleted and you'll no longer be charged for them.

Set expiration policy for vector store

python

```python
1
2
3
4
5
6
7
client.vector_stores.update(
    vector_store_id="vs_123",
    expires_after={
        "anchor": "last_active_at",
        "days": 7
    }
)
```

```javascript
1
2
3
4
5
6
7
await client.vector_stores.update({
    vector_store_id: "vs_123",
    expires_after: {
        anchor: "last_active_at",
        days: 7,
    },
});
```

### Limits

The maximum file size is 512 MB. Each file should contain no more than 5,000,000 tokens per file (computed automatically when you attach a file).

### Chunking

By default, `max_chunk_size_tokens` is set to `800` and `chunk_overlap_tokens` is set to `400`, meaning every file is indexed by being split up into 800-token chunks, with 400-token overlap between consecutive chunks.

You can adjust this by setting [`chunking_strategy`](https://platform.openai.com/docs/api-reference/vector-stores-files/createFile#vector-stores-files-createfile-chunking_strategy) when adding files to the vector store. There are certain limitations to `chunking_strategy`:

- `max_chunk_size_tokens` must be between 100 and 4096 inclusive.
- `chunk_overlap_tokens` must be non-negative and should not exceed `max_chunk_size_tokens / 2`.

Supported file types

_For `text/` MIME types, the encoding must be one of `utf-8`, `utf-16`, or `ascii`._

| File format | MIME type |
| --- | --- |
| `.c` | `text/x-c` |
| `.cpp` | `text/x-c++` |
| `.cs` | `text/x-csharp` |
| `.css` | `text/css` |
| `.doc` | `application/msword` |
| `.docx` | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| `.go` | `text/x-golang` |
| `.html` | `text/html` |
| `.java` | `text/x-java` |
| `.js` | `text/javascript` |
| `.json` | `application/json` |
| `.md` | `text/markdown` |
| `.pdf` | `application/pdf` |
| `.php` | `text/x-php` |
| `.pptx` | `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| `.py` | `text/x-python` |
| `.py` | `text/x-script.python` |
| `.rb` | `text/x-ruby` |
| `.sh` | `application/x-sh` |
| `.tex` | `text/x-tex` |
| `.ts` | `application/typescript` |
| `.txt` | `text/plain` |

## Synthesizing responses

After performing a query you may want to synthesize a response based on the results. You can leverage our models to do so, by supplying the results and original query, to get back a grounded response.

Perform search query to get results

python

```python
1
2
3
4
5
6
7
8
9
10
from openai import OpenAI

client = OpenAI()

user_query = "What is the return policy?"

results = client.vector_stores.search(
    vector_store_id=vector_store.id,
    query=user_query,
)
```

```javascript
1
2
3
4
5
6
7
8
9
const { OpenAI } = require('openai');
const client = new OpenAI();

const userQuery = "What is the return policy?";

const results = await client.vectorStores.search({
    vector_store_id: vector_store.id,
    query: userQuery,
});
```

Synthesize a response based on results

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
formatted_results = format_results(results.data)

'\n'.join('\n'.join(c.text) for c in result.content for result in results.data)

completion = client.chat.completions.create(
    model="gpt-4.1",
    messages=[\
        {\
            "role": "developer",\
            "content": "Produce a concise answer to the query based on the provided sources."\
        },\
        {\
            "role": "user",\
            "content": f"Sources: {formatted_results}\n\nQuery: '{user_query}'"\
        }\
    ],
)

print(completion.choices[0].message.content)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
const formattedResults = formatResults(results.data);
// Join the text content of all results
const textSources = results.data.map(result => result.content.map(c => c.text).join('\n')).join('\n');

const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [\
        {\
            role: "developer",\
            content: "Produce a concise answer to the query based on the provided sources."\
        },\
        {\
            role: "user",\
            content: `Sources: ${formattedResults}\n\nQuery: '${userQuery}'`\
        }\
    ],
});

console.log(completion.choices[0].message.content);
```

```json
"Our return policy allows returns within 30 days of purchase."
```

This uses a sample `format_results` function, which could be implemented like so:

Sample result formatting function

python

```python
1
2
3
4
5
6
7
8
def format_results(results):
    formatted_results = ''
    for result in results.data:
        formatted_result = f"<result file_id='{result.file_id}' file_name='{result.file_name}'>"
        for part in result.content:
            formatted_result += f"<content>{part.text}</content>"
        formatted_results += formatted_result + "</result>"
    return f"<sources>{formatted_results}</sources>"
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
function formatResults(results) {
    let formattedResults = '';
    for (const result of results.data) {
        let formattedResult = `<result file_id='${result.file_id}' file_name='${result.file_name}'>`;
        for (const part of result.content) {
            formattedResult += `<content>${part.text}</content>`;
        }
        formattedResults += formattedResult + "</result>";
    }
    return `<sources>${formattedResults}</sources>`;
}
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_rft-use-cases.md
---

---
url: "https://platform.openai.com/docs/guides/rft-use-cases"
title: "OpenAI Platform"
---

Log in [Sign up](https://platform.openai.com/signup) # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_safety-best-practices.md
---

---
url: "https://platform.openai.com/docs/guides/safety-best-practices"
title: "Safety best practices - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Safety best practices

Implement safety measures like moderation and human oversight.

Copy page

### Use our free Moderation API

OpenAI's [Moderation API](https://platform.openai.com/docs/guides/moderation) is free-to-use and can help reduce the frequency of unsafe content in your completions. Alternatively, you may wish to develop your own content filtration system tailored to your use case.

### Adversarial testing

We recommend “red-teaming” your application to ensure it's robust to adversarial input. Test your product over a wide range of inputs and user behaviors, both a representative set and those reflective of someone trying to ‘break' your application. Does it wander off topic? Can someone easily redirect the feature via prompt injections, e.g. “ignore the previous instructions and do this instead”?

### Human in the loop (HITL)

Wherever possible, we recommend having a human review outputs before they are used in practice. This is especially critical in high-stakes domains, and for code generation. Humans should be aware of the limitations of the system, and have access to any information needed to verify the outputs (for example, if the application summarizes notes, a human should have easy access to the original notes to refer back).

### Prompt engineering

“Prompt engineering” can help constrain the topic and tone of output text. This reduces the chance of producing undesired content, even if a user tries to produce it. Providing additional context to the model (such as by giving a few high-quality examples of desired behavior prior to the new input) can make it easier to steer model outputs in desired directions.

### “Know your customer” (KYC)

Users should generally need to register and log-in to access your service. Linking this service to an existing account, such as a Gmail, LinkedIn, or Facebook log-in, may help, though may not be appropriate for all use-cases. Requiring a credit card or ID card reduces risk further.

### Constrain user input and limit output tokens

Limiting the amount of text a user can input into the prompt helps avoid prompt injection. Limiting the number of output tokens helps reduce the chance of misuse.

Narrowing the ranges of inputs or outputs, especially drawn from trusted sources, reduces the extent of misuse possible within an application.

Allowing user inputs through validated dropdown fields (e.g., a list of movies on Wikipedia) can be more secure than allowing open-ended text inputs.

Returning outputs from a validated set of materials on the backend, where possible, can be safer than returning novel generated content (for instance, routing a customer query to the best-matching existing customer support article, rather than attempting to answer the query from-scratch).

### Allow users to report issues

Users should generally have an easily-available method for reporting improper functionality or other concerns about application behavior (listed email address, ticket submission method, etc). This method should be monitored by a human and responded to as appropriate.

### Understand and communicate limitations

From hallucinating inaccurate information, to offensive outputs, to bias, and much more, language models may not be suitable for every use case without significant modifications. Consider whether the model is fit for your purpose, and evaluate the performance of the API on a wide range of potential inputs in order to identify cases where the API's performance might drop. Consider your customer base and the range of inputs that they will be using, and ensure their expectations are calibrated appropriately.

Safety and security are very important to us at OpenAI.

If in the course of your development you do notice any safety or security issues with the API or anything else related to OpenAI, please submit these through our [Coordinated Vulnerability Disclosure Program](https://openai.com/security/disclosure/).

## End-user IDs

Sending end-user IDs in your requests can be a useful tool to help OpenAI monitor and detect abuse. This allows OpenAI to provide your team with more actionable feedback in the event that we detect any policy violations in your application.

The IDs should be a string that uniquely identifies each user. We recommend hashing their username or email address, in order to avoid sending us any identifying information. If you offer a preview of your product to non-logged in users, you can send a session ID instead.

You can include end-user IDs in your API requests via the `user` parameter as follows:

Example: Providing a user identifer

python

```python
1
2
3
4
5
6
7
8
9
10
11
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
  model="gpt-4o-mini",
  messages=[\
    {"role": "user", "content": "This is a test"}\
  ],
  max_tokens=5,
  user="user_123456"
)
```

```bash
1
2
3
4
5
6
7
8
9
10
11
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "model": "gpt-4o-mini",
  "messages": [\
    {"role": "user", "content": "This is a test"}\
  ],
  "max_tokens": 5,
  "user": "user123456"
}'
``` # Ajoute une ligne vide après chaque fichier

---
File: ./platform.openai.com_docs_guides_speech-to-text.md
---

---
url: "https://platform.openai.com/docs/guides/speech-to-text"
title: "Speech to text - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Speech to text

Learn how to turn audio into text.

Copy page

The Audio API provides two speech to text endpoints:

- `transcriptions`
- `translations`

Historically, both endpoints have been backed by our open source [Whisper model](https://openai.com/blog/whisper/) ( `whisper-1`). The `transcriptions` endpoint now also supports higher quality model snapshots, with limited parameter support:

- `gpt-4o-mini-transcribe`
- `gpt-4o-transcribe`

All endpoints can be used to:

- Transcribe audio into whatever language the audio is in.
- Translate and transcribe the audio into English.

File uploads are currently limited to 25 MB, and the following input file types are supported: `mp3`, `mp4`, `mpeg`, `mpga`, `m4a`, `wav`, and `webm`.

## Quickstart

### Transcriptions

The transcriptions API takes as input the audio file you want to transcribe and the desired output file format for the transcription of the audio. All models support the same set of input formats. On output, `whisper-1` supports a range of formats ( `json`, `text`, `srt`, `verbose_json`, `vtt`); the newer `gpt-4o-mini-transcribe` and `gpt-4o-transcribe` snapshots currently only support `json` or plain `text` responses.

Transcribe audio

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/audio.mp3"),
  model: "gpt-4o-transcribe",
});

console.log(transcription.text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
from openai import OpenAI

client = OpenAI()
audio_file= open("/path/to/file/audio.mp3", "rb")

transcription = client.audio.transcriptions.create(
    model="gpt-4o-transcribe",
    file=audio_file
)

print(transcription.text)
```

```bash
1
2
3
4
5
6
curl --request POST \
  --url https://api.openai.com/v1/audio/transcriptions \
  --header "Authorization: Bearer $OPENAI_API_KEY" \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/file/audio.mp3 \
  --form model=gpt-4o-transcribe
```

By default, the response type will be json with the raw text included.

{
"text": "Imagine the wildest idea that you've ever had, and you're curious about how it might scale to something that's a 100, a 1,000 times bigger.
....
}

The Audio API also allows you to set additional parameters in a request. For example, if you want to set the `response_format` as `text`, your request would look like the following:

Additional options

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/speech.mp3"),
  model: "gpt-4o-transcribe",
  response_format: "text",
});

console.log(transcription.text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
from openai import OpenAI

client = OpenAI()
audio_file = open("/path/to/file/speech.mp3", "rb")

transcription = client.audio.transcriptions.create(
    model="gpt-4o-transcribe",
    file=audio_file,
    response_format="text"
)

print(transcription.text)
```

```bash
1
2
3
4
5
6
7
curl --request POST \
  --url https://api.openai.com/v1/audio/transcriptions \
  --header "Authorization: Bearer $OPENAI_API_KEY" \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/file/speech.mp3 \
  --form model=gpt-4o-transcribe \
  --form response_format=text
```

The [API Reference](https://platform.openai.com/docs/api-reference/audio) includes the full list of available parameters.

The newer `gpt-4o-mini-transcribe` and `gpt-4o-transcribe` models currently have a limited parameter surface: they only support `json` or `text` response formats. Other parameters, such as `timestamp_granularities`, require `verbose_json` output and are therefore only available when using `whisper-1`.

### Translations

The translations API takes as input the audio file in any of the supported languages and transcribes, if necessary, the audio into English. This differs from our /Transcriptions endpoint since the output is not in the original input language and is instead translated to English text. This endpoint supports only the `whisper-1` model.

Translate audio

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const translation = await openai.audio.translations.create({
  file: fs.createReadStream("/path/to/file/german.mp3"),
  model: "whisper-1",
});

console.log(translation.text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
from openai import OpenAI

client = OpenAI()
audio_file = open("/path/to/file/german.mp3", "rb")

translation = client.audio.translations.create(
    model="whisper-1",
    file=audio_file,
)

print(translation.text)
```

```bash
1
2
3
4
5
6
curl --request POST \
  --url https://api.openai.com/v1/audio/translations \
  --header "Authorization: Bearer $OPENAI_API_KEY" \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/file/german.mp3 \
  --form model=whisper-1 \
```

In this case, the inputted audio was german and the outputted text looks like:

Hello, my name is Wolfgang and I come from Germany. Where are you heading today?

We only support translation into English at this time.

## Supported languages

We currently [support the following languages](https://github.com/openai/whisper#available-models-and-languages) through both the `transcriptions` and `translations` endpoint:

Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Marathi, Maori, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, and Welsh.

While the underlying model was trained on 98 languages, we only list the languages that exceeded <50% [word error rate](https://en.wikipedia.org/wiki/Word_error_rate) (WER) which is an industry standard benchmark for speech to text model accuracy. The model will return results for languages not listed above but the quality will be low.

We support some ISO 639-1 and 639-3 language codes for GPT-4o based models. For language codes we don’t have, try prompting for specific languages (i.e., “Output in English”).

## Timestamps

By default, the Transcriptions API will output a transcript of the provided audio in text. The [`timestamp_granularities[]` parameter](https://platform.openai.com/docs/api-reference/audio/createTranscription#audio-createtranscription-timestamp_granularities) enables a more structured and timestamped json output format, with timestamps at the segment, word level, or both. This enables word-level precision for transcripts and video edits, which allows for the removal of specific frames tied to individual words.

Timestamp options

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("audio.mp3"),
  model: "whisper-1",
  response_format: "verbose_json",
  timestamp_granularities: ["word"]
});

console.log(transcription.words);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from openai import OpenAI

client = OpenAI()
audio_file = open("/path/to/file/speech.mp3", "rb")

transcription = client.audio.transcriptions.create(
  file=audio_file,
  model="whisper-1",
  response_format="verbose_json",
  timestamp_granularities=["word"]
)

print(transcription.words)
```

```bash
1
2
3
4
5
6
7
curl https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F file="@/path/to/file/audio.mp3" \
  -F "timestamp_granularities[]=word" \
  -F model="whisper-1" \
  -F response_format="verbose_json"
```

The `timestamp_granularities[]` parameter is only supported for `whisper-1`.

## Longer inputs

By default, the Transcriptions API only supports files that are less than 25 MB. If you have an audio file that is longer than that, you will need to break it up into chunks of 25 MB's or less or used a compressed audio format. To get the best performance, we suggest that you avoid breaking the audio up mid-sentence as this may cause some context to be lost.

One way to handle this is to use the [PyDub open source Python package](https://github.com/jiaaro/pydub) to split the audio:

```python
1
2
3
4
5
6
7
8
9
10
from pydub import AudioSegment

song = AudioSegment.from_mp3("good_morning.mp3")

# PyDub handles time in milliseconds
ten_minutes = 10 * 60 * 1000

first_10_minutes = song[:ten_minutes]

first_10_minutes.export("good_morning_10.mp3", format="mp3")
```

_OpenAI makes no guarantees about the usability or security of 3rd party software like PyDub._

## Prompting

You can use a [prompt](https://platform.openai.com/docs/api-reference/audio/createTranscription#audio/createTranscription-prompt) to improve the quality of the transcripts generated by the Transcriptions API.

Prompting

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/speech.mp3"),
  model: "gpt-4o-transcribe",
  response_format: "text",
  prompt:"The following conversation is a lecture about the recent developments around OpenAI, GPT-4.5 and the future of AI.",
});

console.log(transcription.text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from openai import OpenAI

client = OpenAI()
audio_file = open("/path/to/file/speech.mp3", "rb")

transcription = client.audio.transcriptions.create(
  model="gpt-4o-transcribe",
  file=audio_file,
  response_format="text",
  prompt="The following conversation is a lecture about the recent developments around OpenAI, GPT-4.5 and the future of AI."
)

print(transcription.text)
```

```bash
1
2
3
4
5
6
7
curl --request POST \
  --url https://api.openai.com/v1/audio/transcriptions \
  --header "Authorization: Bearer $OPENAI_API_KEY" \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/file/speech.mp3 \
  --form model=gpt-4o-transcribe \
  --form prompt="The following conversation is a lecture about the recent developments around OpenAI, GPT-4.5 and the future of AI."
```

For `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`, you can use the `prompt` parameter to improve the quality of the transcription by giving the model additional context similarly to how you would prompt other GPT-4o models.

Here are some examples of how prompting can help in different scenarios:

1. Prompts can help correct specific words or acronyms that the model misrecognizes in the audio. For example, the following prompt improves the transcription of the words DALL·E and GPT-3, which were previously written as "GDP 3" and "DALI": "The transcript is about OpenAI which makes technology like DALL·E, GPT-3, and ChatGPT with the hope of one day building an AGI system that benefits all of humanity."
2. To preserve the context of a file that was split into segments, prompt the model with the transcript of the preceding segment. The model uses relevant information from the previous audio, improving transcription accuracy. The `whisper-1` model only considers the final 224 tokens of the prompt and ignores anything earlier. For multilingual inputs, Whisper uses a custom tokenizer. For English-only inputs, it uses the standard GPT-2 tokenizer. Find both tokenizers in the open source [Whisper Python package](https://github.com/openai/whisper/blob/main/whisper/tokenizer.py#L361).
3. Sometimes the model skips punctuation in the transcript. To prevent this, use a simple prompt that includes punctuation: "Hello, welcome to my lecture."
4. The model may also leave out common filler words in the audio. If you want to keep the filler words in your transcript, use a prompt that contains them: "Umm, let me think like, hmm... Okay, here's what I'm, like, thinking."
5. Some languages can be written in different ways, such as simplified or traditional Chinese. The model might not always use the writing style that you want for your transcript by default. You can improve this by using a prompt in your preferred writing style.

For `whisper-1`, the model tries to match the style of the prompt, so it's more likely to use capitalization and punctuation if the prompt does too. However, the current prompting system is more limited than our other language models and provides limited control over the generated text.

You can find more examples on improving your `whisper-1` transcriptions in the [improving reliability](https://platform.openai.com/docs/guides/speech-to-text#improving-reliability) section.

## Streaming transcriptions

There are two ways you can stream your transcription depending on your use case and whether you are trying to transcribe an already completed audio recording or handle an ongoing stream of audio and use OpenAI for turn detection.

### Streaming the transcription of a completed audio recording

If you have an already completed audio recording, either because it's an audio file or you are using your own turn detection (like push-to-talk), you can use our Transcription API with `stream=True` to receive a stream of [transcript events](https://platform.openai.com/docs/api-reference/audio/transcript-text-delta-event) as soon as the model is done transcribing that part of the audio.

Stream transcriptions

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const stream = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/speech.mp3"),
  model: "gpt-4o-mini-transcribe",
  response_format: "text",
  stream: true,
});

for await (const event of stream) {
  console.log(event);
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
from openai import OpenAI

client = OpenAI()
audio_file = open("/path/to/file/speech.mp3", "rb")

stream = client.audio.transcriptions.create(
  model="gpt-4o-mini-transcribe",
  file=audio_file,
  response_format="text",
  stream=True
)

for event in stream:
  print(event)
```

```bash
1
2
3
4
5
6
7
curl --request POST \
  --url https://api.openai.com/v1/audio/transcriptions \
  --header "Authorization: Bearer $OPENAI_API_KEY" \
  --header 'Content-Type: multipart/form-data' \
  --form file=@example.wav \
  --form model=whisper-1 \
  --form stream=True
```

You will receive a stream of `transcript.text.delta` events as soon as the model is done transcribing that part of the audio, followed by a `transcript.text.done` event when the transcription is complete that includes the full transcript.

Additionally, you can use the `include[]` parameter to include `logprobs` in the response to get the log probabilities of the tokens in the transcription. These can be helpful to determine how confident the model is in the transcription of that particular part of the transcript.

Streamed transcription is not supported in `whisper-1`.

### Streaming the transcription of an ongoing audio recording

In the Realtime API, you can stream the transcription of an ongoing audio recording. To start a streaming session with the Realtime API, create a WebSocket connection with the following URL:

```text
wss://api.openai.com/v1/realtime?intent=transcription
```

Below is an example payload for setting up a transcription session:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
{
  "type": "transcription_session.update",
  "input_audio_format": "pcm16",
  "input_audio_transcription": {
    "model": "gpt-4o-transcribe",
    "prompt": "",
    "language": ""
  },
  "turn_detection": {
    "type": "server_vad",
    "threshold": 0.5,
    "prefix_padding_ms": 300,
    "silence_duration_ms": 500,
  },
  "input_audio_noise_reduction": {
    "type": "near_field"
  },
  "include": [\
    "item.input_audio_transcription.logprobs"\
  ]
}
```

To stream audio data to the API, append audio buffers:

```json
1
2
3
4
{
  "type": "input_audio_buffer.append",
  "audio": "Base64EncodedAudioData"
}
```

When in VAD mode, the API will respond with `input_audio_buffer.committed` every time a chunk of speech has been detected. Use `input_audio_buffer.committed.item_id` and `input_audio_buffer.committed.previous_item_id` to enforce the ordering.

The API responds with transcription events indicating speech start, stop, and completed transcriptions.

The primary resource used by the streaming ASR API is the `TranscriptionSession`:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
{
  "object": "realtime.transcription_session",
  "id": "string",
  "input_audio_format": "pcm16",
  "input_audio_transcription": [{\
    "model": "whisper-1" | "gpt-4o-transcribe" | "gpt-4o-mini-transcribe",\
    "prompt": "string",\
    "language": "string"\
  }],
  "turn_detection": {
    "type": "server_vad",
    "threshold": "float",
    "prefix_padding_ms": "integer",
    "silence_duration_ms": "integer",
  } | null,
  "input_audio_noise_reduction": {
    "type": "near_field" | "far_field"
  },
  "include": ["string"]
}
```

Authenticate directly through the WebSocket connection using your API key or an ephemeral token obtained from:

```text
POST /v1/realtime/transcription_sessions
```

This endpoint returns an ephemeral token ( `client_secret`) to securely authenticate WebSocket connections.

## Improving reliability

One of the most common challenges faced when using Whisper is the model often does not recognize uncommon words or acronyms. Here are some different techniques to improve the reliability of Whisper in these cases:

Using the prompt parameter

The first method involves using the optional prompt parameter to pass a dictionary of the correct spellings.

Because it wasn't trained with instruction-following techniques, Whisper operates more like a base GPT model. Keep in mind that Whisper only considers the first 224 tokens of the prompt.

Prompt parameter

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/speech.mp3"),
  model: "whisper-1",
  response_format: "text",
  prompt:"ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array, OrbitalLink Seven, DigiFractal Matrix, PULSE, RAPT, B.R.I.C.K., Q.U.A.R.T.Z., F.L.I.N.T.",
});

console.log(transcription.text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from openai import OpenAI

client = OpenAI()
audio_file = open("/path/to/file/speech.mp3", "rb")

transcription = client.audio.transcriptions.create(
  model="whisper-1",
  file=audio_file,
  response_format="text",
  prompt="ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array, OrbitalLink Seven, DigiFractal Matrix, PULSE, RAPT, B.R.I.C.K., Q.U.A.R.T.Z., F.L.I.N.T."
)

print(transcription.text)
```

```bash
1
2
3
4
5
6
7
curl --request POST \
  --url https://api.openai.com/v1/audio/transcriptions \
  --header "Authorization: Bearer $OPENAI_API_KEY" \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/file/speech.mp3 \
  --form model=whisper-1 \
  --form prompt="ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array, OrbitalLink Seven, DigiFractal Matrix, PULSE, RAPT, B.R.I.C.K., Q.U.A.R.T.Z., F.L.I.N.T."
```

While it increases reliability, this technique is limited to 224 tokens, so your list of SKUs needs to be relatively small for this to be a scalable solution.

Post-processing with GPT-4

The second method involves a post-processing step using GPT-4 or GPT-3.5-Turbo.

We start by providing instructions for GPT-4 through the `system_prompt` variable. Similar to what we did with the prompt parameter earlier, we can define our company and product names.

Post-processing

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
const systemPrompt = `
You are a helpful assistant for the company ZyntriQix. Your task is
to correct any spelling discrepancies in the transcribed text. Make
sure that the names of the following products are spelled correctly:
ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array,
OrbitalLink Seven, DigiFractal Matrix, PULSE, RAPT, B.R.I.C.K.,
Q.U.A.R.T.Z., F.L.I.N.T. Only add necessary punctuation such as
periods, commas, and capitalization, and use only the context provided.
`;

const transcript = await transcribe(audioFile);
const completion = await openai.chat.completions.create({
model: "gpt-4.1",
temperature: temperature,
messages: [\
  {\
    role: "system",\
    content: systemPrompt\
  },\
  {\
    role: "user",\
    content: transcript\
  }\
],
store: true,
});

console.log(completion.choices[0].message.content);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
system_prompt = """
You are a helpful assistant for the company ZyntriQix. Your task is to correct
any spelling discrepancies in the transcribed text. Make sure that the names of
the following products are spelled correctly: ZyntriQix, Digique Plus,
CynapseFive, VortiQore V8, EchoNix Array, OrbitalLink Seven, DigiFractal
Matrix, PULSE, RAPT, B.R.I.C.K., Q.U.A.R.T.Z., F.L.I.N.T. Only add necessary
punctuation such as periods, commas, and capitalization, and use only the
context provided.
"""

def generate_corrected_transcript(temperature, system_prompt, audio_file):
  response = client.chat.completions.create(
      model="gpt-4.1",
      temperature=temperature,
      messages=[\
          {\
              "role": "system",\
              "content": system_prompt\
          },\
          {\
              "role": "user",\
              "content": transcribe(audio_file, "")\
          }\
      ]
  )
  return completion.choices[0].message.content
corrected_text = generate_corrected_transcript(
  0, system_prompt, fake_company_filepath
)
```

If you try this on your own audio file, you'll see that GPT-4 corrects many misspellings in the transcript. Due to its larger context window, this method might be more scalable than using Whisper's prompt parameter. It's also more reliable, as GPT-4 can be instructed and guided in ways that aren't possible with Whisper due to its lack of instruction following. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_streaming-responses_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/streaming-responses?api-mode=responses>"
title: "Streaming API responses - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Streaming API responses

Learn how to stream model responses from the OpenAI API using server-sent events.

Copy page

By default, when you make a request to the OpenAI API, we generate the model's entire output before sending it back in a single HTTP response. When generating long outputs, waiting for a response can take time. Streaming responses lets you start printing or processing the beginning of the model's output while it continues generating the full response.

## Enable streaming

To start streaming responses, set `stream=True` in your request to the Responses endpoint:

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
import { OpenAI } from "openai";
const client = new OpenAI();

const stream = await client.responses.create({
    model: "gpt-4.1",
    input: [\
        {\
            role: "user",\
            content: "Say 'double bubble bath' ten times fast.",\
        },\
    ],
    stream: true,
});

for await (const event of stream) {
    console.log(event);
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
from openai import OpenAI
client = OpenAI()

stream = client.responses.create(
    model="gpt-4.1",
    input=[\
        {\
            "role": "user",\
            "content": "Say 'double bubble bath' ten times fast.",\
        },\
    ],
    stream=True,
)

for event in stream:
    print(event)
```

The Responses API uses semantic events for streaming. Each event is typed with a predefined schema, so you can listen for events you care about.

For a full list of event types, see the [API reference for streaming](https://platform.openai.com/docs/api-reference/responses-streaming). Here are a few examples:

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
type StreamingEvent =
 | ResponseCreatedEvent
 | ResponseInProgressEvent
 | ResponseFailedEvent
 | ResponseCompletedEvent
 | ResponseOutputItemAdded
 | ResponseOutputItemDone
 | ResponseContentPartAdded
 | ResponseContentPartDone
 | ResponseOutputTextDelta
 | ResponseOutputTextAnnotationAdded
 | ResponseTextDone
 | ResponseRefusalDelta
 | ResponseRefusalDone
 | ResponseFunctionCallArgumentsDelta
 | ResponseFunctionCallArgumentsDone
 | ResponseFileSearchCallInProgress
 | ResponseFileSearchCallSearching
 | ResponseFileSearchCallCompleted
 | ResponseCodeInterpreterInProgress
 | ResponseCodeInterpreterCallCodeDelta
 | ResponseCodeInterpreterCallCodeDone
 | ResponseCodeInterpreterCallIntepreting
 | ResponseCodeInterpreterCallCompleted
 | Error
```

## Read the responses

If you're using our SDK, every event is a typed instance. You can also identity individual events using the `type` property of the event.

Some key lifecycle events are emitted only once, while others are emitted multiple times as the response is generated. Common events to listen for when streaming text are:

```text
1
2
3
4
- `response.created`
- `response.output_text.delta`
- `response.completed`
- `error`
```

For a full list of events you can listen for, see the [API reference for streaming](https://platform.openai.com/docs/api-reference/responses-streaming).

## Advanced use cases

For more advanced use cases, like streaming tool calls, check out the following dedicated guides:

- [Streaming function calls](https://platform.openai.com/docs/guides/function-calling#streaming)
- [Streaming structured output](https://platform.openai.com/docs/guides/structured-outputs#streaming)

## Moderation risk

Note that streaming the model's output in a production application makes it more difficult to moderate the content of the completions, as partial completions may be more difficult to evaluate. This may have implications for approved usage.

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_structured-outputs_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses>"
title: "Structured Outputs - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Structured Outputs

Ensure responses adhere to a JSON schema.

Copy page

## Try it out

Try it out in the [Playground](https://platform.openai.com/playground) or generate a ready-to-use schema definition to experiment with structured outputs.

Generate

## Introduction

JSON is one of the most widely used formats in the world for applications to exchange data.

Structured Outputs is a feature that ensures the model will always generate responses that adhere to your supplied [JSON Schema](https://json-schema.org/overview/what-is-jsonschema), so you don't need to worry about the model omitting a required key, or hallucinating an invalid enum value.

Some benefits of Structured Outputs include:

1. **Reliable type-safety:** No need to validate or retry incorrectly formatted responses
2. **Explicit refusals:** Safety-based model refusals are now programmatically detectable
3. **Simpler prompting:** No need for strongly worded prompts to achieve consistent formatting

In addition to supporting JSON Schema in the REST API, the OpenAI SDKs for [Python](https://github.com/openai/openai-python/blob/main/helpers.md#structured-outputs-parsing-helpers) and [JavaScript](https://github.com/openai/openai-node/blob/master/helpers.md#structured-outputs-parsing-helpers) also make it easy to define object schemas using [Pydantic](https://docs.pydantic.dev/latest/) and [Zod](https://zod.dev/) respectively. Below, you can see how to extract information from unstructured text that conforms to a schema defined in code.

Getting a structured response

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const CalendarEvent = z.object({
  name: z.string(),
  date: z.string(),
  participants: z.array(z.string()),
});

const response = await openai.responses.parse({
  model: "gpt-4o-2024-08-06",
  input: [\
    { role: "system", content: "Extract the event information." },\
    {\
      role: "user",\
      content: "Alice and Bob are going to a science fair on Friday.",\
    },\
  ],
  text: {
    format: zodTextFormat(CalendarEvent, "event"),
  },
});

const event = response.output_parsed;
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
from openai import OpenAI
from pydantic import BaseModel

client = OpenAI()

class CalendarEvent(BaseModel):
    name: str
    date: str
    participants: list[str]

response = client.responses.parse(
    model="gpt-4o-2024-08-06",
    input=[\
        {"role": "system", "content": "Extract the event information."},\
        {\
            "role": "user",\
            "content": "Alice and Bob are going to a science fair on Friday.",\
        },\
    ],
    text_format=CalendarEvent,
)

event = response.output_parsed
```

### Supported models

Structured Outputs is available in our [latest large language models](https://platform.openai.com/docs/models), starting with GPT-4o. Older models like `gpt-4-turbo` and earlier may use [JSON mode](https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#json-mode) instead.

## When to use Structured Outputs via function calling vs via text.format

Structured Outputs is available in two forms in the OpenAI API:

1. When using [function calling](https://platform.openai.com/docs/guides/function-calling)
2. When using a `json_schema` response format

Function calling is useful when you are building an application that bridges the models and functionality of your application.

For example, you can give the model access to functions that query a database in order to build an AI assistant that can help users with their orders, or functions that can interact with the UI.

Conversely, Structured Outputs via `response_format` are more suitable when you want to indicate a structured schema for use when the model responds to the user, rather than when the model calls a tool.

For example, if you are building a math tutoring application, you might want the assistant to respond to your user using a specific JSON Schema so that you can generate a UI that displays different parts of the model's output in distinct ways.

Put simply:

- If you are connecting the model to tools, functions, data, etc. in your system, then you should use function calling
- If you want to structure the model's output when it responds to the user, then you should use a structured `text.format`

The remainder of this guide will focus on non-function calling use cases in the Responses API. To learn more about how to use Structured Outputs with function calling, check out the [Function Calling](https://platform.openai.com/docs/guides/function-calling#function-calling-with-structured-outputs) guide.

### Structured Outputs vs JSON mode

Structured Outputs is the evolution of [JSON mode](https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#json-mode). While both ensure valid JSON is produced, only Structured Outputs ensure schema adherance. Both Structured Outputs and JSON mode are supported in the Responses API,Chat Completions API, Assistants API, Fine-tuning API and Batch API.

We recommend always using Structured Outputs instead of JSON mode when possible.

However, Structured Outputs with `response_format: {type: "json_schema", ...}` is only supported with the `gpt-4o-mini`, `gpt-4o-mini-2024-07-18`, and `gpt-4o-2024-08-06` model snapshots and later.

|  | Structured Outputs | JSON Mode |
| --- | --- | --- |
| **Outputs valid JSON** | Yes | Yes |
| **Adheres to schema** | Yes (see [supported schemas](https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#supported-schemas)) | No |
| **Compatible models** | `gpt-4o-mini`, `gpt-4o-2024-08-06`, and later | `gpt-3.5-turbo`, `gpt-4-*` and `gpt-4o-*` models |
| **Enabling** | `text: { format: { type: "json_schema", "strict": true, "schema": ... } }` | `text: { format: { type: "json_object" } }` |

## Examples

Chain of thoughtChain of thoughtStructured data extractionStructured data extractionUI generationUI generationModerationModeration

Chain of thought

### Chain of thought

You can ask the model to output an answer in a structured, step-by-step way, to guide the user through the solution.

Structured Outputs for chain-of-thought math tutoring

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const Step = z.object({
  explanation: z.string(),
  output: z.string(),
});

const MathReasoning = z.object({
  steps: z.array(Step),
  final_answer: z.string(),
});

const response = await openai.responses.parse({
  model: "gpt-4o-2024-08-06",
  input: [\
    {\
      role: "system",\
      content:\
        "You are a helpful math tutor. Guide the user through the solution step by step.",\
    },\
    { role: "user", content: "how can I solve 8x + 7 = -23" },\
  ],
  text: {
    format: zodTextFormat(MathReasoning, "math_reasoning"),
  },
});

const math_reasoning = response.output_parsed;
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
from openai import OpenAI
from pydantic import BaseModel

client = OpenAI()

class Step(BaseModel):
    explanation: str
    output: str

class MathReasoning(BaseModel):
    steps: list[Step]
    final_answer: str

response = client.responses.parse(
    model="gpt-4o-2024-08-06",
    input=[\
        {\
            "role": "system",\
            "content": "You are a helpful math tutor. Guide the user through the solution step by step.",\
        },\
        {"role": "user", "content": "how can I solve 8x + 7 = -23"},\
    ],
    text_format=MathReasoning,
)

math_reasoning = response.output_parsed
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-2024-08-06",
    "input": [\
      {\
        "role": "system",\
        "content": "You are a helpful math tutor. Guide the user through the solution step by step."\
      },\
      {\
        "role": "user",\
        "content": "how can I solve 8x + 7 = -23"\
      }\
    ],
    "text": {
      "format": {
        "type": "json_schema",
        "name": "math_reasoning",
        "schema": {
          "type": "object",
          "properties": {
            "steps": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "explanation": { "type": "string" },
                  "output": { "type": "string" }
                },
                "required": ["explanation", "output"],
                "additionalProperties": false
              }
            },
            "final_answer": { "type": "string" }
          },
          "required": ["steps", "final_answer"],
          "additionalProperties": false
        },
        "strict": true
      }
    }
  }'
```

#### Example response

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
{
  "steps": [\
    {\
      "explanation": "Start with the equation 8x + 7 = -23.",\
      "output": "8x + 7 = -23"\
    },\
    {\
      "explanation": "Subtract 7 from both sides to isolate the term with the variable.",\
      "output": "8x = -23 - 7"\
    },\
    {\
      "explanation": "Simplify the right side of the equation.",\
      "output": "8x = -30"\
    },\
    {\
      "explanation": "Divide both sides by 8 to solve for x.",\
      "output": "x = -30 / 8"\
    },\
    {\
      "explanation": "Simplify the fraction.",\
      "output": "x = -15 / 4"\
    }\
  ],
  "final_answer": "x = -15 / 4"
}
```

Structured data extraction

### Structured data extraction

You can define structured fields to extract from unstructured input data, such as research papers.

Extracting data from research papers using Structured Outputs

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const ResearchPaperExtraction = z.object({
  title: z.string(),
  authors: z.array(z.string()),
  abstract: z.string(),
  keywords: z.array(z.string()),
});

const response = await openai.responses.parse({
  model: "gpt-4o-2024-08-06",
  input: [\
    {\
      role: "system",\
      content:\
        "You are an expert at structured data extraction. You will be given unstructured text from a research paper and should convert it into the given structure.",\
    },\
    { role: "user", content: "..." },\
  ],
  text: {
    format: zodTextFormat(ResearchPaperExtraction, "research_paper_extraction"),
  },
});

const research_paper = response.output_parsed;
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
from openai import OpenAI
from pydantic import BaseModel

client = OpenAI()

class ResearchPaperExtraction(BaseModel):
    title: str
    authors: list[str]
    abstract: str
    keywords: list[str]

response = client.responses.parse(
    model="gpt-4o-2024-08-06",
    input=[\
        {\
            "role": "system",\
            "content": "You are an expert at structured data extraction. You will be given unstructured text from a research paper and should convert it into the given structure.",\
        },\
        {"role": "user", "content": "..."},\
    ],
    text_format=ResearchPaperExtraction,
)

research_paper = response.output_parsed
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-2024-08-06",
    "input": [\
      {\
        "role": "system",\
        "content": "You are an expert at structured data extraction. You will be given unstructured text from a research paper and should convert it into the given structure."\
      },\
      {\
        "role": "user",\
        "content": "..."\
      }\
    ],
    "text": {
      "format": {
        "type": "json_schema",
        "name": "research_paper_extraction",
        "schema": {
          "type": "object",
          "properties": {
            "title": { "type": "string" },
            "authors": {
              "type": "array",
              "items": { "type": "string" }
            },
            "abstract": { "type": "string" },
            "keywords": {
              "type": "array",
              "items": { "type": "string" }
            }
          },
          "required": ["title", "authors", "abstract", "keywords"],
          "additionalProperties": false
        },
        "strict": true
      }
    }
  }'
```

#### Example response

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
{
  "title": "Application of Quantum Algorithms in Interstellar Navigation: A New Frontier",
  "authors": [\
    "Dr. Stella Voyager",\
    "Dr. Nova Star",\
    "Dr. Lyra Hunter"\
  ],
  "abstract": "This paper investigates the utilization of quantum algorithms to improve interstellar navigation systems. By leveraging quantum superposition and entanglement, our proposed navigation system can calculate optimal travel paths through space-time anomalies more efficiently than classical methods. Experimental simulations suggest a significant reduction in travel time and fuel consumption for interstellar missions.",
  "keywords": [\
    "Quantum algorithms",\
    "interstellar navigation",\
    "space-time anomalies",\
    "quantum superposition",\
    "quantum entanglement",\
    "space travel"\
  ]
}
```

UI generation

### UI Generation

You can generate valid HTML by representing it as recursive data structures with constraints, like enums.

Generating HTML using Structured Outputs

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const UI = z.lazy(() =>
  z.object({
    type: z.enum(["div", "button", "header", "section", "field", "form"]),
    label: z.string(),
    children: z.array(UI),
    attributes: z.array(
      z.object({
        name: z.string(),
        value: z.string(),
      })
    ),
  })
);

const response = await openai.responses.parse({
  model: "gpt-4o-2024-08-06",
  input: [\
    {\
      role: "system",\
      content: "You are a UI generator AI. Convert the user input into a UI.",\
    },\
    {\
      role: "user",\
      content: "Make a User Profile Form",\
    },\
  ],
  text: {
    format: zodTextFormat(UI, "ui"),
  },
});

const ui = response.output_parsed;
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
from enum import Enum
from typing import List

from openai import OpenAI
from pydantic import BaseModel

client = OpenAI()

class UIType(str, Enum):
    div = "div"
    button = "button"
    header = "header"
    section = "section"
    field = "field"
    form = "form"

class Attribute(BaseModel):
    name: str
    value: str

class UI(BaseModel):
    type: UIType
    label: str
    children: List["UI"]
    attributes: List[Attribute]

UI.model_rebuild()  # This is required to enable recursive types

class Response(BaseModel):
    ui: UI

response = client.responses.parse(
    model="gpt-4o-2024-08-06",
    input=[\
        {\
            "role": "system",\
            "content": "You are a UI generator AI. Convert the user input into a UI.",\
        },\
        {"role": "user", "content": "Make a User Profile Form"},\
    ],
    text_format=Response,
)

ui = response.output_parsed
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-2024-08-06",
    "input": [\
      {\
        "role": "system",\
        "content": "You are a UI generator AI. Convert the user input into a UI."\
      },\
      {\
        "role": "user",\
        "content": "Make a User Profile Form"\
      }\
    ],
    "text": {
      "format": {
        "type": "json_schema",
        "name": "ui",
        "description": "Dynamically generated UI",
        "schema": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The type of the UI component",
              "enum": ["div", "button", "header", "section", "field", "form"]
            },
            "label": {
              "type": "string",
              "description": "The label of the UI component, used for buttons or form fields"
            },
            "children": {
              "type": "array",
              "description": "Nested UI components",
              "items": {"$ref": "#"}
            },
            "attributes": {
              "type": "array",
              "description": "Arbitrary attributes for the UI component, suitable for any element",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "The name of the attribute, for example onClick or className"
                  },
                  "value": {
                    "type": "string",
                    "description": "The value of the attribute"
                  }
                },
                "required": ["name", "value"],
                "additionalProperties": false
              }
            }
          },
          "required": ["type", "label", "children", "attributes"],
          "additionalProperties": false
        },
        "strict": true
      }
    }
  }'
```

#### Example response

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
{
  "type": "form",
  "label": "User Profile Form",
  "children": [\
    {\
      "type": "div",\
      "label": "",\
      "children": [\
        {\
          "type": "field",\
          "label": "First Name",\
          "children": [],\
          "attributes": [\
            {\
              "name": "type",\
              "value": "text"\
            },\
            {\
              "name": "name",\
              "value": "firstName"\
            },\
            {\
              "name": "placeholder",\
              "value": "Enter your first name"\
            }\
          ]\
        },\
        {\
          "type": "field",\
          "label": "Last Name",\
          "children": [],\
          "attributes": [\
            {\
              "name": "type",\
              "value": "text"\
            },\
            {\
              "name": "name",\
              "value": "lastName"\
            },\
            {\
              "name": "placeholder",\
              "value": "Enter your last name"\
            }\
          ]\
        }\
      ],\
      "attributes": []\
    },\
    {\
      "type": "button",\
      "label": "Submit",\
      "children": [],\
      "attributes": [\
        {\
          "name": "type",\
          "value": "submit"\
        }\
      ]\
    }\
  ],
  "attributes": [\
    {\
      "name": "method",\
      "value": "post"\
    },\
    {\
      "name": "action",\
      "value": "/submit-profile"\
    }\
  ]
}
```

Moderation

### Moderation

You can classify inputs on multiple categories, which is a common way of doing moderation.

Moderation using Structured Outputs

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const ContentCompliance = z.object({
  is_violating: z.boolean(),
  category: z.enum(["violence", "sexual", "self_harm"]).nullable(),
  explanation_if_violating: z.string().nullable(),
});

const response = await openai.responses.parse({
    model: "gpt-4o-2024-08-06",
    input: [\
      {\
        "role": "system",\
        "content": "Determine if the user input violates specific guidelines and explain if they do."\
      },\
      {\
        "role": "user",\
        "content": "How do I prepare for a job interview?"\
      }\
    ],
    text: {
        format: zodTextFormat(ContentCompliance, "content_compliance"),
    },
});

const compliance = response.output_parsed;
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
from enum import Enum
from typing import Optional

from openai import OpenAI
from pydantic import BaseModel

client = OpenAI()

class Category(str, Enum):
    violence = "violence"
    sexual = "sexual"
    self_harm = "self_harm"

class ContentCompliance(BaseModel):
    is_violating: bool
    category: Optional[Category]
    explanation_if_violating: Optional[str]

response = client.responses.parse(
    model="gpt-4o-2024-08-06",
    input=[\
        {\
            "role": "system",\
            "content": "Determine if the user input violates specific guidelines and explain if they do.",\
        },\
        {"role": "user", "content": "How do I prepare for a job interview?"},\
    ],
    text_format=ContentCompliance,
)

compliance = response.output_parsed
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-2024-08-06",
    "input": [\
      {\
        "role": "system",\
        "content": "Determine if the user input violates specific guidelines and explain if they do."\
      },\
      {\
        "role": "user",\
        "content": "How do I prepare for a job interview?"\
      }\
    ],
    "text": {
      "format": {
        "type": "json_schema",
        "name": "content_compliance",
        "description": "Determines if content is violating specific moderation rules",
        "schema": {
          "type": "object",
          "properties": {
            "is_violating": {
              "type": "boolean",
              "description": "Indicates if the content is violating guidelines"
            },
            "category": {
              "type": ["string", "null"],
              "description": "Type of violation, if the content is violating guidelines. Null otherwise.",
              "enum": ["violence", "sexual", "self_harm"]
            },
            "explanation_if_violating": {
              "type": ["string", "null"],
              "description": "Explanation of why the content is violating"
            }
          },
          "required": ["is_violating", "category", "explanation_if_violating"],
          "additionalProperties": false
        },
        "strict": true
      }
    }
  }'
```

#### Example response

```json
1
2
3
4
5
{
  "is_violating": false,
  "category": null,
  "explanation_if_violating": null
}
```

## How to use Structured Outputs with text.format

Step 1: Define your schema

First you must design the JSON Schema that the model should be constrained to follow. See the [examples](https://platform.openai.com/docs/guides/structured-outputs#examples) at the top of this guide for reference.

While Structured Outputs supports much of JSON Schema, some features are unavailable either for performance or technical reasons. See [here](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas) for more details.

#### Tips for your JSON Schema

To maximize the quality of model generations, we recommend the following:

- Name keys clearly and intuitively
- Create clear titles and descriptions for important keys in your structure
- Create and use evals to determine the structure that works best for your use case

Step 2: Supply your schema in the API call

To use Structured Outputs, simply specify

```json
text: { format: { type: "json_schema", "strict": true, "schema": … } }
```

For example:

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
response = client.responses.create(
    model="gpt-4o-2024-08-06",
    input=[\
        {"role": "system", "content": "You are a helpful math tutor. Guide the user through the solution step by step."},\
        {"role": "user", "content": "how can I solve 8x + 7 = -23"}\
    ],
    text={
        "format": {
            "type": "json_schema",
            "name": "math_response",
            "schema": {
                "type": "object",
                "properties": {
                    "steps": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "explanation": {"type": "string"},
                                "output": {"type": "string"}
                            },
                            "required": ["explanation", "output"],
                            "additionalProperties": False
                        }
                    },
                    "final_answer": {"type": "string"}
                },
                "required": ["steps", "final_answer"],
                "additionalProperties": False
            },
            "strict": True
        }
    }
)

print(response.output_text)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
const response = await openai.responses.create({
    model: "gpt-4o-2024-08-06",
    input: [\
        { role: "system", content: "You are a helpful math tutor. Guide the user through the solution step by step." },\
        { role: "user", content: "how can I solve 8x + 7 = -23" }\
    ],
    text: {
        format: {
            type: "json_schema",
            name: "math_response",
            schema: {
                type: "object",
                properties: {
                    steps: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                explanation: { type: "string" },
                                output: { type: "string" }
                            },
                            required: ["explanation", "output"],
                            additionalProperties: false
                        }
                    },
                    final_answer: { type: "string" }
                },
                required: ["steps", "final_answer"],
                additionalProperties: false
            },
            strict: true
        }
    }
});

console.log(response.output_text);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-2024-08-06",
    "input": [\
      {\
        "role": "system",\
        "content": "You are a helpful math tutor. Guide the user through the solution step by step."\
      },\
      {\
        "role": "user",\
        "content": "how can I solve 8x + 7 = -23"\
      }\
    ],
    "text": {
      "format": {
        "type": "json_schema",
        "name": "math_response",
        "schema": {
          "type": "object",
          "properties": {
            "steps": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "explanation": { "type": "string" },
                  "output": { "type": "string" }
                },
                "required": ["explanation", "output"],
                "additionalProperties": false
              }
            },
            "final_answer": { "type": "string" }
          },
          "required": ["steps", "final_answer"],
          "additionalProperties": false
        },
        "strict": true
      }
    }
  }'
```

**Note:** the first request you make with any schema will have additional latency as our API processes the schema, but subsequent requests with the same schema will not have additional latency.

Step 3: Handle edge cases

In some cases, the model might not generate a valid response that matches the provided JSON schema.

This can happen in the case of a refusal, if the model refuses to answer for safety reasons, or if for example you reach a max tokens limit and the response is incomplete.

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
try {
  const response = await openai.responses.create({
    model: "gpt-4o-2024-08-06",
    input: [{\
        role: "system",\
        content: "You are a helpful math tutor. Guide the user through the solution step by step.",\
      },\
      {\
        role: "user",\
        content: "how can I solve 8x + 7 = -23"\
      },\
    ],
    max_output_tokens: 50,
    text: {
      format: {
        type: "json_schema",
        name: "math_response",
        schema: {
          type: "object",
          properties: {
            steps: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  explanation: {
                    type: "string"
                  },
                  output: {
                    type: "string"
                  },
                },
                required: ["explanation", "output"],
                additionalProperties: false,
              },
            },
            final_answer: {
              type: "string"
            },
          },
          required: ["steps", "final_answer"],
          additionalProperties: false,
        },
        strict: true,
      },
    }
  });

  if (response.status === "incomplete" && response.incomplete_details.reason === "max_output_tokens") {
    // Handle the case where the model did not return a complete response
    throw new Error("Incomplete response");
  }

  const math_response = response.output[0].content[0];

  if (math_response.type === "refusal") {
    // handle refusal
    console.log(math_response.refusal);
  } else if (math_response.type === "output_text") {
    console.log(math_response.text);
  } else {
    throw new Error("No response content");
  }
} catch (e) {
  // Handle edge cases
  console.error(e);
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
try:
    response = client.responses.create(
        model="gpt-4o-2024-08-06",
        input=[\
            {\
                "role": "system",\
                "content": "You are a helpful math tutor. Guide the user through the solution step by step.",\
            },\
            {"role": "user", "content": "how can I solve 8x + 7 = -23"},\
        ],
        text={
            "format": {
                "type": "json_schema",
                "name": "math_response",
                "strict": True,
                "schema": {
                    "type": "object",
                    "properties": {
                        "steps": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "explanation": {"type": "string"},
                                    "output": {"type": "string"},
                                },
                                "required": ["explanation", "output"],
                                "additionalProperties": False,
                            },
                        },
                        "final_answer": {"type": "string"},
                    },
                    "required": ["steps", "final_answer"],
                    "additionalProperties": False,
                },
                "strict": True,
            },
        },
    )
except Exception as e:
    # handle errors like finish_reason, refusal, content_filter, etc.
    pass
```

### Refusals with Structured Outputs

When using Structured Outputs with user-generated input, OpenAI models may occasionally refuse to fulfill the request for safety reasons. Since a refusal does not necessarily follow the schema you have supplied in `response_format`, the API response will include a new field called `refusal` to indicate that the model refused to fulfill the request.

When the `refusal` property appears in your output object, you might present the refusal in your UI, or include conditional logic in code that consumes the response to handle the case of a refused request.

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
class Step(BaseModel):
    explanation: str
    output: str

class MathReasoning(BaseModel):
    steps: list[Step]
    final_answer: str

completion = client.beta.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[\
        {"role": "system", "content": "You are a helpful math tutor. Guide the user through the solution step by step."},\
        {"role": "user", "content": "how can I solve 8x + 7 = -23"}\
    ],
    response_format=MathReasoning,
)

math_reasoning = completion.choices[0].message

# If the model refuses to respond, you will get a refusal message
if (math_reasoning.refusal):
    print(math_reasoning.refusal)
else:
    print(math_reasoning.parsed)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
const Step = z.object({
  explanation: z.string(),
  output: z.string(),
});

const MathReasoning = z.object({
  steps: z.array(Step),
  final_answer: z.string(),
});

const completion = await openai.beta.chat.completions.parse({
  model: "gpt-4o-2024-08-06",
  messages: [\
    { role: "system", content: "You are a helpful math tutor. Guide the user through the solution step by step." },\
    { role: "user", content: "how can I solve 8x + 7 = -23" },\
  ],
  response_format: zodResponseFormat(MathReasoning, "math_reasoning"),
});

const math_reasoning = completion.choices[0].message

// If the model refuses to respond, you will get a refusal message
if (math_reasoning.refusal) {
  console.log(math_reasoning.refusal);
} else {
  console.log(math_reasoning.parsed);
}
```

The API response from a refusal will look something like this:

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
{
  "id": "resp_1234567890",
  "object": "response",
  "created_at": 1721596428,
  "status": "completed",
  "error": null,
  "incomplete_details": null,
  "input": [],
  "instructions": null,
  "max_output_tokens": null,
  "model": "gpt-4o-2024-08-06",
  "output": [{\
    "id": "msg_1234567890",\
    "type": "message",\
    "role": "assistant",\
    "content": [\
      {\
        "type": "refusal",\
        "refusal": "I'm sorry, I cannot assist with that request."\
      }\
    ]\
  }],
  "usage": {
    "input_tokens": 81,
    "output_tokens": 11,
    "total_tokens": 92,
    "output_tokens_details": {
      "reasoning_tokens": 0,
    }
  },
}
```

### Tips and best practices

#### Handling user-generated input

If your application is using user-generated input, make sure your prompt includes instructions on how to handle situations where the input cannot result in a valid response.

The model will always try to adhere to the provided schema, which can result in hallucinations if the input is completely unrelated to the schema.

You could include language in your prompt to specify that you want to return empty parameters, or a specific sentence, if the model detects that the input is incompatible with the task.

#### Handling mistakes

Structured Outputs can still contain mistakes. If you see mistakes, try adjusting your instructions, providing examples in the system instructions, or splitting tasks into simpler subtasks. Refer to the [prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering) for more guidance on how to tweak your inputs.

#### Avoid JSON schema divergence

To prevent your JSON Schema and corresponding types in your programming language from diverging, we strongly recommend using the native Pydantic/zod sdk support.

If you prefer to specify the JSON schema directly, you could add CI rules that flag when either the JSON schema or underlying data objects are edited, or add a CI step that auto-generates the JSON Schema from type definitions (or vice-versa).

## Streaming

You can use streaming to process model responses or function call arguments as they are being generated, and parse them as structured data.

That way, you don't have to wait for the entire response to complete before handling it.
This is particularly useful if you would like to display JSON fields one by one, or handle function call arguments as soon as they are available.

We recommend relying on the SDKs to handle streaming with Structured Outputs.

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
from typing import List

from openai import OpenAI
from pydantic import BaseModel

class EntitiesModel(BaseModel):
    attributes: List[str]
    colors: List[str]
    animals: List[str]

client = OpenAI()

with client.responses.stream(
    model="gpt-4.1",
    input=[\
        {"role": "system", "content": "Extract entities from the input text"},\
        {\
            "role": "user",\
            "content": "The quick brown fox jumps over the lazy dog with piercing blue eyes",\
        },\
    ],
    text_format=EntitiesModel,
) as stream:
    for event in stream:
        if event.type == "response.refusal.delta":
            print(event.delta, end="")
        elif event.type == "response.output_text.delta":
            print(event.delta, end="")
        elif event.type == "response.error":
            print(event.error, end="")
        elif event.type == "response.completed":
            print("Completed")
            # print(event.response.output)

    final_response = stream.get_final_response()
    print(final_response)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
import { OpenAI } from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const EntitiesSchema = z.object({
  attributes: z.array(z.string()),
  colors: z.array(z.string()),
  animals: z.array(z.string()),
});

const openai = new OpenAI();
const stream = openai.responses
  .stream({
    model: "gpt-4.1",
    input: [\
      { role: "user", content: "What's the weather like in Paris today?" },\
    ],
    text: {
      format: zodTextFormat(EntitiesSchema, "entities"),
    },
  })
  .on("response.refusal.delta", (event) => {
    process.stdout.write(event.delta);
  })
  .on("response.output_text.delta", (event) => {
    process.stdout.write(event.delta);
  })
  .on("response.output_text.done", () => {
    process.stdout.write("\n");
  })
  .on("response.error", (event) => {
    console.error(event.error);
  });

const result = await stream.finalResponse();

console.log(result);
```

## Supported schemas

Structured Outputs supports a subset of the [JSON Schema](https://json-schema.org/docs) language.

#### Supported types

The following types are supported for Structured Outputs:

- String
- Number
- Boolean
- Integer
- Object
- Array
- Enum
- anyOf

#### Supported properties

In addition to specifying the type of a property, you can specify a selection of additional constraints:

**Supported `string` properties:**

- `pattern` — A regular expression that the string must match.
- `format` — Predefined formats for strings. Currently supported:

  - `date-time`
  - `time`
  - `date`
  - `duration`
  - `email`
  - `hostname`
  - `ipv4`
  - `ipv6`
  - `uuid`

**Supported `number` properties:**

- `multipleOf` — The number must be a multiple of this value.
- `maximum` — The number must be less than or equal to this value.
- `exclusiveMaximum` — The number must be less than this value.
- `minimum` — The number must be greater than or equal to this value.
- `exclusiveMinimum` — The number must be greater than this value.

**Supported `array` properties:**

- `minItems` — The array must have at least this many items.
- `maxItems` — The array must have at most this many items.

Here are some examples on how you can use these type restrictions:

String RestrictionsString RestrictionsNumber RestrictionsNumber Restrictions

String Restrictions

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
{
    "name": "user_data",
    "strict": true,
    "schema": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the user"
            },
            "username": {
                "type": "string",
                "description": "The username of the user. Must start with @",
                "pattern": "^@[a-zA-Z0-9_]+$"
            },
            "email": {
                "type": "string",
                "description": "The email of the user",
                "format": "email"
            }
        },
        "additionalProperties": false,
        "required": [\
            "name", "username", "email"\
        ]
    }
}
```

Number Restrictions

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
{
    "name": "weather_data",
    "strict": true,
    "schema": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The location to get the weather for"
            },
            "unit": {
                "type": ["string", "null"],
                "description": "The unit to return the temperature in",
                "enum": ["F", "C"]
            },
            "value": {
                "type": "number",
                "description": "The actual temperature value in the location",
                "minimum": -130,
                "maximum": 130
            }
        },
        "additionalProperties": false,
        "required": [\
            "location", "unit", "value"\
        ]
    }
}
```

Note these constraints are [not yet supported for fine-tuned models](https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#some-type-specific-keywords-are-not-yet-supported).

#### Root objects must not be `anyOf` and must be an object

Note that the root level object of a schema must be an object, and not use `anyOf`. A pattern that appears in Zod (as one example) is using a discriminated union, which produces an `anyOf` at the top level. So code such as the following won't work:

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod';

const BaseResponseSchema = z.object({ /* ... */ });
const UnsuccessfulResponseSchema = z.object({ /* ... */ });

const finalSchema = z.discriminatedUnion('status', [\
    BaseResponseSchema,\
    UnsuccessfulResponseSchema,\
]);

// Invalid JSON Schema for Structured Outputs
const json = zodResponseFormat(finalSchema, 'final_schema');
```

#### All fields must be `required`

To use Structured Outputs, all fields or function parameters must be specified as `required`.

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
{
    "name": "get_weather",
    "description": "Fetches the weather in the given location",
    "strict": true,
    "parameters": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The location to get the weather for"
            },
            "unit": {
                "type": "string",
                "description": "The unit to return the temperature in",
                "enum": ["F", "C"]
            }
        },
        "additionalProperties": false,
        "required": ["location", "unit"]
    }
}
```

Although all fields must be required (and the model will return a value for each parameter), it is possible to emulate an optional parameter by using a union type with `null`.

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
{
    "name": "get_weather",
    "description": "Fetches the weather in the given location",
    "strict": true,
    "parameters": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The location to get the weather for"
            },
            "unit": {
                "type": ["string", "null"],
                "description": "The unit to return the temperature in",
                "enum": ["F", "C"]
            }
        },
        "additionalProperties": false,
        "required": [\
            "location", "unit"\
        ]
    }
}
```

#### Objects have limitations on nesting depth and size

A schema may have up to 100 object properties total, with up to 5 levels of nesting.

#### Limitations on total string size

In a schema, total string length of all property names, definition names, enum values, and const values cannot exceed 15,000 characters.

#### Limitations on enum size

A schema may have up to 500 enum values across all enum properties.

For a single enum property with string values, the total string length of all enum values cannot exceed 7,500 characters when there are more than 250 enum values.

#### `additionalProperties: false` must always be set in objects

`additionalProperties` controls whether it is allowable for an object to contain additional keys / values that were not defined in the JSON Schema.

Structured Outputs only supports generating specified keys / values, so we require developers to set `additionalProperties: false` to opt into Structured Outputs.

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
{
    "name": "get_weather",
    "description": "Fetches the weather in the given location",
    "strict": true,
    "schema": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The location to get the weather for"
            },
            "unit": {
                "type": "string",
                "description": "The unit to return the temperature in",
                "enum": ["F", "C"]
            }
        },
        "additionalProperties": false,
        "required": [\
            "location", "unit"\
        ]
    }
}
```

#### Key ordering

When using Structured Outputs, outputs will be produced in the same order as the ordering of keys in the schema.

#### Some type-specific keywords are not yet supported

Specifically:

- **For objects:** `unevaluatedProperties`, `propertyNames`, `minProperties`, `maxProperties`
- **For arrays:** `unevaluatedItems`, `contains`, `minContains`, `maxContains`, `uniqueItems`
- **Composition:** `allOf`, `not`, `dependentRequired`, `dependentSchemas`, `if`, `then`, `else`

For fine-tuned models, we additionally do not support the following:

- **For strings:** `minLength`, `maxLength`, `pattern`, `format`
- **For numbers:** `minimum`, `maximum`, `multipleOf`
- **For objects:** `patternProperties`
- **For arrays:** `minItems`, `maxItems`

If you turn on Structured Outputs by supplying `strict: true` and call the API with an unsupported JSON Schema, you will receive an error.

#### For `anyOf`, the nested schemas must each be a valid JSON Schema per this subset

Here's an example supported anyOf schema:

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
{
    "type": "object",
    "properties": {
        "item": {
            "anyOf": [\
                {\
                    "type": "object",\
                    "description": "The user object to insert into the database",\
                    "properties": {\
                        "name": {\
                            "type": "string",\
                            "description": "The name of the user"\
                        },\
                        "age": {\
                            "type": "number",\
                            "description": "The age of the user"\
                        }\
                    },\
                    "additionalProperties": false,\
                    "required": [\
                        "name",\
                        "age"\
                    ]\
                },\
                {\
                    "type": "object",\
                    "description": "The address object to insert into the database",\
                    "properties": {\
                        "number": {\
                            "type": "string",\
                            "description": "The number of the address. Eg. for 123 main st, this would be 123"\
                        },\
                        "street": {\
                            "type": "string",\
                            "description": "The street name. Eg. for 123 main st, this would be main st"\
                        },\
                        "city": {\
                            "type": "string",\
                            "description": "The city of the address"\
                        }\
                    },\
                    "additionalProperties": false,\
                    "required": [\
                        "number",\
                        "street",\
                        "city"\
                    ]\
                }\
            ]
        }
    },
    "additionalProperties": false,
    "required": [\
        "item"\
    ]
}
```

#### Definitions are supported

You can use definitions to define subschemas which are referenced throughout your schema. The following is a simple example.

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
{
    "type": "object",
    "properties": {
        "steps": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/step"
            }
        },
        "final_answer": {
            "type": "string"
        }
    },
    "$defs": {
        "step": {
            "type": "object",
            "properties": {
                "explanation": {
                    "type": "string"
                },
                "output": {
                    "type": "string"
                }
            },
            "required": [\
                "explanation",\
                "output"\
            ],
            "additionalProperties": false
        }
    },
    "required": [\
        "steps",\
        "final_answer"\
    ],
    "additionalProperties": false
}
```

#### Recursive schemas are supported

Sample recursive schema using `#` to indicate root recursion.

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
{
    "name": "ui",
    "description": "Dynamically generated UI",
    "strict": true,
    "schema": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string",
                "description": "The type of the UI component",
                "enum": ["div", "button", "header", "section", "field", "form"]
            },
            "label": {
                "type": "string",
                "description": "The label of the UI component, used for buttons or form fields"
            },
            "children": {
                "type": "array",
                "description": "Nested UI components",
                "items": {
                    "$ref": "#"
                }
            },
            "attributes": {
                "type": "array",
                "description": "Arbitrary attributes for the UI component, suitable for any element",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the attribute, for example onClick or className"
                        },
                        "value": {
                            "type": "string",
                            "description": "The value of the attribute"
                        }
                    },
                    "additionalProperties": false,
                    "required": ["name", "value"]
                }
            }
        },
        "required": ["type", "label", "children", "attributes"],
        "additionalProperties": false
    }
}
```

Sample recursive schema using explicit recursion:

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
{
    "type": "object",
    "properties": {
        "linked_list": {
            "$ref": "#/$defs/linked_list_node"
        }
    },
    "$defs": {
        "linked_list_node": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "number"
                },
                "next": {
                    "anyOf": [\
                        {\
                            "$ref": "#/$defs/linked_list_node"\
                        },\
                        {\
                            "type": "null"\
                        }\
                    ]
                }
            },
            "additionalProperties": false,
            "required": [\
                "next",\
                "value"\
            ]
        }
    },
    "additionalProperties": false,
    "required": [\
        "linked_list"\
    ]
}
```

## JSON mode

JSON mode is a more basic version of the Structured Outputs feature. While JSON mode ensures that model output is valid JSON, Structured Outputs reliably matches the model's output to the schema you specify.
We recommend you use Structured Outputs if it is supported for your use case.

When JSON mode is turned on, the model's output is ensured to be valid JSON, except for in some edge cases that you should detect and handle appropriately.

To turn on JSON mode with the Responses API you can set the `text.format` to `{ "type": "json_object" }`. If you are using function calling, JSON mode is always turned on.

Important notes:

- When using JSON mode, you must always instruct the model to produce JSON via some message in the conversation, for example via your system message. If you don't include an explicit instruction to generate JSON, the model may generate an unending stream of whitespace and the request may run continually until it reaches the token limit. To help ensure you don't forget, the API will throw an error if the string "JSON" does not appear somewhere in the context.
- JSON mode will not guarantee the output matches any specific schema, only that it is valid and parses without errors. You should use Structured Outputs to ensure it matches your schema, or if that is not possible, you should use a validation library and potentially retries to ensure that the output matches your desired schema.
- Your application must detect and handle the edge cases that can result in the model output not being a complete JSON object (see below)

Handling edge cases

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
const we_did_not_specify_stop_tokens = true;

try {
  const response = await openai.responses.create({
    model: "gpt-3.5-turbo-0125",
    input: [\
      {\
        role: "system",\
        content: "You are a helpful assistant designed to output JSON.",\
      },\
      { role: "user", content: "Who won the world series in 2020? Please respond in the format {winner: ...}" },\
    ],
    text: { format: { type: "json_object" } },
  });

  // Check if the conversation was too long for the context window, resulting in incomplete JSON
  if (response.status === "incomplete" && response.incomplete_details.reason === "max_output_tokens") {
    // your code should handle this error case
  }

  // Check if the OpenAI safety system refused the request and generated a refusal instead
  if (response.output[0].content[0].type === "refusal") {
    // your code should handle this error case
    // In this case, the .content field will contain the explanation (if any) that the model generated for why it is refusing
    console.log(response.output[0].content[0].refusal)
  }

  // Check if the model's output included restricted content, so the generation of JSON was halted and may be partial
  if (response.status === "incomplete" && response.incomplete_details.reason === "content_filter") {
    // your code should handle this error case
  }

  if (response.status === "completed") {
    // In this case the model has either successfully finished generating the JSON object according to your schema, or the model generated one of the tokens you provided as a "stop token"

    if (we_did_not_specify_stop_tokens) {
      // If you didn't specify any stop tokens, then the generation is complete and the content key will contain the serialized JSON object
      // This will parse successfully and should now contain  {"winner": "Los Angeles Dodgers"}
      console.log(JSON.parse(response.output_text))
    } else {
      // Check if the response.output_text ends with one of your stop tokens and handle appropriately
    }
  }
} catch (e) {
  // Your code should handle errors here, for example a network error calling the API
  console.error(e)
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
we_did_not_specify_stop_tokens = True

try:
    response = client.responses.create(
        model="gpt-3.5-turbo-0125",
        input=[\
            {"role": "system", "content": "You are a helpful assistant designed to output JSON."},\
            {"role": "user", "content": "Who won the world series in 2020? Please respond in the format {winner: ...}"}\
        ],
        text={"format": {"type": "json_object"}}
    )

    # Check if the conversation was too long for the context window, resulting in incomplete JSON
    if response.status == "incomplete" and response.incomplete_details.reason == "max_output_tokens":
        # your code should handle this error case
        pass

    # Check if the OpenAI safety system refused the request and generated a refusal instead
    if response.output[0].content[0].type == "refusal":
        # your code should handle this error case
        # In this case, the .content field will contain the explanation (if any) that the model generated for why it is refusing
        print(response.output[0].content[0]["refusal"])

    # Check if the model's output included restricted content, so the generation of JSON was halted and may be partial
    if response.status == "incomplete" and response.incomplete_details.reason == "content_filter":
        # your code should handle this error case
        pass

    if response.status == "completed":
        # In this case the model has either successfully finished generating the JSON object according to your schema, or the model generated one of the tokens you provided as a "stop token"

        if we_did_not_specify_stop_tokens:
            # If you didn't specify any stop tokens, then the generation is complete and the content key will contain the serialized JSON object
            # This will parse successfully and should now contain  "{"winner": "Los Angeles Dodgers"}"
            print(response.output_text)
        else:
            # Check if the response.output_text ends with one of your stop tokens and handle appropriately
            pass
except Exception as e:
    # Your code should handle errors here, for example a network error calling the API
    print(e)
```

## Resources

To learn more about Structured Outputs, we recommend browsing the following resources:

- Check out our [introductory cookbook](https://cookbook.openai.com/examples/structured_outputs_intro) on Structured Outputs
- Learn [how to build multi-agent systems](https://cookbook.openai.com/examples/structured_outputs_multi_agent) with Structured Outputs

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_supervised-fine-tuning.md
---

---

url: "<https://platform.openai.com/docs/guides/supervised-fine-tuning>"
title: "Supervised fine-tuning - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Supervised fine-tuning

Fine-tune models with example inputs and known good outputs.

Copy page

Supervised fine-tuning (SFT) lets you teach an OpenAI model to better handle your specific use cases by training it on examples you provide. The result is a customized model that more reliably produces your desired style and content.

Fine-tuning a model this way has four major parts:

1. Build your training dataset to determine what "good" looks like
2. Upload a training dataset containing example prompts and desired model output
3. Create a fine-tuning job for a base model using your training data
4. Evaluate your results using the fine-tuned model

**Do not make the investment of fine-tuning models without good evals already in place!** You need a reliable way to determine whether your fine-tuned model is performing better than a base model.

[Set up evals →](https://platform.openai.com/docs/guides/evals)

![Provide example data and create a fine-tuning job to optimize model performance for your use case](https://cdn.openai.com/API/docs/images/fine-tuning-cycle.png)

## Build your dataset

Build a robust, representative dataset to get useful results from a fine-tuned model. Use the following techniques and considerations.

### Right number of examples

- The minimum number of examples you can provide for fine-tuning is 10
- We see improvements from fine-tuning on 50–100 examples, but the right number for you varies greatly and depends on the use case
- We recommend starting with 50 well-crafted demonstrations and [evaluating the results](https://platform.openai.com/docs/guides/evals)

If performance improves with 50 good examples, try adding examples to see further results. If 50 examples have no impact, rethink your task or prompt before adding training data.

### What makes a good example

- Whatever prompts and outputs you expect in your application, as realistic as possible
- Specific, clear questions and answers
- Use historical data, expert data, logged data, or [other types of collected data](https://platform.openai.com/docs/guides/evals)

### Formatting your data

- Use [JSONL format](https://jsonlines.org/), with one complete JSON structure on every line of the training data file
- Use the [chat completions format](https://platform.openai.com/docs/api-reference/fine-tuning/chat-input)
- Your file must have at least 10 lines

JSONL format example fileJSONL format example fileCorresponding JSON dataCorresponding JSON data

JSONL format example file

An example of JSONL training data, where the model calls a `get_weather` function:

```text
1
2
3
4
5
6
7
8
9
10
{"messages":[{"role":"user","content":"What is the weather in San Francisco?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"San Francisco, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. San Francisco, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Minneapolis?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Minneapolis, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Minneapolis, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in San Diego?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"San Diego, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. San Diego, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Memphis?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Memphis, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Memphis, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Atlanta?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Atlanta, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Atlanta, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Sunnyvale?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Sunnyvale, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Sunnyvale, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Chicago?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Chicago, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Chicago, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Boston?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Boston, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Boston, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in Honolulu?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Honolulu, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. Honolulu, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
{"messages":[{"role":"user","content":"What is the weather in San Antonio?"},{"role":"assistant","tool_calls":[{"id":"call_id","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"San Antonio, USA\", \"format\": \"celsius\"}"}}]}],"parallel_tool_calls":false,"tools":[{"type":"function","function":{"name":"get_current_weather","description":"Get the current weather","parameters":{"type":"object","properties":{"location":{"type":"string","description":"The city and country, eg. San Antonio, USA"},"format":{"type":"string","enum":["celsius","fahrenheit"]}},"required":["location","format"]}}}]}
```

Corresponding JSON data

Each line of the training data file contains a JSON structure like the following, containing both an example user prompt and a correct response from the model as an `assistant` message.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
{
  "messages": [\
    { "role": "user", "content": "What is the weather in San Francisco?" },\
    {\
      "role": "assistant",\
      "tool_calls": [\
        {\
          "id": "call_id",\
          "type": "function",\
          "function": {\
            "name": "get_current_weather",\
            "arguments": "{\"location\": \"San Francisco, USA\", \"format\": \"celsius\"}"\
          }\
        }\
      ]\
    }\
  ],
  "parallel_tool_calls": false,
  "tools": [\
    {\
      "type": "function",\
      "function": {\
        "name": "get_current_weather",\
        "description": "Get the current weather",\
        "parameters": {\
          "type": "object",\
          "properties": {\
            "location": {\
                "type": "string",\
                "description": "The city and country, eg. San Francisco, USA"\
            },\
            "format": { "type": "string", "enum": ["celsius", "fahrenheit"] }\
          },\
          "required": ["location", "format"]\
        }\
      }\
    }\
  ]
}
```

## Upload training data

Upload your dataset of examples to OpenAI. We use it to update the model's weights and produce outputs like the ones included in your data.

In addition to text completions, you can train the model to more effectively generate [structured JSON output](https://platform.openai.com/docs/guides/structured-outputs) or [function calls](https://platform.openai.com/docs/guides/function-calling).

Upload your data with button clicksUpload your data with button clicksCall the API to upload your dataCall the API to upload your data

Upload your data with button clicks

1. Navigate to the dashboard > **[fine-tuning](https://platform.openai.com/finetune)**.
2. Click **\+ Create**.
3. Under **Training data**, upload your JSONL file.

Call the API to upload your data

Assuming the data above is saved to a file called `mydata.jsonl`, you can upload it to the OpenAI platform using the code below. Note that the `purpose` of the uploaded file is set to `fine-tune`:

```bash
1
2
3
4
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F purpose="fine-tune" \
  -F file="@mydata.jsonl"
```

Note the `id` of the file that is uploaded in the data returned from the API - you'll need that file identifier in subsequent API requests.

```json
1
2
3
4
5
6
7
8
9
10
11
{
  "object": "file",
  "id": "file-RCnFCYRhFDcq1aHxiYkBHw",
  "purpose": "fine-tune",
  "filename": "mydata.jsonl",
  "bytes": 1058,
  "created_at": 1746484901,
  "expires_at": null,
  "status": "processed",
  "status_details": null
}
```

## Create a fine-tuning job

With your test data uploaded, [create a fine-tuning job](https://platform.openai.com/docs/api-reference/fine-tuning/create) to customize a base model using the training data you provide. When creating a fine-tuning job, you must specify:

- A base model ( `model`) to use for fine-tuning. This can be either an OpenAI model ID or the ID of a previously fine-tuned model. See which models support fine-tuning in the [model docs](https://platform.openai.com/docs/models).
- A training file ( `training_file`) ID. This is the file you uploaded in the previous step.
- A fine-tuning method ( `method`). This specifies which fine-tuning method you want to use to customize the model. Supervised fine-tuning is the default.

Upload your data with button clicksUpload your data with button clicksCall the API to upload your dataCall the API to upload your data

Upload your data with button clicks

1. In the same **\+ Create** modal as above, complete the required fields.
2. Select supervised fine-tuning as the method and whichever model you want to train.
3. When you're ready, click **Create** to start the job.

Call the API to upload your data

Create a supervised fine-tuning job by calling the [fine-tuning API](https://platform.openai.com/docs/api-reference/fine-tuning):

```bash
1
2
3
4
5
6
7
curl https://api.openai.com/v1/fine_tuning/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "training_file": "file-RCnFCYRhFDcq1aHxiYkBHw",
    "model": "gpt-4.1-nano-2025-04-14"
  }'
```

The API responds with information about the fine-tuning job in progress. Depending on the size of your training data, the training process may take several minutes or hours. You can [poll the API](https://platform.openai.com/docs/api-reference/fine-tuning/retrieve) for updates on a specific job.

When the fine-tuning job finishes, your fine-tuned model is ready to use. A completed fine-tune job returns data like this:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
{
  "object": "fine_tuning.job",
  "id": "ftjob-uL1VKpwx7maorHNbOiDwFIn6",
  "model": "gpt-4.1-nano-2025-04-14",
  "created_at": 1746484925,
  "finished_at": 1746485841,
  "fine_tuned_model": "ft:gpt-4.1-nano-2025-04-14:openai::BTz2REMH",
  "organization_id": "org-abc123",
  "result_files": [\
    "file-9TLxKY2A8tC5YE1RULYxf6"\
  ],
  "status": "succeeded",
  "validation_file": null,
  "training_file": "file-RCnFCYRhFDcq1aHxiYkBHw",
  "hyperparameters": {
    "n_epochs": 10,
    "batch_size": 1,
    "learning_rate_multiplier": 1
  },
  "trained_tokens": 1700,
  "error": {},
  "user_provided_suffix": null,
  "seed": 1935755117,
  "estimated_finish": null,
  "integrations": [],
  "metadata": null,
  "usage_metrics": null,
  "shared_with_openai": false,
  "method": {
    "type": "supervised",
    "supervised": {
      "hyperparameters": {
        "n_epochs": 10,
        "batch_size": 1,
        "learning_rate_multiplier": 1.0
      }
    }
  }
}
```

Note the `fine_tuned_model` property. This is the model ID to use in [Responses](https://platform.openai.com/docs/api-reference/responses) or [Chat Completions](https://platform.openai.com/docs/api-reference/chat) to make API requests using your fine-tuned model.

Here's an example of calling the Responses API with your fine-tuned model ID:

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "ft:gpt-4.1-nano-2025-04-14:openai::BTz2REMH",
    "input": "What is the weather like in Boston today?",
    "tools": [\
      {\
        "name": "get_current_weather",\
        "description": "Get the current weather",\
        "parameters": {\
          "type": "object",\
          "properties": {\
            "location": {\
                "type": "string",\
                "description": "The city and country, eg. San Francisco, USA"\
            },\
            "format": { "type": "string", "enum": ["celsius", "fahrenheit"] }\
          },\
          "required": ["location", "format"]\
        }\
      }\
    ],
    "tool_choice": "auto"
  }'
```

## Evaluate the result

Use the approaches below to check how your fine-tuned model performs. Adjust your prompts, data, and fine-tuning job as needed until you get the results you want. The best way to fine-tune is to continue iterating.

### Compare to evals

To see if your fine-tuned model performs better than the original base model, [use evals](https://platform.openai.com/docs/guides/evals). Before running your fine-tuning job, carve out data from the same training dataset you collected in step 1. This holdout data acts as a control group when you use it for evals. Make sure the training and holdout data have roughly the same diversity of user input types and model responses.

[Learn more about running evals](https://platform.openai.com/docs/guides/evals).

### Monitor the status

Check the status of a fine-tuning job in the dashboard or by polling the job ID in the API.

Monitor in the UIMonitor in the UIMonitor with API callsMonitor with API calls

Monitor in the UI

1. Navigate to the [fine-tuning dashboard](https://platform.openai.com/finetune).
2. Select the job you want to monitor.
3. Review the status, checkpoints, message, and metrics.

Monitor with API calls

Use this curl command to get information about your fine-tuning job:

```bash
curl https://api.openai.com/v1/fine_tuning/jobs/ftjob-uL1VKpwx7maorHNbOiDwFIn6 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

The job contains a `fine_tuned_model` property, which is your new fine-tuned model's unique ID.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
{
  "object": "fine_tuning.job",
  "id": "ftjob-uL1VKpwx7maorHNbOiDwFIn6",
  "model": "gpt-4.1-nano-2025-04-14",
  "created_at": 1746484925,
  "finished_at": 1746485841,
  "fine_tuned_model": "ft:gpt-4.1-nano-2025-04-14:openai::BTz2REMH",
  "organization_id": "org-abc123",
  "result_files": [\
    "file-9TLxKY2A8tC5YE1RULYxf6"\
  ],
  "status": "succeeded",
  "validation_file": null,
  "training_file": "file-RCnFCYRhFDcq1aHxiYkBHw",
  "hyperparameters": {
    "n_epochs": 10,
    "batch_size": 1,
    "learning_rate_multiplier": 1
  },
  "trained_tokens": 1700,
  "error": {},
  "user_provided_suffix": null,
  "seed": 1935755117,
  "estimated_finish": null,
  "integrations": [],
  "metadata": null,
  "usage_metrics": null,
  "shared_with_openai": false,
  "method": {
    "type": "supervised",
    "supervised": {
      "hyperparameters": {
        "n_epochs": 10,
        "batch_size": 1,
        "learning_rate_multiplier": 1.0
      }
    }
  }
}
```

### Try using your fine-tuned model

Evaluate your newly optimized model by using it! When the fine-tuned model finishes training, use its ID in either the [Responses](https://platform.openai.com/docs/api-reference/responses) or [Chat Completions](https://platform.openai.com/docs/api-reference/chat) API, just as you would an OpenAI base model.

Use your model in the PlaygroundUse your model in the PlaygroundUse your model with an API callUse your model with an API call

Use your model in the Playground

1. Navigate to your fine-tuning job in [the dashboard](https://platform.openai.com/finetune).
2. In the right pane, navigate to **Output model** and copy the model ID. It should start with `ft:…`
3. Open the [Playground](https://platform.openai.com/playground).
4. In the **Model** dropdown menu, paste the model ID. Here, you should also see other fine-tuned models you've created.
5. Run some prompts and see how your fine-tuned performs!

Use your model with an API call

```bash
1
2
3
4
5
6
7
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "ft:gpt-4.1-nano-2025-04-14:openai::BTz2REMH",
    "input": "What is 4+4?"
  }'
```

### Use checkpoints if needed

Checkpoints are models you can use. We create a full model checkpoint for you at the end of each training epoch. They're useful in cases where your fine-tuned model improves early on but then memorizes the dataset instead of learning generalizable knowledge—called \_overfitting. Checkpoints provide versions of your customized model from various moments in the process.

Find checkpoints in the dashboardFind checkpoints in the dashboardQuery the API for checkpointsQuery the API for checkpoints

Find checkpoints in the dashboard

1. Navigate to the [fine-tuning dashboard](https://platform.openai.com/finetune).
2. In the left panel, select the job you want to investigate. Wait until it succeeds.
3. In the right panel, scroll to the list of checkpoints.
4. Hover over any checkpoint to see a link to launch in the Playground.
5. Test the checkpoint model's behavior by prompting it in the Playground.

Query the API for checkpoints

1. Wait until a job succeeds, which you can verify by [querying the status of a job](https://platform.openai.com/docs/api-reference/fine-tuning/retrieve).
2. [Query the checkpoints endpoint](https://platform.openai.com/docs/api-reference/fine-tuning/list-checkpoints) with your fine-tuning job ID to access a list of model checkpoints for the fine-tuning job.
3. Find the `fine_tuned_model_checkpoint` field for the name of the model checkpoint.
4. Use this model just like you would the final fine-tuned model.

The checkpoint object contains `metrics` data to help you determine the usefulness of this model. As an example, the response looks like this:

```json
1
2
3
4
5
6
7
8
9
10
11
12
{
  "object": "fine_tuning.job.checkpoint",
  "id": "ftckpt_zc4Q7MP6XxulcVzj4MZdwsAB",
  "created_at": 1519129973,
  "fine_tuned_model_checkpoint": "ft:gpt-3.5-turbo-0125:my-org:custom-suffix:96olL566:ckpt-step-2000",
  "metrics": {
    "full_valid_loss": 0.134,
    "full_valid_mean_token_accuracy": 0.874
  },
  "fine_tuning_job_id": "ftjob-abc123",
  "step_number": 2000
}
```

Each checkpoint specifies:

- `step_number`: The step at which the checkpoint was created (where each epoch is number of steps in the training set divided by the batch size)
- `metrics`: An object containing the metrics for your fine-tuning job at the step when the checkpoint was created

Currently, only the checkpoints for the last three epochs of the job are saved and available for use.

## Next steps

Now that you know the basics of supervised fine-tuning, explore these other methods as well.

[Vision fine-tuning\\
\\
Learn to fine-tune for computer vision with image inputs.](https://platform.openai.com/docs/guides/vision-fine-tuning) [Direct preference optimization\\
\\
Fine-tune a model using direct preference optimization (DPO).](https://platform.openai.com/docs/guides/direct-preference-optimization) [Reinforcement fine-tuning\\
\\
Fine-tune a reasoning model by grading its outputs.](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_text-to-speech.md
---

---

url: "<https://platform.openai.com/docs/guides/text-to-speech>"
title: "Text to speech - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Text to speech

Learn how to turn text into lifelike spoken audio.

Copy page

The Audio API provides a [`speech`](https://platform.openai.com/docs/api-reference/audio/createSpeech) endpoint based on our [GPT-4o mini TTS (text-to-speech) model](https://platform.openai.com/docs/models/gpt-4o-mini-tts). It comes with 11 built-in voices and can be used to:

- Narrate a written blog post
- Produce spoken audio in multiple languages
- Give realtime audio output using streaming

Here's an example of the `alloy` voice:

Our [usage policies](https://openai.com/policies/usage-policies) require you to provide a clear disclosure to end users that the TTS voice they are hearing is AI-generated and not a human voice.

## Quickstart

The `speech` endpoint takes three key inputs:

1. The [model](https://platform.openai.com/docs/api-reference/audio/createSpeech#audio-createspeech-model) you're using
2. The [text](https://platform.openai.com/docs/api-reference/audio/createSpeech#audio-createspeech-input) to be turned into audio
3. The [voice](https://platform.openai.com/docs/api-reference/audio/createSpeech#audio-createspeech-voice) that will speak the output

Here's a simple request example:

Generate spoken audio from input text

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI();
const speechFile = path.resolve("./speech.mp3");

const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "coral",
  input: "Today is a wonderful day to build something people love!",
  instructions: "Speak in a cheerful and positive tone.",
});

const buffer = Buffer.from(await mp3.arrayBuffer());
await fs.promises.writeFile(speechFile, buffer);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from pathlib import Path
from openai import OpenAI

client = OpenAI()
speech_file_path = Path(__file__).parent / "speech.mp3"

with client.audio.speech.with_streaming_response.create(
    model="gpt-4o-mini-tts",
    voice="coral",
    input="Today is a wonderful day to build something people love!",
    instructions="Speak in a cheerful and positive tone.",
) as response:
    response.stream_to_file(speech_file_path)
```

```bash
1
2
3
4
5
6
7
8
9
10
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini-tts",
    "input": "Today is a wonderful day to build something people love!",
    "voice": "coral",
    "instructions": "Speak in a cheerful and positive tone."
  }' \
  --output speech.mp3
```

By default, the endpoint outputs an MP3 of the spoken audio, but you can configure it to output any [supported format](https://platform.openai.com/docs/guides/text-to-speech#supported-output-formats).

### Text-to-speech models

For intelligent realtime applications, use the `gpt-4o-mini-tts` model, our newest and most reliable text-to-speech model. You can prompt the model to control aspects of speech, including:

- Accent
- Emotional range
- Intonation
- Impressions
- Speed of speech
- Tone
- Whispering

Our other text-to-speech models are `tts-1` and `tts-1-hd`. The `tts-1` model provides lower latency, but at a lower quality than the `tts-1-hd` model.

### Voice options

The TTS endpoint provides 11 built‑in voices to control how speech is rendered from text. **Hear and play with these voices in [OpenAI.fm](https://openai.fm/), our interactive demo for trying the latest text-to-speech model in the OpenAI API**. Voices are currently optimized for English.

- `alloy`
- `ash`
- `ballad`
- `coral`
- `echo`
- `fable`
- `nova`
- `onyx`
- `sage`
- `shimmer`

If you're using the [Realtime API](https://platform.openai.com/docs/guides/realtime), note that the set of available voices is slightly different—see the [realtime conversations guide](https://platform.openai.com/docs/guides/realtime-conversations#voice-options) for current realtime voices.

### Streaming realtime audio

The Speech API provides support for realtime audio streaming using [chunk transfer encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding). This means the audio can be played before the full file is generated and made accessible.

Stream spoken audio from input text directly to your speakers

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
import OpenAI from "openai";
import { playAudio } from "openai/helpers/audio";

const openai = new OpenAI();

const response = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "coral",
  input: "Today is a wonderful day to build something people love!",
  instructions: "Speak in a cheerful and positive tone.",
  response_format: "wav",
});

await playAudio(response);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import asyncio

from openai import AsyncOpenAI
from openai.helpers import LocalAudioPlayer

openai = AsyncOpenAI()

async def main() -> None:
    async with openai.audio.speech.with_streaming_response.create(
        model="gpt-4o-mini-tts",
        voice="coral",
        input="Today is a wonderful day to build something people love!",
        instructions="Speak in a cheerful and positive tone.",
        response_format="pcm",
    ) as response:
        await LocalAudioPlayer().play(response)

if __name__ == "__main__":
    asyncio.run(main())
```

```bash
1
2
3
4
5
6
7
8
9
10
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini-tts",
    "input": "Today is a wonderful day to build something people love!",
    "voice": "coral",
    "instructions": "Speak in a cheerful and positive tone.",
    "response_format": "wav"
  }' | ffplay -i -
```

For the fastest response times, we recommend using `wav` or `pcm` as the response format.

## Supported output formats

The default response format is `mp3`, but other formats like `opus` and `wav` are available.

- **MP3**: The default response format for general use cases.
- **Opus**: For internet streaming and communication, low latency.
- **AAC**: For digital audio compression, preferred by YouTube, Android, iOS.
- **FLAC**: For lossless audio compression, favored by audio enthusiasts for archiving.
- **WAV**: Uncompressed WAV audio, suitable for low-latency applications to avoid decoding overhead.
- **PCM**: Similar to WAV but contains the raw samples in 24kHz (16-bit signed, low-endian), without the header.

## Supported languages

The TTS model generally follows the Whisper model in terms of language support. Whisper [supports the following languages](https://github.com/openai/whisper#available-models-and-languages) and performs well, despite voices being optimized for English:

Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Marathi, Maori, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, and Welsh.

You can generate spoken audio in these languages by providing input text in the language of your choice.

## Customization and ownership

### Custom voices

We do not support custom voices or creating a copy of your own voice.

### Who owns the output?

As with all outputs from our API, the person who created them owns the output. You are still required to inform end users that they are hearing audio generated by AI and not a real person talking to them. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_text_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/text?api-mode=responses>"
title: "Text generation and prompting - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Text generation and prompting

Learn how to prompt a model to generate text.

Copy page

With the OpenAI API, you can use a [large language model](https://platform.openai.com/docs/models) to generate text from a prompt, as you might using [ChatGPT](https://chatgpt.com/). Models can generate almost any kind of text response—like code, mathematical equations, structured JSON data, or human-like prose.

Here's a simple example using the [Responses API](https://platform.openai.com/docs/api-reference/responses).

Generate text from a simple prompt

javascript

```javascript
1
2
3
4
5
6
7
8
9
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input="Write a one-sentence bedtime story about a unicorn."
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "input": "Write a one-sentence bedtime story about a unicorn."
    }'
```

An array of content generated by the model is in the `output` property of the response. In this simple example, we have just one output which looks like this:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
[\
    {\
        "id": "msg_67b73f697ba4819183a15cc17d011509",\
        "type": "message",\
        "role": "assistant",\
        "content": [\
            {\
                "type": "output_text",\
                "text": "Under the soft glow of the moon, Luna the unicorn danced through fields of twinkling stardust, leaving trails of dreams for every child asleep.",\
                "annotations": []\
            }\
        ]\
    }\
]
```

**The `output` array often has more than one item in it!** It can contain tool calls, data about reasoning tokens generated by [reasoning models](https://platform.openai.com/docs/guides/reasoning), and other items. It is not safe to assume that the model's text output is present at `output[0].content[0].text`.

Some of our [official SDKs](https://platform.openai.com/docs/libraries) include an `output_text` property on model responses for convenience, which aggregates all text outputs from the model into a single string. This may be useful as a shortcut to access text output from the model.

In addition to plain text, you can also have the model return structured data in JSON format - this feature is called [**Structured Outputs**](https://platform.openai.com/docs/guides/structured-outputs).

## Choosing a model

A key choice to make when generating content through the API is which model you want to use - the `model` parameter of the code samples above. [You can find a full listing of available models here](https://platform.openai.com/docs/models). Here are a few factors to consider when choosing a model for text generation.

- **[Reasoning models](https://platform.openai.com/docs/guides/reasoning)** generate an internal chain of thought to analyze the input prompt, and excel at understanding complex tasks and multi-step planning. They are also generally slower and more expensive to use than GPT models.
- **GPT models** are fast, cost-efficient, and highly intelligent, but benefit from more explicit instructions around how to accomplish tasks.
- **Large and small (mini or nano) models** offer trade-offs for speed, cost, and intelligence. Large models are more effective at understanding prompts and solving problems across domains, while small models are generally faster and cheaper to use.

When in doubt, [`gpt-4.1`](https://platform.openai.com/docs/models/gpt-4.1) offers a solid combination of intelligence, speed, and cost effectiveness.

## Prompt engineering

**Prompt engineering** is the process of writing effective instructions for a model, such that it consistently generates content that meets your requirements.

Because the content generated from a model is non-deterministic, it is a combination of art and science to build a prompt that will generate content in the format you want. However, there are a number of techniques and best practices you can apply to consistently get good results from a model.

Some prompt engineering techniques will work with every model, like using message roles. But different model types (like reasoning versus GPT models) might need to be prompted differently to produce the best results. Even different snapshots of models within the same family could produce different results. So as you are building more complex applications, we strongly recommend that you:

- Pin your production applications to specific [model snapshots](https://platform.openai.com/docs/models) (like `gpt-4.1-2025-04-14` for example) to ensure consistent behavior.
- Build [evals](https://platform.openai.com/docs/guides/evals) that will measure the behavior of your prompts, so that you can monitor the performance of your prompts as you iterate on them, or when you change and upgrade model versions.

Now, let's examine some tools and techniques available to you to construct prompts.

## Message roles and instruction following

You can provide instructions to the model with [differing levels of authority](https://model-spec.openai.com/2025-02-12.html#chain_of_command) using the `instructions` API parameter or **message roles**.

The `instructions` parameter gives the model high-level instructions on how it should behave while generating a response, including tone, goals, and examples of correct responses. Any instructions provided this way will take priority over a prompt in the `input` parameter.

Generate text with instructions

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    instructions: "Talk like a pirate.",
    input: "Are semicolons optional in JavaScript?",
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    instructions="Talk like a pirate.",
    input="Are semicolons optional in JavaScript?",
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "instructions": "Talk like a pirate.",
        "input": "Are semicolons optional in JavaScript?"
    }'
```

The example above is roughly equivalent to using the following input messages in the `input` array:

Generate text with messages using different roles

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    input: [\
        {\
            role: "developer",\
            content: "Talk like a pirate."\
        },\
        {\
            role: "user",\
            content: "Are semicolons optional in JavaScript?",\
        },\
    ],
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input=[\
        {\
            "role": "developer",\
            "content": "Talk like a pirate."\
        },\
        {\
            "role": "user",\
            "content": "Are semicolons optional in JavaScript?"\
        }\
    ]
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "input": [\
            {\
                "role": "developer",\
                "content": "Talk like a pirate."\
            },\
            {\
                "role": "user",\
                "content": "Are semicolons optional in JavaScript?"\
            }\
        ]
    }'
```

Note that the `instructions` parameter only applies to the current response generation request. If you are [managing conversation state](https://platform.openai.com/docs/guides/conversation-state) with the `previous_response_id` parameter, the `instructions` used on previous turns will not be present in the context.

The [OpenAI model spec](https://model-spec.openai.com/2025-02-12.html#chain_of_command) describes how our models give different levels of priority to messages with different roles.

| `developer` | `user` | `assistant` |
| --- | --- | --- |
| `developer` messages are instructions provided by the application developer, prioritized ahead of `user` messages. | `user` messages are instructions provided by an end user, prioritized behind `developer` messages. | Messages generated by the model have the `assistant` role. |

A multi-turn conversation may consist of several messages of these types, along with other content types provided by both you and the model. Learn more about [managing conversation state here](https://platform.openai.com/docs/guides/conversation-state).

You could think about `developer` and `user` messages like a function and its arguments in a programming language.

- `developer` messages provide the system's rules and business logic, like a function definition.
- `user` messages provide inputs and configuration to which the `developer` message instructions are applied, like arguments to a function.

## Message formatting with Markdown and XML

When writing `developer` and `user` messages, you can help the model understand logical boundaries of your prompt and context data using a combination of [Markdown](https://commonmark.org/help/) formatting and [XML tags](https://www.w3.org/TR/xml/).

Markdown headers and lists can be helpful to mark distinct sections of a prompt, and to communicate hierarchy to the model. They can also potentially make your prompts more readable during development. XML tags can help delineate where one piece of content (like a supporting document used for reference) begins and ends. XML attributes can also be used to define metadata about content in the prompt that can be referenced by your instructions.

In general, a developer message will contain the following sections, usually in this order (though the exact optimal content and order may vary by which model you are using):

- **Identity:** Describe the purpose, communication style, and high-level goals of the assistant.
- **Instructions:** Provide guidance to the model on how to generate the response you want. What rules should it follow? What should the model do, and what should the model never do? This section could contain many subsections as relevant for your use case, like how the model should [call custom functions](https://platform.openai.com/docs/guides/function-calling).
- **Examples:** Provide examples of possible inputs, along with the desired output from the model.
- **Context:** Give the model any additional information it might need to generate a response, like private/proprietary data outside its training data, or any other data you know will be particularly relevant. This content is usually best positioned near the end of your prompt, as you may include different context for different generation requests.

Below is an example of using Markdown and XML tags to construct a `developer` message with distinct sections and supporting examples.

Example promptExample promptAPI requestAPI request

Example prompt

A developer message for code generation

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
# Identity

You are coding assistant that helps enforce the use of snake case
variables in JavaScript code, and writing code that will run in
Internet Explorer version 6.

# Instructions

* When defining variables, use snake case names (e.g. my_variable)
  instead of camel case names (e.g. myVariable).
* To support old browsers, declare variables using the older
  "var" keyword.
* Do not give responses with Markdown formatting, just return
  the code as requested.

# Examples

<user_query>
How do I declare a string variable for a first name?
</user_query>

<assistant_response>
var first_name = "Anna";
</assistant_response>
```

API request

Send a prompt to generate code through the API

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
import fs from "fs/promises";
import OpenAI from "openai";
const client = new OpenAI();

const instructions = await fs.readFile("prompt.txt", "utf-8");

const response = await client.responses.create({
    model: "gpt-4.1",
    instructions,
    input: "How would I declare a variable for a last name?",
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from openai import OpenAI
client = OpenAI()

with open("prompt.txt", "r", encoding="utf-8") as f:
    instructions = f.read()

response = client.responses.create(
    model="gpt-4.1",
    instructions=instructions,
    input="How would I declare a variable for a last name?",
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1",
    "instructions": "'"$(< prompt.txt)"'",
    "input": "How would I declare a variable for a last name?"
  }'
```

#### Save on cost and latency with prompt caching

When constructing a message, you should try and keep content that you expect to use over and over in your API requests at the beginning of your prompt, **and** among the first API parameters you pass in the JSON request body to [Chat Completions](https://platform.openai.com/docs/api-reference/chat) or [Responses](https://platform.openai.com/docs/api-reference/responses). This enables you to maximize cost and latency savings from [prompt caching](https://platform.openai.com/docs/guides/prompt-caching).

## Few-shot learning

Few-shot learning lets you steer a large language model toward a new task by including a handful of input/output examples in the prompt, rather than [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) the model. The model implicitly "picks up" the pattern from those examples and applies it to a prompt. When providing examples, try to show a diverse range of possible inputs with the desired outputs.

Typically, you will provide examples as part of a `developer` message in your API request. Here's an example `developer` message containing examples that show a model how to classify positive or negative customer service reviews.

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
# Identity

You are a helpful assistant that labels short product reviews as
Positive, Negative, or Neutral.

# Instructions

* Only output a single word in your response with no additional formatting
  or commentary.
* Your response should only be one of the words "Positive", "Negative", or
  "Neutral" depending on the sentiment of the product review you are given.

# Examples

<product_review id="example-1">
I absolutely love this headphones — sound quality is amazing!
</product_review>

<assistant_response id="example-1">
Positive
</assistant_response>

<product_review id="example-2">
Battery life is okay, but the ear pads feel cheap.
</product_review>

<assistant_response id="example-2">
Neutral
</assistant_response>

<product_review id="example-3">
Terrible customer service, I'll never buy from them again.
</product_review>

<assistant_response id="example-3">
Negative
</assistant_response>
```

## Include relevant context information

It is often useful to include additional context information the model can use to generate a response within the prompt you give the model. There are a few common reasons why you might do this:

- To give the model access to proprietary data, or any other data outside the data set the model was trained on.
- To constrain the model's response to a specific set of resources that you have determined will be most beneficial.

The technique of adding additional relevant context to the model generation request is sometimes called **retrieval-augmented generation (RAG)**. You can add additional context to the prompt in many different ways, from querying a vector database and including the text you get back into a prompt, or by using OpenAI's built-in [file search tool](https://platform.openai.com/docs/guides/tools-file-search) to generate content based on uploaded documents.

#### Planning for the context window

Models can only handle so much data within the context they consider during a generation request. This memory limit is called a **context window**, which is defined in terms of [tokens](https://blogs.nvidia.com/blog/ai-tokens-explained) (chunks of data you pass in, from text to images).

Models have different context window sizes from the low 100k range up to one million tokens for newer GPT-4.1 models. [Refer to the model docs](https://platform.openai.com/docs/models) for specific context window sizes per model.

## Prompting GPT-4.1 models

GPT models like [`gpt-4.1`](https://platform.openai.com/docs/models/gpt-4.1) benefit from precise instructions that explicitly provide the logic and data required to complete the task in the prompt. GPT-4.1 in particular is highly steerable and responsive to well-specified prompts. To get the most out of GPT-4.1, refer to the prompting guide in the cookbook.

[GPT-4.1 prompting guide\\
\\
Get the most out of prompting GPT-4.1 with the tips and tricks in this\\
prompting guide, extracted from real-world use cases and practical\\
experience.](https://cookbook.openai.com/examples/gpt4-1_prompting_guide)

#### GPT-4.1 prompting best practices

While the [cookbook](https://cookbook.openai.com/examples/gpt4-1_prompting_guide) has the best and most comprehensive guidance for prompting this model, here are a few best practices to keep in mind.

Building agentic workflows

### System Prompt Reminders

In order to best utilize the agentic capabilities of GPT-4.1, we recommend including three key types of reminders in all agent prompts for persistence, tool calling, and planning. As a whole, we find that these three instructions transform the model's behavior from chatbot-like into a much more “eager” agent, driving the interaction forward autonomously and independently. Here are a few examples:

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
## PERSISTENCE
You are an agent - please keep going until the user's query is completely
resolved, before ending your turn and yielding back to the user. Only
terminate your turn when you are sure that the problem is solved.

## TOOL CALLING
If you are not sure about file content or codebase structure pertaining to
the user's request, use your tools to read files and gather the relevant
information: do NOT guess or make up an answer.

## PLANNING
You MUST plan extensively before each function call, and reflect
extensively on the outcomes of the previous function calls. DO NOT do this
entire process by making function calls only, as this can impair your
ability to solve the problem and think insightfully.
```

#### Tool Calls

Compared to previous models, GPT-4.1 has undergone more training on effectively utilizing tools passed as arguments in an OpenAI API request. We encourage developers to exclusively use the tools field of API requests to pass tools for best understanding and performance, rather than manually injecting tool descriptions into the system prompt and writing a separate parser for tool calls, as some have reported doing in the past.

#### Diff Generation

Correct diffs are critical for coding applications, so we've significantly improved performance at this task for GPT-4.1. In our cookbook, we open-source a recommended diff format on which GPT-4.1 has been extensively trained. That said, the model should generalize to any well-specified format.

Using long context

GPT-4.1 has a performant 1M token input context window, and will be useful for a variety of long context tasks, including structured document parsing, re-ranking, selecting relevant information while ignoring irrelevant context, and performing multi-hop reasoning using context.

#### Optimal Context Size

We show perfect performance at needle-in-a-haystack evals up to our full context size, and we've observed very strong performance at complex tasks with a mix of relevant and irrelevant code and documents in the range of hundreds of thousands of tokens.

#### Delimiters

We tested a variety of delimiters for separating context provided to the model against our long context evals. Briefly, XML and the format demonstrated by Lee et al. ( [ref](https://arxiv.org/pdf/2406.13121)) tend to perform well, while JSON performed worse for this task. See our cookbook for prompt examples.

#### Prompt Organization

Especially in long context usage, placement of instructions and context can substantially impact performance. In our experiments, we found that it was optimal to put critical instructions, including the user query, at both the top and the bottom of the prompt; this elicited marginally better performance from the model than putting them only at the top, and much better performance than only at the bottom.

Prompting for chain of thought

As mentioned above, GPT-4.1 isn’t a reasoning model, but prompting the model to think step by step (called “chain of thought”) can be an effective way for a model to break down problems into more manageable pieces. The model has been trained to perform well at agentic reasoning and real-world problem solving, so it shouldn’t require much prompting to do well.

We recommend starting with this basic chain-of-thought instruction at the end of your prompt:

```text
First, think carefully step by step about what documents are needed to answer the query. Then, print out the TITLE and ID of each document. Then, format the IDs into a list.
```

From there, you should improve your CoT prompt by auditing failures in your particular examples and evals, and addressing systematic planning and reasoning errors with more explicit instructions. See our cookbook for a prompt example demonstrating a more opinionated reasoning strategy.

Instruction following

GPT-4.1 exhibits outstanding instruction-following performance, which developers can leverage to precisely shape and control the outputs for their particular use cases. However, since the model follows instructions more literally than its predecessors, may need to provide more explicit specification around what to do or not do, and existing prompts optimized for other models may not immediately work with this model.

#### Recommended Workflow

Here is our recommended workflow for developing and debugging instructions in prompts:

- Start with an overall “Response Rules” or “Instructions” section with high-level guidance and bullet points.
- If you'd like to change a more specific behavior, add a section containing more details for that category, like `## Sample Phrases`.
- If there are specific steps you'd like the model to follow in its workflow, add an ordered list and instruct the model to follow these steps.
- If behavior still isn't working as expected, check for conflicting, underspecified, or incorrect\` instructions and examples. If there are conflicting instructions, GPT-4.1 tends to follow the one closer to the end of the prompt.
- Add examples that demonstrate desired behavior; ensure that any important behavior demonstrated in your examples are also cited in your rules.
- It's generally not necessary to use all-caps or other incentives like bribes or tips, but developers can experiment with this for extra emphasis if so desired.

#### Common Failure Modes

These failure modes are not unique to GPT-4.1, but we share them here for general awareness and ease of debugging.

- Instructing a model to always follow a specific behavior can occasionally induce adverse effects. For instance, if told “you must call a tool before responding to the user,” models may hallucinate tool inputs or call the tool with null values if they do not have enough information. Adding “if you don’t have enough information to call the tool, ask the user for the information you need” should mitigate this.
- When provided sample phrases, models can use those quotes verbatim and start to sound repetitive to users. Ensure you instruct the model to vary them as necessary.
- Without specific instructions, some models can be eager to provide additional prose to explain their decisions, or output more formatting in responses than may be desired. Provide instructions and potentially examples to help mitigate.

See our cookbook for an example customer service prompt that demonstrates these principles.

## Prompting reasoning models

There are some differences to consider when prompting a [reasoning model](https://platform.openai.com/docs/guides/reasoning) versus prompting a GPT model. Generally speaking, reasoning models will provide better results on tasks with only high-level guidance. This differs from GPT models, which benefit from very precise instructions.

You could think about the difference between reasoning and GPT models like this.

- A reasoning model is like a senior co-worker. You can give them a goal to achieve and trust them to work out the details.
- A GPT model is like a junior coworker. They'll perform best with explicit instructions to create a specific output.

For more information on best practices when using reasoning models, [refer to this guide](https://platform.openai.com/docs/guides/reasoning-best-practices).

## Next steps

Now that you known the basics of text inputs and outputs, you might want to check out one of these resources next.

[Build a prompt in the Playground\\
\\
Use the Playground to develop and iterate on prompts.](https://platform.openai.com/playground) [Generate JSON data with Structured Outputs\\
\\
Ensure JSON data emitted from a model conforms to a JSON schema.](https://platform.openai.com/docs/guides/structured-outputs) [Full API reference\\
\\
Check out all the options for text generation in the API reference.](https://platform.openai.com/docs/api-reference/responses)

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-code-interpreter.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-code-interpreter>"
title: "Code Interpreter - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Code Interpreter

Allow models to write and run Python to solve problems.

Copy page

The Code Interpreter tool allows models to write and run Python code in a sandboxed environment to solve complex problems in domains like data analysis, coding, and math. Use it for:

- Processing files with diverse data and formatting
- Generating files with data and images of graphs
- Writing and running code iteratively to solve problems—for example, a model that writes code that fails to run can keep rewriting and running that code until it succeeds

Code Interpreter is available in the [Responses API](https://platform.openai.com/docs/api-reference/responses) across all models.

Our latest reasoning models o3 and o4-mini are trained to use Code Interpreter to deeply understand images. They can crop, zoom in, rotate, and perform other image processing techniques to boost their visual intelligence.

Code Interpreter is charged at $0.03 per container creation. See the [pricing page](https://platform.openai.com/docs/pricing) for information about usage cost.

While we call this tool Code Interpreter, the model knows it as the `python` tool. Models usually understand prompts that refer to the code interpreter tool. However, the most explicit way to invoke this tool is to ask for "the python tool" in your prompts.

Here's an example of calling the Responses API with a tool call to Code Interpreter:

Use the Responses API with Code Interpreter

python

```bash
1
2
3
4
5
6
7
8
9
10
11
12
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-4.1",
    "tools": [{\
      "type": "code_interpreter",\
      "container": { "type": "auto" }\
    }],
    "instructions": "You are a personal math tutor. When asked a math question, write and run code to answer the question.",
    "input": "I need to solve the equation 3x + 11 = 14. Can you help me?"
  }'
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import OpenAI from "openai";
const client = new OpenAI();

const resp = await client.responses.create({
  model: "gpt-4.1",
  tools: [\
    {\
      type: "code_interpreter",\
      container: { type: "auto" }\
    }\
  ],
  instructions: "You are a personal math tutor. When asked a math question, write and run code to answer the question.",
  input: "I need to solve the equation 3x + 11 = 14. Can you help me?",
});

console.log(resp.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
from openai import OpenAI
client = OpenAI()

resp = client.responses.create(
  model="gpt-4.1",
  tools=[\
    {\
      "type": "code_interpreter",\
      "container": { "type": "auto" }\
    }\
  ],
  instructions="You are a personal math tutor. When asked a math question, write and run code to answer the question.",
  input="I need to solve the equation 3x + 11 = 14. Can you help me?",
)

print(resp.output_text)
```

## Containers

The Code Interpreter tool requires a [container object](https://platform.openai.com/docs/api-reference/containers/object). A container is a fully sandboxed virtual machine that the model can run Python code in. This container can contain files that you upload, or that it generates.

There are two ways to create containers:

1. Auto mode: as seen in the example above, you can do this by passing the `"container": { "type": "auto", files: ["file-1", "file-2"] }` property in the tool configuration while creating a new Response object. This automatically creates a new container, or reuses an active container that was used by a previous `code_interpreter_call` item in the model's context. Look for the `code_interpreter_call` item in the output of this API request to find the `container_id` that was generated or used.
2. Explicit mode: here, you explicitly [create a container](https://platform.openai.com/docs/api-reference/containers/createContainers) using the `v1/containers` endpoint, and assign its `id` as the `container` value in the tool configuration in the Response object. For example:

Use explicit container creation

python

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
curl https://api.openai.com/v1/containers \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "My Container"
      }'

# Use the returned container id in the next call:
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1",
    "tools": [{\
      "type": "code_interpreter",\
      "container": "cntr_abc123"\
    }],
    "tool_choice": "required",
    "input": "use the python tool to calculate what is 4 * 3.82. and then find its square root and then find the square root of that result"
  }'
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
from openai import OpenAI
client = OpenAI()

container = client.containers.create(name="test-container")

response = client.responses.create(
    model="gpt-4.1",
    tools=[{\
        "type": "code_interpreter",\
        "container": container.id\
    }],
    tool_choice="required",
    input="use the python tool to calculate what is 4 * 3.82. and then find its square root and then find the square root of that result"
)

print(response.output_text)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
import OpenAI from "openai";
const client = new OpenAI();

const container = await client.containers.create({ name: "test-container" });

const resp = await client.responses.create({
    model: "gpt-4.1",
    tools: [\
      {\
        type: "code_interpreter",\
        container: container.id\
      }\
    ],
    tool_choice: "required",
    input: "use the python tool to calculate what is 4 * 3.82. and then find its square root and then find the square root of that result"
});

console.log(resp.output_text);
```

Note that containers created with the auto mode are also accessible using the `v1/containers` endpoint.

### Expiration

We highly recommend you treat containers as ephemeral and store all data related to the use of this tool on your own systems. Expiration details:

- A container expires if it is not used for 20 minutes. When this happens, using the container in `v1/responses` will fail. You'll still be able to see a snapshot of the container's metadata at its expiry, but all data associated with the container will be discarded from our systems and not recoverable. You should download any files you may need from the container while it is active.
- You can't move a container from an expired state to an active one. Instead, create a new container and upload files again. Note that any state in the old container's memory (like python objects) will be lost.
- Any container operation, like retrieving the container, or adding or deleting files from the container, will automatically refresh the container's `last_active_at` time.

## Work with files

When running Code Interpreter, the model can create its own files. For example, if you ask it to construct a plot, or create a CSV, it creates these images directly on your container. When it does so, it cites these files in the `annotations` of its next message. Here's an example:

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
{
  "id": "msg_682d514e268c8191a89c38ea318446200f2610a7ec781a4f",
  "content": [\
    {\
      "annotations": [\
        {\
          "file_id": "cfile_682d514b2e00819184b9b07e13557f82",\
          "index": null,\
          "type": "container_file_citation",\
          "container_id": "cntr_682d513bb0c48191b10bd4f8b0b3312200e64562acc2e0af",\
          "end_index": 0,\
          "filename": "cfile_682d514b2e00819184b9b07e13557f82.png",\
          "start_index": 0\
        }\
      ],\
      "text": "Here is the histogram of the RGB channels for the uploaded image. Each curve represents the distribution of pixel intensities for the red, green, and blue channels. Peaks toward the high end of the intensity scale (right-hand side) suggest a lot of brightness and strong warm tones, matching the orange and light background in the image. If you want a different style of histogram (e.g., overall intensity, or quantized color groups), let me know!",\
      "type": "output_text",\
      "logprobs": []\
    }\
  ],
  "role": "assistant",
  "status": "completed",
  "type": "message"
}
```

You can download these constructed files by calling the [get container file content](https://platform.openai.com/docs/api-reference/container-files/retrieveContainerFileContent) method.

Any [files in the model input](https://platform.openai.com/docs/guides/pdf-files) get automatically uploaded to the container. You do not have to explicitly upload it to the container.

### Supported files

| File format | MIME type |
| --- | --- |
| `.c` | `text/x-c` |
| `.cs` | `text/x-csharp` |
| `.cpp` | `text/x-c++` |
| `.csv` | `text/csv` |
| `.doc` | `application/msword` |
| `.docx` | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| `.html` | `text/html` |
| `.java` | `text/x-java` |
| `.json` | `application/json` |
| `.md` | `text/markdown` |
| `.pdf` | `application/pdf` |
| `.php` | `text/x-php` |
| `.pptx` | `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| `.py` | `text/x-python` |
| `.py` | `text/x-script.python` |
| `.rb` | `text/x-ruby` |
| `.tex` | `text/x-tex` |
| `.txt` | `text/plain` |
| `.css` | `text/css` |
| `.js` | `text/javascript` |
| `.sh` | `application/x-sh` |
| `.ts` | `application/typescript` |
| `.csv` | `application/csv` |
| `.jpeg` | `image/jpeg` |
| `.jpg` | `image/jpeg` |
| `.gif` | `image/gif` |
| `.pkl` | `application/octet-stream` |
| `.png` | `image/png` |
| `.tar` | `application/x-tar` |
| `.xlsx` | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| `.xml` | `application/xml or "text/xml"` |
| `.zip` | `application/zip` |

## Usage notes

| API Availability | Rate limits | Notes |
| --- | --- | --- |
| [Responses](https://platform.openai.com/docs/api-reference/responses)<br>[Chat Completions](https://platform.openai.com/docs/api-reference/chat)<br>[Assistants](https://platform.openai.com/docs/api-reference/assistants) | 100 RPM per org | [Pricing](https://platform.openai.com/docs/pricing#built-in-tools)<br>[ZDR and data residency](https://platform.openai.com/docs/guides/your-data) | # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-computer-use.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-computer-use>"
title: "Computer use - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Computer use

Build a computer-using agent that can perform tasks on your behalf.

Copy page

**Computer use** is a practical application of our [Computer-Using Agent](https://openai.com/index/computer-using-agent/) (CUA) model, `computer-use-preview`, which combines the vision capabilities of [GPT-4o](https://platform.openai.com/docs/models/gpt-4o) with advanced reasoning to simulate controlling computer interfaces and performing tasks.

Computer use is available through the [Responses API](https://platform.openai.com/docs/guides/responses-vs-chat-completions). It is not available on Chat Completions.

Computer use is in beta. Because the model is still in preview and may be susceptible to exploits and inadvertent mistakes, we discourage trusting it in fully authenticated environments or for high-stakes tasks.
See [limitations](https://platform.openai.com/docs/guides/tools-computer-use#limitations) and [risk and safety best practices](https://platform.openai.com/docs/guides/tools-computer-use#risks-and-safety) below. You must use the Computer Use tool in line with OpenAI's [Usage Policy](https://openai.com/policies/usage-policies/) and [Business Terms](https://openai.com/policies/business-terms/).

## How it works

The computer use tool operates in a continuous loop. It sends computer actions, like `click(x,y)` or `type(text)`, which your code executes on a computer or browser environment and then returns screenshots of the outcomes back to the model.

In this way, your code simulates the actions of a human using a computer interface, while our model uses the screenshots to understand the state of the environment and suggest next actions.

This loop lets you automate many tasks requiring clicking, typing, scrolling, and more. For example, booking a flight, searching for a product, or filling out a form.

Refer to the [integration section](https://platform.openai.com/docs/guides/tools-computer-use#integration) below for more details on how to integrate the computer use tool, or check out our sample app repository to set up an environment and try example integrations.

[CUA sample app\\
\\
Examples of how to integrate the computer use tool in different environments](https://github.com/openai/openai-cua-sample-app)

## Setting up your environment

Before integrating the tool, prepare an environment that can capture screenshots and execute the recommended actions. We recommend using a sandboxed environment for safety reasons.

In this guide, we'll show you examples using either a local browsing environment or a local virtual machine, but there are more example computer environments in our sample app.

Set up a local browsing environment

If you want to try out the computer use tool with minimal setup, you can use a browser automation framework such as [Playwright](https://playwright.dev/) or [Selenium](https://www.selenium.dev/).

Running a browser automation framework locally can pose security risks. We recommend the following setup to mitigate them:

- Use a sandboxed environment
- Set `env` to an empty object to avoid exposing host environment variables to the browser
- Set flags to disable extensions and the file system

#### Start a browser instance

You can start browser instances using your preferred language by installing the corresponding SDK.

For example, to start a Playwright browser instance, install the Playwright SDK:

- Python: `pip install playwright`
- JavaScript: `npm i playwright` then `npx playwright install`

Then run the following code:

Start a browser instance

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: false,
  chromiumSandbox: true,
  env: {},
  args: ["--disable-extensions", "--disable-file-system"],
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1024, height: 768 });
await page.goto("https://bing.com");

await page.waitForTimeout(10000);

browser.close();
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=False,
        chromium_sandbox=True,
        env={},
        args=[\
            "--disable-extensions",\
            "--disable-file-system"\
        ]
    )
    page = browser.new_page()
    page.set_viewport_size({"width": 1024, "height": 768})
    page.goto("https://bing.com")

    page.wait_for_timeout(10000)
```

Set up a local virtual machine

If you'd like to use the computer use tool beyond just a browser interface, you can set up a local virtual machine instead, using a tool like [Docker](https://www.docker.com/).
You can then connect to this local machine to execute computer use actions.

#### Start Docker

If you don't have Docker installed, you can install it from [their website](https://www.docker.com/).
Once installed, make sure Docker is running on your machine.

#### Create a Dockerfile

Create a Dockerfile to define the configuration of your virtual machine.

Here is an example Dockerfile that starts an Ubuntu virtual machine with a VNC server:

Dockerfile

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive

# 1) Install Xfce, x11vnc, Xvfb, xdotool, etc., but remove any screen lockers or power managers
RUN apt-get update && apt-get install -y     xfce4     xfce4-goodies     x11vnc     xvfb     xdotool     imagemagick     x11-apps     sudo     software-properties-common     imagemagick  && apt-get remove -y light-locker xfce4-screensaver xfce4-power-manager || true  && apt-get clean && rm -rf /var/lib/apt/lists/*

# 2) Add the mozillateam PPA and install Firefox ESR
RUN add-apt-repository ppa:mozillateam/ppa  && apt-get update  && apt-get install -y --no-install-recommends firefox-esr  && update-alternatives --set x-www-browser /usr/bin/firefox-esr  && apt-get clean && rm -rf /var/lib/apt/lists/*

# 3) Create non-root user
RUN useradd -ms /bin/bash myuser     && echo "myuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER myuser
WORKDIR /home/myuser

# 4) Set x11vnc password ("secret")
RUN x11vnc -storepasswd secret /home/myuser/.vncpass

# 5) Expose port 5900 and run Xvfb, x11vnc, Xfce (no login manager)
EXPOSE 5900
CMD ["/bin/sh", "-c", "    Xvfb :99 -screen 0 1280x800x24 >/dev/null 2>&1 &     x11vnc -display :99 -forever -rfbauth /home/myuser/.vncpass -listen 0.0.0.0 -rfbport 5900 >/dev/null 2>&1 &     export DISPLAY=:99 &&     startxfce4 >/dev/null 2>&1 &     sleep 2 && echo 'Container running!' &&     tail -f /dev/null "]
```

#### Build the Docker image

Build the Docker image by running the following command in the directory containing the Dockerfile:

```bash
docker build -t cua-image .
```

#### Run the Docker container locally

Start the Docker container with the following command:

```bash
docker run --rm -it --name cua-image -p 5900:5900 -e DISPLAY=:99 cua-image
```

#### Execute commands on the container

Now that your container is running, you can execute commands on it. For example, we can define a helper function to execute commands on the container that will be used in the next steps.

Execute commands on the container

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
def docker_exec(cmd: str, container_name: str, decode=True) -> str:
    safe_cmd = cmd.replace('"', '\"')
    docker_cmd = f'docker exec {container_name} sh -c "{safe_cmd}"'
    output = subprocess.check_output(docker_cmd, shell=True)
    if decode:
        return output.decode("utf-8", errors="ignore")
    return output

class VM:
    def __init__(self, display, container_name):
        self.display = display
        self.container_name = container_name

vm = VM(display=":99", container_name="cua-image")
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
async function dockerExec(cmd, containerName, decode = true) {
  const safeCmd = cmd.replace(/"/g, '\"');
  const dockerCmd = `docker exec ${containerName} sh -c "${safeCmd}"`;
  const output = await execAsync(dockerCmd, {
    encoding: decode ? "utf8" : "buffer",
  });
  const result = output && output.stdout ? output.stdout : output;
  if (decode) {
    return result.toString("utf-8");
  }
  return result;
}

const vm = {
    display: ":99",
    containerName: "cua-image",
};
```

## Integrating the CUA loop

These are the high-level steps you need to follow to integrate the computer use tool in your application:

1. **Send a request to the model**:
Include the `computer` tool as part of the available tools, specifying the display size and environment.
You can also include in the first request a screenshot of the initial state of the environment.

2. **Receive a response from the model**:
Check if the response has any `computer_call` items.
This tool call contains a suggested action to take to progress towards the specified goal.
These actions could be clicking at a given position, typing in text, scrolling, or even waiting.

3. **Execute the requested action**:
Execute through code the corresponding action on your computer or browser environment.

4. **Capture the updated state**:
After executing the action, capture the updated state of the environment as a screenshot.

5. **Repeat**:
Send a new request with the updated state as a `computer_call_output`, and repeat this loop until the model stops requesting actions or you decide to stop.

![Computer use diagram](https://cdn.openai.com/API/docs/images/cua_diagram.png)

### 1\. Send a request to the model

Send a request to create a Response with the `computer-use-preview` model equipped with the `computer_use_preview` tool.
This request should include details about your environment, along with an initial input prompt.

If you want to show a summary of the reasoning performed by the model, you can include the `summary` parameter in the request.
This can be helpful if you want to debug or show what's happening behind the scenes in your interface. The summary can either be `concise` or `detailed`.

Optionally, you can include a screenshot of the initial state of the environment.

To be able to use the `computer_use_preview` tool, you need to set the `truncation` parameter to `"auto"` (by default, truncation is disabled).

Send a CUA request

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
  model: "computer-use-preview",
  tools: [\
    {\
      type: "computer_use_preview",\
      display_width: 1024,\
      display_height: 768,\
      environment: "browser", // other possible values: "mac", "windows", "ubuntu"\
    },\
  ],
  input: [\
    {\
      role: "user",\
      content: [\
        {\
          type: "text",\
          text: "Check the latest OpenAI news on bing.com.",\
        },\
        // Optional: include a screenshot of the initial state of the environment\
        // {\
        //     type: "input_image",\
        //     image_url: `data:image/png;base64,${screenshot_base64}`\
        // }\
      ],\
    },\
  ],
  reasoning: {
    summary: "concise",
  },
  truncation: "auto",
});

console.log(JSON.stringify(response.output, null, 2));
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="computer-use-preview",
    tools=[{\
        "type": "computer_use_preview",\
        "display_width": 1024,\
        "display_height": 768,\
        "environment": "browser" # other possible values: "mac", "windows", "ubuntu"\
    }],
    input=[\
        {\
          "role": "user",\
          "content": [\
            {\
              "type": "text",\
              "text": "Check the latest OpenAI news on bing.com."\
            }\
            # Optional: include a screenshot of the initial state of the environment\
            # {\
            #     type: "input_image",\
            #     image_url: f"data:image/png;base64,{screenshot_base64}"\
            # }\
          ]\
        }\
    ],
    reasoning={
        "summary": "concise",
    },
    truncation="auto"
)

print(response.output)
```

### 2\. Receive a suggested action

The model returns an output that contains either a `computer_call` item, just text, or other tool calls, depending on the state of the conversation.

Examples of `computer_call` items are a click, a scroll, a key press, or any other event defined in the [API reference](https://platform.openai.com/docs/api-reference/computer-use). In our example, the item is a click action:

CUA suggested action

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
"output": [\
    {\
        "type": "reasoning",\
        "id": "rs_67cc...",\
        "summary": [\
            {\
                "type": "summary_text",\
                "text": "Clicking on the browser address bar."\
            }\
        ]\
    },\
    {\
        "type": "computer_call",\
        "id": "cu_67cc...",\
        "call_id": "call_zw3...",\
        "action": {\
            "type": "click",\
            "button": "left",\
            "x": 156,\
            "y": 50\
        },\
        "pending_safety_checks": [],\
        "status": "completed"\
    }\
]
```

#### Reasoning items

The model may return a `reasoning` item in the response output for some actions.
If you don't use the `previous_response_id` parameter as shown in [Step 5](https://platform.openai.com/docs/guides/tools-computer-use#5-repeat) and manage the inputs array on your end, make sure to include those reasoning items along with the computer calls when sending the next request to the CUA model–or the request will fail.

The reasoning items are only compatible with the same model that produced them (in this case, `computer-use-preview`). If you implement a flow where you use several models with the same conversation history, you should filter these reasoning items out of the inputs array you send to other models.

#### Safety checks

The model may return safety checks with the `pending_safety_check` parameter. Refer to the section on how to [acknowledge safety checks](https://platform.openai.com/docs/guides/tools-computer-use#acknowledge-safety-checks) below for more details.

### 3\. Execute the action in your environment

Execute the corresponding actions on your computer or browser. How you map a computer call to actions through code depends on your environment.
This code shows example implementations for the most common computer actions.

PlaywrightPlaywrightDockerDocker

Playwright

Execute the action

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
async function handleModelAction(page, action) {
  // Given a computer action (e.g., click, double_click, scroll, etc.),
  // execute the corresponding operation on the Playwright page.

  const actionType = action.type;

  try {
    switch (actionType) {
      case "click": {
        const { x, y, button = "left" } = action;
        console.log(`Action: click at (${x}, ${y}) with button '${button}'`);
        await page.mouse.click(x, y, { button });
        break;
      }

      case "scroll": {
        const { x, y, scrollX, scrollY } = action;
        console.log(
          `Action: scroll at (${x}, ${y}) with offsets (scrollX=${scrollX}, scrollY=${scrollY})`
        );
        await page.mouse.move(x, y);
        await page.evaluate(`window.scrollBy(${scrollX}, ${scrollY})`);
        break;
      }

      case "keypress": {
        const { keys } = action;
        for (const k of keys) {
          console.log(`Action: keypress '${k}'`);
          // A simple mapping for common keys; expand as needed.
          if (k.includes("ENTER")) {
            await page.keyboard.press("Enter");
          } else if (k.includes("SPACE")) {
            await page.keyboard.press(" ");
          } else {
            await page.keyboard.press(k);
          }
        }
        break;
      }

      case "type": {
        const { text } = action;
        console.log(`Action: type text '${text}'`);
        await page.keyboard.type(text);
        break;
      }

      case "wait": {
        console.log(`Action: wait`);
        await page.waitForTimeout(2000);
        break;
      }

      case "screenshot": {
        // Nothing to do as screenshot is taken at each turn
        console.log(`Action: screenshot`);
        break;
      }

      // Handle other actions here

      default:
        console.log("Unrecognized action:", action);
    }
  } catch (e) {
    console.error("Error handling action", action, ":", e);
  }
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
def handle_model_action(page, action):
    """
    Given a computer action (e.g., click, double_click, scroll, etc.),
    execute the corresponding operation on the Playwright page.
    """
    action_type = action.type

    try:
        match action_type:

            case "click":
                x, y = action.x, action.y
                button = action.button
                print(f"Action: click at ({x}, {y}) with button '{button}'")
                # Not handling things like middle click, etc.
                if button != "left" and button != "right":
                    button = "left"
                page.mouse.click(x, y, button=button)

            case "scroll":
                x, y = action.x, action.y
                scroll_x, scroll_y = action.scroll_x, action.scroll_y
                print(f"Action: scroll at ({x}, {y}) with offsets (scroll_x={scroll_x}, scroll_y={scroll_y})")
                page.mouse.move(x, y)
                page.evaluate(f"window.scrollBy({scroll_x}, {scroll_y})")

            case "keypress":
                keys = action.keys
                for k in keys:
                    print(f"Action: keypress '{k}'")
                    # A simple mapping for common keys; expand as needed.
                    if k.lower() == "enter":
                        page.keyboard.press("Enter")
                    elif k.lower() == "space":
                        page.keyboard.press(" ")
                    else:
                        page.keyboard.press(k)

            case "type":
                text = action.text
                print(f"Action: type text: {text}")
                page.keyboard.type(text)

            case "wait":
                print(f"Action: wait")
                time.sleep(2)

            case "screenshot":
                # Nothing to do as screenshot is taken at each turn
                print(f"Action: screenshot")

            # Handle other actions here

            case _:
                print(f"Unrecognized action: {action}")

    except Exception as e:
        print(f"Error handling action {action}: {e}")
```

Docker

Execute the action

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
async function handleModelAction(vm, action) {
    // Given a computer action (e.g., click, double_click, scroll, etc.),
    // execute the corresponding operation on the Docker environment.

    const actionType = action.type;

    try {
      switch (actionType) {
        case "click": {
          const { x, y, button = "left" } = action;
          const buttonMap = { left: 1, middle: 2, right: 3 };
          const b = buttonMap[button] || 1;
          console.log(`Action: click at (${x}, ${y}) with button '${button}'`);
          await dockerExec(
            `DISPLAY=${vm.display} xdotool mousemove ${x} ${y} click ${b}`,
            vm.containerName
          );
          break;
        }

        case "scroll": {
          const { x, y, scrollX, scrollY } = action;
          console.log(
            `Action: scroll at (${x}, ${y}) with offsets (scrollX=${scrollX}, scrollY=${scrollY})`
          );
          await dockerExec(
            `DISPLAY=${vm.display} xdotool mousemove ${x} ${y}`,
            vm.containerName
          );
          // For vertical scrolling, use button 4 for scroll up and button 5 for scroll down.
          if (scrollY !== 0) {
            const button = scrollY < 0 ? 4 : 5;
            const clicks = Math.abs(scrollY);
            for (let i = 0; i < clicks; i++) {
              await dockerExec(
                `DISPLAY=${vm.display} xdotool click ${button}`,
                vm.containerName
              );
            }
          }
          break;
        }

        case "keypress": {
          const { keys } = action;
          for (const k of keys) {
            console.log(`Action: keypress '${k}'`);
            // A simple mapping for common keys; expand as needed.
            if (k.includes("ENTER")) {
              await dockerExec(
                `DISPLAY=${vm.display} xdotool key 'Return'`,
                vm.containerName
              );
            } else if (k.includes("SPACE")) {
              await dockerExec(
                `DISPLAY=${vm.display} xdotool key 'space'`,
                vm.containerName
              );
            } else {
              await dockerExec(
                `DISPLAY=${vm.display} xdotool key '${k}'`,
                vm.containerName
              );
            }
          }
          break;
        }

        case "type": {
          const { text } = action;
          console.log(`Action: type text '${text}'`);
          await dockerExec(
            `DISPLAY=${vm.display} xdotool type '${text}'`,
            vm.containerName
          );
          break;
        }

        case "wait": {
          console.log(`Action: wait`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          break;
        }

        case "screenshot": {
          // Nothing to do as screenshot is taken at each turn
          console.log(`Action: screenshot`);
          break;
        }

        // Handle other actions here

        default:
          console.log("Unrecognized action:", action);
      }
    } catch (e) {
      console.error("Error handling action", action, ":", e);
    }
  }
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
def handle_model_action(vm, action):
    """
    Given a computer action (e.g., click, double_click, scroll, etc.),
    execute the corresponding operation on the Docker environment.
    """
    action_type = action.type

    try:
        match action_type:

            case "click":
                x, y = int(action.x), int(action.y)
                button_map = {"left": 1, "middle": 2, "right": 3}
                b = button_map.get(action.button, 1)
                print(f"Action: click at ({x}, {y}) with button '{action.button}'")
                docker_exec(f"DISPLAY={vm.display} xdotool mousemove {x} {y} click {b}", vm.container_name)

            case "scroll":
                x, y = int(action.x), int(action.y)
                scroll_x, scroll_y = int(action.scroll_x), int(action.scroll_y)
                print(f"Action: scroll at ({x}, {y}) with offsets (scroll_x={scroll_x}, scroll_y={scroll_y})")
                docker_exec(f"DISPLAY={vm.display} xdotool mousemove {x} {y}", vm.container_name)

                # For vertical scrolling, use button 4 (scroll up) or button 5 (scroll down)
                if scroll_y != 0:
                    button = 4 if scroll_y < 0 else 5
                    clicks = abs(scroll_y)
                    for _ in range(clicks):
                        docker_exec(f"DISPLAY={vm.display} xdotool click {button}", vm.container_name)

            case "keypress":
                keys = action.keys
                for k in keys:
                    print(f"Action: keypress '{k}'")
                    # A simple mapping for common keys; expand as needed.
                    if k.lower() == "enter":
                        docker_exec(f"DISPLAY={vm.display} xdotool key 'Return'", vm.container_name)
                    elif k.lower() == "space":
                        docker_exec(f"DISPLAY={vm.display} xdotool key 'space'", vm.container_name)
                    else:
                        docker_exec(f"DISPLAY={vm.display} xdotool key '{k}'", vm.container_name)

            case "type":
                text = action.text
                print(f"Action: type text: {text}")
                docker_exec(f"DISPLAY={vm.display} xdotool type '{text}'", vm.container_name)

            case "wait":
                print(f"Action: wait")
                time.sleep(2)

            case "screenshot":
                # Nothing to do as screenshot is taken at each turn
                print(f"Action: screenshot")

            # Handle other actions here

            case _:
                print(f"Unrecognized action: {action}")

    except Exception as e:
        print(f"Error handling action {action}: {e}")
```

### 4\. Capture the updated screenshot

After executing the action, capture the updated state of the environment as a screenshot, which also differs depending on your environment.

PlaywrightPlaywrightDockerDocker

Playwright

Capture and send the updated screenshot

python

```javascript
1
2
3
4
async function getScreenshot(page) {
    // Take a full-page screenshot using Playwright and return the image bytes.
    return await page.screenshot();
}
```

```python
1
2
3
4
5
def get_screenshot(page):
    """
    Take a full-page screenshot using Playwright and return the image bytes.
    """
    return page.screenshot()
```

Docker

Capture and send the updated screenshot

python

```javascript
1
2
3
4
5
6
async function getScreenshot(vm) {
  // Take a screenshot, returning raw bytes.
  const cmd = `export DISPLAY=${vm.display} && import -window root png:-`;
  const screenshotBuffer = await dockerExec(cmd, vm.containerName, false);
  return screenshotBuffer;
}
```

```python
1
2
3
4
5
6
7
8
9
10
def get_screenshot(vm):
    """
    Takes a screenshot, returning raw bytes.
    """
    cmd = (
        f"export DISPLAY={vm.display} && "
        "import -window root png:-"
    )
    screenshot_bytes = docker_exec(cmd, vm.container_name, decode=False)
    return screenshot_bytes
```

### 5\. Repeat

Once you have the screenshot, you can send it back to the model as a `computer_call_output` to get the next action.
Repeat these steps as long as you get a `computer_call` item in the response.

Repeat steps in a loop

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
import OpenAI from "openai";
const openai = new OpenAI();

async function computerUseLoop(instance, response) {
  /**
   * Run the loop that executes computer actions until no 'computer_call' is found.
   */
  while (true) {
    const computerCalls = response.output.filter(
      (item) => item.type === "computer_call"
    );
    if (computerCalls.length === 0) {
      console.log("No computer call found. Output from model:");
      response.output.forEach((item) => {
        console.log(JSON.stringify(item, null, 2));
      });
      break; // Exit when no computer calls are issued.
    }

    // We expect at most one computer call per response.
    const computerCall = computerCalls[0];
    const lastCallId = computerCall.call_id;
    const action = computerCall.action;

    // Execute the action (function defined in step 3)
    handleModelAction(instance, action);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Allow time for changes to take effect.

    // Take a screenshot after the action (function defined in step 4)
    const screenshotBytes = await getScreenshot(instance);
    const screenshotBase64 = Buffer.from(screenshotBytes).toString("base64");

    // Send the screenshot back as a computer_call_output
    response = await openai.responses.create({
      model: "computer-use-preview",
      previous_response_id: response.id,
      tools: [\
        {\
          type: "computer_use_preview",\
          display_width: 1024,\
          display_height: 768,\
          environment: "browser",\
        },\
      ],
      input: [\
        {\
          call_id: lastCallId,\
          type: "computer_call_output",\
          output: {\
            type: "input_image",\
            image_url: `data:image/png;base64,${screenshotBase64}`,\
          },\
        },\
      ],
      truncation: "auto",
    });
  }

  return response;
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
import time
import base64
from openai import OpenAI
client = OpenAI()

def computer_use_loop(instance, response):
    """
    Run the loop that executes computer actions until no 'computer_call' is found.
    """
    while True:
        computer_calls = [item for item in response.output if item.type == "computer_call"]
        if not computer_calls:
            print("No computer call found. Output from model:")
            for item in response.output:
                print(item)
            break  # Exit when no computer calls are issued.

        # We expect at most one computer call per response.
        computer_call = computer_calls[0]
        last_call_id = computer_call.call_id
        action = computer_call.action

        # Execute the action (function defined in step 3)
        handle_model_action(instance, action)
        time.sleep(1)  # Allow time for changes to take effect.

        # Take a screenshot after the action (function defined in step 4)
        screenshot_bytes = get_screenshot(instance)
        screenshot_base64 = base64.b64encode(screenshot_bytes).decode("utf-8")

        # Send the screenshot back as a computer_call_output
        response = client.responses.create(
            model="computer-use-preview",
            previous_response_id=response.id,
            tools=[\
                {\
                    "type": "computer_use_preview",\
                    "display_width": 1024,\
                    "display_height": 768,\
                    "environment": "browser"\
                }\
            ],
            input=[\
                {\
                    "call_id": last_call_id,\
                    "type": "computer_call_output",\
                    "output": {\
                        "type": "input_image",\
                        "image_url": f"data:image/png;base64,{screenshot_base64}"\
                    }\
                }\
            ],
            truncation="auto"
        )

    return response
```

#### Handling conversation history

You can use the `previous_response_id` parameter to link the current request to the previous response.
We recommend using this method if you don't want to manage the conversation history on your side.

If you do not want to use this parameter, you should make sure to include in your inputs array all the items returned in the response output of the previous request, including reasoning items if present.

### Acknowledge safety checks

We have implemented safety checks in the API to help protect against prompt injection and model mistakes. These checks include:

- Malicious instruction detection: we evaluate the screenshot image and check if it contains adversarial content that may change the model's behavior.
- Irrelevant domain detection: we evaluate the `current_url` (if provided) and check if the current domain is considered relevant given the conversation history.
- Sensitive domain detection: we check the `current_url` (if provided) and raise a warning when we detect the user is on a sensitive domain.

If one or multiple of the above checks is triggered, a safety check is raised when the model returns the next `computer_call`, with the `pending_safety_checks` parameter.

Pending safety checks

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
"output": [\
    {\
        "type": "reasoning",\
        "id": "rs_67cb...",\
        "summary": [\
            {\
                "type": "summary_text",\
                "text": "Exploring 'File' menu option."\
            }\
        ]\
    },\
    {\
        "type": "computer_call",\
        "id": "cu_67cb...",\
        "call_id": "call_nEJ...",\
        "action": {\
            "type": "click",\
            "button": "left",\
            "x": 135,\
            "y": 193\
        },\
        "pending_safety_checks": [\
            {\
                "id": "cu_sc_67cb...",\
                "code": "malicious_instructions",\
                "message": "We've detected instructions that may cause your application to perform malicious or unauthorized actions. Please acknowledge this warning if you'd like to proceed."\
            }\
        ],\
        "status": "completed"\
    }\
]
```

You need to pass the safety checks back as `acknowledged_safety_checks` in the next request in order to proceed.
In all cases where `pending_safety_checks` are returned, actions should be handed over to the end user to confirm model behavior and accuracy.

- `malicious_instructions` and `irrelevant_domain`: end users should review model actions and confirm that the model is behaving as intended.
- `sensitive_domain`: ensure an end user is actively monitoring the model actions on these sites. Exact implementation of this "watch mode" may vary by application, but a potential example could be collecting user impression data on the site to make sure there is active end user engagement with the application.

Acknowledge safety checks

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="computer-use-preview",
    previous_response_id="<previous_response_id>",
    tools=[{\
        "type": "computer_use_preview",\
        "display_width": 1024,\
        "display_height": 768,\
        "environment": "browser"\
    }],
    input=[\
        {\
            "type": "computer_call_output",\
            "call_id": "<call_id>",\
            "acknowledged_safety_checks": [\
                {\
                    "id": "<safety_check_id>",\
                    "code": "malicious_instructions",\
                    "message": "We've detected instructions that may cause your application to perform malicious or unauthorized actions. Please acknowledge this warning if you'd like to proceed."\
                }\
            ],\
            "output": {\
                "type": "computer_screenshot",\
                "image_url": "<image_url>"\
            }\
        }\
    ],
    truncation="auto"
)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "computer-use-preview",
    previous_response_id: "<previous_response_id>",
    tools: [{\
        type: "computer_use_preview",\
        display_width: 1024,\
        display_height: 768,\
        environment: "browser"\
    }],
    input: [\
        {\
            "type": "computer_call_output",\
            "call_id": "<call_id>",\
            "acknowledged_safety_checks": [\
                {\
                    "id": "<safety_check_id>",\
                    "code": "malicious_instructions",\
                    "message": "We've detected instructions that may cause your application to perform malicious or unauthorized actions. Please acknowledge this warning if you'd like to proceed."\
                }\
            ],\
            "output": {\
                "type": "computer_screenshot",\
                "image_url": "<image_url>"\
            }\
        }\
    ],
    truncation: "auto",
});
```

### Final code

Putting it all together, the final code should include:

1. The initialization of the environment
2. A first request to the model with the `computer` tool
3. A loop that executes the suggested action in your environment
4. A way to acknowledge safety checks and give end users a chance to confirm actions

To see end-to-end example integrations, refer to our CUA sample app repository.

[CUA sample app\\
\\
Examples of how to integrate the computer use tool in different environments](https://github.com/openai/openai-cua-sample-app)

## Limitations

We recommend using the `computer-use-preview` model for browser-based tasks. The model may be susceptible to inadvertent model mistakes, especially in non-browser environments that it is less used to.

For example, `computer-use-preview`'s performance on OSWorld is currently 38.1%, indicating that the model is not yet highly reliable for automating tasks on an OS.
More details about the model and related safety work can be found in our updated [system card](https://openai.com/index/operator-system-card/).

Some other behavior limitations to be aware of:

- The [`computer-use-preview` model](https://platform.openai.com/docs/models/computer-use-preview) has constrained rate limits and feature support, described on its model detail page.
- [Refer to this guide](https://platform.openai.com/docs/guides/your-data) for data retention, residency, and handling policies.

## Risks and safety

Computer use presents unique risks that differ from those in standard API features or chat interfaces, especially when interacting with the internet.

There are a number of best practices listed below that you should follow to mitigate these risks.

#### Human in the loop for high-stakes tasks

Avoid tasks that are high-stakes or require high levels of accuracy. The model may make mistakes that are challenging to reverse. As mentioned above, the model is still prone to mistakes, especially on non-browser surfaces. While we expect the model to request user confirmation before proceeding with certain higher-impact decisions, this is not fully reliable. Ensure a human is in the loop to confirm model actions with real-world consequences.

#### Beware of prompt injections

A prompt injection occurs when an AI model mistakenly follows untrusted instructions appearing in its input. For the `computer-use-preview` model, this may manifest as it seeing something in the provided screenshot, like a malicious website or email, that instructs it to do something that the user does not want, and it complies. To avoid prompt injection risk, limit computer use access to trusted, isolated environments like a sandboxed browser or container.

#### Use blocklists and allowlists

Implement a blocklist or an allowlist of websites, actions, and users. For example, if you're using the computer use tool to book tickets on a website, create an allowlist of only the websites you expect to use in that workflow.

#### Send user IDs

Send end-user IDs (optional param) to help OpenAI monitor and detect abuse.

#### Use our safety checks

The following safety checks are available to protect against prompt injection and model mistakes:

- Malicious instruction detection
- Irrelevant domain detection
- Sensitive domain detection

When you receive a `pending_safety_check`, you should increase oversight into model actions, for example by handing over to an end user to explicitly acknowledge the desire to proceed with the task and ensure that the user is actively monitoring the agent's actions (e.g., by implementing something like a watch mode similar to [Operator](https://operator.chatgpt.com/)). Essentially, when safety checks fire, a human should come into the loop.

Read the [acknowledge safety checks](https://platform.openai.com/docs/guides/tools-computer-use#acknowledge-safety-checks) section above for more details on how to proceed when you receive a `pending_safety_check`.

Where possible, it is highly recommended to pass in the optional parameter `current_url` as part of the `computer_call_output`, as it can help increase the accuracy of our safety checks.

Using current URL

json

```json
1
2
3
4
5
6
7
8
9
10
{
    "type": "computer_call_output",
    "call_id": "call_7OU...",
    "acknowledged_safety_checks": [],
    "output": {
        "type": "computer_screenshot",
        "image_url": "..."
    },
    "current_url": "https://openai.com"
}
```

#### Additional safety precautions

Implement additional safety precautions as best suited for your application, such as implementing guardrails that run in parallel of the computer use loop.

#### Comply with our Usage Policy

Remember, you are responsible for using our services in compliance with the [OpenAI Usage Policy](https://openai.com/policies/usage-policies/) and [Business Terms](https://openai.com/policies/business-terms/), and we encourage you to employ our safety features and tools to help ensure this compliance. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-file-search.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-file-search>"
title: "File search - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# File search

Allow models to search your files for relevant information before generating a response.

Copy page

File search is a tool available in the [Responses API](https://platform.openai.com/docs/api-reference/responses).
It enables models to retrieve information in a knowledge base of previously uploaded files through semantic and keyword search.
By creating vector stores and uploading files to them, you can augment the models' inherent knowledge by giving them access to these knowledge bases or `vector_stores`.

To learn more about how vector stores and semantic search work, refer to our [retrieval guide](https://platform.openai.com/docs/guides/retrieval).

This is a hosted tool managed by OpenAI, meaning you don't have to implement code on your end to handle its execution.
When the model decides to use it, it will automatically call the tool, retrieve information from your files, and return an output.

## How to use

Prior to using file search with the Responses API, you need to have set up a knowledge base in a vector store and uploaded files to it.

Create a vector store and upload a file

Follow these steps to create a vector store and upload a file to it. You can use [this example file](https://cdn.openai.com/API/docs/deep_research_blog.pdf) or upload your own.

#### Upload the file to the File API

Upload a file

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
import requests
from io import BytesIO
from openai import OpenAI

client = OpenAI()

def create_file(client, file_path):
    if file_path.startswith("http://") or file_path.startswith("https://"):
        # Download the file content from the URL
        response = requests.get(file_path)
        file_content = BytesIO(response.content)
        file_name = file_path.split("/")[-1]
        file_tuple = (file_name, file_content)
        result = client.files.create(
            file=file_tuple,
            purpose="assistants"
        )
    else:
        # Handle local file path
        with open(file_path, "rb") as file_content:
            result = client.files.create(
                file=file_content,
                purpose="assistants"
            )
    print(result.id)
    return result.id

# Replace with your own file path or URL
file_id = create_file(client, "https://cdn.openai.com/API/docs/deep_research_blog.pdf")
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
import fs from "fs";
import OpenAI from "openai";
const openai = new OpenAI();

async function createFile(filePath) {
  let result;
  if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
    // Download the file content from the URL
    const res = await fetch(filePath);
    const buffer = await res.arrayBuffer();
    const urlParts = filePath.split("/");
    const fileName = urlParts[urlParts.length - 1];
    const file = new File([buffer], fileName);
    result = await openai.files.create({
      file: file,
      purpose: "assistants",
    });
  } else {
    // Handle local file path
    const fileContent = fs.createReadStream(filePath);
    result = await openai.files.create({
      file: fileContent,
      purpose: "assistants",
    });
  }
  return result.id;
}

// Replace with your own file path or URL
const fileId = await createFile(
  "https://cdn.openai.com/API/docs/deep_research_blog.pdf"
);

console.log(fileId);
```

#### Create a vector store

Create a vector store

python

```python
1
2
3
4
vector_store = client.vector_stores.create(
    name="knowledge_base"
)
print(vector_store.id)
```

```javascript
1
2
3
4
const vectorStore = await openai.vectorStores.create({
    name: "knowledge_base",
});
console.log(vectorStore.id);
```

#### Add the file to the vector store

Add a file to a vector store

python

```python
1
2
3
4
5
client.vector_stores.files.create(
    vector_store_id=vector_store.id,
    file_id=file_id
)
print(result)
```

```javascript
1
2
3
4
5
6
await openai.vectorStores.files.create(
    vectorStore.id,
    {
        file_id: fileId,
    }
});
```

#### Check status

Run this code until the file is ready to be used (i.e., when the status is `completed`).

Check status

python

```python
1
2
3
4
result = client.vector_stores.files.list(
    vector_store_id=vector_store.id
)
print(result)
```

```javascript
1
2
3
4
const result = await openai.vectorStores.files.list({
    vector_store_id: vectorStore.id,
});
console.log(result);
```

Once your knowledge base is set up, you can include the `file_search` tool in the list of tools available to the model, along with the list of vector stores in which to search.

File search tool

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4o-mini",
    input="What is deep research by OpenAI?",
    tools=[{\
        "type": "file_search",\
        "vector_store_ids": ["<vector_store_id>"]\
    }]
)
print(response)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "What is deep research by OpenAI?",
    tools: [{\
        type: "file_search",\
        vector_store_ids: ["<vector_store_id>"],\
    }],
});
console.log(response);
```

When this tool is called by the model, you will receive a response with multiple outputs:

1. A `file_search_call` output item, which contains the id of the file search call.
2. A `message` output item, which contains the response from the model, along with the file citations.

File search response

json

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
{
  "output": [\
    {\
      "type": "file_search_call",\
      "id": "fs_67c09ccea8c48191ade9367e3ba71515",\
      "status": "completed",\
      "queries": ["What is deep research?"],\
      "search_results": null\
    },\
    {\
      "id": "msg_67c09cd3091c819185af2be5d13d87de",\
      "type": "message",\
      "role": "assistant",\
      "content": [\
        {\
          "type": "output_text",\
          "text": "Deep research is a sophisticated capability that allows for extensive inquiry and synthesis of information across various domains. It is designed to conduct multi-step research tasks, gather data from multiple online sources, and provide comprehensive reports similar to what a research analyst would produce. This functionality is particularly useful in fields requiring detailed and accurate information...",\
          "annotations": [\
            {\
              "type": "file_citation",\
              "index": 992,\
              "file_id": "file-2dtbBZdjtDKS8eqWxqbgDi",\
              "filename": "deep_research_blog.pdf"\
            },\
            {\
              "type": "file_citation",\
              "index": 992,\
              "file_id": "file-2dtbBZdjtDKS8eqWxqbgDi",\
              "filename": "deep_research_blog.pdf"\
            },\
            {\
              "type": "file_citation",\
              "index": 1176,\
              "file_id": "file-2dtbBZdjtDKS8eqWxqbgDi",\
              "filename": "deep_research_blog.pdf"\
            },\
            {\
              "type": "file_citation",\
              "index": 1176,\
              "file_id": "file-2dtbBZdjtDKS8eqWxqbgDi",\
              "filename": "deep_research_blog.pdf"\
            }\
          ]\
        }\
      ]\
    }\
  ]
}
```

## Retrieval customization

### Limiting the number of results

Using the file search tool with the Responses API, you can customize the number of results you want to retrieve from the vector stores. This can help reduce both token usage and latency, but may come at the cost of reduced answer quality.

Limit the number of results

python

```python
1
2
3
4
5
6
7
8
9
10
response = client.responses.create(
    model="gpt-4o-mini",
    input="What is deep research by OpenAI?",
    tools=[{\
        "type": "file_search",\
        "vector_store_ids": ["<vector_store_id>"],\
        "max_num_results": 2\
    }]
)
print(response)
```

```javascript
1
2
3
4
5
6
7
8
9
10
const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "What is deep research by OpenAI?",
    tools: [{\
        type: "file_search",\
        vector_store_ids: ["<vector_store_id>"],\
        max_num_results: 2,\
    }],
});
console.log(response);
```

### Include search results in the response

While you can see annotations (references to files) in the output text, the file search call will not return search results by default.

To include search results in the response, you can use the `include` parameter when creating the response.

Include search results

python

```python
1
2
3
4
5
6
7
8
9
10
response = client.responses.create(
    model="gpt-4o-mini",
    input="What is deep research by OpenAI?",
    tools=[{\
        "type": "file_search",\
        "vector_store_ids": ["<vector_store_id>"]\
    }],
    include=["file_search_call.results"]
)
print(response)
```

```javascript
1
2
3
4
5
6
7
8
9
10
const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "What is deep research by OpenAI?",
    tools: [{\
        type: "file_search",\
        vector_store_ids: ["<vector_store_id>"],\
    }],
    include: ["file_search_call.results"],
});
console.log(response);
```

### Metadata filtering

You can filter the search results based on the metadata of the files. For more details, refer to our [retrieval guide](https://platform.openai.com/docs/guides/retrieval), which covers:

- How to [set attributes on vector store files](https://platform.openai.com/docs/guides/retrieval#attributes)
- How to [define filters](https://platform.openai.com/docs/guides/retrieval#attribute-filtering)

Metadata filtering

python

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
response = client.responses.create(
    model="gpt-4o-mini",
    input="What is deep research by OpenAI?",
    tools=[{\
        "type": "file_search",\
        "vector_store_ids": ["<vector_store_id>"],\
        "filters": {\
            "type": "eq",\
            "key": "type",\
            "value": "blog"\
        }\
    }]
)
print(response)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "What is deep research by OpenAI?",
    tools: [{\
        type: "file_search",\
        vector_store_ids: ["<vector_store_id>"],\
        filters: {\
            type: "eq",\
            key: "type",\
            value: "blog"\
        }\
    }]
});
console.log(response);
```

## Supported files

_For `text/` MIME types, the encoding must be one of `utf-8`, `utf-16`, or `ascii`._

| File format | MIME type |
| --- | --- |
| `.c` | `text/x-c` |
| `.cpp` | `text/x-c++` |
| `.cs` | `text/x-csharp` |
| `.css` | `text/css` |
| `.doc` | `application/msword` |
| `.docx` | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| `.go` | `text/x-golang` |
| `.html` | `text/html` |
| `.java` | `text/x-java` |
| `.js` | `text/javascript` |
| `.json` | `application/json` |
| `.md` | `text/markdown` |
| `.pdf` | `application/pdf` |
| `.php` | `text/x-php` |
| `.pptx` | `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| `.py` | `text/x-python` |
| `.py` | `text/x-script.python` |
| `.rb` | `text/x-ruby` |
| `.sh` | `application/x-sh` |
| `.tex` | `text/x-tex` |
| `.ts` | `application/typescript` |
| `.txt` | `text/plain` |

## Usage notes

| API Availability | Rate limits | Notes |
| --- | --- | --- |
| [Responses](https://platform.openai.com/docs/api-reference/responses)<br>[Chat Completions](https://platform.openai.com/docs/api-reference/chat)<br>[Assistants](https://platform.openai.com/docs/api-reference/assistants) | **Tier 1**<br>100 RPM<br>**Tier 2 and 3**<br>500 RPM<br>**Tier 4 and 5**<br>1000 RPM | [Pricing](https://platform.openai.com/docs/pricing#built-in-tools)<br>[ZDR and data residency](https://platform.openai.com/docs/guides/your-data) | # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-image-generation.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-image-generation>"
title: "Image generation - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Image generation

Allow models to generate or edit images.

Copy page

The image generation tool allows you to generate images using a text prompt, and optionally image inputs. It leverages the [GPT Image model](https://platform.openai.com/docs/models/gpt-image-1), and automatically optimizes text inputs for improved performance.

To learn more about image generation, refer to our dedicated [image generation guide](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1&api=responses).

## Usage

When you include the `image_generation` tool in your request, the model can decide when and how to generate images as part of the conversation, using your prompt and any provided image inputs.

The `image_generation_call` tool call result will include a base64-encoded image.

Generate an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: "Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools: [{type: "image_generation"}],
});

// Save the image to a file
const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("otter.png", Buffer.from(imageBase64, "base64"));
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
from openai import OpenAI
import base64

client = OpenAI()

response = client.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

# Save the image to a file
image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]
    with open("otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

You can [provide input images](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1#edit-images) using file IDs or base64 data.

To force the image generation tool call, you can set the parameter `tool_choice` to `{"type": "image_generation"}`.

### Tool options

You can configure the following output options as parameters for the [image generation tool](https://platform.openai.com/docs/api-reference/responses/create#responses-create-tools):

- Size: Image dimensions (e.g., 1024x1024, 1024x1536)
- Quality: Rendering quality (e.g. low, medium, high)
- Format: File output format
- Compression: Compression level (0-100%) for JPEG and WebP formats
- Background: Transparent or opaque

`size`, `quality`, and `background` support the `auto` option, where the model will automatically select the best option based on the prompt.

For more details on available options, refer to the [image generation guide](https://platform.openai.com/docs/guides/image-generation#customize-image-output).

### Revised prompt

When using the image generation tool, the mainline model (e.g. `gpt-4.1`) will automatically revise your prompt for improved performance.

You can access the revised prompt in the `revised_prompt` field of the image generation call:

```json
1
2
3
4
5
6
7
{
  "id": "ig_123",
  "type": "image_generation_call",
  "status": "completed",
  "revised_prompt": "A gray tabby cat hugging an otter. The otter is wearing an orange scarf. Both animals are cute and friendly, depicted in a warm, heartwarming style.",
  "result": "..."
}
```

### Prompting tips

Image generation works best when you use terms like "draw" or "edit" in your prompt.

For example, if you want to combine images, instead of saying "combine" or "merge", you can say something like "edit the first image by adding this element from the second image".

## Multi-turn editing

You can iteratively edit images by referencing previous response or image IDs. This allows you to refine images across multiple turns in a conversation.

Using previous response IDUsing previous response IDUsing image IDUsing image ID

Using previous response ID

Multi-turn image generation

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
  model: "gpt-4.1-mini",
  input:
    "Generate an image of gray tabby cat hugging an otter with an orange scarf",
  tools: [{ type: "image_generation" }],
});

const imageData = response.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("cat_and_otter.png", Buffer.from(imageBase64, "base64"));
}

// Follow up

const response_fwup = await openai.responses.create({
  model: "gpt-4.1-mini",
  previous_response_id: response.id,
  input: "Now make it look realistic",
  tools: [{ type: "image_generation" }],
});

const imageData_fwup = response_fwup.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData_fwup.length > 0) {
  const imageBase64 = imageData_fwup[0];
  const fs = await import("fs");
  fs.writeFileSync(
    "cat_and_otter_realistic.png",
    Buffer.from(imageBase64, "base64")
  );
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
from openai import OpenAI
import base64

client = OpenAI()

response = client.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

image_data = [\
    output.result\
    for output in response.output\
    if output.type == "image_generation_call"\
]

if image_data:
    image_base64 = image_data[0]

    with open("cat_and_otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))

# Follow up

response_fwup = client.responses.create(
    model="gpt-4.1-mini",
    previous_response_id=response.id,
    input="Now make it look realistic",
    tools=[{"type": "image_generation"}],
)

image_data_fwup = [\
    output.result\
    for output in response_fwup.output\
    if output.type == "image_generation_call"\
]

if image_data_fwup:
    image_base64 = image_data_fwup[0]
    with open("cat_and_otter_realistic.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

Using image ID

Multi-turn image generation

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
  model: "gpt-4.1-mini",
  input:
    "Generate an image of gray tabby cat hugging an otter with an orange scarf",
  tools: [{ type: "image_generation" }],
});

const imageGenerationCalls = response.output.filter(
  (output) => output.type === "image_generation_call"
);

const imageData = imageGenerationCalls.map((output) => output.result);

if (imageData.length > 0) {
  const imageBase64 = imageData[0];
  const fs = await import("fs");
  fs.writeFileSync("cat_and_otter.png", Buffer.from(imageBase64, "base64"));
}

// Follow up

const response_fwup = await openai.responses.create({
  model: "gpt-4.1-mini",
  input: [\
    {\
      role: "user",\
      content: [{ type: "input_text", text: "Now make it look realistic" }],\
    },\
    {\
      type: "image_generation_call",\
      id: imageGenerationCalls[0].id,\
    },\
  ],
  tools: [{ type: "image_generation" }],
});

const imageData_fwup = response_fwup.output
  .filter((output) => output.type === "image_generation_call")
  .map((output) => output.result);

if (imageData_fwup.length > 0) {
  const imageBase64 = imageData_fwup[0];
  const fs = await import("fs");
  fs.writeFileSync(
    "cat_and_otter_realistic.png",
    Buffer.from(imageBase64, "base64")
  );
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
import openai
import base64

response = openai.responses.create(
    model="gpt-4.1-mini",
    input="Generate an image of gray tabby cat hugging an otter with an orange scarf",
    tools=[{"type": "image_generation"}],
)

image_generation_calls = [\
    output\
    for output in response.output\
    if output.type == "image_generation_call"\
]

image_data = [output.result for output in image_generation_calls]

if image_data:
    image_base64 = image_data[0]

    with open("cat_and_otter.png", "wb") as f:
        f.write(base64.b64decode(image_base64))

# Follow up

response_fwup = openai.responses.create(
    model="gpt-4.1-mini",
    input=[\
        {\
            "role": "user",\
            "content": [{"type": "input_text", "text": "Now make it look realistic"}],\
        },\
        {\
            "type": "image_generation_call",\
            "id": image_generation_calls[0].id,\
        },\
    ],
    tools=[{"type": "image_generation"}],
)

image_data_fwup = [\
    output.result\
    for output in response_fwup.output\
    if output.type == "image_generation_call"\
]

if image_data_fwup:
    image_base64 = image_data_fwup[0]
    with open("cat_and_otter_realistic.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
```

## Streaming

The image generation tool supports streaming partial images as the final result is being generated. This provides faster visual feedback for users and improves perceived latency.

You can set the number of partial images (1-3) with the `partial_images` parameter.

Stream an image

python

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import OpenAI from "openai";
import fs from "fs";
const openai = new OpenAI();

const stream = await openai.responses.create({
  model: "gpt-4.1",
  input:
    "Draw a gorgeous image of a river made of white owl feathers, snaking its way through a serene winter landscape",
  stream: true,
  tools: [{ type: "image_generation", partial_images: 2 }],
});

for await (const event of stream) {
  if (event.type === "response.image_generation_call.partial_image") {
    const idx = event.partial_image_index;
    const imageBase64 = event.partial_image_b64;
    const imageBuffer = Buffer.from(imageBase64, "base64");
    fs.writeFileSync(`river${idx}.png`, imageBuffer);
  }
}
```

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
from openai import OpenAI
import base64

client = OpenAI()

stream = client.responses.create(
    model="gpt-4.1",
    input="Draw a gorgeous image of a river made of white owl feathers, snaking its way through a serene winter landscape",
    stream=True,
    tools=[{"type": "image_generation", "partial_images": 2}],
)

for event in stream:
    if event.type == "response.image_generation_call.partial_image":
        idx = event.partial_image_index
        image_base64 = event.partial_image_b64
        image_bytes = base64.b64decode(image_base64)
        with open(f"river{idx}.png", "wb") as f:
            f.write(image_bytes)
```

## Supported models

The image generation tool is supported for the following models:

- `gpt-4o`
- `gpt-4o-mini`
- `gpt-4.1`
- `gpt-4.1-mini`
- `gpt-4.1-nano`
- `o3`

The model used for the image generation process is always `gpt-image-1`, but these models can be used as the mainline model in the Responses API as they can reliably call the image generation tool when needed.g # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-local-shell.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-local-shell>"
title: "Local shell - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Local shell

Enable agents to run commands in a local shell.

Copy page

Local shell is a tool that allows agents to run shell commands locally on a machine you or the user provides. It's designed to work with [Codex CLI](https://github.com/openai/codex) and [`codex-mini-latest`](https://platform.openai.com/docs/models/codex-mini-latest). Commands are executed inside your own runtime, **you are fully in control of which commands actually run** —the API only returns the instructions, but does not execute them on OpenAI infrastructure.

Local shell is available through the [Responses API](https://platform.openai.com/docs/guides/responses-vs-chat-completions) for use with [`codex-mini-latest`](https://platform.openai.com/docs/models/codex-mini-latest). It is not available on other models, or via the Chat Completions API.

Running arbitrary shell commands can be dangerous. Always sandbox execution
or add strict allow- / deny-lists before forwarding a command to the system
shell.

See [Codex CLI](https://github.com/openai/codex) for reference implementation.

## How it works

The local shell tool enables agents to run in a continuous loop with access to a terminal.

It sends shell commands, which your code executes on a local machine and then returns the output back to the model. This loop allows the model to complete the build-test-run loop without additional intervention by a user.

As part of your code, you'll need to implement a loop that listens for `local_shell_call` output items and executes the commands they contain. We strongly recommend sandboxing the execution of these commands to prevent any unexpected commands from being executed.

## Integrating the local shell tool

These are the high-level steps you need to follow to integrate the computer use tool in your application:

1. **Send a request to the model**:
Include the `local_shell` tool as part of the available tools.

2. **Receive a response from the model**:
Check if the response has any `local_shell_call` items.
This tool call contains an action like `exec` with a command to execute.

3. **Execute the requested action**:
Execute through code the corresponding action in the computer or container environment.

4. **Return the action output**:
After executing the action, return the command output and metadata like status code to the model.

5. **Repeat**:
Send a new request with the updated state as a `local_shell_call_output`, and repeat this loop until the model stops requesting actions or you decide to stop.

## Example workflow

Below is a minimal (Python) example showing the request/response loop. For
brevity, error handling and security checks are omitted— **do not execute**
**untrusted commands in production without additional safeguards**.

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
import subprocess, os
from openai import OpenAI

client = OpenAI()

# 1) Create the initial response request with the tool enabled
response = client.responses.create(
    model="codex-mini-latest",
    tools=[{"type": "local_shell"}],
    inputs=[\
        {\
            "type": "message",\
            "role": "user",\
            "content": [{"type": "text", "text": "List files in the current directory"}],\
        }\
    ],
)

while True:
    # 2) Look for a local_shell_call in the model's output items
    shell_calls = [item for item in response.output if item["type"] == "local_shell_call"]
    if not shell_calls:
        # No more commands — the assistant is done.
        break

    call = shell_calls[0]
    args = call["action"]

    # 3) Execute the command locally (here we just trust the command!)
    #    The command is already split into argv tokens.
    completed = subprocess.run(
        args["command"],
        cwd=args.get("working_directory") or os.getcwd(),
        env={**os.environ, **args.get("env", {})},
        capture_output=True,
        text=True,
        timeout=(args["timeout_ms"] / 1000) if args["timeout_ms"] else None,
    )

    output_item = {
        "type": "local_shell_call_output",
        "call_id": call["call_id"],
        "output": completed.stdout + completed.stderr,
    }

    # 4) Send the output back to the model to continue the conversation
    response = client.responses.create(
        model="codex-mini-latest",
        tools=[{"type": "local_shell"}],
        previous_response_id=response.id,
        inputs=[output_item],
    )

# Print the assistant's final answer
final_message = next(
    item for item in response.output if item["type"] == "message" and item["role"] == "assistant"
)
print(final_message["content"][0]["text"])
```

## Best practices

- **Sandbox or containerize** execution. Consider using Docker, firejail, or a
jailed user account.
- **Impose resource limits** (time, memory, network). The `timeout_ms`
provided by the model is only a hint—you should enforce your own limits.
- **Filter or scrutinize** high-risk commands (e.g. `rm`, `curl`, network
utilities).
- **Log every command and its output** for auditability and debugging.

### Error handling

If the command fails on your side (non-zero exit code, timeout, etc.) you can still send a `local_shell_call_output`; include the error message in the `output` field.

The model can choose to recover or try executing a different command. If you send malformed data (e.g. missing `call_id`) the API returns a standard `400` validation error. # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-remote-mcp.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-remote-mcp>"
title: "OpenAI Platform"
---

Log in [Sign up](https://platform.openai.com/signup) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools-web-search_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses>"
title: "Web search - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Web search

Allow models to search the web for the latest information before generating a response.

Copy page

Using the [Responses API](https://platform.openai.com/docs/api-reference/responses), you can enable web search by configuring it in the `tools` array in an API request to generate content. Like any other tool, the model can choose to search the web or not based on the content of the input prompt.

Web search tool example

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    tools: [ { type: "web_search_preview" } ],
    input: "What was a positive news story from today?",
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    tools=[{"type": "web_search_preview"}],
    input="What was a positive news story from today?"
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "tools": [{"type": "web_search_preview"}],
        "input": "what was a positive news story from today?"
    }'
```

Web search tool versions

The current default version of the web search tool is:

`web_search_preview`

Which points to a dated version:

`web_search_preview_2025_03_11`

As the tool evolves, future dated snapshot versions will be documented in
the [API reference](https://platform.openai.com/docs/api-reference/responses/create).

You can also force the use of the `web_search_preview` tool by using the `tool_choice` parameter, and setting it to `{type: "web_search_preview"}` \- this can help ensure lower latency and more consistent results.

## Output and citations

Model responses that use the web search tool will include two parts:

- A `web_search_call` output item with the ID of the search call.
- A `message` output item containing:

  - The text result in `message.content[0].text`
  - Annotations `message.content[0].annotations` for the cited URLs

By default, the model's response will include inline citations for URLs found in the web search results. In addition to this, the `url_citation` annotation object will contain the URL, title and location of the cited source.

When displaying web results or information contained in web results to end users, inline citations must be made clearly visible and clickable in your user interface.

```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
[\
  {\
    "type": "web_search_call",\
    "id": "ws_67c9fa0502748190b7dd390736892e100be649c1a5ff9609",\
    "status": "completed"\
  },\
  {\
    "id": "msg_67c9fa077e288190af08fdffda2e34f20be649c1a5ff9609",\
    "type": "message",\
    "status": "completed",\
    "role": "assistant",\
    "content": [\
      {\
        "type": "output_text",\
        "text": "On March 6, 2025, several news...",\
        "annotations": [\
          {\
            "type": "url_citation",\
            "start_index": 2606,\
            "end_index": 2758,\
            "url": "https://...",\
            "title": "Title..."\
          }\
        ]\
      }\
    ]\
  }\
]
```

## User location

To refine search results based on geography, you can specify an approximate user location using country, city, region, and/or timezone.

- The `city` and `region` fields are free text strings, like `Minneapolis` and `Minnesota` respectively.
- The `country` field is a two-letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1), like `US`.
- The `timezone` field is an [IANA timezone](https://timeapi.io/documentation/iana-timezones) like `America/Chicago`.

Customizing user location

javascript

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    tools=[{\
        "type": "web_search_preview",\
        "user_location": {\
            "type": "approximate",\
            "country": "GB",\
            "city": "London",\
            "region": "London",\
        }\
    }],
    input="What are the best restaurants around Granary Square?",
)

print(response.output_text)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    tools: [{\
        type: "web_search_preview",\
        user_location: {\
            type: "approximate",\
            country: "GB",\
            city: "London",\
            region: "London"\
        }\
    }],
    input: "What are the best restaurants around Granary Square?",
});
console.log(response.output_text);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "tools": [{\
            "type": "web_search_preview",\
            "user_location": {\
                "type": "approximate",\
                "country": "GB",\
                "city": "London",\
                "region": "London"\
            }\
        }],
        "input": "What are the best restaurants around Granary Square?"
    }'
```

## Search context size

When using this tool, the `search_context_size` parameter controls how much context is retrieved from the web to help the tool formulate a response. The tokens used by the search tool do **not** affect the context window of the main model specified in the `model` parameter in your response creation request. These tokens are also **not** carried over from one turn to another — they're simply used to formulate the tool response and then discarded.

Choosing a context size impacts:

- **Cost**: Pricing of our search tool varies based on the value of this parameter. Higher context sizes are more expensive. See tool pricing [here](https://platform.openai.com/docs/pricing).
- **Quality**: Higher search context sizes generally provide richer context, resulting in more accurate, comprehensive answers.
- **Latency**: Higher context sizes require processing more tokens, which can slow down the tool's response time.

Available values:

- **`high`**: Most comprehensive context, highest cost, slower response.
- **`medium`** (default): Balanced context, cost, and latency.
- **`low`**: Least context, lowest cost, fastest response, but potentially lower answer quality.

Again, tokens used by the search tool do **not** impact main model's token usage and are not carried over from turn to turn. Check the [pricing page](https://platform.openai.com/docs/pricing) for details on costs associated with each context size.

Customizing search context size

javascript

```python
1
2
3
4
5
6
7
8
9
10
11
12
13
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    tools=[{\
        "type": "web_search_preview",\
        "search_context_size": "low",\
    }],
    input="What movie won best picture in 2025?",
)

print(response.output_text)
```

```javascript
1
2
3
4
5
6
7
8
9
10
11
12
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    tools: [{\
        type: "web_search_preview",\
        search_context_size: "low",\
    }],
    input: "What movie won best picture in 2025?",
});
console.log(response.output_text);
```

```bash
1
2
3
4
5
6
7
8
9
10
11
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "tools": [{\
            "type": "web_search_preview",\
            "search_context_size": "low"\
        }],
        "input": "What movie won best picture in 2025?"
    }'
```

## Usage notes

| API Availability | Rate limits | Notes |
| --- | --- | --- |
| [Responses](https://platform.openai.com/docs/api-reference/responses)<br>[Chat Completions](https://platform.openai.com/docs/api-reference/chat)<br>[Assistants](https://platform.openai.com/docs/api-reference/assistants) | Same as tiered rate limits for underlying [model](https://platform.openai.com/docs/models) used with the tool. | [Pricing](https://platform.openai.com/docs/pricing#built-in-tools)<br>[ZDR and data residency](https://platform.openai.com/docs/guides/your-data) |

#### Limitations

- Web search is currently not supported in the [`gpt-4.1-nano`](https://platform.openai.com/docs/models/gpt-4.1-nano) model.
- The [`gpt-4o-search-preview`](https://platform.openai.com/docs/models/gpt-4o-search-preview) and [`gpt-4o-mini-search-preview`](https://platform.openai.com/docs/models/gpt-4o-mini-search-preview) models used in Chat Completions only support a subset of API parameters - view their model data pages for specific information on rate limits and feature support.
- When used as a tool in the [Responses API](https://platform.openai.com/docs/api-reference/responses), web search has the same tiered rate limits as the models above.
- Web search is limited to a context window size of 128000 (even with [`gpt-4.1`](https://platform.openai.com/docs/models/gpt-4.1) and [`gpt-4.1-mini`](https://platform.openai.com/docs/models/gpt-4.1-mini) models).
- [Refer to this guide](https://platform.openai.com/docs/guides/your-data) for data handling, residency, and retention information.

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_tools_api-mode=responses.md
---

---

url: "<https://platform.openai.com/docs/guides/tools?api-mode=responses>"
title: "Using tools - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Using tools

Use tools like remote MCP servers or web search to extend the model's capabilities.

Copy page

When generating model responses, you can extend model capabilities using built-in **tools**. These tools help models access additional context and information from the web or your files. The example below uses the [web search tool](https://platform.openai.com/docs/guides/tools-web-search) to use the latest information from the web to generate a model response.

Include web search results for the model response

javascript

```javascript
1
2
3
4
5
6
7
8
9
10
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    tools: [ { type: "web_search_preview" } ],
    input: "What was a positive news story from today?",
});

console.log(response.output_text);
```

```python
1
2
3
4
5
6
7
8
9
10
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    tools=[{"type": "web_search_preview"}],
    input="What was a positive news story from today?"
)

print(response.output_text)
```

```bash
1
2
3
4
5
6
7
8
curl "https://api.openai.com/v1/responses" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-4.1",
        "tools": [{"type": "web_search_preview"}],
        "input": "what was a positive news story from today?"
    }'
```

You can include several built-in tools from the available tools list below and let the model decide which tools to use based on the conversation.

## Available tools

Here's an overview of the tools available in the OpenAI platform—select one of them for further guidance on usage.

[Function calling\\
\\
Call custom code to give the model access to additional data and capabilities.](https://platform.openai.com/docs/guides/function-calling) [Web search\\
\\
Include data from the Internet in model response generation.](https://platform.openai.com/docs/guides/tools-web-search) [Remote MCP servers\\
\\
Give the model access to new capabilities via Model Context Protocol (MCP) servers.](https://platform.openai.com/docs/guides/tools-remote-mcp) [File search\\
\\
Search the contents of uploaded files for context when generating a response.](https://platform.openai.com/docs/guides/tools-file-search) [Image Generation\\
\\
Generate or edit images using GPT Image.](https://platform.openai.com/docs/guides/tools-image-generation) [Code interpreter\\
\\
Allow the model to execute code in a secure container.](https://platform.openai.com/docs/guides/tools-code-interpreter) [Computer use\\
\\
Create agentic workflows that enable a model to control a computer interface.](https://platform.openai.com/docs/guides/tools-computer-use)

## Usage in the API

When making a request to generate a [model response](https://platform.openai.com/docs/api-reference/responses/create), you can enable tool access by specifying configurations in the `tools` parameter. Each tool has its own unique configuration requirements—see the [Available tools](https://platform.openai.com/docs/guides/tools?api-mode=responses#available-tools) section for detailed instructions.

Based on the provided [prompt](https://platform.openai.com/docs/guides/text), the model automatically decides whether to use a configured tool. For instance, if your prompt requests information beyond the model's training cutoff date and web search is enabled, the model will typically invoke the web search tool to retrieve relevant, up-to-date information.

You can explicitly control or guide this behavior by setting the `tool_choice` parameter [in the API request](https://platform.openai.com/docs/api-reference/responses/create).

### Function calling

In addition to built-in tools, you can define custom functions using the `tools` array. These custom functions allow the model to call your application's code, enabling access to specific data or capabilities not directly available within the model.

Learn more in the [function calling guide](https://platform.openai.com/docs/guides/function-calling).

Responses # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_vision-fine-tuning.md
---

---

url: "<https://platform.openai.com/docs/guides/vision-fine-tuning>"
title: "OpenAI Platform"
---

Log in [Sign up](https://platform.openai.com/signup) # Ajoute une ligne vide après chaque fichier

---

File: ./platform.openai.com_docs_guides_voice-agents_voice-agent-architecture=speech-to-speech.md
---

---

url: "<https://platform.openai.com/docs/guides/voice-agents?voice-agent-architecture=speech-to-speech>"
title: "Voice agents - OpenAI API"
---

Log in [Sign up](https://platform.openai.com/signup)

# Voice agents

Learn how to build voice agents that can understand audio and respond back in natural language.

Copy page

Use the OpenAI API and Agents SDK to create powerful, context-aware voice agents for applications like customer support and language tutoring. This guide helps you design and build a voice agent.

## Choose the right architecture

OpenAI provides two primary architectures for building voice agents:

[![Speech-to-Speech](https://cdn.openai.com/API/docs/images/blue_card.png)\\
\\
Speech-to-Speech\\
\\
Native audio handling by the model using the Realtime API](https://platform.openai.com/docs/guides/voice-agents?voice-agent-architecture=speech-to-speech) [![Chained](https://cdn.openai.com/API/docs/images/orange_card.png)\\
\\
Chained\\
\\
Transforming audio to text and back to use existing models](https://platform.openai.com/docs/guides/voice-agents?voice-agent-architecture=chained)

### Speech-to-speech (realtime) architecture

![Diagram of a speech-to-speech agent](https://cdn.openai.com/API/docs/images/diagram-speech-to-speech.png)

The multimodal speech-to-speech (S2S) architecture directly processes audio inputs and outputs, handling speech in real time in a single multimodal model, `gpt-4o-realtime-preview`. The model thinks and responds in speech. It doesn't rely on a transcript of the user's input—it hears emotion and intent, filters out noise, and responds directly in speech. Use this approach for highly interactive, low-latency, conversational use cases.

| Strengths | Best for |
| --- | --- |
| Low latency interactions | Interactive and unstructured conversations |
| Rich multimodal understanding (audio and text simultaneously) | Language tutoring and interactive learning experiences |
| Natural, fluid conversational flow | Conversational search and discovery |
| Enhanced user experience through vocal context understanding | Interactive customer service scenarios |

### Chained architecture

![Diagram of a chained agent architecture](https://cdn.openai.com/API/docs/images/diagram-chained-agent.png)

A chained architecture processes audio sequentially, converting audio to text, generating intelligent responses using large language models (LLMs), and synthesizing audio from text. We recommend this predictable architecture if you're new to building voice agents. Both the user input and model's response are in text, so you have a transcript and can control what happens in your application. It's also a reliable way to convert an existing LLM-based application into a voice agent.

You're chaining these models: `gpt-4o-transcribe` → `gpt-4.1` → `gpt-4o-mini-tts`

| Strengths | Best for |
| --- | --- |
| High control and transparency | Structured workflows focused on specific user objectives |
| Robust function calling and structured interactions | Customer support |
| Reliable, predictable responses | Sales and inbound triage |
| Support for extended conversational context | Scenarios that involve transcripts and scripted responses |

The following guide below is for building agents using our recommended **speech-to-speech architecture**.

To learn more about the chained architecture, see [the chained architecture guide](https://platform.openai.com/docs/guides/voice-agents?voice-agent-architecture=chained).

## Build a voice agent

Use OpenAI's APIs and SDKs to create powerful, context-aware voice agents.

Building a speech-to-speech voice agent requires:

1. Establishing a connection for realtime data transfer
2. Creating a realtime session with the Realtime API
3. Using an OpenAI model with realtime audio input and output capabilities

If you are new to building voice agents, we recommend using the [Realtime Agents in the TypeScript Agents SDK](https://openai.github.io/openai-agents-js/guides/voice-agents/) to get started with your voice agents.

```bash
npm install @openai/agents
```

If you want to get an idea of what interacting with a speech-to-speech voice agent looks like, check
out our [quickstart guide](https://openai.github.io/openai-agents-js/guides/voice-agents/) to get started or check out our example application below.

[Realtime API Agents Demo\\
\\
A collection of example speech-to-speech voice agents including handoffs and reasoning model validation.](https://github.com/openai/openai-realtime-agents)

### Choose your transport method

As latency is critical in voice agent use cases, the Realtime API provides two low-latency
transport methods:

1. **WebRTC**: A peer-to-peer protocol that allows for low-latency audio and video communication.
2. **WebSocket**: A common protocol for realtime data transfer.

The two transport methods for the Realtime API support largely the same capabilities, but which one
is more suitable for you will depend on your use case.

WebRTC is generally the better choice if you are building client-side applications such as
browser-based voice agents.

For anything where you are executing the agent server-side such as building an agent that can
[answer phone calls](https://github.com/openai/openai-realtime-twilio-demo), WebSockets will be the
better option.

If you are using the [OpenAI Agents SDK for TypeScript](https://openai.github.io/openai-agents-js/),
we will automatically use WebRTC if you are building in the browser and WebSockets otherwise.

### Design your voice agent

Just like when designing a text-based agent, you'll want to start small and keep your agent focused
on a single task.

Try to limit the number of tools your agent has access to and provide an escape hatch for the agent
to deal with tasks that it is not equipped to handle.

This could be a tool that allows the agent to handoff the conversation to a human or a certain
phrase that it can fall back to.

While providing tools to text-based agents is a great way to provide additional context to the
agent, for voice agents you should consider giving critical information as part of the prompt as
opposed to requiring the agent to call a tool first.

If you are just getting started, check out our [Realtime Playground](https://platform.openai.com/playground/realtime) that
provides prompt generation helpers, as well as a way to stub out your function tools including
stubbed tool responses to try end to end flows.

### Precisely prompt your agent

With speech-to-speech agents, prompting is even more powerful than with text-based agents as the
prompt allows you to not just control the content of the agent's response but also the way the agent
speaks or help it understand audio content.

A good example of what a prompt might look like:

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
# Personality and Tone
## Identity
// Who or what the AI represents (e.g., friendly teacher, formal advisor, helpful assistant). Be detailed and include specific details about their character or backstory.

## Task
// At a high level, what is the agent expected to do? (e.g. "you are an expert at accurately handling user returns")

## Demeanor
// Overall attitude or disposition (e.g., patient, upbeat, serious, empathetic)

## Tone
// Voice style (e.g., warm and conversational, polite and authoritative)

## Level of Enthusiasm
// Degree of energy in responses (e.g., highly enthusiastic vs. calm and measured)

## Level of Formality
// Casual vs. professional language (e.g., “Hey, great to see you!” vs. “Good afternoon, how may I assist you?”)

## Level of Emotion
// How emotionally expressive or neutral the AI should be (e.g., compassionate vs. matter-of-fact)

## Filler Words
// Helps make the agent more approachable, e.g. “um,” “uh,” "hm," etc.. Options are generally "none", "occasionally", "often", "very often"

## Pacing
// Rhythm and speed of delivery

## Other details
// Any other information that helps guide the personality or tone of the agent.

# Instructions
- If a user provides a name or phone number, or something else where you ened to know the exact spelling, always repeat it back to the user to confrm you have the right understanding before proceeding. // Always include this
- If the caller corrects any detail, acknowledge the correction in a straightforward manner and confirm the new spelling or value.
```

You do not have to be as detailed with your instructions. This is for illustrative purposes. For
shorter examples, check out the prompts on [OpenAI.fm](https://openai.fm/).

For use cases with common conversation flows you can encode those inside the prompt using markup language like JSON

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
# Conversation States
[\
  {\
    "id": "1_greeting",\
    "description": "Greet the caller and explain the verification process.",\
    "instructions": [\
      "Greet the caller warmly.",\
      "Inform them about the need to collect personal information for their record."\
    ],\
    "examples": [\
      "Good morning, this is the front desk administrator. I will assist you in verifying your details.",\
      "Let us proceed with the verification. May I kindly have your first name? Please spell it out letter by letter for clarity."\
    ],\
    "transitions": [{\
      "next_step": "2_get_first_name",\
      "condition": "After greeting is complete."\
    }]\
  },\
  {\
    "id": "2_get_first_name",\
    "description": "Ask for and confirm the caller's first name.",\
    "instructions": [\
      "Request: 'Could you please provide your first name?'",\
      "Spell it out letter-by-letter back to the caller to confirm."\
    ],\
    "examples": [\
      "May I have your first name, please?",\
      "You spelled that as J-A-N-E, is that correct?"\
    ],\
    "transitions": [{\
      "next_step": "3_get_last_name",\
      "condition": "Once first name is confirmed."\
    }]\
  },\
  {\
    "id": "3_get_last_name",\
    "description": "Ask for and confirm the caller's last name.",\
    "instructions": [\
      "Request: 'Thank you. Could you please provide your last name?'",\
      "Spell it out letter-by-letter back to the caller to confirm."\
    ],\
    "examples": [\
      "And your last name, please?",\
      "Let me confirm: D-O-E, is that correct?"\
    ],\
    "transitions": [{\
      "next_step": "4_next_steps",\
      "condition": "Once last name is confirmed."\
    }]\
  },\
  {\
    "id": "4_next_steps",\
    "description": "Attempt to verify the caller's information and proceed with next steps.",\
    "instructions": [\
      "Inform the caller that you will now attempt to verify their information.",\
      "Call the 'authenticateUser' function with the provided details.",\
      "Once verification is complete, transfer the caller to the tourGuide agent for further assistance."\
    ],\
    "examples": [\
      "Thank you for providing your details. I will now verify your information.",\
      "Attempting to authenticate your information now.",\
      "I'll transfer you to our agent who can give you an overview of our facilities. Just to help demonstrate different agent personalities, she's instructed to act a little crabby."\
    ],\
    "transitions": [{\
      "next_step": "transferAgents",\
      "condition": "Once verification is complete, transfer to tourGuide agent."\
    }]\
  }\
]
```

Instead of writing this out by hand, you can also check out this
[Voice Agent Metaprompter](https://chatgpt.com/g/g-678865c9fb5c81918fa28699735dd08e-voice-agent-metaprompt-gpt)
or [copy the metaprompt](https://github.com/openai/openai-realtime-agents/blob/main/src/app/agentConfigs/voiceAgentMetaprompt.txt) and use it directly.

### Handle agent handoff

In order to keep your agent focused on a single task, you can provide the agent with the ability to
transfer or handoff to another specialized agent. You can do this by providing the agent with a
function tool to initiate the transfer. This tool should have information on when to use it for a
handoff.

If you are using the [OpenAI Agents SDK for TypeScript](https://openai.github.io/openai-agents-js/),
you can define any agent as a potential handoff to another agent.

```typescript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
import { RealtimeAgent } from "@openai/agents/realtime";

const productSpecialist = new RealtimeAgent({
  name: 'Product Specialist',
  instructions: 'You are a product specialist. You are responsible for answering questions about our products.',
});

const triageAgent = new RealtimeAgent({
  name: 'Triage Agent',
  instructions: 'You are a customer service frontline agent. You are responsible for triaging calls to the appropriate agent.',
  tools: [\
    productSpecialist,\
  ]
})
```

The SDK will automatically facilitate the handoff between the agents for you.

Alternatively if you are building your own voice agent, here is an example of such a tool definition:

```js
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
const tool = {
  type: "function",
  function: {
    name: "transferAgents",
    description: `
Triggers a transfer of the user to a more specialized agent.
Calls escalate to a more specialized LLM agent or to a human agent, with additional context.
Only call this function if one of the available agents is appropriate. Don't transfer to your own agent type.

Let the user know you're about to transfer them before doing so.

Available Agents:
- returns_agent
- product_specialist_agent
  `.trim(),
    parameters: {
      type: "object",
      properties: {
        rationale_for_transfer: {
          type: "string",
          description: "The reasoning why this transfer is needed.",
        },
        conversation_context: {
          type: "string",
          description:
            "Relevant context from the conversation that will help the recipient perform the correct action.",
        },
        destination_agent: {
          type: "string",
          description:
            "The more specialized destination_agent that should handle the user's intended request.",
          enum: ["returns_agent", "product_specialist_agent"],
        },
      },
    },
  },
};
```

Once the agent calls that tool you can then use the `session.update` event of the Realtime API to
update the configuration of the session to use the instructions and tools available to the
specialized agent.

### Extend your agent with specialized models

![Diagram showing the speech-to-speech model calling other agents as tools](https://cdn.openai.com/API/docs/diagram-speech-to-speech-agent-tools.png)

While the speech-to-speech model is useful for conversational use cases, there might be use cases
where you need a specific model to handle the task like having o3 validate a return request against
a detailed return policy.

In that case you can expose your text-based agent using your preferred model as a function tool
call that your agent can send specific requests to.

If you are using the [OpenAI Agents SDK for TypeScript](https://openai.github.io/openai-agents-js/),
you can give a `RealtimeAgent` a `tool` that will trigger the specialized agent on your server.

```typescript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
import { RealtimeAgent, tool } from '@openai/agents/realtime';
import { z } from 'zod';

const supervisorAgent = tool({
  name: 'supervisorAgent',
  description: 'Passes a case to your supervisor for approval.',
  parameters: z.object({
    caseDetails: z.string(),
  }),
  execute: async ({ caseDetails }, details) => {
    const history = details.context.history;
    const response = await fetch('/request/to/your/specialized/agent', {
      method: 'POST',
      body: JSON.stringify({
        caseDetails,
        history,
      }),
    });
    return response.text();
  },
});

const returnsAgent = new RealtimeAgent({
  name: 'Returns Agent',
  instructions: 'You are a returns agent. You are responsible for handling return requests. Always check with your supervisor before making a decision.',
  tools: [\
    supervisorAgent,\
  ],
});
```

Speech-to-Speech # Ajoute une ligne vide après chaque fichier
