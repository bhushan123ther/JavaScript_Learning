//Problem 4: Given 3 numbers (all different values), print which is greatest

let no1 = 10;
let no2 = 50;
let no3 = 30;

if(no1 > no2 && no1 > no3){
  console.log(no1," is greatest");
}
else if(no2 > no1 && no2 > no3){
  console.log(no2," is greatest");
}
else{
  console.log(no3," is greatest");
}