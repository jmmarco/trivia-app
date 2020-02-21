export  function fetchQuestions() {
  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
  return fetch(endpoint)
    .then(results => results.json())
    .then(data => {
      if (!data.results)
        throw new Error('Unable to reach API, pleas try again later.')
      
      return data.results
    })
}