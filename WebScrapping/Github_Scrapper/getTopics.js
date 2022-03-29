const request = require('request');
const cheerio = require('cheerio');
const getTopicProjects = require('./getTopicProjects');


function getTopics(url){
    request(url,cb);
}

function cb(err, res,body) {
    if(err){
        console.log("error is",err);
        return;
    }else{
    handleHtml(body);
}
}

function handleHtml(html){
    let selectTool = cheerio.load(html);
    let allTopics = selectTool('.py-4');
    for(let i = 0; i < 5; i++){
        let topicsInfo = selectTool(allTopics[i]).find('a')[1];
        let topicLink = selectTool(topicsInfo).attr('href');
        let topicNameAndTitle=selectTool(topicsInfo).find('p')[0];
        let topicName = selectTool(topicNameAndTitle).text();
        console.log(topicName,topicLink);
        let fullLink  = "https://github.com" + topicLink;
        getTopicProjects(fullLink,topicName);
    }
}



module.exports = getTopics;