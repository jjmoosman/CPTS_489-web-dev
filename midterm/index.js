console.log("hello JavaScript!");

function validateEmail() {
    const email = document.getElementById("email").value;
    console.log(email);
    const valid = email.includes("@");
    if(!valid && validateName == !valid){
        alert("Email is bad. Fix it!!!");
    }
    return valid;
}
function validateName(){
   let x = document.forms["myForm"]["name"].value;
   if(x == ""){
    alert("Name must be filled!!");
    return !valid;
   }
}
