import { PlainInterface } from "../interfaces/plainInterface.interface";
import { camelizeInterface } from "../utilities/camelize.utility";
import { updatePlainInterfaces } from "../utilities/updatePlainInterface.utility";
import { randomId } from "../utilities/randomId.utility";
import Writer from "./writer";

export class JsonReader {
    private static plainInterfaces: PlainInterface[] = [];

    private static levels: string[] = [];

    static convert(data: any): string {
        if(Array.isArray(data) && data.length > 0) {
            data = data[0];
        }

        this.plainInterfaces = [];
        this.levels = [];
        
        this.getPlainObjects(data, randomId(), 'RootObject');

        let interfaces = '';

        for(let n=0;n<this.levels.length;n++) {
            interfaces += Writer.write(this.plainInterfaces[n]);
        }

        return interfaces;
    }

    private static getPlainObjects = (data: any, level: string, root: string, previousLevel?: string, interfacePropertyId?: string): void => {
        if(!this.levels.includes(level)){
            this.levels.push(level)
        }

        Object.keys(data).map((key: string) => {
            let type: string = typeof data[key];
            let isArray = Array.isArray(data[key]);
            const propertyId = randomId();

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
                    this.getPlainObjects(data[key][0], randomId(), key, level, propertyId);
                    type = camelizeInterface(key);
                }
            }
            else if(type === 'object' && Object.keys(data[key]).length > 0)
            {
                this.getPlainObjects(data[key], randomId(), key, level, propertyId);
                type = camelizeInterface(key);
            }

            this.plainInterfaces = updatePlainInterfaces(
                {
                    propertyName: key,
                    propertyType: type,
                    propertyId,
                    isArray
                },
                this.plainInterfaces,
                level,
                root,
                interfacePropertyId!,
                previousLevel,
            )
        });
    }
}

export default JsonReader;