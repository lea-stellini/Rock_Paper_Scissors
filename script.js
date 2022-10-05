const rockPlayer = document.getElementById('rock');
const paperPlayer = document.getElementById('paper');
const scissorsPlayer = document.getElementById('scissors');
const result = document.getElementById('result');
const computerEl = document.getElementById('computer');


const getRock = () =>{
   paperPlayer.classList.add("none"); 
   scissorsPlayer.classList.add("none");

   getComputer();

    if(computerEl.innerHTML === 'Paper'){
        result.innerHTML = 'Computer wins !';
    } else if(computerEl.innerHTML === 'Scissors'){
        result.innerHTML = 'Player wins !';
    } else {
        result.innerHTML = 'It is a tie!';
    }
}

const getPaper = () =>{
    rockPlayer.classList.add("none"); 
    scissorsPlayer.classList.add("none");

    getComputer();

    if(computerEl.innerHTML === 'Rock'){
        result.innerHTML = 'Computer wins !';
    } else if(computerEl.innerHTML === 'Scissors'){
        result.innerHTML = 'Player wins !';
    } else {
        result.innerHTML = 'It is a tie!';
    }


}

 const getScissors = () =>{
    paperPlayer.classList.add("none"); 
    rockPlayer.classList.add("none");

    getComputer();

    if(computerEl.innerHTML === 'Rock'){
        result.innerHTML = 'Computer wins !';
    } else if(computerEl.innerHTML === 'Paper'){
        result.innerHTML = 'Player wins !';
    } else {
        result.innerHTML = 'It is a tie!';
    }

}


const getComputer = () => {
    const resultComputer = document.getElementById('computer');
    let computer = Math.floor(Math.random()*(4 - 1) + 1);
    console.log(computer);
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

const disableMe = () => {
    
}




