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
        'd4' : {}
    }
}

new JsonReader(data);

// fs.writeFile('./output.ts', '',()=>{});