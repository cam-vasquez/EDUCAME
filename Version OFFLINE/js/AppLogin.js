let username = document.getElementById("username");
let password = document.getElementById("password");

/* Start toggle for password */

    const togglePassword = document.querySelector("#togglePassword");
    //const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        // toggle the icon
        this.classList.toggle("bi-eye");
       
    });

/* END TOGGLE */


function checkSend(checker){
    console.log(checker)
    if(!checker){
        document.getElementById("#form_registro").addEventListener("submit", function(e){
            console.log(e);
            e.preventDefault();
        });
    }
    else{
        document.getElementById("#form_registro").addEventListener("submit", function(e){
            e.stopPropagation();
            console.log(e);
        }, true);
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

checkSend(enviar());


// Usando JQuery

/* $(document).ready(()=>{
    checkSend(enviar);
});

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
 */
