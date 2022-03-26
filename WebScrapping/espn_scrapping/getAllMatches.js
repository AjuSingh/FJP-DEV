const request = require('request');
const cheerio = require('cheerio');
const {gifs} = require('./scorecards');

function getAllMatch(url){
    request(url,cb);
}


function cb(err, res,body) {
    if(err){
        console.log("Error",err);
        return;
    }else{
        getAllScoreCard(body);
    }
}
  
function getAllScoreCard(html){
    let selectTool = cheerio.load(html);
    //we get all scorecard link by selecting the anchor tag
    let selectAllSc = selectTool('a[data-hover="Scorecard"]');
    for(let i=0;i<selectAllSc.length;i++){
        let fullLink = "https://www.espncricinfo.com" + selectTool(selectAllSc[i]).attr('href');
        //now we have to get info of each match
        gifs(fullLink);
    }
}

module.exports = {getAllMatch};