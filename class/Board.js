class Board{
    constructor(allPlayer){
        this.allPlayer = allPlayer 
        this.playerTurn = this.allPlayer[0]
        this.tab = new Array(9).fill(null);
    
        
        }

    
    play(i){
        //joueur a qui c'est le tour joue
        event.target.innerHTML = this.playerTurn.signe
        this.tab[i] = this.playerTurn.signe
       console.log(this.tab)
        if(this.findWinCon()){
            alert(this.playerTurn.signe+" "+"a gagné")
        }
        if (!this.tab.includes(null && !this.findWinCon)){
            alert("nulle")
        }

       
        this.switchTurn()
    }
    
    switchTurn(){
        if ( this.playerTurn.signe == "X") {
            this.playerTurn = this.allPlayer[1]
        }else{
            this.playerTurn = this.allPlayer[0]
        }
    }
    findWinCon() {
        const winCon = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
  
        for (const combination of winCon) {
            const [a, b, c] = combination;
  
            if (this.tab[a] && (this.tab[a] === this.tab[b] && this.tab[a] === this.tab[c])) {
                return combination;
            }
        }
  
        return null;
    }
}





