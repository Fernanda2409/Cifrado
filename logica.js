
function cifradoCesar(texto, desplazamiento) {
    return texto.split('').map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt();
        const inicio = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - inicio + desplazamiento) % 26) + inicio);
      }
      return char; // Si no es una letra, no lo cambia
    }).join('');
  }
  
  // Cifrado Vigenère
  function cifradoVigenere(texto, clave) {
    const claveExpandida = clave.repeat(Math.ceil(texto.length / clave.length)).toUpperCase();
    return texto.split('').map((char, index) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt();
        const inicio = code >= 65 && code <= 90 ? 65 : 97;
        const desplazamiento = claveExpandida.charCodeAt(index) - 65;
        return String.fromCharCode(((code - inicio + desplazamiento) % 26) + inicio);
      }
      return char; // Si no es una letra, no lo cambia
    }).join('');
  }
  
  export { cifradoCesar, cifradoVigenere };
  