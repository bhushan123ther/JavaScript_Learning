// username and password stored in database while sign up
let database_user = "abc123@gmail.com";
let database_pass = "abc123";

let user = "abc123@gmail.com";
let pass = "abc123";

if(database_user == user){
  if (database_pass == pass) {
    console.log("Login");
  }
  else{
    console.log("Password didn't match");
  }
}
else{
  console.log("Username didn't match");
}