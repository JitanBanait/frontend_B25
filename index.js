let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn")
let uniqueId = 1;
let data = []
data = JSON.parse(localStorage.getItem("myTask")) || [] ;
console.log(data.length);

function onLoad(data){
//debugger
if(data.length > 0){
  console.log();

   uniqueId = data[data.length -1].id
   uniqueId++;
        data.forEach((task)=>{
            addTodo(task.task , task.id);
        })
      }
}

function addTodo(task , id){
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
          let store = JSON.parse(localStorage.getItem("myTask"))
          console.log(id , "store")
          let newData = store.filter(function(element , index){
                   return element.id != id; 
          })
          localStorage.setItem("myTask",JSON.stringify(newData));
          list.removeChild(li);
        })
}



input.addEventListener("keyup" ,function(event){ 
    if(event.keyCode == 13){
        let task = {
          task : input.value,
          id : uniqueId  
        }


      data.push(task);
      localStorage.setItem("myTask" , JSON.stringify(data));
      addTodo(task.task , task.id)
      uniqueId++;
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

