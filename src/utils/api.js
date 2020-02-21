export function fetchQuestions() {
  const endpoint = encodeURI(
    `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
  );
  return fetch(endpoint)
    .then(results => results.json())
    .then(data => {
      if (!data.results)
        throw new Error("Unable to reach API, pleas try again later.")
      // Iterate over each question and remove encoded characters
      const results = [
        ...data.results.map(q => {
          return { ...q, question: htmlDecode(q.question) }
        })
      ];
      return results
    });
}

// Decode encoded characters for each question
const htmlDecode = innerHTML =>
  Object.assign(document.createElement("textarea"), { innerHTML }).value
