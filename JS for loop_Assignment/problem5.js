// continue : skip everything below me and go back to the starting point

for(let i=1; i<=5; i++){
  console.log(i);
  if(i==3){
    continue;
  }
}

console.log("--------------------------");

let x=1;
while(x<=5){
  console.log(x);
  x++;
  if(x==3){
    continue;    
  }
}