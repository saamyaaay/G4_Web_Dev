// let cart ={
//     "shoes" : 300,
//     "dress":500,
//     "earrings" : 400
// }
// function ordercart(cart){
//   console.log("total number of products",Object.keys(cart).length);
//   for(let key in cart){
//     total+=cart[key];
//   }
//   return total;
// setTimeout(cart,3000);
// }
// function ordersummary(){
// console.log("total number of products", Object.keys(cart).length , "Total amount to be paid", total);
// console.log("order id ",Math.random(100000,99999));
// //setTimeout(3000);

// }
// function paymentgateway(){
// console.log(ordersummary());
// console.log("payment is sucessful");
// }
// function successfullorder(){
// console.log(paymentgateway());
// }
// ordercart((cart)=>{
//     ordersummary(()=>{
//         successfullorder();
//     })
// })


///////////////////////////FILTER///////////////////////////////////////////////////////////

// let arr = [1,2,3,4,5,6,7,8,9,10];
// Array.prototype.mapFilter = function(logic) {
//     let output = [];
//     for (let i = 0; i < this.length; i++) {
//         if(logic(this[i])) {
//             output.push(this[i]);
//         }
//         //output.push(logic(this[i]));
//     }
//     return output;
// }
// function isodd(x){
// if(x % 2 != 0) {
//         return x;
//     }
    
// }
// function isprime(x){

// }

// let a = arr.mapFilter(isodd);
// console.log(a); 


/////////////////////////////////////////////REDUCE////////////////////////////////////////////////////////

//The reduce() method in JavaScript is used on arrays to reduce all elements to a single value.
// You give it a function (called the reducer), and it runs that function for every item in the array while accumulating a result.

let arr = [1,2,3,4,5,6]

Array.prototype.reducearr = function(logic,curr){
    let acc = curr; 
    let start = 0;
    if(curr == undefined){
        acc =  this[0];
        start++;
    }
    for(let i = start ; i <this.length ; i++){
        acc = logic (acc , this[i], i , this);
    }
    return acc;
}
function sum (acc ,val){
    return acc+val;
}
const res = arr.reducearr(sum,0);
console.log(res);