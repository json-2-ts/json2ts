import { PlainObject } from "./interfaces/plainObject.interface";

export class Converter{
    data: PlainObject[];
    
    constructor(data: PlainObject[]){
        this.data = data;
    }
}