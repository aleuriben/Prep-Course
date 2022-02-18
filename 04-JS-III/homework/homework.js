// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // return array[0];
  return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  array2 = [];
  array.forEach( (item) => { array2.push(item + 1) } )  ;
  return array2;
  // OJO!!!!:
  // Para esto utilice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  // además de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  // sobre todo del segundo link la parte "Converting a for loop to forEach"
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(' ');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

  // var mensaje="";
  // for (i=0; i < palabras.length; i++){
  //   if (i === 0) {
  //     mensaje=palabras[i];
  //   }else {
  //     mensaje=mensaje+" "+palabras[i];
  //   }
  // }
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  return numeros.reduce( (suma, item) => suma + item, 0);
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  //ahi tambien hay un ejemplo para sumar los elementos... espero que no se considere como trampa.
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma=suma+resultadosTest[i];
  }
  return suma/resultadosTest.length;
  // uso for porque especificamente pide que use bucle.
  // sino usaria array.reduce()
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return numeros.reduce( (numgrande, item) => Math.max(numgrande, item), numeros[0] );
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  // segun mozilla arguments se puede convertir en array.
  if (arguments.length) { // en Prep Course dicen que 0 es false
    var args = Array.from(arguments); // segun la pag de Array de mozilla Array.from() convierte objetos a arrays.
    return args.reduce( (multiplicacion, item) => multiplicacion*item, 1);
  }else{
    return 0;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  count=0;
  for (var i of arreglo){
    if (i > 18) {
      count++;
    }
  }
  return count;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  }else{
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  potencia = Math.floor(Math.log(n)/Math.LN10);
  if( Math.floor(n/Math.pow(10,potencia)) === 9) { 
    return true;
  }else {
    return false;
  }
  //ME COSTO ESTA! apuntan muy alto los de Henry...
  // primero debo saber cuantos digitos tiene "n"
  // dividiendo el logaritmo de n / el logaritmo de 10 y le quito los decimales, obtengo
  // el numero de digitos menos uno, lo iba a aumentar en uno pero me di cuenta
  // que 10 a n da un numero de n+1 digitos.
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  return arreglo.every( (item,index) => item === arreglo[arreglo.length-1-index] );
  // este compara el primero con el ultimo y aumenta en posicion mientras el otro baja,
  // aunque no es eficiente creo (CREO!) que es mejor que usar bucle. (en cuestion de memoria)
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  // nota: buscar si se puede cambiar a dark mode la pag de mozilla.
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  if( array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre") ){
    var array2=[]
    array.forEach( (item) => { 
      if (item === "Enero" || item === "Marzo" || item === "Noviembre") {
        array2.push(item);
      }
    } )
    return array2;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2=[];
  array.forEach( (item) => {
    if (item > 100){
      array2.push(item);
    }
  } )
  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array=[]
  var option=false
  for (i=0; i < 10; i++){
    numero=numero+2;
    if ( i === numero ){
      option=true;
      break;
    }
    array.push(numero);
  }
  if(option){
    return "Se interrumpió la ejecución"
  }else{
    return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array=[]
  for (i=0; i < 10; i++){
    if ( i === 5 ){
      continue;
    }
    numero=numero+2;
    array.push(numero);
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
