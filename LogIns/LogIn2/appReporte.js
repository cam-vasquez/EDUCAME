$(document).ready(function () {
    $('select').change(function () {
        if ($(this).val() == 'action') {
            $("#btnEnviar").prop('disabled', true);
            $("select").prop('disabled', false);
           /*  $("#year").prop('disabled', false);
            $("#mes").prop('disabled', false);
 */
        } else {
            $("#btnEnviar").prop('disabled', false);
            $("select").not(this).prop('disabled', true);
            /* $("#year").not(this).prop('disabled', false);
            $("#mes").not(this).prop('disabled', false);
 */
        }
    });
});

function limpiar(){
    document.getElementById("partner").disabled = false;
    document.getElementById("persona").disabled = false;
    document.getElementById("mes").disabled = false;
    document.getElementById("year").disabled = false;    
    console.log($(this).id);
    console.log("Xi")

}

function enviar(){
    let partner = document.getElementById("partner").value;
    let persona = document.getElementById("persona").value;
    /*let fecha = document.getElementsByClassName("fecha").value;*/
    let year = document.getElementById("year").value;
    let mes = document.getElementById("mes").value; 
    if ((year != '' && mes != '') && ((partner == '' && persona == ''))) {
        window.open('http://www.google.com', '_self');
    } 
    else if (partner != ''  && (year == '' && mes == '' && persona == '')) {
        window.open('http://www.google.com', '_self');
    } 
    else if (persona != ''  && (year == '' && mes == '' && partner == '')) {
        window.open('http://www.google.com', '_self');
    } 
    else {
        console.log("Solo puede seleccionar una opción"); 
      }

    


} 


 