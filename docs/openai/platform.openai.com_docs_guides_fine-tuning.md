---
url: "https://platform.openai.com/docs/guides/fine-tuning"
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
Fine-tune a reasoning model by grading its outputs.](https://platform.openai.com/docs/guides/reinforcement-fine-tuning)