var charater = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(charater.classList != "animate"){
        charater.classList.add("animate");
    }
    charater.classList.add("animate");
    setTimeout(function(){
        charater.classList.remove("animate");
    },500)
}

var checkDead = setInterval (function(){
    var characterTop =parseInt(window.getComputedStyle(charater).getPropertyValue("top"));
    var blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert ("You Lose!\nPlease Return to Home Page");
    }
},10);

	//Validtion Code For Inputs

    var user = document.forms['form']['user'];
    var zip = document.forms['form']['zip'];
    
    var user_error = document.getElementById('user_error');
    var zip_error = document.getElementById('zip_error');
    
    user.addEventListener('textInput', user_Verify);
    zip.addEventListener('textInput', zip_Verify);
    
    // Validation code
    function validated(){
        if (user.value.length < 20) {
            user.style.border = "1px solid red";
            user_error.style.display = "block";
            user.focus();
            return false;
        }
        if (zip.value.length < 5) {
            zip.style.border = "1px solid red";
            zip_error.style.display = "block";
            zip.focus();
            return false;
        }
    
    }
    // verify correct user name and password
    function user_Verify(){
        if (user.value.length >= 20) {
            user.style.border = "1px solid silver";
            user_error.style.display = "none";
            return true;
        }
    }
    function zip_Verify(){
        if (zip.value.length >= 5) {
            zip.style.border = "1px solid silver";
            zip_error.style.display = "none";
            return true;
        }
    }