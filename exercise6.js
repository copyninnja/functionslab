fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {   
const completed=json.reduce(function (prev,next){
    if(next.completed)
    prev[next.userId] === undefined
    ?(prev[next.userId]=1)
    :(prev[next.userId]+=1)
    return prev;
},{});

console.log(completed);

  })
  .catch(function(err) { 
    console.log(err);
  });