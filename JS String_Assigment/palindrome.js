let str="nitin";
let len = str.length-1;
let new_str="";
for(let i=len; i>=0; i--){
    new_str += str[i];
}
if(new_str ==  str){
  console.log("Palindrome");
}
else{
  console.log("Not Palindrome")
}
