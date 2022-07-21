
        /* Js para Toggle Password */
        const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");
    
        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
    
            // toggle the icon
            this.classList.toggle("fa-eye");
            //this.classList.toggle("bi-eye");
            //bi-eye <i class="fa-solid fa-eye"></i>
        });
    
        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    
/* END TOGGLE */

function enviar(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username != "" && password != ""){
       window.open('index.php', '_self');
    }
    else{
        console.log("Lorem ipsum."); 
    }
} 
