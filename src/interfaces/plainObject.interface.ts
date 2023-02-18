import { PropertyType } from "../enums/propertyType.enum";

export interface PlainObject {
    propertyName: string;
    propertyType: PropertyType;
    propertyLevel: number;
}