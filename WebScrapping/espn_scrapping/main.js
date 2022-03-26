const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const {getAllMatch} = require('./getAllMatches');
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url,cb);
function cb(err, res,body) {
    if(err){
        console.log("Error",err);
        return;
    }else{
    handleHtml(body);
    }
}

let iplPath = path.join(__dirname,"IPL");
if(!fs.existsSync(iplPath)){
    fs.mkdirSync(iplPath);
}


function handleHtml(html){
    let selectTool = cheerio.load(html);
    let selectAllItems = selectTool('a[data-hover="View All Results"]');
    //we will get the relative link from this
    let relativeLink = selectAllItems.attr('href');
    // console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    getAllMatch(fullLink);
}
