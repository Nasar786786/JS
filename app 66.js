//js part 4 practice Qs 3


let number = 287152;
let sum = 0;
let copy = number;
while(copy>0)  {
    digit =  copy % 10;
    sum+= digit;
    copy = Math.floor(copy/10);
}
console.log(sum);
