# package.json
```
"devDependencies": {
    "@dellarosamarco/json-2-ts": "^1.0.3"
}
```

# Usage
```
data = {
    ...
}

const interfaces = JsonReader.convert(data);

fs.writeFile('./types.d.ts', interfaces);
```
