let string = "Bhushan";
// converting string into array
let arr=[];

for(let i=0; i<=string.length-1; i++){
  arr.push(string[i]);
}
// replace B with R
arr[0]="R";

let bag ="";

for(let i=0; i<=arr.length-1; i++){
  bag +=(arr[i])+" ";
}

console.log(bag);