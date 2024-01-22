//  function Getdata(){

//  return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(455)
        
//     }, 3000);
// })}

//  async function Getdata(){
//      let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      let data = await x.text();
//      console.log(data);
//      return 455;
    
//    }

// async function main(){
//     console.log("Loading");
//     console.log("Do something else");
//     console.log("load data");
//     let data = await Getdata();
//     console.log(data);
//     console.log("Process Data");
//     console.log("Task 2");

// }
// main()




//    Error Handling


// let a= prompt("enter a number")
// let b = prompt("Enter second number")
// if (isNaN(a) || isNaN(b)) {
//     // using custom error handling
//     throw SyntaxError("Error found");  
// }
// let sum =parseInt(a)+parseInt(b);
// console.log(sum);


// function main(){
//     let x = 1;
//     try {
//         console.log("The sum is ",sum * x);   
//         return true;  
//     } catch (error) {
//         console.log("Error");
//         return false;
//     }  
// }
// let mainfile =main()



// OOPS In js


// Prototype
// let obj = {
//     x:1,
//     y:"Hello"
// }
// console.log(obj);

// let Animal = {
//     eats:true
// }
// let Rabbit = {
//     jump:true
// }
// Rabbit.__proto__ = Animal;
// console.log(Rabbit.eats);

// Class
class Animal{

    constructor(name){
        this.name=name
        // console.log("Object Created");
    }
    eats(){
        console.log("eats");
    }
    jumps(){
        console.log("Jumps");
    }
}
let a = new Animal("Labra");
// console.log(a);
// console.log(a.name);

// Inheritance
class Lion extends Animal  {
    constructor(name){
        super(name)
        // console.log("Object Created and he is lion");
    }
    eats(){
        super.eats()
        console.log("eats 1");
    }


}
let b = new Lion("King");
// console.log(b);



// Imediate Involked function

// async function sleep(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve (45)  
//     }, 1000);
//     })
// }
// IIFE
// ( async function main() {
//     // let x = await sleep()
//     // // console.log(x);
//     // let y = await sleep()
//     // // console.log(y);
// // 
// })()


// Destructuring
// let [m,n,...rest] = [1,5,8,7,9,0]
// console.log(m,n,rest);

// let obj = {
//     w:1,
//     x:2,
//     y:3,
//     z:4
// }

// Rest Operator
// let {w,x,...rest} = obj
// console.log(w,x,rest);


// Spread operator
function sum(a,b,c){
return a+b+c;
}
let arr = [1,4,3]
// console.log(arr[0]+arr[1]+arr[2]);
// console.log(sum(...arr));


// Hoisting
function mainprogram(){
    console.log(a);
    var a = 27;
}
// mainprogram()



//function can be Hoisted but with const function not hoisted
//Cannot access 'fun' before initialization
// fun()
const fun= 
 ()=>{
    console.log(a);
    var a = 27;
}
















