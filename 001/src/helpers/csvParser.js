import fs from 'fs';
import { pipeline } from 'stream';
import csv from 'csvtojson';

const csvParser = function(input, output) {
  return pipeline(
    fs.createReadStream(input),
    csv(),
    fs.createWriteStream(output),
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
  );
};

export default csvParser;
