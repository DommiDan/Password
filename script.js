// generate random password
function generate(){

    //set password length/complex
    let complexity = document.getElementById("num").value;

    //password values
    //let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    var confirmLower = "abcdefghijklmnopqrstuvwxyz";
    var confirmNum = "1234567890"
    var confirmSpecial = "!@#$%^&*()_+";
    let password = "";

    //create 4 loop

    for(var i = 0; i <= complexity; i=i+1){
        password = password + confirmLower.charAt(Math.floor(Math.random() * Math.floor(confirmLower.length - 1)));
     }
     console.log (password)

     for(var i = 0; i <= complexity; i=i+1){
        password = password + confirmUpper.charAt(Math.floor(Math.random() * Math.floor(confirmUpper.length - 1)));
     }
    
     for(var i = 0; i <= complexity; i=i+1){
        password = password + confirmNum.charAt(Math.floor(Math.random() * Math.floor(confirmNum.length - 1)));
     }
     
     for(var i = 0; i <= complexity; i=i+1){
        password = password + confirmSpecial.charAt(Math.floor(Math.random() * Math.floor(confirmSpecial.length - 1)));
     }
     console.log (password)




        //add password to textbox
    document.getElementById("display").value = password;
     
    
}

function copy() {

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("password is copied")
}

    var confirmUpper = confirm("Do you want uppercase letters?")
    var confirmLower = confirm("Do you want lowercase letters?")
    var confirmNum = confirm("Do you want numbers?")
    if (confirmUpper) {
        alert(confirmUpper);
    }

    else {
        alert("");
    }

    if (confirmLower) {
        alert(confirmLower);
    }

    else {
        alert("");
    }
