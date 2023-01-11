"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const ShapesContainer_1 = require("./ShapesContainer");
const Cipher_1_1 = require("./Cipher.1");
const Decipher_1_1 = require("./Decipher.1");
const inputStr = 'az2:W';
const choiceC = new Cipher_1_1.Cipher('a'.charCodeAt(0), 'z'.charCodeAt(0), 50);
const strS = choiceC.cipher(inputStr);
console.log(inputStr, strS, choiceC.decipher(strS));
const choiceD = new Decipher_1_1.Decipher('a'.charCodeAt(0), 'z'.charCodeAt(0), 50);
const strA = choiceD.cipher(inputStr);
console.log(inputStr, strA, choiceD.decipher(strA));
const shapes = [
    new Rectangle_1.Rectangle(5, 7),
    new Square_1.Square(6)
];
const container = new ShapesContainer_1.ShapesContainer(shapes);
const sumOfShapes = container.getSquare();
const sumOfPerim = container.getPerimeter();
console.log(sumOfShapes, sumOfPerim);
//# sourceMappingURL=app.js.map