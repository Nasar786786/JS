//practie Qs HW 1.


let nums = [1,2,3,5,];
const square = nums.map( (num) => num*num);
 console.log(square);
 let sum = square.reduce( (acc,cur) => acc+cur,0);
 let avg = sum/nums.length;
 console.log(avg);