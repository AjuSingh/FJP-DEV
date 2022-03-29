const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

var topicname;
var issuesLink;

function getIssues(url,topicName){
    issuesLink = url;
    topicname = topicName;
    request(url,cb);
}

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
    //a[data-hovercard-type="issue"] error issue href and its title
}

module.exports = getIssues;