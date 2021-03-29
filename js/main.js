let squares =document.querySelectorAll('.square');

squares.forEach((square) =>{
    square.addEventListener('click',function(e){
        game.play(e.target)
    })
})

    let player1 = new Player('Romain', 'X')
    let player2 = new Player('Hamza', 'O')

    let game = new Board([player1, player2])


