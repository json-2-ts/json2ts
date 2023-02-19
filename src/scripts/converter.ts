import { PlainObject } from "../interfaces/plainObject.interface";

export class Converter{
    data: PlainObject[];

    currentLevel = 0;

    constructor(data: PlainObject[]){
        this.data = data;
    }
}