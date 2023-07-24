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
    // Para pasar el test, debemos hacer una función que nos detecte los signos para sumar caracteres e_e
    const regex = /\b[\w']+\b/g; //seleccionamos las letras y Ñs, estaba contando más palabras de las que debería
    const words = text.match(regex);
    
    if (!words || words.length === 0) {
      return 0;
    } // ahora si habrán 0 palabras, asi que podrá haber un 0 de output
    const sumChar = words.reduce((total,word)=> total + word.length,0);
    const validChar = words.filter(word=>!/^\d+$/.test(word));

    const averageLength = sumChar/validChar.length
    return parseFloat(averageLength.toFixed(2)); // tofixed para redondear
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string` (enteros o decimales).
    const regex = /\b\d+(?:[.,]\d+)?\b/g;
    const numbers = text.match(regex);
    if (!numbers) {
      return 0;
    }

    let numberCount = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      numberCount++;
    }
    return numberCount;
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

