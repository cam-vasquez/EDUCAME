
(function onload(){
    let socio = document.getElementById("partner");
    let persona = document.getElementById("persona");
    let mes = document.getElementById("mes");
    let año = document.getElementById("year");
    let formulario = document.getElementById("form_registro");
    
    document.getElementById("btnEnviar").onclick = checkSend;
    document.getElementById("btnLimpiar").onclick = limpiar;
    socio.onchange = ()=> { 
        if(socio.selectedIndex > 0)
            persona.disabled = true;
        else
            persona.disabled = false;
    }
    persona.onchange = ()=> { 
        if(persona.selectedIndex != "")
            socio.disabled = true;
        else
            socio.disabled = false;
    }
    
    function checkSend(){
        if(mes.selectedIndex > 0 && año.selectedIndex > 0 && (persona.selectedIndex > 0 || socio.selectedIndex > 0))
        formulario.submit();
    }
    function limpiar(){    
        document.getElementById("persona").disabled = false;
        document.getElementById("partner").disabled = false;
    }
})();


