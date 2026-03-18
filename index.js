let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn")

let data = []
data = JSON.parse(localStorage.getItem("myTask")) || [] ;
console.log(data.length);

function onLoad(data){
      if(data.length > 0){
        for(let i = 0 ; i < data.length ; i++){
          addTodo(data[i]);
        }
      }
}

function addTodo(task){
        let li = document.createElement("li");
        li.innerText = task;
        list.appendChild(li);       
        input.value="";
}

input.addEventListener("keyup" ,function(event){ 
    if(event.keyCode == 13){
      data.push(input.value);
      localStorage.setItem("myTask" , JSON.stringify(data));
      addTodo(input.value)
    }
} )

btn.addEventListener("click",function(event){  
       addTodo(input.value)
})

console.log("end")

onLoad(data)