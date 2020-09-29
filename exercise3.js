fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {   
    const umcompleted=json.filter((todo)=>(!todo.completed)).map(function(item,index,array){
    return {userId : item.userId,title : item.title};
});
console.log(umcompleted)

  })
  .catch(function(err) { 
    console.log(err);
  });