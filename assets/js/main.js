let input_email;

function sub_confirmation() {
    input_email = document.getElementById("inputEmail").value;
    let test = input_email;
    console.log('Email = ' + test);
    document.getElementById("pOutput").innerHTML = "Thank you for the email!";
    document.getElementById("headerOutput").innerHTML = "Thank you for the email!";

}