let input = process.argv.slice(2);
let help = require("./Commands/help");
let organizer = require("./Commands/organizer")
let Tree = require("./Commands/tree");

let command = input[0];
let path = input[1];
switch (command) {
  case "help":
    help();
    break;
  case "organizer":
    //call the organiser function
    organizer.organize(path);
    break;
  case "tree":
    //call the tree function
    Tree.tree("",path);
    break;
  default:
    console.log("Command is not recognized");
}
