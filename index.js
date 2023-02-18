"use strict";
exports.__esModule = true;
var data = {
    'a': 1,
    'b': 'abc',
    'c': true,
    'd': {}
};
var json2ts = function (data) {
    Object.keys(data).map(function (key) {
        console.log(typeof data[key]);
    });
    return '';
};
json2ts(data);
