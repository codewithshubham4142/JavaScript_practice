
// if-else Statement

let a=20;
if(a>10){
    document.write("a is greter than 20")
}else{
    document.write("a is not greter than 20")
}


// Switch Case :-

let grade = "A"
let result;
switch (grade) {
    case 'A':
        result = "A grade"
        break;
    case 'B':
        result = "B grade"
        break;
    case 'C':
        result = "C grade"
        break;
    case 'D':
        result = "D grade"
        break;
    default:
        result = "not any case"
}
document.write(result)

// Loops :-

// for loop 

for( i=0;i<=10;i++){
    document.write(i)
}

// }
let add=new function(num1,num2){
let result=num1+num2;
document.write(result)
}
add(12,34);

// Callback
let button=document.addEventListener('btn');
console.log(button)
button.addEventListener('click',()=>{
  button.style.color="red"
})



 //map,filter ,reduce is modern js element

        //map is used to create a new array 
        let arrays=[34,23]
       let arr= arrays.map((value,index,array)=>{
        //console.log(value,index,array)
        return value +1
        
        })
        console.log(arrays)
        console.log(arr)


//-----------------------------------



      //filter()
      let arr1=[34,23,34,44]
       let b =arr1.filter((a)=>{
        return a<40

      })
      console.log(b)


//---------------------------------------

      //reduce() method

      let arr2=[1,3,5,3,4,2]
       let c=arr2.reduce((h1,h2)=>{
        return h1+h2
      })
      
      console.log(c)
