const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

function getInfoFromScoreCard(url) {
  // console.log("getting info from the given link",url);
  request(url, cb);
}

function cb(err, res, body) {
  if (err) {
    console.log("Error", err);
    return;
  } else {
    scoreCardInfo(body);
  }
}

function scoreCardInfo(html) {
  let selectTool = cheerio.load(html);
  let desc = selectTool(".match-header-info.match-info-MATCH");
  // console.log(desc.text());
  // resultFinal (N), Dubai (DSC), Nov 10 2020, Indian Premier League
  //now we will split on the basis of ,
  let descArr = desc.text().split(",");
  // console.log(descArr);
  // [
  //     'resultFinal (N)',
  //     ' Dubai (DSC)',
  //     ' Nov 10 2020',
  //     ' Indian Premier League'
  // ]
  //values required
  //get vanue
  let vanue = descArr[1].trim();
  console.log(vanue);
  //get data
  let date = descArr[2].trim();
  console.log(date);
  //get teams
  let teamsName = selectTool(".name-detail>.name-link");
  let teamA = selectTool(teamsName[0]).text(); //we cant use directly the object of array we get
  let teamB = selectTool(teamsName[1]).text();
  console.log(teamA);
  console.log(teamB);

  // let teamAPath = path.join(__dirname,"IPL",teamA);
  // if(!fs.existsSync(teamAPath)){
  //     fs.mkdirSync(teamAPath);
  // }

  // let teamBPath = path.join(__dirname,"IPL",teamB);
  // if(!fs.existsSync(teamBPath)){
  //     fs.mkdirSync(teamBPath);
  // }

  //get match result
  let matchResult = selectTool(
    ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
  ).text();

  // Mumbai won by 5 wickets (with 8 balls remaining)
  console.log(matchResult);

  //we need to fetch all batsman data with run balls strike rate
  //it will give us the two tables of batsman or batting of both teams
  let allBatsmanTable = selectTool(".table.batsman tbody");

  //traversing the both tables and getting the rows from that
  for (let i = 0; i < allBatsmanTable.length; i++) {
    let allRows = selectTool(allBatsmanTable[i]).find("tr"); //here get the rows of table one and two
    // console.log(allRows.length);
    //here we get all rows from table i
    for (let j = 0; j < allRows.length; j++) {
      //we know the valid rows has class batsman-cell
      //so we will fetch the rows has classs batsman-cell
      let singleRow = selectTool(allRows[j]).find("td"); //it will list out all td tags of row one
      //now checking the first column of tr ie first td has class batsman-cell or not
      let isBatsman = selectTool(singleRow[0]).hasClass("batsman-cell");
      if (isBatsman) {
        //name run balls  4s  6s   Strike rate (sr)
        // 0   2   3      5   6    7
        let batsmanName = selectTool(singleRow[0]).text().trim();
        let runs = selectTool(singleRow[2]).text();
        let balls = selectTool(singleRow[3]).text();
        let fours = selectTool(singleRow[5]).text();
        let sixs = selectTool(singleRow[6]).text();
        let strikerate = selectTool(singleRow[7]).text();

        //data of each row is extracted using find and has class
        console.log("batsmanName->" + batsmanName);
        console.log("runs->" + runs);
        console.log("balls->" + balls);
        console.log("fours->" + fours);
        console.log("sixs->" + sixs);
        console.log("strikerate->" + strikerate);
        console.log("\n");
        // console.log(singleRow.text());
        processInfo(vanue,date,teamA,teamB,matchResult,batsmanName,runs,balls,fours,sixs,strikerate);
      }
    }
  }
  // for(let i = 0; i<teamTwoBatsman.length; i++){
  //     console.log(selectTool(teamTwoBatsman[i]).text());
  // }
  //for tables
}

function processInfo(
  vanue,
  date,
  teamA,
  teamB,
  matchResult,
  batsmanName,
  runs,
  balls,
  fours,
  sixs,
  strikerate
) {
  //create a folder of team Name which does not exist
  let teamNamePath = path.join(__dirname, "IPL", teamA);
  if (!fs.existsSync(teamNamePath)) {
    fs.mkdirSync(teamNamePath);
  }
 //now created the excel sheet path
  let playerPath = path.join(teamNamePath, batsmanName + ".xlsx");
  //now checking if the data exist or not of that player name
  let content = excelReader(playerPath, batsmanName);
 //we can push data into excel in the form of json
  let playerObject = {
    vanue,
    date,
    teamA,
    teamB,
    matchResult,
    batsmanName,
    runs,
    balls,
    fours,
    sixs,
    strikerate
  };
  //we will push the current data with the old data if exist verified through excelReader function
  content.push(playerObject);
  //at the end push all data of the player
  excelWriter(playerPath,content,batsmanName);
}


function excelReader(playerPath,playerName){
    if(!fs.existsSync(playerPath)){
        return [];
    }

    //we will fetch the old data of the exist player
    let worksheet = xlsx.readFile(playerPath);
    //fetching the excel sheet with name
    let excelData = worksheet.Sheets[playerName];
    //converting that data to again js object to store in array of object
    let excelToJson = xlsx.utils.sheet_to_json(excelData);
    return excelToJson;
}

function excelWriter(playerPath,jsObject,sheetName){
//create a new workbook
let newWorkbook = xlsx.utils.book_new();
//convert an array of Js objects to worksheet
let newWorkSheet = xlsx.utils.json_to_sheet(jsObject);
//it appends worksheet to workbook
xlsx.utils.book_append_sheet(newWorkbook,newWorkSheet,sheetName);
//writing the file with the given data 
xlsx.writeFile(newWorkbook,playerPath); //!important It will create xlsx file at the player path
//if the old one exist it will be over write by the new file
}

module.exports = {
  gifs: getInfoFromScoreCard,
};
