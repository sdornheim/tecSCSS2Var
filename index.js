/* 
Thanks for use my Module. I hope you enjoy it :). 

Greetings TeKO
*/

const fs = require("fs");

let load = function(path, key){
    return new Promise(function(resolve, reject){
        let scssfile = fs.readFileSync(path);
        let array = scssfile.toString().split(';');
  
        array.forEach(element=>{
            element = element.trim().split(':');
            if(element[0].indexOf(key) != -1){
                resolve(element[1].trim());
            }
        });
  
        reject("-1");
    });
}

module.exports = {
    load: load
}