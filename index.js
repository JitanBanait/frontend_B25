let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn")
function addTodo(task){
        let li = document.createElement("li");
        li.innerText = task;
        list.appendChild(li);       
        input.value="";
}
input.addEventListener("keyup" ,function(event){
    console.log(event)
    console.log(input.value)
    if(event.keyCode == 13){
      addTodo(input.value)
    }
} )
btn.addEventListener("click",function(event){  
       addTodo(input.value)
})
console.log("end")