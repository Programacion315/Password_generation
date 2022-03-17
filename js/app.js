(function(){
    
    //Variables y objetos generales
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
        mayusculas: 'A B C D E F G H I J K L M N R S T O P Q X Y Z',
        minusculs:  'a b c d e f g h i j k l m n r s t o p q x y z'
    }

    //Eventos


    app.addEventListener('submit', function(e){

        e.preventDefault(); //Previene el comportamiento por defecto
    });

    app.elements.namedItem('btn-plus-one').addEventListener('click',function(){
        configuracion.caracteres++;
        inputCaracteres.value = configuracion.caracteres;
    });

    app.elements.namedItem('btn-minus-one').addEventListener('click',function(){

        if(configuracion.caracteres > 1){
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }
        
    });
   
}())