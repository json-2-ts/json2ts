import { PropertyType } from "./enums/propertyType.enum";
import { PlainObject } from "./interfaces/plainObject.interface";

export class JsonReader {
    data: any;

    plainObjects: PlainObject[] = [];
    
    constructor(data: any){
        this.data = data;

        this.getPlainObjects(this.data, 0);

        console.log(this.plainObjects);
    }

    getPlainObjects(data: any, level: number){
        Object.keys(data).map((key: string) => {
            const type = typeof data[key] as PropertyType;

            if(type === PropertyType.OBJECT){
                this.getPlainObjects(data[key], level+1);
            }

            this.plainObjects.push({
                propertyName: key,
                propertyType: type,
                propertyLevel: level
            })
        });
    }
}