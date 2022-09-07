const form = document.getElementById("form");

const saveDetails=(event)=>
{
    event.preventDefault();
    // localStorage.setItem('table',document.getElementById('table').innerHTML);
    // document.getElementById("show-data").innerHTML = localStorage.getItem("table");
    // let accept = document.getElementById("acceptTerms");
    // if (accept.checked==true){
    //      accept.innerHTML="Accepted";
    // }
    // else{
    //     accept.innerHTML="Rejected";
    // }
   
    if(validateDate(document.getElementById("dob").value)){
        var table = document.getElementById("table");
        var row = table.insertRow(-1);
        var namerow= row.insertCell(0);
        var emailrow= row.insertCell(1);
        var passrow = row.insertCell(2);
        var dobrow= row.insertCell(3);
        var accrow= row.insertCell(4);
        
        dobrow.innerHTML = document.getElementById("dob").value;
        namerow.innerHTML = document.getElementById("name").value;
        emailrow.innerHTML = document.getElementById("email").value;
        accrow.innerHTML = document.getElementById("acceptTerms").checked;
        passrow.innerHTML = document.getElementById("password").value;

    }
    else{
        alert("Age should be between 18 and 55");
    }
    function processDate(date){
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
     }
     
     function calcAge(date) {
       var dBirth = processDate(date);
       var dToday = new Date();
       var diff = dToday.getTime() - dBirth.getTime();
       return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
     }
     
     function validateDate(date){
       var age = calcAge(date);
       if(18<=age && age <=55) return true;
       else {
         return false;
       }
     }
     
}
form.addEventListener("submit",saveDetails);
