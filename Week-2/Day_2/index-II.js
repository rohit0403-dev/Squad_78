// const greet=function(name){
//     console.log(name)
// };
// greet("Laviza");
// setTimeOut  set Interval
// let count=0;
// let timer;
// timer=setInterval(function(){
//     count++;
//     if(count==5){
//         clearInterval(timer)
//     }
//     console.log("May I come in",count)
// },1000)

(function dummy() {
  console.log("immidate callin");
})();

// dummy()

let arr = [1, 2, 10, 3, 3, 2, 5, 3];
arr.sort((a,b)=>b-a);
console.log(arr);
