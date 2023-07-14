for(let i=1; i<=8; i++){
  for(let j=1; j<=i; j++){
    if(j%2==0){
      bag +="*";
    }
    else{
      bag +=i;
    }
  }
  console.log(bag);
}