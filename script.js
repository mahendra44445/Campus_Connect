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