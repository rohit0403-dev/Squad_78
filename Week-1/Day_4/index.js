// Map
let arr=[1,2,3,1,1,1];
// console.log(arr);
// avoid duplicates
let set=new Set(arr);
// set.add(4)
// console.log(set.size)
// set.delete(2);
// console.log(set)
set.clear();
// console.log(set)

/**
 * Map
 * syntax = new Map();
*/

// let obj={
//     name:"arnav"

// }
// obj["city"]="Punjab"
// obj.age=21; // dot notation
let obj={};
obj[{}]="Squad"
console.log(obj)
// let obj={
//     {}:"squad"
// }

let map = new Map([
      ['name', 'John'],
      ['age', 30]
    ]);
    map.set({},"squad")
  console.log(map)
