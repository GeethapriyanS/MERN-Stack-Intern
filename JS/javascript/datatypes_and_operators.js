// //Primitive Datatypes
// a = "sece"
// console.log(a)
// b = true
// console.log(b)

// //Checking the type of variable
// console.log(typeof(b))

// //Secondary Datatypes
// array =['a',10,"String",23.999]
// console.log(array);

// //1st way declaring object
// obj1 = { 
//     "firstname":"hello",
//     "lastname":27,
// }
// console.log(obj1.firstname,obj1.lastname);
// console.log(obj1["lastname"]);
// console.log(typeof(obj1));

// //2nd way declaring object
// obj2 = {}
// console.log(obj2)
// obj2["dept"]="CSE";
// obj2["age"]=27;
// console.log(obj2);

// //3rd way declaring object
// obj3=new Object();
// obj3.count=24;
// console.log(obj3.count);
// console.log(obj3);

// //set
// set = new Set(["hello",'22','22','hello']);
// console.log(typeof(set));
// console.log(set[0]);

// const mySet = new Set([10, 20, 30, 40]);

// mySet.forEach((value) => {
//   console.log(value); 
// });

// const mySet1 = new Set([10, 20, 30, 40]);

// for (const value of mySet1) {
//   console.log(value); 
// }
// for(let i of arr){
//     console.log(i);
// }

// for(let i of Object.values(obj)){
//     console.log(i);
// }
// for(let i of Object.keys(obj)){
//     console.log(i);
// }
// for(let [i,j] of Object.entries(obj)){
//     console.log(i,j);
// }

// //destructuring operator
// var array1=[10,20,30];
// var [a,b,c,d]=array1;
// console,log(a,b,c,d);

// //Hoisting
// console.log(a)
// var a=10;
// console.log(b)
// const b=10;
// console.log(c)
// let c=10;