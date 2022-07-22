let input_email;

function sub_confirmation() {
    input_email = document.getElementById("inputEmail").value;
    let test = input_email;
    console.log('Email = ' + test);

    if (input_email == '') {
        alert("Please put your Email Adress in the input field! ");
    } else {
        document.getElementById("pOutput").innerHTML = "THANKS FOR SUBSCRIBING!" + '<p>Now we just need to confirm your email address - please click the link in the email we sent you. Thanks!</p>';
        document.getElementById("headerOutput").innerHTML = "YOUR EMAIL HAS BEEN CONFIRMED.";

        // Style changing directely from js
        document.getElementById("pOutput").style.fontSize = '22px';
        // Hide the button
        document.getElementById("btnRegistration").style.visibility = "hidden";
        // Show the another button BACK TO DESIGNERCHALLENGE.COM
        document.getElementById("btnBack").style.visibility = "visible";

        // Style changin directely with classList
        const list = document.getElementById("artChallenge").classList;
        list.add("clsBonusExercice1");

        const list2 = document.getElementById("inputEmail").classList;
        list2.add("clsBonusExercice2");
    }
}

function fn_back() {
    // Hide the another button BACK TO DESIGNERCHALLENGE.COM directely from js
    document.getElementById("btnBack").style.visibility = "hidden";

    // Remove classes  with classlist
    document.getElementById("idHeadline").classList.remove("artChallenge");
    document.getElementById("idHeadline2").classList.remove("inputEmail");

}