import csv from 'csvtojson';
import fs from 'fs';

const csvParser = function(input, output) {
  const writeableStream =  fs.createWriteStream(output);

  csv()
    .fromStream(fs.createReadStream(input))
    .subscribe((json)=>{
      return new Promise((resolve)=>{
        const jsonData = JSON.stringify(json);

        writeableStream.write(jsonData.toString() + "\n");
        resolve(json)
      })
    },(err) => console.log(err));
};

export default csvParser;
