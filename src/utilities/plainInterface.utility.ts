import { PlainInterface } from "../interfaces/plainInterface.interface";
import { PlainProperty } from "../interfaces/plainProperty.interface";

export const updatePlainInterfaces = (
    plainProperty: PlainProperty, 
    plainInterfaces: PlainInterface[], 
    interfaceLevel: string, 
    interfaceName: string, 
    interfacePropertyId: string,
    interfacePreviousLevel?: string,
): PlainInterface[] => {
    const duplicates = plainInterfaces.filter((plainInterface: PlainInterface) => plainInterface.interfaceName === interfaceName);
    const interfaceIndex = duplicates.length + 1;
    const interfaceFullName = interfaceName + (interfaceIndex === 1 ? '' : interfaceIndex);

    if(plainInterfaces.filter(
        (plainInterface: PlainInterface) => plainInterface.interfaceLevel === interfaceLevel).length === 0
    ) {
        plainInterfaces.push({
            interfaceName,
            interfaceIndex,
            interfaceFullName,
            interfaceProperties: [plainProperty],
            interfaceLevel,
            interfacePropertyId,
            interfacePreviousLevel
        })

        if(interfaceIndex > 1){
            console.log(interfaceFullName);

            // add connection between interface and propertyID
        }
    }
    else{
        plainInterfaces.filter(
            (plainInterface: PlainInterface) => plainInterface.interfaceLevel === interfaceLevel
        )[0].interfaceProperties.push(plainProperty)
    }

    return plainInterfaces;
}