import { mapperCipher, mapperDecipher, MapperFunction } from "./Cipher";


export class Cipher {
    private code: number;
    constructor(private minCode: number, private maxCode: number, private shift: number) {
        this.code = this.maxCode - this.minCode + 1;
    }
    cipher(str: string): string {
        return this.cipherDecipher(str, this.minCode, mapperCipher);
    }
    decipher(str: string): string {
        return this.cipherDecipher(str, this.maxCode, mapperDecipher);
    }
    private cipherDecipher(str: string, code: number, mapperFun: MapperFunction): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb.charCodeAt(0) <= this.maxCode && symb.charCodeAt(0) >= this.minCode) {
                res = mapperFun(symb, code, this.shift, this.code);
            }
            return res;
        });
        return arRes.join('');
    }
}
