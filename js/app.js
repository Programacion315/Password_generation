(function(){

    var app = document.querySelector("#app");
    var inputCaracteres = document.querySelector("#number-characters");

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true, 
    }

    var caracteres = {
        numeros: '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! @ # % $ * - _ { } [] ? . , ;',
        mayusculas: ''
    }
   
}())