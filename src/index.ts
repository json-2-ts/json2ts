// import fs from 'fs';

import { JsonReader } from "./scripts/reader";


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
    },
    'e' : {
        'e1' : 1,
        'e2' : 'abc',
        'e3' : true,
        'e4' : {
            'e41' : 1,
            'e42' : 'abc',
            'e43' : true,
            'e44' : {}
        }
    }
}

new JsonReader(data);