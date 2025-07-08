// const userdata = [
//   { name: "shiv",  age: 20 },
//   { name: "sanya", age: 20 },
//   { name: "rk",    age: 21 }
// ];

// const namesOf20YearOlds = userdata
//   .filter(user => user.age === 20)  
//   .map(user   => user.name);        

// console.log(namesOf20YearOlds);


// shivPromise = 
// .then((res)=>{
//     console.log("HELLO SHIV");
//     console.log(res);
// })
// .then((res)=>{
//     console.log("party");
//     console.log(res);
// })
// .cathch((err)=>{
//     console.log("ERROR");
//     console.log(err);
// })


// Basic Promise creation and usage
// Resolves after 500ms; .then() runs on success
/*
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => resolve('A resolved'), 500);
});
promiseA.then(result => console.log('Basic Promise:', result));

// Promise.all() example
// Waits for all promises to resolve; rejects if any fail
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => resolve('B resolved'), 300);
});
const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => resolve('C resolved'), 700);
});
const promiseD = new Promise((resolve, reject) => {
  setTimeout(() => resolve('D resolved'), 200);
});
Promise.all([promiseB, promiseC, promiseD])
  .then(results => console.log('All succeeded:', results))
  .catch(error => console.error('One failed:', error));

// Promise.race() example
// Resolves/rejects as soon as the first promise settles (any outcome)
const promiseE = new Promise((resolve, reject) => {
  setTimeout(() => reject('E rejected'), 400);
});
const promiseF = new Promise((resolve, reject) => {
  setTimeout(() => resolve('F resolved'), 600);
});
const promiseG = new Promise((resolve, reject) => {
  setTimeout(() => resolve('G resolved'), 800);
});
Promise.race([promiseE, promiseF, promiseG])
  .then(result => console.log('Race winner:', result))
  .catch(error => console.error('Race error:', error));

// Promise.allSettled() example
// Waits for all promises to finish; gives status/result for each (never rejects)
const promiseH = new Promise((resolve, reject) => {
  setTimeout(() => resolve('H resolved'), 200);
});
const promiseI = new Promise((resolve, reject) => {
  setTimeout(() => reject('I rejected'), 500);
});
const promiseJ = new Promise((resolve, reject) => {
  setTimeout(() => resolve('J resolved'), 300);
});
Promise.allSettled([promiseH, promiseI, promiseJ])
  .then(results => {
    console.log('All settled results:', results.map(r => r.status));
  });

// Promise.any() example
// Resolves as soon as any promise resolves; rejects only if all fail
const promiseK = new Promise((resolve, reject) => {
  setTimeout(() => reject('K rejected'), 200);
});
const promiseL = new Promise((resolve, reject) => {
  setTimeout(() => resolve('L resolved'), 400);
});
const promiseM = new Promise((resolve, reject) => {
  setTimeout(() => reject('M rejected'), 300);
});
Promise.any([promiseK, promiseL, promiseM])
  .then(result => console.log('First success:', result))
  .catch(errors => console.error('All failed:', errors));

  */

  async function getData() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.products);
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

getData();
console.log("--------------BIND-----------------");
const bindWelcome1 = welcome.bind(student1);
bindWelcome1("Good Afternoon", "Thankyou....");
const bindWelcome2 = welcome.bind(student2);
bindWelcome2("Good Afternoon", "Thankyou....");