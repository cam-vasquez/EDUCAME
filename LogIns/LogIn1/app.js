const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle para icon
    this.classList.toggle("bi-eye");
});

// previene enviar el form
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

/* END TOGGLE */

function enviar(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username != "" && password != ""){
        window.open('http://www.google.com', '_self');
    }
    else{
        console.log("Datos necesarios");
    }
} 
