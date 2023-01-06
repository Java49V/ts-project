function shiftCipher(str: string, shift: number = 1): string {
  let arrIn: Array<string>;
  let arrOut: Array<string>;

  let res: string;
  arrIn = Array.from(str);
  arrOut = arrIn.map(function (everySymb: string) {
    let code: number = everySymb.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      for (let i = 0; i < shift; i++) {
        code == 122 ? (code = 97) : code++;
        res = String.fromCharCode(code);
      }
    } else {
      res = everySymb;
    }
    return res;
  });
  return arrOut.join("");
}
console.log(`'abc' = ${shiftCipher("abc")}`);
console.log(`'abz', shift 27 = ${shiftCipher("abz", 27)}`);
console.log(`'abz', shift 1000 = ${shiftCipher("abz", 1000)}`);

function shiftDecipher(str: string, shift: number = 1): string {
  let arrIn: Array<string>;
  let arrOut: Array<string>;

  let res: string;
  arrIn = Array.from(str);
  arrOut = arrIn.map(function (everySymb: string) {
    let code: number = everySymb.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      for (let i = 0; i < shift; i++) {
        code == 97 ? (code = 122) : code--;
        res = String.fromCharCode(code);
      }
    } else {
      res = everySymb;
    }
    return res;
  });

  return arrOut.join("");
}

console.log(`'bcd': ${shiftDecipher("bcd")}`);
console.log(`'bca', shift 27: ${shiftDecipher("bca", 27)}`);
console.log(`'mnl', shift 1000: ${shiftDecipher("mnl", 1000)}`);

// function shiftCipher(text: string, shift: number): string {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     const charCode = text.charCodeAt(i);
//     if (charCode >= 65 && charCode <= 90) {
//       result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
//     } else if (charCode >= 97 && charCode <= 122) {
//       result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// }

// // const encoded = shiftCipher("abc", 1);
// console.log(shiftCipher("abz", 1000));

// function shiftDecipher(text: string, shift: number = 1): string {
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//       const charCode = text.charCodeAt(i);
//     //   if (charCode >= 65 && charCode <= 90) {
//     //     result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
//     //   } else
//       if (charCode >= 97 && charCode <= 122) {
//         result += String.fromCharCode(((charCode + 97 - shift) % 26) + 97);
//       } else {
//         result += text[i];
//       }
//     }
//     return result;
//   }

// console.log(shiftDecipher("mnl", 1000));
