const data = {
    'a' : 1,
    'b' : 'abc',
    'c' : true,
    'd' : {}
}

const json2ts = (data: any): string => {
    Object.keys(data).map((key: string) => {
        console.log(typeof data[key]) 
    });

    return '';
}

json2ts(data);

export {};