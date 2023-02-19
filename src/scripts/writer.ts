import fs from 'fs';
import { PlainObject } from "../interfaces/plainObject.interface";

export class Writer {
    static write(plainObjects: PlainObject[], interfaceName: string): string {
        return `export interface ${interfaceName} {\n${plainObjects.map((plainObject: PlainObject) => `\t${plainObject.propertyName} : ${plainObject.propertyType};`).join('\n')}\n}\n\n`;
    }

    static save(data: string): void {
        fs.writeFile('./output.ts', data,()=>{});
    }
}