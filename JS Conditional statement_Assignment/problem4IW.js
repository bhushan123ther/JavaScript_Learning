//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_user = "abc123@gmail.com";
let database_pass = "abc123";

let user_id = "abc123@gmail.com";
let user_pass = "abc123";

if(database_user == user_id){
  if (database_pass == user_pass) {
    console.log("Login successfully");
  }
  else{
    console.log("Password didn't match");
  }
}
else{
  console.log("Username didn't match");
}