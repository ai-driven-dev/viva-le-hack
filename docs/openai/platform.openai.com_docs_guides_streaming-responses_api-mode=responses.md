---
url: "https://platform.openai.com/docs/guides/streaming-responses?api-mode=responses"
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

Responses