// En esta clase numero 4 veremos que son y como se utilizan los loop while and do
// imaginemos un programa que me dice todos los numero del 1 al 10 de esta forma
// lo podriamos hacer de la siguiente manera:

// console.log(0)
// console.log(1)
// ....
// console.log(10)

// pero no crees que esto seria un trabajo enorme?, para eso estan los loops en Javascript
// que nos permiten hacer tareas que necesiten ser repetidas un ejemplo de esto es for loop 
// o en este caso el mismo while loop.
// la estructura de un condicional loop es la siguiente

// let variable_inicial;
// while(condicion) {
     // el codigo
// }

// miremos un poco esa estructura, basicamente con while(mientras) lo que decimos es que inicializo una variable
// con un valor del tipo numero (a modo de ejemplo), luego entro al flujo while lo que me dice este es
// que mientras la condicion dentro del loop sea true (verdadera) se ejecutara el codigo, de lo contrario
// cuando pase a ser false este loop dejara correr. ejemplo

// inicializare una variable en 0
let variable_numero = 0;

while (variable_numero <= 10) {
    console.log(variable_numero);
    variable_numero += 1;

}

// lo que se muestra aca es que cuando la condicion del while sea verdadera se ejecuta el codigo dentro,
// esto quiere decir tomara la variable inicializada y la aumentara en 1 a medida que la condicion sea verdadera
// siempre en los loop debes declarar incrementadores para que no se caiga la aplicacion en un loop infinito
// veamos otro ejemplo:

let contador = 1;
let puntaje = 0;
while (contador <= 20) {
    console.log(contador);
    contador += 1;
    if(contador == 2 || contador == 10) {
        puntaje +=1;
        console.log('puntaje ', puntaje);
    }
}

// veamos otro ejemplo, haremos un pequeño juego de adivinanzas

let numero_secreto = '10';
let intentos = 0;
while (intentos <= 4) {
    let respuesta = prompt('adivina el numero');
    intentos +=1;
    if(respuesta == numero_secreto) {
        console.log('le apuntaste');
        break;
    } else {
        console.log('no le apuntaste');
    }

   if(intentos == 4) {
       console.log('has consumido el numero de intentos');
   }
} 

// un ejemplo corto!
let a = 0;
while (a <= 10) {
    a++;
    b = a;
    console.log(b*10);
}

// ahora veremos que do/while loop, es casi similar a while loop, con una diferencia que siempre
// el do/while ejecuta el body del codigo antes y luego evalua, pero me quedo mas con while :D

/* let nombre;

do {
    prompt('dime tu nombre');
} while(!nombre) {
    console.log(nombre);
} 

 */