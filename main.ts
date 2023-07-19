const data = JSON.parse(Deno.readTextFileSync("result.json"));

const polls = data.messages.filter((message: any) => !!message.poll);

const transformedPolls = polls.map((message: any) => ({
  question: message.poll.question,
  options: message.poll.answers.map((answer: any) => ({
    text: answer.text,
    isAnswer: answer.chosen,
  })),
}));

console.log(transformedPolls);

Deno.writeTextFileSync("polls.json", JSON.stringify(transformedPolls));
