const game = {
    ai : "",
    aiArray: [],
    player : "",
    playerArray:[]
}
const scores ={
    player:0,
    ai:0,
    draw:0
}
const symbols = ['circle', 'cross'];
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const draw = document.querySelector('.draw');
const pause = document.querySelector('.modal')
const verticalLine = document.querySelector('.fields .verticalLine') 
const horizontalLine = document.querySelector('.fields .horizontalLine') 
const curveLine = document.querySelector('.fields .curveLine') 
const fields = [...document.querySelectorAll('.wrapper .box')];

let active = true;
let restFields = []
let moves = 0;
let winnigPoint = 0;
let text = "";

function symbolsRandomization(){
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    return symbol;
}
function result(){  
    // function delay(){ 
        winnigPoint++;
        pause.classList.add('active')
        if(text === "wygrałeś"){
           player.classList.add('active')
            scores.player += winnigPoint;
            player.textContent = scores.player
        }
        else if(text === "Przegrałeś"){
            computer.classList.add('active')
            scores.ai += winnigPoint;
            computer.textContent = scores.ai
        }else if(text === "Remis"){
            
            draw.classList.add('active')
            scores.draw += winnigPoint;
            draw.textContent = scores.draw
        }
         
      function hideModal(){
     
        pause.classList.remove('active');
          return newGame()
      }  
      pause.addEventListener('click', hideModal)
    // }

    // setTimeout(delay, 200)
    }

 
 

const gameResult = function (){
   if(game.playerArray.includes(1) && game.playerArray.includes(2) && game.playerArray.includes(3)){    
    horizontalLine.style.top = "16.35%";
    horizontalLine.classList.add('active');
       text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(4) && game.playerArray.includes(5) && game.playerArray.includes(6)){
        horizontalLine.style.top = "50%";
        horizontalLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(7) && game.playerArray.includes(8) && game.playerArray.includes(9)){
        horizontalLine.style.top = "83.250%";
        horizontalLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(1) && game.playerArray.includes(4) && game.playerArray.includes(7)){
        verticalLine.style.left ="16.35%";
        verticalLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(2) && game.playerArray.includes(5) && game.playerArray.includes(8)){
        verticalLine.style.left ="50%";
        verticalLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(3) && game.playerArray.includes(6) && game.playerArray.includes(9)){
        verticalLine.style.left ="83.250%";
        verticalLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(1) && game.playerArray.includes(5) && game.playerArray.includes(9)){
        curveLine.style.transform = "translate(-50%, -50%) rotate(-42.50deg)";
        curveLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.playerArray.includes(3) && game.playerArray.includes(5) && game.playerArray.includes(7)){
        curveLine.style.transform = "translate(-50%, -50%) rotate(42.50deg)";
        curveLine.classList.add('active');
        text = "wygrałeś";
        result()
    }
    else if(game.aiArray.includes(1) && game.aiArray.includes(2) && game.aiArray.includes(3)){
        horizontalLine.style.top = "16.35%";
        horizontalLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(4) && game.aiArray.includes(5) && game.aiArray.includes(6)){
        horizontalLine.style.top = "50%";
        horizontalLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(7) && game.aiArray.includes(8) && game.aiArray.includes(9)){
        horizontalLine.style.top = "83.250%";
        horizontalLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(1) && game.aiArray.includes(4) && game.aiArray.includes(7)){
        verticalLine.style.left ="16.35%";
        verticalLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(2) && game.aiArray.includes(5) && game.aiArray.includes(8)){
        verticalLine.style.left ="50%";
        verticalLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(3) && game.aiArray.includes(6) && game.aiArray.includes(9)){
        verticalLine.style.left ="83.250%";
        verticalLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(1) && game.aiArray.includes(5) && game.aiArray.includes(9)){
        curveLine.style.transform = "translate(-50%, -50%) rotate(-42.50deg)";
        curveLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(game.aiArray.includes(3) && game.aiArray.includes(5) && game.aiArray.includes(7)){
        curveLine.style.transform = "translate(-50%, -50%) rotate(42.50deg)";
        curveLine.classList.add('active');
        text = "Przegrałeś"
        result()
    }
    else if(moves === 9 && text === ""){
        text = "Remis";
        result()
    }
}

 

function playerTurn(){
   if(active){
    // this.style.backgroundImage =`url(${game.player})`;
    this.classList.add(game.player)
    this.classList.add('inactive');
    this.style.pointerEvents = "none";
    console.log(active)
    game.playerArray.push(Number(this.dataset.field));
    moves++;
   
    gameResult();
     
    active = !active;
     
    if(!(winnigPoint)){
         aiTurn()
    }
    
    
    } 
 
}

function aiTurn(){
    function delay(){ 
    if(moves === 9) return
    if(!(active)){
       
        restFields = fields;
        restFields = restFields.filter(field => !(field.classList.contains('inactive')))
        const aiField = restFields[Math.floor(Math.random() * restFields.length)];
        moves++;
        console.log(active)
       
    //    aiField.style.backgroundImage = `url(${game.ai})`;
       aiField.classList.add(game.ai);
       aiField.classList.add('inactive');
       aiField.style.pointerEvents = "none";
       game.aiArray.push(Number(aiField.dataset.field));
       gameResult();
  
       active = !active; 
    }

    }
    setTimeout(delay, 1000)
}

function gameStart(){
    // console.log(active)
 game.ai = symbolsRandomization()
    if(game.ai === 'cross' && active === true){
        game.player = 'circle';
        
    }
    else{
        game.player = 'cross';
        active = !active;
        aiTurn()
    }
    
}
gameStart()

function newGame(){
    moves = 0;
    winnigPoint = 0;
    restFields = [];
    active = true;
    text = "";
    game.ai = "";
    game.aiArray = [];
    game.player = "";
    game.playerArray = [];
    curveLine.classList.remove('active');
    verticalLine.classList.remove('active');
    horizontalLine.classList.remove('active');
    player.classList.remove('active');
    computer.classList.remove('active');
    draw.classList.remove('active');
    fields.forEach(field => {
        field.classList.remove('inactive');
        field.classList.remove('cross');
        field.classList.remove('circle');
        field.style.backgroundImage = "none";
        field.style.pointerEvents = "auto";
    })
    gameStart();
}

fields.forEach(field => field.addEventListener('click', playerTurn));
