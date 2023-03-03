import { PlainInterface } from "../interfaces/plainInterface.interface";
import { PlainProperty } from "../interfaces/plainProperty.interface";
import { camelizeInterface } from "../utilities/camelize.utility";
import { createPlainInterface } from "../utilities/plainInterface.utility";
import { Writer } from "./writer";

export class JsonReader {
    plainObjects: PlainProperty[] = [];

    plainInterfaces: PlainInterface[] = [];

    levels: string[] = [];
    
    constructor(data: any){
        this.getPlainObjects(data, Math.random().toString(), 'RootObject');

        let interfaces = '';

        for(let n=0;n<this.levels.length;n++) {
            const currentLevel = this.plainObjects.filter(
                (plainObject: PlainProperty) => plainObject.propertyLevel === this.levels[n]
            );
                
            this.plainInterfaces.push(createPlainInterface(currentLevel, this.plainInterfaces));
            interfaces += Writer.write(this.plainInterfaces[n]);
        }

        console.log(JSON.stringify(this.plainInterfaces));

        Writer.save(interfaces);
    }

    getPlainObjects(data: any, level: string, root: string, previousLevel?: string): void {
        if(!this.levels.includes(level)){
            this.levels.push(level)
        }

        Object.keys(data).map((key: string) => {
            let type: string = typeof data[key];
            let isArray = Array.isArray(data[key]);

            if(data[key] === null){
                type = 'any';
            }
            else if(isArray){
                isArray = true;

                if(data[key].length === 0){
                    type = 'any';
                }
                else {
                    type = typeof data[key][0];
                }

                if(type === 'object')
                {
                    this.getPlainObjects(data[key][0], Math.random().toString(), key, level);
                    type = camelizeInterface(key);
                }
            }
            else if(type === 'object' && Object.keys(data[key]).length > 0)
            {
                this.getPlainObjects(data[key], Math.random().toString(), key, level);
                type = camelizeInterface(key);
            }

            this.plainObjects.push({
                propertyName: key,
                propertyType: type,
                propertyLevel: level,
                propertyRoot: root,
                propertyPreviousLevel: previousLevel,
                isArray
            })
        });
    }
}