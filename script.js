const rockPlayer = document.getElementById('rock');
const paperPlayer = document.getElementById('paper');
const scissorsPlayer = document.getElementById('scissors');

const getRock = () =>{
   paperPlayer.classList.add("none"); 
   scissorsPlayer.classList.add("none");
}

const getPaper = () =>{
    rockPlayer.classList.add("none"); 
    scissorsPlayer.classList.add("none");
}

 const getScissors = () =>{
    paperPlayer.classList.add("none"); 
    rockPlayer.classList.add("none");
}


const getComputer = () => {
    const resultComputer = document.getElementById('computer');
    const computer = Math.floor(Math.random()*(4 - 1) + 1);
    switch (computer) {
        case 1 : 
        resultComputer.innerHTML = 'Rock';
        
        break;
        case 2 :
        resultComputer.innerHTML = 'Paper';
        
        break;
        case 3 :
        resultComputer.innerHTML = 'Scissors';
        
        break;
        default:
            console.log('I do not wish to play right now !');
    }
}

