import { PlainInterface } from '../interfaces/plainInterface.interface';
import { PlainProperty } from "../interfaces/plainProperty.interface";
import { camelize, camelizeInterface } from '../utilities/camelize.utility';

class Writer {
    static plainInterfaces: PlainInterface[] = [];

    static write(plainInterface: PlainInterface): string {
        const interfaceName = camelizeInterface(plainInterface.interfaceFullName);
        return `export interface ${interfaceName} {\n${plainInterface.interfaceProperties.filter((plainProperty: PlainProperty) => plainProperty.propertyName !== '').map((plainProperty: PlainProperty) => `\t${camelize(plainProperty.propertyName)}: ${plainProperty.propertyType}${plainProperty.isArray ? '[]' : ''};`).join('\n')}\n}\n\n`;
    }
}

export default Writer;