let partner = document.getElementById("partner");
let persona = document.getElementById("persona");
let date = document.getElementById("fechaIpt");

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
});

function limpiar(){
    document.getElementById("partner").disabled = false;
    document.getElementById("persona").disabled = false;
}

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
    if((date.value != "" && partner.selectedIndex > 0) || (date.value != "" && persona.selectedIndex > 0)){
        return true;
    }
    else
        return false;
}

partner.addEventListener("change", () => checkSend(enviar()));
persona.addEventListener("change", () => checkSend(enviar()));
date.addEventListener("change", () => checkSend(enviar()));


