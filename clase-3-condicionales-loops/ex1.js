// Para esta clase numero aprenderemos lo que son los condicionales, pero antes es bueno repasar un tipo de funcion
// en este ejemplo de repaso crearemos un pequeño programa que pregunte tu edad y a esa edad la multiple por un numero

/* let age = prompt('Cual es tu edad');

calcutateNewAge = (value) => {
   let newAge = value * 2;

   // callback
   sayInfo(newAge);
}

sayInfo = (newAge) => {
    console.log(`tu tienes la nueva edad de: ${newAge}`);
}

calcutateNewAge(age); */

// Ahora pasaremos a repasar lo que son los condicionales, los condicionales son
// creados a partir de la palabra clave "if" esto nos permite tener un control en
// la ejecucion del codigo en una app, es como una especie del control de flujo en una 
// aplicacion ya que ejecutara el codigo solo si cierta condicion se cumpla, miremos 
// ejemplos a continuacion:

if(3 > 2) {
    console.log('es verdadero');
}

// en este ejemplo vemos que cuando la condicion se cumple ejecutara la linea de codigo
// miremos un ejemplo mas complejo, en donde a traves de un prompt recogeremos un valor
// y lo almacenaremos en la variable, si este valor es un numero ejecutara un bloque de codigo
// cuando la condicion se cumpla de lo contrario "else" ejecutara otro codigo si este es falso

let numero = Number(prompt('elige un numero'));
// si la variable es un numero, y no un string, fijense del sigo ! que significa lo contrario
if(!Number.isNaN(numero)) {
    console.log(numero * 2);
} else {
    console.log('no acepto letras');
}

// aun no tienes claro como funciona, el if/else ejecutara un bloque de codigo si la condicion
// de este es verdadera, de lo contrario, este ejecutara else cuando esta no sea verdadera o la
// la condicion no se cumpla. Dentro de los condicionales existe otro tipo de herramienta para evaluar
// una condicion dentro de la aplicacion else if

let a = 10;

if(a > 10) {
    console.log('acertaste?');
} else if (a = 10) {
    console.log('condicion cumplida');
} else {
    console.log('ninguna de las dos condiciones se cumplio');
}

// lo que se muestra aca es que la variable entra a un flujo condicional, en donde esta variable
// sera evaluada mediante if/else if/else, en donde si alguna condicion se cumple ejecuta un codigo
// de lo contrario (else) cuando nada se cumple ejecuta ese bloque de codigo.
// miremos otro ejemplo:

let x = 10;
let y =  5;

if(x < y) {
    console.log('check');
} else if (x = y) {
    console.log('son lo mismo');
} else if (x > y) {
    console.log('tiene razon');
} else {
    console.log('no es ninguno');
}

// en este ejemplo de arriba el bloque que se ejecutaria, seria el tercero
// miremos otro ejemplo en una especie de adivina el nombre y cuando este se advine
// se reasignara la variable punto inicializada en 0

let nombre = prompt('nombre');
punto = 0;

if(nombre == 'ricardo') {
    console.log('no te llamas asi');
} else if (nombre == 'ronaldo') {
    console.log('bien');
    punto =+1;
    console.log(punto);
} else {
    console.log('ninguno de estos');
}


// como se ve esto es poco tedioso de escribir, por lo que en la proxima clase
// veremos otro control de flujo que es el while loop!