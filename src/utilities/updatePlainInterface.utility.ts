import { PlainInterface } from "../interfaces/plainInterface.interface";
import { PlainProperty } from "../interfaces/plainProperty.interface";
import { Recalculation } from "../interfaces/recalculation.interface";
import { recalculations } from "../state/recalculate.state";
import { camelizeInterface } from "./camelize.utility";
import { randomId } from "./randomId.utility";

export const updatePlainInterfaces = (
    plainProperty: PlainProperty, 
    plainInterfaces: PlainInterface[], 
    interfaceLevel: string, 
    interfaceName: string, 
    interfacePropertyId: string,
    interfacePreviousLevel?: string,
): PlainInterface[] => {
    const _recalculations: Recalculation[] = recalculations.filter(
        (recalculation: Recalculation) => recalculation.propertyId === plainProperty.propertyId
    );

    _recalculations.forEach((recalculation: Recalculation) => {
        const plainInterface: PlainInterface = plainInterfaces.filter((plainInterface: PlainInterface) => plainInterface.interfaceId === recalculation.interfaceId)[0];
        plainProperty.propertyType = camelizeInterface(plainInterface.interfaceFullName);
    });

    const duplicates = plainInterfaces.filter((plainInterface: PlainInterface) => plainInterface.interfaceName === interfaceName);
    const interfaceIndex = duplicates.length + 1;
    const interfaceFullName = interfaceName + (interfaceIndex === 1 ? '' : interfaceIndex);

    if(plainInterfaces.filter(
        (plainInterface: PlainInterface) => plainInterface.interfaceLevel === interfaceLevel).length === 0
    ) {
        const interfaceId = randomId();

        const plainInterface: PlainInterface = {
            interfaceId,
            interfaceName,
            interfaceIndex,
            interfaceFullName,
            interfaceProperties: [plainProperty],
            interfaceLevel,
            interfacePropertyId,
            interfacePreviousLevel,
        };
        
        plainInterfaces.push(plainInterface)

        if(interfaceIndex > 1){
            recalculations.push({
                propertyId: interfacePropertyId,
                interfaceId
            })
        }
    }
    else{
        plainInterfaces.filter(
            (plainInterface: PlainInterface) => plainInterface.interfaceLevel === interfaceLevel
        )[0].interfaceProperties.push(plainProperty)
    }

    return plainInterfaces;
}