import { PlainInterface } from "../interfaces/plainInterface.interface";
import { PlainProperty } from "../interfaces/plainProperty.interface";

export const createPlainInterface = (interfaceProperties: PlainProperty[], plainInterfaces: PlainInterface[]): PlainInterface => {
    const interfaceName = interfaceProperties[0].propertyRoot;
    const duplicates = plainInterfaces.filter((plainInterface: PlainInterface) => plainInterface.interfaceName === interfaceName);
    const interfaceIndex = duplicates.length + 1;
    const interfaceFullName = interfaceName + (interfaceIndex === 1 ? '' : interfaceIndex);

    interfaceProperties.forEach((plainObject: PlainProperty) => plainObject.propertyRoot = interfaceFullName);

    return {
        interfaceName,
        interfaceIndex,
        interfaceFullName,
        interfaceProperties
    }
}