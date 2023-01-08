"use strict";
const aCodeAscii = 'a'.charCodeAt(0);
const zCodeAscii = 'z'.charCodeAt(0);
const nEnglishLetters = zCodeAscii - aCodeAscii + 1;
function shiftCipher(str, shift = 1) {
    return cipherDecipher(str, shift, mapperCipher);
}
function shiftDecipher(str, shift = 1) {
    return cipherDecipher(str, shift, mapperDecipher);
}
function cipherDecipher(str, shift, mapperFun) {
    //const arStr: string[] = Array.from(str);
    const arStr = Array.from(str);
    const arRes = arStr.map(symb => {
        let res = symb;
        if (symb <= 'z' && symb >= 'a') {
            res = mapperFun(symb, shift);
        }
        return res;
    });
    return arRes.join('');
}
function mapperCipher(symb, shift) {
    const actualShift = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}
function mapperDecipher(symb, shift) {
    const actualShift = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}
function testCipherDecipher(data, testName) {
    console.log(`${"*".repeat(10)}${testName}${"*".repeat(10)}`);
    const funForTest = testName === "cipherTest" ? shiftCipher : shiftDecipher;
    data.forEach((obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`)));
}
const dataForCipherTest = [
    { str: "abc" }, { str: "abz", shift: 1000 }
];
testCipherDecipher(dataForCipherTest, "cipherTest");
const dataForDecipherTest = [
    { str: "bcd" }, { str: "mnl", shift: 1000 }
];
testCipherDecipher(dataForDecipherTest, "decipherTest");
// console.log(shiftCipher("abz", 1000))
// function shiftCipher(str: string, shift: number = 1): string {
//   let arrIn: Array<string>;
//   let arrOut: Array<string>;
//   let res: string;
//   arrIn = Array.from(str);
//   arrOut = arrIn.map(function (everySymb: string) {
//     let code: number = everySymb.charCodeAt(0);
//     if (code >= 97 && code <= 122) {
//       for (let i = 0; i < shift; i++) {
//         code == 122 ? (code = 97) : code++;
//         res = String.fromCharCode(code);
//       }
//     } else {
//       res = everySymb;
//     }
//     return res;
//   });
//   return arrOut.join("");
// }
// console.log(`'abc' = ${shiftCipher("abc")}`);
// console.log(`'abz', shift 27 = ${shiftCipher("abz", 27)}`);
// console.log(`'abz', shift 1000 = ${shiftCipher("abz", 1000)}`);
// function shiftDecipher(str: string, shift: number = 1): string {
//   let arrIn: Array<string>;
//   let arrOut: Array<string>;
//   let res: string;
//   arrIn = Array.from(str);
//   arrOut = arrIn.map(function (everySymb: string) {
//     let code: number = everySymb.charCodeAt(0);
//     if (code >= 97 && code <= 122) {
//       for (let i = 0; i < shift; i++) {
//         code == 97 ? (code = 122) : code--;
//         res = String.fromCharCode(code);
//       }
//     } else {
//       res = everySymb;
//     }
//     return res;
//   });
//   return arrOut.join("");
// }
// console.log(`'bcd': ${shiftDecipher("bcd")}`);
// console.log(`'bca', shift 27: ${shiftDecipher("bca", 27)}`);
// console.log(`'mnl', shift 1000: ${shiftDecipher("mnl", 1000)}`);
//# sourceMappingURL=app.js.map