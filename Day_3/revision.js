// let ,var and const
// scopes
// template literals
// arrow function
// destrucring
let arr = ["pen", "pencil", "notebook", "scale"];
// let x=arr[0];
// let y=arr[2];
// console.log(x,y)
// If I want to print all the values of array in a single line .
/**
 * symbol= ...
 */
console.log(...arr);
// let anotherBag = ["pen", "pencil", "notebook", "scale", "laptop"];
/**
 * anotherway
 *
 */
// let anotherBag=[...arr,"laptop"]
// console.log(anotherBag);

// Rest operator
// It is oposite to spread operator it packed the values .
// function print(a, b, ...kalvium) {
//   console.log(kalvium);
//   console.log(a,b)
// }
// print(1, 2, 3, 4);

/**
 * Classes
 */
let stu1 = {
  name: "dev",
  city: "mumbai",
};
let stu2 = {
  name: "harsh",
  city: "kanpur",
};
// console.log(stu1, stu2);

class Student {
  constructor(name, city, squad,age) {
    this.name = name;
    this.city = city;
    this.squad = squad;
    this.age=age

  }
  printName(){
    console.log(`my name is ${this.name}`)
  }
}
let stu3=new Student("I am name","21","77","age");
let stu4=new Student("x","11","78","age");
console.log(stu3.printName());
console.log(stu4)
