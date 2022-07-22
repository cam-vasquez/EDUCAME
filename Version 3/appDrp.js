let user_departamento_code = "MO";
    
(function () {

    // Get the departamento name and municipio name from the imported script.
    // -------------------
    let departamento_list = departamento_and_municipios['departamento'];
    let municipios_list = departamento_and_municipios['municipios'];

    // creating departamento name drop-down
    let option =  '';
    option += '<option>Seleccionar departamento</option>';
    for(let departamento_code in departamento_list){
        // set selected option user departamento
        let selected = (departamento_code == user_departamento_code) ? ' selected' : '';
        option += '<option value="'+departamento_code+'"'+selected+'>'+departamento_list[departamento_code]+'</option>';
    }
    document.getElementById('departamento').innerHTML = option;

    // creating municipios name drop-down
    let text_box = '<input type="text" class="input-text" id="municipio">';
    let municipio_code_id = document.getElementById("municipio-code");

    function create_municipios_dropdown() {
        // get selected departamento code
        let departamento_code = document.getElementById("departamento").value;
        let municipios = municipios_list[departamento_code];
        // invalid departamento code or no municipios add textbox
        if(!municipios){
            municipio_code_id.innerHTML = text_box;
            return;
        }
        let option = '';
        if (municipios.length > 0) {
            option = '<select id="municipio">\n';
            for (let i = 0; i < municipios.length; i++) {
                option += '<option value="'+municipios[i].code+'">'+municipios[i].name+'</option>';
            }
            option += '</select>';
        } else {
            // create input textbox if no municipios 
            option = text_box
        }
        municipio_code_id.innerHTML = option;
    }

    // departamento select change event
    const departamento_select = document.getElementById("departamento");
    departamento_select.addEventListener('change', create_municipios_dropdown);

    create_municipios_dropdown();
})();


function enviar(){
    let departamento = document.getElementById("departamento").value;
    let municipio = document.getElementById("municipio").value;
    if(departamento != "" && municipio != ""){
       window.open('Dropdown.html', '_self');
    }
    else{
        console.log("Datos necesarios"); 
    }
} 
