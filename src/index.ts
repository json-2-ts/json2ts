// import fs from 'fs';
import { JsonReader } from './jsonReader';

const data = {
    'a' : 1,
    'b' : 'abc',
    'c' : true,
    'd' : {
        'd1' : 1,
        'd2' : 'abc',
        'd3' : true,
        'd4' : {
            'd41' : 1,
            'd42' : 'abc',
            'd43' : true,
            'd44' : {}
        }
    }
}

new JsonReader(data);

// fs.writeFile('./output.ts', '',()=>{});