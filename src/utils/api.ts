import he from "he";

interface TriviaProps {
  question: string;
}

export function fetchQuestions() {
  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;
  return fetch(endpoint)
    .then((results) => results.json())
    .then((data) => {
      if (!data.results)
        throw new Error("Unable to reach API, please try again later.");
      // Iterate over each trivia object, find the question and remove encoded characters
      const results = [
        ...data.results.map((trivia: { question: string }) => {
          // decode encoded questions using the library he
          return { ...trivia, question: he.decode(trivia.question) };
        }),
      ];
      return results;
    });
}
