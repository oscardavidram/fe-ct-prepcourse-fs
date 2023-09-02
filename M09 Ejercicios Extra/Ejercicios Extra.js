/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var newArray = [];
   for (var prop in objeto){
      var array = [prop,objeto[prop]]
      newArray.push(array)
   }
   return newArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
      var objeto = {}
   var arregloString = string.split("");
   var arregloOrdenado = arregloString.sort();
   for (i=0; i<arregloOrdenado.length; i++){
      var count = 0;
      for(j=0; j<arregloOrdenado.length; j++){
         if (arregloOrdenado[i]==arregloOrdenado[j]){
            count++
         }
      }
      objeto[arregloOrdenado[i]]=count;
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = []
   var arregloString = string.split("");
   for (i= 0; i<arregloString.length; i++){
      if (arregloString[i].charCodeAt(0) >= 65 && arregloString[i].charCodeAt(0) <= 90){
         mayus.push(arregloString[i]);
         arregloString.splice(i, 1);
         i--
      }
   }
   var arrayFinal = (mayus.concat(arregloString)).join('');
   return arrayFinal;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arregloDeFrase = frase.split(' ');
   var resultado = arregloDeFrase.map((arr) => {
       return arr.split('').reverse().join('');
   } )
   var string = resultado.join(' ');
   return string;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   string = numero.toString()
   if (numero == string.split('').reverse().join('')){
      return "Es capicua";
   }else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   array = string.split('');
    for (i=0; i<array.length; i++){
       if (array[i] == 'a' || array[i] == 'b' || array[i] == 'c'){
          array.splice(i,1);
          i--
       }
    }
    return array.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b) => a.length - b.length);
   return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayComun = array1.filter((arr) =>array2.includes(arr))
   return arrayComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
