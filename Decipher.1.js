"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decipher = void 0;
class Decipher {
    constructor(minCode, maxCode, shift) {
        this.minCode = minCode;
        this.maxCode = maxCode;
        this.shift = shift;
        this.code = this.maxCode - this.minCode + 1;
    }
    cipher(str) {
        return this.cipherDecipher(str, this.mapperCipher);
    }
    decipher(str) {
        return this.cipherDecipher(str, this.mapperDecipher);
    }
    cipherDecipher(str, mapperFun) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb.charCodeAt(0) <= this.maxCode && symb.charCodeAt(0) >= this.minCode) {
                res = mapperFun.call(this, symb);
            }
            return res;
        });
        return arRes.join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.minCode + this.shift) % this.code;
        return String.fromCharCode(this.minCode + actualShift);
    }
    mapperDecipher(symb) {
        const actualShift = (this.maxCode - symb.charCodeAt(0) + this.shift) % this.code;
        return String.fromCharCode(this.maxCode - actualShift);
    }
}
exports.Decipher = Decipher;
//# sourceMappingURL=Decipher.1.js.map