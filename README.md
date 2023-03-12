## Installation
```
npm i --save @dellarosamarco/json-2-ts
```

## Package.json
```
"devDependencies": {
    "@dellarosamarco/json-2-ts": "^1.0.9"
}
```

## Usage
```
import { JsonReader } from "@dellarosamarco/json-2-ts";
import * as fs from "fs";

const data = {
    "id" : "640e2a4f3bb10c4d5924b377",
    "isActive" : true,
    "tags" : [
      {
        "id" : 1,
        "name" : "entertainment"
      },
      {
        "id" : 2,
        "name" : "simulation"
      }
    ],
    ...
}

const interfaces = JsonReader.convert(data);
// (string) → export interface ...

fs.writeFile("./types.d.ts", interfaces);
```
