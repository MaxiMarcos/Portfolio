const formulario = document.getElementById("mi-form");

function form(id) {

    formulario.addEventListener("submit", function(e) {

        e.preventDefault();
        let aaa = document.getElementById(id).value;
        console.log(aaa);
    });

}

form("mi-name");
form("mi-email");
form("mi-mensaje");