---
url: "https://platform.openai.com/docs/guides/pdf-files?api-mode=responses"
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

Responses