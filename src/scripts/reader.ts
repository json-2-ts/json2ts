import { PropertyType } from "../enums/propertyType.enum";
import { PlainObject } from "../interfaces/plainObject.interface";
import { Writer } from "./writer";

export class JsonReader {
    data: any;

    plainObjects: PlainObject[] = [];

    levels: string[] = [];
    
    constructor(data: any){
        this.data = data;

        this.getPlainObjects(this.data, Math.random().toString(), 'RootObject');

        let interfaces = '';

        for(let n=0;n<this.levels.length;n++) {
            const currentLevel = this.plainObjects.filter(
                (plainObject: PlainObject) => plainObject.propertyLevel === this.levels[n]
            );

            interfaces += Writer.write(
                currentLevel, 
                currentLevel[0].propertyRoot
            )
        }

        Writer.save(interfaces);
    }

    getPlainObjects(data: any, level: string, root: string){
        if(!this.levels.includes(level)){
            this.levels.push(level)
        }

        Object.keys(data).map((key: string) => {
            const type = typeof data[key] as PropertyType;

            if(type === PropertyType.OBJECT){
                this.getPlainObjects(data[key], Math.random().toString(), key);
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