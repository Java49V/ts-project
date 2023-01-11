import { MapperFunction } from "./Decipher";


export class Decipher {
    private code: number;
    constructor(private minCode: number, private maxCode: number, private shift: number) {
        this.code = this.maxCode - this.minCode + 1;
    }
    cipher(str: string): string {
        return this.cipherDecipher(str, this.mapperCipher);
    }
    decipher(str: string): string {
        return this.cipherDecipher(str, this.mapperDecipher);
    }
    private cipherDecipher(str: string, mapperFun: MapperFunction): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb.charCodeAt(0) <= this.maxCode && symb.charCodeAt(0) >= this.minCode) {
                res = mapperFun.call(this, symb);
            }
            return res;
        });
        return arRes.join('');
    }
    private mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.minCode + this.shift) % this.code;
        return String.fromCharCode(this.minCode + actualShift);
    }
    private mapperDecipher(symb: string): string {
        const actualShift: number = (this.maxCode - symb.charCodeAt(0) + this.shift) % this.code;
        return String.fromCharCode(this.maxCode - actualShift);
    }
}
