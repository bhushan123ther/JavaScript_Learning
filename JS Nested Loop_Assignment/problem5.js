let arr = [2,3,4,6,7,8,9];

let smaller = arr[0];
let larger = arr[0];

for(let i=0; i<=arr.length-1; i++){
  if(arr[i] <  smaller){
    smaller = arr[i];
  }
  else if(arr[i] > larger){
    larger = arr[i];
  }
}
console.log("The smallest number is : ",smaller);
console.log("The largest number is : ",larger);