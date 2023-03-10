/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array = [];
  for (let obj in objeto) {
    let newArray = [];
    newArray.push(obj, objeto[obj]);
    array.push(newArray);
  }
  return array;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let x = {};
  let letras = [];
  for (let i = 0; i < string.length; i++) {
    if (!x[string[i]]) {
      x[string[i]] = 1;
      letras.push(string[i]);
    } else {
      x[string[i]]++;
    }
  }

  letras.sort();
  let y = {};
  for (let i = 0; i < letras.length; i++) {
    y[letras[i]] = x[letras[i]];
  }

  return y;
}

numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayusculas = "";
  let minusculas = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      mayusculas += string[i];
    } else {
      minusculas += string[i];
    }
  }
  return mayusculas + minusculas;
}
function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let palabras = frase.split(" ");
  let reverse = [];
  for (let i = 0; i < palabras.length; i++) {
    let palabra = "";
    for (let y = palabras[i].length - 1; y >= 0; y--) {
      palabra += palabras[i][y];
    }
    reverse.push(palabra);
  }
  return reverse.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  String.prototype.reverse = function () {
    let reverse = "";
    for (let i = this.length - 1; i >= 0; i--) {
      reverse += this[i];
    }
    return reverse;
  };

  return numero.toString() === numero.toString().reverse()
    ? "Es capicua"
    : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let letras = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
      letras.push(string[i]);
    }
  }
  return letras.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    for (let y = i + 1; y < arrayOfStrings.length; y++) {
      if (arrayOfStrings[y].length < arrayOfStrings[i].length) {
        let aux = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[y];
        arrayOfStrings[y] = aux;
      }
    }
  }
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let mayor;
  let menor;
  let interseccion = [];

  if (array1 > array2) {
    mayor = array1;
    menor = array2;
  } else {
    menor = array1;
    mayor = array2;
  }

  for (let i = 0; i < mayor.length; i++) {
    for (let y = 0; y < menor.length; y++) {
      if (mayor[i] === menor[y]) {
        if (!interseccion.includes(mayor[i])) {
          interseccion.push(mayor[i]);
        }
      }
    }
  }
  return interseccion
}
buscoInterseccion([1, 20, 3], [22, 5, 7]);

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
