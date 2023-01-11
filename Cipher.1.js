"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cipher = void 0;
const Cipher_1 = require("./Cipher");
class Cipher {
    constructor(minCode, maxCode, shift) {
        this.minCode = minCode;
        this.maxCode = maxCode;
        this.shift = shift;
        this.code = this.maxCode - this.minCode + 1;
    }
    cipher(str) {
        return this.cipherDecipher(str, this.minCode, Cipher_1.mapperCipher);
    }
    decipher(str) {
        return this.cipherDecipher(str, this.maxCode, Cipher_1.mapperDecipher);
    }
    cipherDecipher(str, code, mapperFun) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb.charCodeAt(0) <= this.maxCode && symb.charCodeAt(0) >= this.minCode) {
                res = mapperFun(symb, code, this.shift, this.code);
            }
            return res;
        });
        return arRes.join('');
    }
}
exports.Cipher = Cipher;
//# sourceMappingURL=Cipher.1.js.map