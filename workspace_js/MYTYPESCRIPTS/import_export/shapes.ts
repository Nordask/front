import {ShapesInterface} from './shapesinterface';

export class Triangle implements ShapesInterface{
    points: number;

    getPoints() {
        console.log(`A triangle has ${this.points} points`);
        this.points;
    }

    setPoints(points: number) {
        this.points = points;
    }
}

export class Square implements ShapesInterface {
    points: number;

    getPoints() {
        console.log(`A square has ${this.points} points`);
        this.points;
    }

    setPoints(points: number) {
        this.points = points;
    }
}