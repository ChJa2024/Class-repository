	//Validtion Code For Inputs

    var user = document.forms['form']['user'];
    var zip = document.forms['form']['zip'];
    
    var user_error = document.getElementById('user_error');
    var zip_error = document.getElementById('zip_error');
    
    user.addEventListener('textInput', user_Verify);
    zip.addEventListener('textInput', zip_Verify);
    
    function validated(){
        if (user.value.length < 15) {
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
    function user_Verify(){
        if (user.value.length >= 20) {
            user_error.style.display = "none";
            return true;
        }
    }
    function zip_Verify(){
        if (zip.value.length >= 5) {
            zip_error.style.display = "none";
            return true;
        }
    }