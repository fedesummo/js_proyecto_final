// Ejecuto el código cuando el DOM se haya cargado.
$(document).ready( function() {

    // ---- CONSULTA Y RENDERIZACIÓN DEL NOMBRE DEL USUARIO  ----

    // Si no se encuentra almacenado en el LocalStorage el nombre del usuario, lo almaceno.
    if (!localStorage.getItem('userName')) {
        // Se pide al usuario que ingrese su nombre.
        let userName = prompt('Ingrese a continuación su nombre y apellido.');
        // Se repite la acción hasta que se ingrese un nombre válido.
        while (!userName) {
            userName = prompt('Error, ingrese a continuación su nombre y appelido.');
        };
        // Se almacena el nombre en el LocalStorage.
        localStorage.setItem('userName', userName);
    };
    // Renderizo el nombre de usuario en la barra de navegación.
    $('#username').html(localStorage.getItem('userName'));



    // ---- OBTENCIÓN Y RENDERIZACIÓN DE LA INFORMACIÓN ----

    // Obtengo la lista de transformadores.
    $.getJSON('https://fedesummo.github.io/js_proyecto_final/data/transformadores.json', function(response, state) {
        // Verifico que no se produzcan errores al acceder al archivo. 
        if (state === "success") {
            for (const element of response) {
                // Renderizo una card con la información de cada elemento.
                $('#grid-container-transf').append(
                        `<div id="transf-${element.id}" class="card">
                                <img src="./imgs/transformador.png" class="card-img-top" alt="...">
                                <p class="card-title">ID: ${element.id}</p>
                                <div class="card-body">
                                <ul class="card-text">
                                        <li>Marca: ${element.marca}</li>
                                        <li>Potencia: ${element.potencia} kWatts</li>
                                        <li>Tensión Primaria Nominal: ${element.tensPrimNom} kVolts</li>
                                        <li>Tensión Secundaria en Vacío: ${element.tensSecVac} kVolts</li>
                                        <li>Grupo de Conexión: ${element.grupConex}</li>
                                        <li>Medio Aislante: ${element.medioAisl}</li>
                                        <li>Volumen de Aislante: ${element.medioAislLts} Lts</li>
                                        <li>Dimensiones: ${element.dimensiones} mm</li>
                                        <li>Peso: ${element.peso} Kg</li>
                                        <li>Ubicación: ${element.ubicacion}</li>
                                        <li>Última Revisión: ${element.ultRev}</li>
                                </ul>
                        </div>`
                );
                // Le agrego a la card un evento que renderize un borde al posicioanrse sobre ella.
                $(`#transf-${element.id}`).hover(
                    // Agrego el borde al posicionar el mouse sobre el elemento.
                    function() {
                            $(this).css("border", "3px solid black");
                    },
                    // Elimino el borde al retirar el mouse del elemento.
                    function() {
                            $(this).css("border", "");
                    } 
                );
            };
        };
    });

    // Obtengo la lista de generadores.
    $.getJSON('../data/generadores.json', function(response, state) {
        // Verifico que no se produzcan errores al acceder al archivo. 
        if (state === "success") {
            for (const element of response) {
                // Renderizo una card con la información de cada elemento.
                $('#grid-container-gen').append(
                        `<div id="gen-${element.id}" class="card">
                                <img src="./imgs/generador.jpg" class="card-img-top" alt="...">
                                <p class="card-title">ID: ${element.id}</p>
                                <div class="card-body">
                                <ul class="card-text">
                                        <li>Marca: ${element.marca}</li>
                                        <li>Modelo: ${element.modelo}</li>
                                        <li>Potencia: ${element.potencia} kWatts</li>
                                        <li>Tensión Nominal: ${element.tension} Volts</li>
                                        <li>Volumen de Combustible: ${element.capacidad} Lts</li>
                                        <li>Dimensiones: ${element.dimensiones} mm</li>
                                        <li>Ubicación: ${element.ubicacion}</li>
                                        <li>Última Revisión: ${element.ultRev}</li>
                                </ul>
                        </div>`
                );
                // Le agrego a la card un evento que renderize un borde al posicioanrse sobre ella.
                $(`#gen-${element.id}`).hover(
                    // Agrego el borde al posicionar el mouse sobre el elemento.
                    function() {
                            $(this).css("border", "3px solid black");
                    },
                    // Elimino el borde al retirar el mouse del elemento.
                    function() {
                            $(this).css("border", "");
                    } 
                );
            };
        };
    });



    // ---- DEFINICIÓN DE EVENTOS ----

    // Muestra la grilla al presionar el ícono de la flecha que apunta hacia abajo.
    $('#arrow-show-content-transf').click( function() {
        // Muestro la grilla.
        $('#grid-container-transf').css("display", "flex");
        // Escondo el ícono de la flecha que apunta hacia abajo.
        $('#arrow-show-content-transf').hide();
        // Muestro el ícono de la flecha que apunta hacia arriba.
        $('#arrow-hide-content-transf').show();
    });

    // Igual para la sección de generadores.
    $('#arrow-show-content-gen').click( function() {
        $('#grid-container-gen').css("display", "flex");
        $('#arrow-show-content-gen').hide();
        $('#arrow-hide-content-gen').show();
    });

    // Esconde la grilla al presionar el ícono de la flecha que apunta hacia arriba.
    $('#arrow-hide-content-transf').click( function() {
        // Escondo la grilla.
        $('#grid-container-transf').hide();
        // Escondo el ícono de la flecha que apunta hacia arriba.
        $('#arrow-hide-content-transf').hide();
        // Muestro el ícono de la flecha que apunta hacia arriba.
        $('#arrow-show-content-transf').show();
    });

    // Igual para la sección de generadores.
    $('#arrow-hide-content-gen').click( function() {
        $('#grid-container-gen').hide();
        $('#arrow-hide-content-gen').hide();
        $('#arrow-show-content-gen').show();
    });

});
