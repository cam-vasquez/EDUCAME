let user_departamento_code = "MO";
    
(function () {

    // Get the departamento name and municipio name from the imported script.
    let departamento_list = departamento_and_municipios['departamento'];
    let municipios_list = departamento_and_municipios['municipios'];

    // creating departamento name drop-down
    let option =  '';
    option += '<option value = "">Seleccionar departamento</option>';
    for(let departamento_code in departamento_list){
        // set selected option user departamento
        let selected = (departamento_code == user_departamento_code) ? ' selected' : '';
        option += '<option value="'+departamento_code+'"'+selected+'>'+departamento_list[departamento_code]+'</option>';
    }
    document.getElementById('departamento').innerHTML = option;
    
    // creating municipios name drop-down
    let municipio_code_id = document.getElementById("municipio-code");
    
    function create_municipios_dropdown() {
        let option = '<select id="municipio" name="municipio">';
        // get selected departamento code
        let departamento_code = document.getElementById("departamento").value;
        let municipios = municipios_list[departamento_code];
        // invalid departamento code or no municipios add textbox
        if(!municipios){
            option += '<option value="">Seleccione municipio</option></select> ';
            municipio_code_id.innerHTML = option;
            return;
        }
        else if (municipios.length > 0) {
            option += '<option value="">Seleccione municipio</option>';
            for (let i = 0; i < municipios.length; i++) {
                option += '<option value="'+municipios[i].code+'">'+municipios[i].name+'</option>';
            }
            option += '</select>';
        } /*else {
            // create input textbox if no municipios 
            option = text_box
        }*/
        municipio_code_id.innerHTML = option;
    }

    // departamento select change event
    const departamento_select = document.getElementById("departamento");
    departamento_select.selectedIndex = 0;
    departamento_select.addEventListener('change', create_municipios_dropdown);
    create_municipios_dropdown();

})();

function enviar(){
    var departamento = document.getElementById("departamento");
    var municipio = document.getElementById("municipio");
    if(departamento.value != "" && municipio.value != ""){
       //window.open('index.php', '_self');
       /*console.log(departamento.value);
       console.log(municipio.value);*/
       //return true;
       
       document.getElementById("alert").style.display = "none";
       document.getElementById("form_registro").submit();
    }
    else{
        document.getElementById("alert").style.display = "inline-block";
        console.log("Datos necesarios"); 
    }
} 
document.getElementById("btnLimpiar").onclick = function(){
    document.getElementById("alert").style.display = "none";
    document.getElementById('departamento').selectedIndex = 0;
    
}
