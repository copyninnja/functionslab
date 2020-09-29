fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter((todo) => todo.completed)

 console.log(completed.length)
  })
  .catch(function(err) { 
    console.log(err);
  });