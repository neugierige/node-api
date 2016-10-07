'use strict';

const fs = require('fs');

let inFile = process.argv[2];
let outFile = process.argv[3];

fs.readFile(inFile, { encoding: 'utf8' }, (error, names) => {
  if (error) {
    console.error(error);
    return;
  }

  let namesArray = names.split('\n');
  namesArray.pop();

  namesArray.forEach((name) => {
    let line = 'Hello, ' + name + '!\n';
    fs.writeFile(outFile, line, { flag: 'a'}, (error) => {
      if (error) {
        console.error(error);
        return;
      }
    });
  });
  console.log('\n Success!');
});
// Hello, <Name>,
// Hello, <Name>,
