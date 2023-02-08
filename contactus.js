function submitRequest(){
    let title = document.getElementById("Title").value;
    let fname = document.getElementById("FirstName").value;
    let lname = document.getElementById("LastName").value;
    let compname = document.getElementById("Company").value;
    let tel = document.getElementById("Tel").value;
    let email = document.getElementById("Email").value;
    let proposal = document.getElementById("proposal").value;
    
    console.log(title, fname, lname, compname);
    console.log(tel,email,proposal);
    
    if ( (title!="") && (fname!="") && (lname!="") && (compname!="") && (tel!="") && (email!="") && (proposal!="")){
        alert("Thank you for submitting your request. We will get back to you shortly.");
    }
    else {
        alert("Please fill in all the required information. Thanks!")
    }
}
  
    