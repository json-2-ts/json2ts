import { PropertyType } from "./enums/propertyType.enum";
import { PlainObject } from "./interfaces/plainObject.interface";

export class JsonReader {
    data: any;

    plainObjects: PlainObject[] = [];
    
    constructor(data: any){
        this.data = data;

        Object.keys(data).map((key: string) => {
            this.plainObjects.push({
                propertyName: key,
                propertyType: typeof data[key] as PropertyType
            })
        });

        console.log(this.plainObjects);
    }
}