import { PlainObject } from "../interfaces/plainObject.interface";
import { camelizeInterface } from "../utilities/camelize.utility";
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
                camelizeInterface(currentLevel[0].propertyRoot)
            )
        }

        Writer.save(interfaces);
    }

    getPlainObjects(data: any, level: string, root: string): void {
        if(!this.levels.includes(level)){
            this.levels.push(level)
        }

        Object.keys(data).map((key: string) => {
            let type: string = typeof data[key];

            if(type === 'object'){
                this.getPlainObjects(data[key], Math.random().toString(), key);
                type = camelizeInterface(key);
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