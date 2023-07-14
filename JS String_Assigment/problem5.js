let str = "Ronald";

let new_str = "";

for(let i=0; i<=str.length-1; i++){
  if(str[i] == "R"){
    new_str += "D";
  }
  else{
    new_str += str[i];
  }
}
console.log(new_str);