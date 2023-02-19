import { PropertyType } from "../enums/propertyType.enum";
import { PlainObject } from "../interfaces/plainObject.interface";
import { Writer } from "./writer";

export class JsonReader {
    data: any;

    plainObjects: PlainObject[] = [];

    highestLevel = 0;
    
    constructor(data: any){
        this.data = data;

        this.getPlainObjects(this.data, 0, 'RootObject');

        console.log(this.plainObjects);

        let currentLevel = 0;
        let interfaces = '';

        while(currentLevel < this.highestLevel){
            interfaces += Writer.write(
                this.plainObjects.filter(
                    (plainObject: PlainObject) => plainObject.propertyLevel === currentLevel
                ), 
                'RootObject'
            )

            currentLevel++;
        }

        Writer.save(interfaces);
    }

    getPlainObjects(data: any, level: number, root: string){
        if(level > this.highestLevel) this.highestLevel = level;

        Object.keys(data).map((key: string) => {
            const type = typeof data[key] as PropertyType;

            if(type === PropertyType.OBJECT){
                this.getPlainObjects(data[key], level+1, key);
            }

            this.plainObjects.push({
                propertyName: key,
                propertyType: type,
                propertyLevel: level,
                propertyRoot: root
            })
        });
    }
}