var rimraf = require("rimraf");
const execSync = require('child_process').execSync;

rimraf.sync("./dist");

// temp
rimraf.sync("./output.ts");

execSync('tsc');

execSync('node ./dist/index.js')