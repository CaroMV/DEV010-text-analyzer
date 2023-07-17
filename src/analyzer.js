const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /[^\d\s.,;:!?]+/g; // exp regular
    const words = text.trim().match(regex); // corte y match segun exp reg
    return words.length; 
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /[^\w]/g;
    const textWithoutSpacesAndPunctuation = text.replace(regex, "");
    return textWithoutSpacesAndPunctuation.length;
  }, 

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // text(total length)/total(N palabras) . variable vacía para guardar info
    // exp regular para extraer sólo palabras
    const regex = /[^\d\s.,;:!?]+/g; 
    //array de palabras totales sin numeros 
    const words = text.trim().match(regex);
    // Si no hay palabras o el array está vacío el promedio es 0 
    if (!words || words.length === 0) {
      return 0;
    } 
    const totalLength = words.reduce((sum, word) => sum + word.length, 0); // calculo long total sumando las longitudes de las palabras
    return totalLength / words.length; //calculo de la longitud total / cantidad de palabras
    
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const regex= /\d+/g;
    const numbers = text.match(regex);
    return numbers ? numbers.length: 0;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const regex= /\d+/g
    const numbers = text.match(regex);
    const sum = numbers ? numbers.reduce((total, num) => total + parseInt(num), 0) : 0; // parseInt() importante para que no lo tome como string ):
    return sum;
  },

};

export default analyzer;


//JavaScript
//Tipos de datos primitivos

//La aplicación convierte valores tipo string a tipo number.
//Strings (cadenas de caracteres)

//La aplicación usa métodos para manipular strings como split, trim o replace.
//Variables (declaración, asignación, ámbito)

//La aplicación declara variables con let y const.

//La aplicación NO declara variables con var.

//Uso de condicionales (if-else, switch, operador ternario, lógica booleana)

//La aplicación usa el statement if..else para evaluar condiciones.

//Uso de bucles/ciclos (while, for, for..of)

//La aplicación usa el statement for para crear un bucle.
//Funciones (params, args, return)

//El objeto analyzer contiene un método getWordCount para calcular el recuento de palabras de un texto.

//El objeto analyzer contiene un método getCharacterCount para calcular el recuento de caracteres de un texto.

//El objeto analyzer contiene un método getCharacterCountExcludingSpaces para calcular el recuento de caracteres excluyendo espacios y signos de puntuación de un texto.

//El objeto analyzer contiene un método getNumbersCount para contar cúantos números hay en un texto.

//El objeto analyzer contiene un método getNumbersSum para la suma longitud media de los números en un texto.

//El objeto analyzer contiene un método getAverageWordLength para calcular la longitud media de las palabras en un texto.