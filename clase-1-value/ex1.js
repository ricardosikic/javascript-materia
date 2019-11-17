// En esta clase, empezaremos viendo que son como funcionan los values, types y operadores.

// antes que todo primero debemos saber que es una variable, miremos la variable como un almacen de informacion
// esta informacion puede ser un string, un numero, incluso pueden ser funciones.
// una variable se denota con la palabra clave let o const.

// let nombre_variable = '';
// const nombre_variable = '';

// por lo general la diferencia entre let y const, es que la primera palabra clave tiene informacion que suele cambiar
// por otro lado al utilizar const, la informacion contenida en ella no cambia, miremos un ejemplo:

let numero = 4;
numero = 3;
console.log('reasigno el ', numero) //deberia mostrar la nueva reasignacion.

const variable_constante = 4;
variable_constante = 5;
console.log('no me dejara cambiar ', variable_constante);



// lo primero que veremos son los numeros, estos son valores del tipo numerico, un ejemplo
// es el numero 12, este es un valor del tipo numerico
// a su ves tenemos otros tipos de datos como por ejemplo los del tipo flotante, estos son
// tipos de decimales un ejemplo 4.5, 190.32. Con este tipo de valores numericos podemos hacer 
// operaciones arimeticas que utilizan operadores tales como:
// suma: "+", resta: "-", multiplicacion: "*", division: "/", modulo: "%"
// en esta ultima este tipo de operador es conocido como modulo, es decir es un resto de una tipo
// division de 1 x 1, un ejemplo de esto es:

console.log(5 % 4) //el resto deberia ser 1
console.log(5 % 3) //el resto deberia ser 2

// junto con estos tipos de datos haremos operaciones aritmeticas:
console.log(5 + 5)
console.log(5 * 5 / 1)
console.log(4 % 3)

// ahora existen otros tipos de datos dentro de Js que son los string o cadenas de texto, ejemplo
console.log('este es un texto')
// a este texto texto le puedo colocar un backslash "\" con un caracter n y quedaria \n, esto lo que genera
// es un salto de linea 

console.log('este es \nun texto') //vemos el efecto de los backslash \n

// mas adelante veremos como podemos usar los strings cocatenando variables, por ahora solo usaremos
// los strings sin haber sido guardados dentro de una variable.

console.log('este ' + 'es ' + 'una ' + 'concatenacion.')

// dentro de Js existen los template literals, estos me permiten escribir javascript que luego es transformado a un string
// se escriber de la siguiente manera ${5 * 4}.
// en el fondo estos operadores como template literal me permite usar variables Js dentro de un string
// sin tener la necesidad de usar concatenacion.

let x = 5;
let word = `la letra es ${x}`;
console.log(word);

let nombre = 'ricardo';
let resultado = `el nombre de la persona es ${nombre}`;

// operadores typeof, cuando yo aplico esta funcion sobre un tipo de dato me aparece el tipo que este representa, ejemplo
console.log(typeof 5) //number
console.log(typeof "hola") //string

// otro tipo de valor u dato son los Booleans o buleanos que me dicen si algo es verdadero o falso, de hecho solo retornan verdadero o falso
console.log(5 > 10) //false
console.log(3 < 4) //true


// Luego dentro de Javascript tenemos los operadores logicos representados por && ||
// esto es es, &&: y, ||: o, a continuacion explicare los operadores logicos

// if (x == 1 && y == 4)lo que estoy haciendo aca con los operadores logicos && es, mediante la condicional
// que si se cumple la primera condicion y tambien se cumple la segunda condicion, se ejecuta una linea de codigo

// en cambio con los operadores logicos || if(x == 4 || x == 5) es decir que si se cumple la primera condicion o la segunda condicion
// el codigo se ejecutara. miremos un ejemplo

let a = 5
let b = 3

if (a <=5 && b <= 3) {
    console.log('se cumple');
} else {
    console.log('no se cumple');
}

if (a > 5 || b == 3 ) {
    console.log('se cumple');
} else {
    console.log('no se cumple');
}

let num_1 = 5;
let num_2 = 4;

if(num_1 > num_2 && num_2 < num_1) {console.log('es correcto, se cumplen ambas');}

// como vemos que en el operador logico or (||) si una condicion se cumple, este retorna el valor requerido
// distinto a && que ambas condiciones deben ser verdaderas para poder ejecutar el primer bloque de codigo

// para finalizar vamos a ver operadores ternarios, los operadores ternarios son otra forma de poder escribir, un condicional if
// miremos un ejemplo de ello. la sintaxis es la siguiente:

// ('condicion') ? 'verdaderos' : 'falso'

// miremos un ejemplo:
(5 < 4) ? console.log('verdadero') : console.log('falso'); // falso
(5 > 4) ? console.log('verdadero') : console.log('falso'); //verdadero

// lo que hace el operdor ternario es simplificar un if y evalua la condicion y retorna verdadero o falso a esta condicion