
// document.getElementById("myForm").addEventListener("submit", function (event) {

//     var name = document.getElementById("name").value;
//     var password = document.getElementById("password").value;
//     var email = document.getElementById("email").value;
//     var dob = document.getElementById("dob").value;


//     // Prevent the default form submission
//     event.preventDefault();

//     // Perform your form processing/validation logic here
//     // If successful, redirect to another page
//     if (name==Devant) {
//         window.location.href = "https://youtube.com/redirected-page"; // Replace with your desired URL
//     } else {
//         // Handle the case when the submission is not successful
//         alert("Form submission failed. Please try again.");
//     }
// });


//--------------Login validation-------------------//
function validateForm() {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;


    if (!/^[a-zA-Z]{6,}$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Name should contain alphabet and at least ";
        return false;
    }

   


    //----------------All clear data-----------------
    let output = document.getElementById('output');
    function myFunction(event) {
        var allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');
        output.innerHTML += "Form submitted and cleared successfully! <br>";

        window.location.href = "http://youtube.com";
    }



}







 // if (name==Devant){
    //   
    //}

    // else{
    //    document.getElementById("nameError").innerHTML = "Name should contain alphabet and at least ";
    //      return false;
    // }










