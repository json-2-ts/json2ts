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
    },
    'f' : [],
    'g' : ['a', 'b', 'c'],
    'h' : [
        {
            'name' : 'x',
            'lastname' : 'y',
            'city' : {
                'code' : '20900',
                'name' : 'Monza'
            },
            'friends' : [
                {
                    'name' : 'x',
                    'lastname' : 'y',
                    'city' : {
                        'code' : '20900',
                        'name' : 'Monza'
                    }
                }
            ]
        },
        {
            'name' : 'x',
            'lastname' : 'y',
            'city' : {
                'code' : '20900',
                'name' : 'Monza'
            },
            'friends' : [
                {
                    'name' : 'x',
                    'lastname' : 'y',
                    'city' : {
                        'code' : '20900',
                        'name' : 'Monza'
                    }
                }
            ]
        },
    ],
    'i' : null,
    'l': {
        'pets' : [
            {
                'name' : 'dog',
                'age' : 2,
                'friends' : [
                    {
                        'name' : 'cat',
                        'age' : 3,
                        'friends' : [
                            {
                                'name' : 'dog',
                                'age' : 1,
                                'friends': []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

new JsonReader(data, './', 'types.ts');