"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    constructor(shapes) {
        this.shapes = shapes;
    }
    getSquare() {
        return this.shapes.reduce((square, shape) => square + shape.getSquare(), 0);
    }
    getPerimeter() {
        return this.shapes.reduce((perim, shape) => perim + shape.getPerimeter(), 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map