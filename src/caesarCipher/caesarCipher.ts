export function caesarCipher(message: string, offset: number) {
  const messageArray = message.split("");
  const shiftedArray = messageArray.map((char) => {
    const asciiCode = char.charCodeAt(0);

    if (asciiCode > 64 && asciiCode < 91) {
      return upperCase(asciiCode, offset);
    } else if (asciiCode > 96 && asciiCode < 123) {
      return lowerCase(asciiCode, offset);
    } else if (asciiCode > 31 && asciiCode < 65) {
      return punctuation(asciiCode, offset);
    } else {
      throw new Error("Sorry, that's not a supported character");
    }
  });

  return shiftedArray.join("");
}

function lowerCase(code: number, offset: number) {
  const shiftedCode = code + offset;
  if (shiftedCode > 122) {
    const overflow = shiftedCode - 122;
    return String.fromCharCode(96 + overflow);
  } else if (shiftedCode < 97) {
    const overflow = 97 - shiftedCode;
    return String.fromCharCode(123 - overflow);
  } else {
    return String.fromCharCode(shiftedCode);
  }
}

function upperCase(code: number, offset: number) {
  const shiftedCode = code + offset;
  if (shiftedCode > 90) {
    const overflow = shiftedCode - 90;
    return String.fromCharCode(64 + overflow);
  } else if (shiftedCode < 65) {
    const overflow = 65 - shiftedCode;
    return String.fromCharCode(91 - overflow);
  } else {
    return String.fromCharCode(shiftedCode);
  }
}

function punctuation(code: number, offset: number) {
  const shiftedCode = code + offset;
  if (shiftedCode > 64) {
    const overflow = shiftedCode - 64;
    return String.fromCharCode(31 + overflow);
  } else if (shiftedCode < 32) {
    const overflow = 32 - shiftedCode;
    return String.fromCharCode(65 - overflow);
  } else {
    return String.fromCharCode(shiftedCode);
  }
}
