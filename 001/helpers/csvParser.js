const csv = require('csvtojson');
const fs = require('fs');

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
    },(err) => console.log(err), (result) => console.log(result));
};

module.exports = csvParser;
