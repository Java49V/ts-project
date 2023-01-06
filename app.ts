// for(let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i));
// }
// let a = 10;
// console.log(`a = ${a}`)
//variables
let hello = "world";
const vasya = "Vasya";
const b = 10;
let c: string;
c ="10"
function getRandomNumber(min:number, max:number):number {
return Math.floor(min + Math.random() * (max -min + 1));
}
//HW #30
function shiftCipher(str: string, shift: number = 1): string {
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (add)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' + 2 = code ASCII 'b'
    //examples:
    //shiftCipher("abz.", 3) => "dec."
    return "";
}
function shiftDecipher(str: string, shift: number = 1): string {
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (subtract)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' - 2 = code ASCII 'x'
    //examples:
    //shiftCipher("dec.", 3) => "abz."
    return "";
}