fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoTitles=json.map(function(item,index,array){
    return item.title;
});
console.log(todoTitles)
// json.forEach( (todo) => {
//         console.log(`${todo.title}`)
//     })
  })
  .catch(function(err) { 
    console.log(err);
  });