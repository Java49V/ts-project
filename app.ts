const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLetters: number = zCodeAscii - aCodeAscii + 1;
 
function shiftCipher(str: string, shift: number = 1): string {
    return cipherDecipher(str, shift, mapperCipher);
}
function shiftDecipher(str: string, shift: number = 1) : string {
    return cipherDecipher(str, shift, mapperDecipher);
}
type MapperFunction = (symb: string, shift: number) => string;
function cipherDecipher(str: string, shift: number,
     mapperFun: MapperFunction): string {
        //const arStr: string[] = Array.from(str);
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                res = mapperFun(symb, shift);
            }
            return res;
        })
        return arRes.join('');
     }
     function mapperCipher(symb: string, shift: number) : string {
        const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
        return String.fromCharCode(aCodeAscii + actualShift);
     }
     function mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
        return String.fromCharCode(zCodeAscii - actualShift);
     }
     type TestObj = {
        str: string,
         shift?: number
     }
     function testCipherDecipher(data: Array<TestObj>,
         testName: string): void{
            console.log(`${"*".repeat(10)}${testName}${"*".repeat(10)}`)
            const funForTest: MapperFunction
             = testName === "cipherTest" ? shiftCipher : shiftDecipher;
data.forEach((obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`))) 
         }
         const dataForCipherTest: Array<TestObj> = [
            {str: "abc"}, {str: "abz", shift: 1000}
         ];
         testCipherDecipher(dataForCipherTest, "cipherTest");
         const dataForDecipherTest: Array<TestObj> = [
            {str: "bcd"}, {str: "mnl", shift: 1000}
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
