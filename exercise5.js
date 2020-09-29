fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {   
//     const umcompleted=json.filter((todo)=>(!todo.completed)).map(function(item,index,array){
//     return {userId : item.userId,title : item.title};

const uncompleted=json.reduce(function (prev,next){
    if(next.completed)
    prev.push({userId : next.userId,title : next.title});
    return prev;
},[]);

console.log(uncompleted);

  })
  .catch(function(err) { 
    console.log(err);
  });