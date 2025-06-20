---
url: "https://platform.openai.com/docs/guides/tools?api-mode=responses"
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

Responses