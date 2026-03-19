// let input = document.getElementById("input");
// let list = document.getElementById("list");
// let btn = document.getElementById("btn")

// let data = []
// data = JSON.parse(localStorage.getItem("myTask")) || [] ;
// console.log(data.length);

// function onLoad(data){
//       if(data.length > 0){
//         for(let i = 0 ; i < data.length ; i++){
//           addTodo(data[i]);
//         }
//       }
// }

// function addTodo(task){
//         let li = document.createElement("li");
//         li.innerText = task;
//         list.appendChild(li);       
//         input.value="";
// }

// input.addEventListener("keyup" ,function(event){ 
//     if(event.keyCode == 13){
//       data.push(input.value);
//       localStorage.setItem("myTask" , JSON.stringify(data));
//       addTodo(input.value)
//     }
// } )

// btn.addEventListener("click",function(event){  
//        addTodo(input.value)
// })

// console.log("end")

// onLoad(data)


// let obj1 = {
//   a : 10,
//   b : 20,
//   c : {
//     a: 50,
//     b: 30
//   }
// }

// //let obj2 = {...obj1};

// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.c.b = 50;


// console.log("obj2 = ",obj2)
// console.log("obj1 = ",obj1)

// Array Itrators


// arr.ForEach()
let arr = [1,2,3,4,5];

// for(let i = 0 ; i < arr.length ; i++){
//   console.log(arr[i]);
// }

arr.forEach(function(value , index , arr){
    if(index%2 == 0){
      console.log(value * 3 , index , value);
    }
})



