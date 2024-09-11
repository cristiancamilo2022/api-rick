$(document).ready(function () {
    $("#buscar").click(function () {
        buscarPersonaje();
    });
});

function buscarPersonaje() {
    $("#listaPersonajes").html("");
    let consulta = $("#busqueda").val();
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/?name=" + consulta,
        type: "get",
        dataType: "json",

        success: function (datos) {

            if (datos.results.length > 0) {
                let personajes = datos.results;
                $.each(personajes, function (i, a) {
                    $("#listaPersonajes").append(
                        `<div class="col-md-4 mb-3">
                            <div class="card">
                                <img src="${a.image}" class="card-img-top" alt="${a.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${a.name}</h5>
                                    <p class="card-text">Status: ${a.status}</p>
                                    <p class="card-text">Species: ${a.species}</p>
                                    <p class="card-text">Gender: ${a.gender}</p>
                                </div>
                            </div>
                        </div>`
                    );
                });

                $("#busqueda").val("");

            } else {
                $("#listaPersonajes").html(
                    '<h2 class="text-center">Personaje no encontrado</h2>'
                );
            }
        },
        error: function () {
            $("#listaPersonajes").html(
                '<h2 class="text-center">Ocurrio un error</h2>'
            );
        }
    });
}
