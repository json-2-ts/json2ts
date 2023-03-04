import fs from 'fs';
import { PlainInterface } from '../interfaces/plainInterface.interface';
import { PlainProperty } from "../interfaces/plainProperty.interface";
import { camelizeInterface } from '../utilities/camelize.utility';

export class Writer {
    static plainInterfaces: PlainInterface[] = [];

    static write(plainInterface: PlainInterface): string {
        const interfaceName = camelizeInterface(plainInterface.interfaceFullName);
        return `export interface ${interfaceName} {\n${plainInterface.interfaceProperties.map((plainProperty: PlainProperty) => `\t${plainProperty.propertyName}: ${plainProperty.propertyType}${plainProperty.isArray ? '[]' : ''};`).join('\n')}\n}\n\n`;
    }

    static save(data: string, savePath: string, fileName: string): void {
        if(!fs.existsSync(savePath)){
            fs.mkdirSync(savePath);
        }

        fs.writeFile(savePath + fileName, data,()=>{});
    }
}

export default Writer;