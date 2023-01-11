import { Shape } from "./ShapeInterface";

export class ShapesContainer implements Shape {
    constructor(private shapes: Array<Shape>) {
    }
    getSquare(): number {
        return this.shapes.reduce((square, shape) => square + shape.getSquare(), 0);
    }
    getPerimeter(): number {
        return this.shapes.reduce((perim, shape) => perim + shape.getPerimeter(), 0);
    }
}