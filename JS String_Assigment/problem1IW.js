//Problem 1 : Given a string count the number of words in that string

let str = "My name is Bhushan";
let c = 0;

for(let i=0; i<=str.length-1; i++)
{
    if(str[i]==" "){
      c++;
    }    
}
if(str.length != 0){
  console.log("The number of word in string are : ",c+1);
}
else{
  console.log("The number of word in string is : ",0);
}
