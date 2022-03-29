const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const getIssues = require('./getIssues');


var topicname;
var topicLink;
function getTopicProjects(url,topicName){
    topicLink = url;
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
    console.log(topicname,topicLink);
    //.text-bold.wb-break-word to get the topic name we have a class of a
    // let projects = selectTool('a[class="text-bold wb-break-word"]').text();
    //issues link with id #issues-tab-576201
    let issuesLink = selectTool('#issues-tab-576201').attr('href');
    // https://github.com/topics/3d + /mrdoob/three.js/issues
    let fullLink = "https://github.com" + issuesLink;
    console.log(fullLink);
    // getIssues(fullLink,topicname);
}


module.exports = getTopicProjects;