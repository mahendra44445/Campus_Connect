function login(){

let user = document.getElementById("userid").value;
let pass = document.getElementById("password").value;

if(user == "student" && pass == "1234")
{
window.location="dashboard.html";
}
else
{
document.getElementById("error").innerText="Invalid Login";
}

}


function register(){

let name = document.getElementById("name").value;
let userid = document.getElementById("userid").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(name=="" || userid=="" || email=="" || password==""){
alert("Please fill all fields");
return;
}

alert("Registration Successful!");

window.location="index.html";

}