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
    

       
        if(this.findWinCon()){
            alert(this.playerTurn.signe+" "+"a gagné");
        }else{

        }
        if (!this.tab.includes(null && !this.findWinCon)){
            alert('match nul')
        }else{
            
        }

      
        this.switchTurn()
    }
    
    switchTurn(){
        let divJoueur1 = document.querySelector('#joueur1')
        let divJoueur2 = document.querySelector('#joueur2')
        this.playerTurn.count++
        if ( this.playerTurn.signe == "X") {
            divJoueur1.innerHTML = this.playerTurn.count
            this.playerTurn = this.allPlayer[1]
        }else{
            divJoueur2.innerHTML = this.playerTurn.count
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



    counter(i){
        event.target= this.count++

    }

}