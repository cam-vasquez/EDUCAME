let username = document.getElementById("username");
let password = document.getElementById("password");

/* Js para Toggle Password */
    const togglePassword = document.querySelector("#togglePassword");
    //const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        // toggle the icon
        this.classList.toggle("bi-eye");
       
    });

 /*    // prevent form submit
    const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    }); */

/* END TOGGLE */


$(document).ready(()=>{
    checkSend(enviar);
});


/* $(document).ready(function(){
    checkSend(enviar);
});

$(document).ready(function () {
    $('select').change(function () {
        if ($(this).val() == 'action') {
            //$("#btnEnviar").prop('disabled', true);
            $("select").prop('disabled', false);
            $("#year").prop('disabled', false);
            $("#mes").prop('disabled', false);
        } else {
            //$("#btnEnviar").prop('disabled', false);
            $("select").not(this).prop('disabled', true);
            $("#year").not(this).prop('disabled', false);
            $("#mes").not(this).prop('disabled', false);
        }
    });
    checkSend(enviar());
}); */


function checkSend(checker){
    //console.log(checker);
    if(!checker){
        $("#form_registro").submit(function(e){
            e.preventDefault();
        });
    }
    else{
        $("#form_registro").unbind("submit").submit();

    }
}

function enviar(){
    if((username.value != "" && password.value != "")){
        return true;
    }
    else
        return false;
}

username.addEventListener("change", () => checkSend(enviar()));
password.addEventListener("change", () => checkSend(enviar()));
