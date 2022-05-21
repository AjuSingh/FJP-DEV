var uid = new ShortUniqueId();
const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const textArea = document.querySelector('textarea');
const mainCont = document.querySelector('.main-cont');
let toolBoxColors = document.querySelectorAll(".color");
let removeBtn = document.querySelector('.remove-btn');
let ticketArr = [];
let colorArr = ["lightpink","lightgreen","lightblue","black"];


let isModalPresent = false;
let priorityColor = "black";
let ticketText="";
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";




//to open close modal container
addBtn.addEventListener('click', function () {
    if (!isModalPresent) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
})


let isRed = false;
removeBtn.addEventListener('click', function(){
    if(!isRed){
        removeBtn.style.color = 'red';
    }else{
        removeBtn.style.color = 'white';
    }
    isRed = !isRed;
});



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
    <div class="ticket-lock"> <i class="lock fa-solid fa-lock"></i> </div>
    `;
    mainCont.appendChild(ticketCont); 

    //while creating the ticket we also apply method which is used to remove it 
    handleRemoveTicket(ticketCont,ticketId);
    handleChangePriorityColor(ticketCont,ticketId);
    handleLock(ticketCont,ticketId)

        //when ticket is not passed in the function arguements
        //when we are adding new ticket but while fetching the data from local storge we dont need to add just show the tickets
        if(!tickId){
            ticketArr.push({ticketColor:priorityColor,data:ticketText,ticketId});
            localStorage.setItem("tickets",JSON.stringify(ticketArr));
        }
}



//after closing the website using the local storage
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
        //get the clicked color
        let currToolBoxColor = toolBoxColors[i].classList[0];
       

        //storing the filtered tickets
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


        //in this we  are just removing the odd ones not from the div not from the local storage because we need to get 
        //that tickets from the local storage on double click
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


function handleRemoveTicket(ticket,id){
  ticket.addEventListener('click', function (){
    if(!isRed) return;
    let ind = getIndex(id);
    ticketArr.splice(ind,1);
  
    //updating the local storage and then removing the current node;
    localStorage.setItem("tickets",JSON.stringify(ticketArr));
   
    //removing the current ticket
    ticket.remove();
  })
}


function handleChangePriorityColor(ticket,id){
    ticket.addEventListener('click', function (e){
        if(e.target.classList[0]==="ticket-color"){
         //geting the current color
          let currentColor = e.target.classList[1]; 
          let colorInd = colorArr.indexOf(currentColor);
          //removing the current color class from the 
          e.target.classList.remove(currentColor);
          e.target.classList.add(colorArr[(colorInd+1)%4]);
          

          //updating the value in the arrray then updating the values in the local storage
          let ticketInd = getIndex(id);
          ticketArr[ticketInd].ticketColor = colorArr[(colorInd+1)%4];
          localStorage.setItem("tickets",JSON.stringify(ticketArr));
        }else{
            return;
        }
    })
}



function getIndex(id){
   let ind =  ticketArr.findIndex(function(ticket){
        return ticket.ticketId === id;
    })
    return ind;
}


// let locked = true;
// let lockIcon = document.querySelector('.lock');
// lockIcon?.addEventListener('click', function (){
//     if(locked){
//         lockIcon.classList.remove('fa-lock');
//         lockIcon.classList.add('fa-lock-open');
        
//     }else{
//         lockIcon.classList.remove('fa-lock-open');
//         lockIcon.classList.add('fa-lock');
//         textArea.style.contenteditable="true";
//     }
//     locked = !locked;
// })

function handleLock(ticket,id){
let ticketLockEle = ticket.querySelector('.ticket-lock');
let ticketLock = ticketLockEle.children[0];
let taskArea = ticket.querySelector('.task-area');


//toggle the icons of the lock 
ticket.addEventListener('click', function (e){
    if(e.target.classList[0]==="lock"){
        let ticketInd = getIndex(id);
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            taskArea.setAttribute("contenteditable",true);
        }else{
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
            taskArea.setAttribute("contenteditable",false);
        }
    
        ticketArr[ticketInd].data = taskArea.innerText;
        localStorage.setItem("tickets",JSON.stringify(ticketArr));
    }else{
        return;
    }
})
}


