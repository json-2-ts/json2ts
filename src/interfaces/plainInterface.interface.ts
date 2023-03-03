import { PlainProperty } from "./plainProperty.interface";

export interface PlainInterface {
    interfaceName: string;
    interfaceIndex: number;
    interfaceFullName: string;
    interfaceProperties: PlainProperty[];
    interfaceLevel: string;
    interfacePropertyId: string;
    interfacePreviousLevel?: string;
}