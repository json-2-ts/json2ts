import fs from 'fs';
import { PlainInterface } from '../interfaces/plainInterface.interface';
import { PlainObject } from "../interfaces/plainObject.interface";

export class Writer {
    static plainInterfaces: PlainInterface[] = [];

    static write(plainObjects: PlainObject[], interfaceName: string): string {

        const duplicates = this.plainInterfaces.filter((plainInterface: PlainInterface) => plainInterface.interfaceName === interfaceName);

        if(duplicates.length > 0) {
            const interfaceIndex = duplicates.length + 1;
            
            this.plainInterfaces.push({
                interfaceName : interfaceName,
                interfaceIndex: interfaceIndex
            });

            interfaceName += interfaceIndex;
        }
        else {
            this.plainInterfaces.push({
                interfaceName : interfaceName,
                interfaceIndex: 1
            });
        }

        return `export interface ${interfaceName} {\n${plainObjects.map((plainObject: PlainObject) => `\t${plainObject.propertyName}: ${plainObject.propertyType}${plainObject.isArray ? '[]' : ''};`).join('\n')}\n}\n\n`;
    }

    static save(data: string): void {
        fs.writeFile('./output.ts', data,()=>{});
    }
}