// console.log("SCRIPT STATUS");
// setTimeout(()=>{
// console.log("i am in timeout")
// },2000)
// setTimeout(()=>{
//     console.log("this is another timeout");
// },3000)

//function walkinresturant(cb){
//     console.log("I am walking in the resturant");
// setTimeout(cb,2000);
// }
// function order(cb){
//     console.log("I am ordering food");
//     setTimeout(cb,3000);
// }
// function havinglunch
// (cb){
//     console.log("I am having lunch");
//     setTimeout(cb,8000);
// }
// function paybill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb,5000);
// }
// function walkout(cb){
//     console.log("I am walking out of the resturant");
//     //setTimeout(cb,3000);
// }
// walkinresturant(()=>{
//     order(()=>{
//         havinglunch(()=>{
//             paybill(()=>{
//                 walkout();
//             });
//         });
//     });
//});


//pyramid of doom
//disadvantage = cannot be debugged easily, hard to read, hard to maintain
//solution = use promises and async await

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function doublearr(arr){
//     let arr2=[];
//     for(let i = 0; i<arr.length; i++){
//         arr2[i] = arr[i] * 2;
//     }
//     return arr2;
// }
// doublearr(arr);

// console.log(arr2);


// Array.prototype.doublearr= function(data){
//     let output  = [];
//     for(let i = 0; i<arr.length ; i++){
//         output.push(arr[i]*2);
//     }
//     return output;
// }
// const output = arr.doublearr();
// console.log(output);
//doublearr(arr);
