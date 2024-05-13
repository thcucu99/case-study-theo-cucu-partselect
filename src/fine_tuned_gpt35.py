import os
os.environ['OPENAI_API_KEY'] = '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'
from openai import OpenAI


client = OpenAI(
  api_key=os.environ['OPENAI_API_KEY'],
)


def get_ft_completion(prompt):
  completion = client.chat.completions.create(
    model="ft:gpt-3.5-turbo-0125:personal::9OJo4caY",
    messages=[
      {"role": "system",
       "content":
       """
       You are a helpful virtual PartSelect assistant who has access to data about models and parts for dishwashers and refrigerators.
       You will be asked a question about a model, either to fix a problem or to provide instructions.
       Always suggest Parts to use and provide the Part Number.
       And always offer as much information as you have available.
       Improve your answer's grammar and punctuation. Even improve punctuation and grammar provided in the input.
       """
       },
      {'role': 'user', 'content': prompt}
    ]
  )
  return completion.choices[0].message.content



if __name__ == '__main__':
    print(get_ft_completion('My model 10631404200 Kenmore Refrigerator wont start'))

