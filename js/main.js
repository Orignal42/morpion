let squares =document.querySelectorAll('.square');
let player1 = new Player('Romain', 'X')
let player2 = new Player('Hamza', 'O')

let game = new Board([player1, player2]);



squares.forEach((square) =>{
    square.addEventListener('click',function(e){
        game.play(e.target.getAttribute('data-cell'))
        event.target.style.pointerEvents= "none";
     
    })
})

   


let second = 0
let minute = 0
function updateTimer() {
    second++
    if (second == 60) {
        minute++
        second = 0
    }
    let divTime = document.querySelector('#timer')
    divTime.innerHTML = 'minute : ' + minute +' seconde : ' +second

}
let  interval 
function resetTimer(){
    second = 0
    clearInterval(interval)
}
function startTimer(){

    interval = setInterval('updateTimer()', 1000);
}



    



