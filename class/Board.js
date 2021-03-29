class Board{
    constructor(allPlayer){
        this.allPlayer = allPlayer 
        this.playerTurn = this.allPlayer[0]

    }
    play(square){
        //joueur a qui c'est le tour joue
        square.innerHTML = this.playerTurn.signe


        this.switchTurn()
    }
    switchTurn(){
        if ( this.playerTurn.signe == "X") {
            this.playerTurn = this.allPlayer[1]
        }else{
            this.playerTurn = this.allPlayer[0]
        }
    }

}