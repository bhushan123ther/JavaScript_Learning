
// You are given two numbers, stored in variables with the namesnum1andnum2

// Print the output of the following operation

// num1 > num2, this prints true if num1 is greater than num2, else it prints false
// After this operation is performed, another number, stored in a variable with namenum3is added to num1. After this, print the result of the following operation again

// num1 > num2, this prints true if num1 is greater than num2, else it prints false

let num1 = 4, num2 = 8, num3 = 5;

if(num1 > num2){
  console.log(true);
}
else{
  console.log(false);
}

num1 += num3;

if(num1 > num2){
  console.log(true);
}
else{
  console.log(false);
}