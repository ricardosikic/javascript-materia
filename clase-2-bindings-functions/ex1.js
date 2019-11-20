// que son los bindings en JS. para agarrar o tomar valores
// JS provee una cosa llamada binding o variable. por lo tanto,
// el termino binding no es mas que un termino para la variable
// que toma y mantiene un valor que puede o no ser cambiado en el tiempo
// ejemplo de esto.

// el binding o variable es let(keyword) + nombre = asignacion
let cinco = 5;
console.log(cinco * cinco);

// que pasaria si dentro del script existe una variable que no tiene asisgnacion?
// esto es muy comun que pase dentro del codigo.

let valor;
console.log(valor);

// el problema que surge al haber declarado una variable pero no haberle asignado un valor
// es que al momento de correr el script aparecera un error delt tipo "undefined", esto quiere decir
// que la variable fue inicializada pero no asi asignada. para la variable podriamos utilizar
// un metodo typeof para saber que tipo de dato es el presentado.

console.log(typeof valor); // undefined

// ahora hablaremos un poco de funciones, las funciones son pequeños pedazos de programa que
// realizan una accion especifica un ejemplo de ello es la funcion prompt que activa un cuadro de dialogo
// para poder capturar datos que son almacenados en una variable, ejemplo de esto

let valor_prompt = prompt('dame tu nombre');
// utilizaremos template literals para llamar a la variable dentro de el string
console.log(`tu nombre es ${valor_prompt}`);
// podemos tambien poner un poco de lo aprendido anteriormente y aplicar un condicional ternario.
(valor_prompt == 'ricardo') ? console.log('es tu nombre') : console.log('no es tu nombre');

// como ven la variable almacena un valor obtenido gracias a la funcion prompt
// examinemos un poco mas las funciones, las funciones pueden o no tomar variables que son usadas para hacer ciertas
// operaciones dentro de la misma funcion y esta son llamadas argumentos o parametros. miremos un ejemplo

suma = (a, b) => {
    console.log(a + b);
}

// como puedes ver la funcion (arrow function de ES6) pasa 2 parametros, estos dos parametros pasaran a ser usados o no
// dentro de la funcion para poder realizar operacion de suma, siempre es buena practica nombrar a las funciones y variables 
// con el nombre apropiado para lo que estas haran o hacen. Ahora miremos como funcionaria el ejemplo de arriba.

suma = (a, b) => {
    console.log(`la suma de la funcion es ${a + b}`);
}

// como hago que esta funcion realize la suma de valores? Facil!, lo que se debe hacer es llamar o invocar a la funcion
// y dentro de estos llamados pasarle valores como argumentos para que desarrolle las operaciones deseadas.

suma(4, 4);

// podemos utilizar ahora una funcion que esta invocada en otra funcion, ejemplo:

resta = (a, b) => {
    let resultado = a - b;
    
    //llamo a la funcion 
    muestraResultado(resultado);
}


muestraResultado = (resultado) => {
    console.log(`el resulta de la funcion es ${resultado}`)
}

resta(3, 1);

// Lo que ocurre aca es lo siguiente, defino una funcion que toma 2 argumentos y esta a su vez llama a otra funcion y le pasa como argumento
// el resultado de la funcion padre, por lo que al ser invicada en la funcion padre(resta) al momento de invocar a la funcion padre (resta)
// aparecera el resulta deseado.


calculoMasIva = (precio, porcentaje) => {
    total = precio * porcentaje;
    total_redondeado = Math.round(total)
    boletaPrecio(total_redondeado);
}

boletaPrecio = (total_compra) => {
    console.log(`El valor con iva de tu compra es ${total_compra}`);
}

calculoMasIva(40, 1.19);

// en este ejemplo invoque a una variable para que me mostrara el valor redondeado del precio con iva
// esta pasa como argumento.