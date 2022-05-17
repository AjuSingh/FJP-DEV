var uid = new ShortUniqueId();
const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const textArea = document.querySelector('textarea');
const mainCont = document.querySelector('.main-cont');
let toolBoxColors = document.querySelectorAll(".color");
let ticketArr = [];


let isModalPresent = false;
let priorityColor = "black";
let ticketText="";


//to open close modal container
addBtn.addEventListener('click', function () {
    if (!isModalPresent) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
})


let allPriorityColors = document.querySelectorAll('.priority-color');


//to make the class active
allPriorityColors.forEach(function (color) {
    color.addEventListener('click', function () {
        allPriorityColors.forEach(function (soloColor) {
            soloColor.classList.remove('active');
        })
        color.classList.add('active');
        priorityColor = color.classList[0];
    })
})

//to add new ticket in the main container
modalCont.addEventListener('keydown', function (e){
    let key = e.key;
    if(key=='Shift'){
        console.log(priorityColor);
        ticketText = textArea.value;
        console.log(ticketText);
        createTicket(priorityColor,ticketText);
        modalCont.style.display = "none";
        isModalPresent = false;
        textArea.value="";
    }
})

//this will generate the id and add the ticket in the main container
function createTicket(priorityColor, ticketText,tickId){
    let ticketId = tickId || uid();
    console.log(ticketId);
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
    <div class="ticket-color ${priorityColor}"></div>
    <div class="ticket-id">${ticketId}</div>
    <div class="task-area">${ticketText}</div>
    `;
    mainCont.appendChild(ticketCont);
        //when ticket is not passed in the function arguements
        //when we are adding new ticket but while fetching the data from local storge we dont need to add just show the tickets
        if(!tickId){
            ticketArr.push({ticketColor:priorityColor,data:ticketText,ticketId});
            localStorage.setItem("tickets",JSON.stringify(ticketArr));
        }
}


if(localStorage.getItem("tickets")){
    //parse will convert the json object to an simple javascript object
    ticketArr  = JSON.parse(localStorage.getItem("tickets"));
    ticketArr.forEach(function(ticket){
        createTicket(ticket.ticketColor,ticket.data,ticket.ticketId);
    })
}


//filtred tickets on the basis of tikcet color
for (let i = 0; i < toolBoxColors.length; i++){
    toolBoxColors[i].addEventListener("click", function () {
        let currToolBoxColor = toolBoxColors[i].classList[0];

        let filteredTickets = ticketArr.filter(function (ticketObj) {
            return currToolBoxColor == ticketObj.ticketColor;
        });

        //remove all the tickets
        let allTickets = document.querySelectorAll(".ticket-cont");
        for (let i = 0; i < allTickets.length; i++){
            allTickets[i].remove();
        }

        //display filteredTickets
        filteredTickets.forEach(function (ticketObj) {
            createTicket(
              ticketObj.ticketColor,
              ticketObj.data,
              ticketObj.ticketId
            );
        })
    })

    //to display all the tickets of all colors on double clicking
    toolBoxColors[i].addEventListener("dblclick", function () {
      //remove all the color specific tickets 
        let allTickets = document.querySelectorAll(".ticket-cont");
      for (let i = 0; i < allTickets.length; i++) {
        allTickets[i].remove();
      }

      //display all Tickets
      ticketArr.forEach(function (ticketObj) {
        createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);
      });
    })
}