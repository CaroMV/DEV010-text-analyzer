const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /[^\s.,;:!?¡¿áéíóúüÁÉÍÓÚÜñÑ\d]+/g;
    const words = text.trim().match(regex);
  
    const filteredWords = words ? words.filter(word => /[a-zA-Z\d]/.test(word)) : [];
  
    return filteredWords.length;
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
    const regex = /[a-zA-ZáéíóúÁÉÍÓÚñÑ]+/g; //seleccionamos las letras y Ñs, estaba contando más palabras de las que debería
    const words = text.match(regex);
    
    if (!words || words.length === 0) {
      return 0;
    } // ahora si habrán 0 palabras, asi que podrá haber un 0 de output
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2)); // tofixed para redondear
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string` (enteros o decimales).
    const regex = /[-+]?\b\d+\b(?:\.\d+)?/g;
    const numbers = text.match(regex);
    return numbers ? numbers.length: 0;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /[-+]?\b\d+\b(?:\.\d+)?/g;
    const numbers = text.match(regex);
    if (!numbers || numbers.length === 0) {
      return 0;
    }
    let sum = 0;
    numbers.forEach((num) => {
      const parsedNum = parseFloat(num);
      if (!isNaN(parsedNum)) {
        sum += parsedNum;
      }
    });
  
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