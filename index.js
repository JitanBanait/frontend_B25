let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn")

let data = []
data = JSON.parse(localStorage.getItem("myTask")) || [] ;
console.log(data.length);

function onLoad(data){
      if(data.length > 0){
        data.forEach((task)=>{
            addTodo(task);
        })
      }
}

function addTodo(task){
        let li = document.createElement("li");
        let title = document.createElement("span")
        let btnFunction = document.createElement("span")
        let btnDelete = document.createElement("button")
        btnDelete.innerText = "Delete";

        btnFunction.appendChild(btnDelete);

        title.innerText = task;
        li.appendChild(title);
        li.appendChild(btnFunction)    
        list.appendChild(li)   
        input.value="";

        //-----Delete Functionalty---

        btnDelete.addEventListener("click",function(e){
              list.removeChild(li);
        })
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

//-----------------------------------------------------------

// Array Itrators
// arr.ForEach()
// let arr = [1,2,3,4,5];
// let arr2 ;

// arr2 = arr.filter(function(value , index , array){
//   if(index %2 == 0){
//     return value ;

//   }
      
// })

// console.log(arr)
// console.log(arr2)

