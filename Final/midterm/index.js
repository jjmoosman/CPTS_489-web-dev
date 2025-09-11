console.log("hello JavaScript!");

function validateInput() {
    const first_n = document.getElementById("first_n").value;
    const last_n = document.getElementById("last_n").value
    const age = document.getElementById("age").value
    const fpl = document.getElementById("fpl").value
    console.log(email);
    const valfirst_n = first_n.length > 5 && first_n.length < 20; // for the .com look into making sure the email ends with .com
    const vallast_n = last_n.length > 5 && last_n.length < 20;
    const valage = age.length > 18;
    const valfpl = fpl != null;
    // this is to alert if missing credentials for forms 
    if (!valfirst_n){
        alert("Missing or invalid first name")
    }
    if (!vallast_n){
        alert("Missing or invalid last name")
    }
    if (!valage){
        alert("Missing or invalid age")
    }
    if (!valfpl){
        alert("Missing fpl")
    }
    if (!valfirst_n || !vallast_n || !valage || !valfpl){
        return false
    }
    return true
}

