const request = require('request');
//request is to fetch the info from the url  and it will return html through callback function
//call back function are called after request is complete and it will return html which is third arguement of the function 
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err, res,body) {
    if(err){
        console.log("Error",err);
        return;
    }
    // console.log(body);
    console.log(res);
}