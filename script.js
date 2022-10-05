const rockPlayer = document.getElementById('rock');
const paperPlayer = document.getElementById('paper');
const scissorsPlayer = document.getElementById('scissors');
const result = document.getElementById('result');


const getRock = () =>{
   paperPlayer.classList.add("none"); 
   scissorsPlayer.classList.add("none");

   getComputer();

   console.log(computer);

   if(computer.innerHTML = 'Paper'){
    result.innerHTML = 'Computer wins !';
   } else if(computer.innerHTML = 'Scissors'){
    result.innerHTML = 'Player wins !';
   } else {
    result.innerHTML = 'It is a tie!';
   }
}

const getPaper = () =>{
    rockPlayer.classList.add("none"); 
    scissorsPlayer.classList.add("none");

    getComputer();
}

 const getScissors = () =>{
    paperPlayer.classList.add("none"); 
    rockPlayer.classList.add("none");

    getComputer();
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


        /*if(resultComputer.innerHTML === rockPlayer.innerHTML){
           console.log(rockPlayer.innerHTML);
           console.log(resultComputer.innerHTML)
        } else if(resultComputer.innerHTML = 'Rock' && paperPlayer.innerHTML){
            result.innerHTML = 'Player wins !'
        } else if(resultComputer.innerHTML = 'Rock' && scissorsPlayer.innerHTML){
            result.innerHTML = 'Computer wins !'
        }  else if(resultComputer.innerHTML = 'Paper' && rockPlayer.innerHTML){
            result.innerHTML = 'Player wins !'
        } else if(resultComputer.innerHTML = 'Paper' && scissorsPlayer.innerHTML){
            result.innerHTML = 'Computer wins !'
        } else if(resultComputer.innerHTML = 'Scissors' && rockPlayer.innerHTML){
            result.innerHTML = 'Player wins !'
        } else if(resultComputer.innerHTML = 'Scissors' && paperPlayer.innerHTML){
            result.innerHTML = 'Computer wins !'
        }*/

}






