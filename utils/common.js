var fs = require('fs');
var filePath = './data/flights.data';
var FlightsData = {
   getData:  () => {
    return new Promise((resolve,reject) => {
        fs.readFile(filePath,'utf8',function (err,data){
            console.log('reading file');
            if (err)
            {
                reject(err);
            }
            resolve(JSON.parse(data));
        });

        
    });
  }
  
 }
  module.exports = FlightsData;