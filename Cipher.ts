export type MapperFunction = (symb: string, code: number, shift: number, nCodes: number) => string;

export function mapperCipher(symb: string, minCode: number, shift: number, nCodes: number): string {
    const actualShift: number = (symb.charCodeAt(0) - minCode + shift) % nCodes;
    return String.fromCharCode(minCode + actualShift);
}
export function mapperDecipher(symb: string, maxCode: number, shift: number, nCodes: number): string {
    const actualShift: number = (maxCode - symb.charCodeAt(0) + shift) % nCodes;
    return String.fromCharCode(maxCode - actualShift);
}

