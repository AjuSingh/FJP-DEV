const request = require('request');
const cheerio = require('cheerio');

request("https://www.worldometers.info/coronavirus/",cb);
function cb(err, res,body) {
    if(err){
        console.log("Error",err);
        return;
    }else{
    handleHtml(body);
    }
}

function handleHtml(html){
    let selectTool = cheerio.load(html);
    let info = selectTool('.maincounter-number');
    let totalCases = selectTool(info[0]).text();
    console.log("TotalCases->" + totalCases);
    let totalDeath = selectTool(info[1]).text();
    console.log("TotalDeaths->" + totalDeath);
    let totalRecovered = selectTool(info[2]).text();
    console.log("TotalRecovered->" + totalRecovered);


}
