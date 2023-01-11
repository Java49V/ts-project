"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapperDecipher = exports.mapperCipher = void 0;
function mapperCipher(symb, minCode, shift, nCodes) {
    const actualShift = (symb.charCodeAt(0) - minCode + shift) % nCodes;
    return String.fromCharCode(minCode + actualShift);
}
exports.mapperCipher = mapperCipher;
function mapperDecipher(symb, maxCode, shift, nCodes) {
    const actualShift = (maxCode - symb.charCodeAt(0) + shift) % nCodes;
    return String.fromCharCode(maxCode - actualShift);
}
exports.mapperDecipher = mapperDecipher;
//# sourceMappingURL=Cipher.js.map