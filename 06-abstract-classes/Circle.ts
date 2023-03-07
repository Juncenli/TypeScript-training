import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(_x: number, _y: number, private _radius: number) {
        // Call superclass constructor
        super(_x, _y);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}, area=${this.calculateArea()}`;
    }
}