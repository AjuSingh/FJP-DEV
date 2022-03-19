const cheerio = require('cheerio');
let html = 
`<ul id ="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;

//cheerio stores data in the form of object
let selectTool = cheerio.load(html);

let fruitArr = selectTool('#fruits')
//it will print the fruit list
console.log(fruitArr.text());

let fruit = selectTool('.pear')
console.log(fruit.text());