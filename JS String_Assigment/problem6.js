let arr=["Ashu","aman","Rohit","Kishan"];

let count=0;

for(let i=0; i<=arr.length-1; i++){
  if(arr[i][0]=="A" || arr[i][0]=="a"){
    count++;
  }
}
console.log(count);