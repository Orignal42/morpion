let squares =document.querySelectorAll('.square');
let player1 = new Player('Romain', 'X')
let player2 = new Player('Hamza', 'O')

let game = new Board([player1, player2]);

ss=0;
s=00;
m='0'+0;
h='0'+0;
j=0;
window.status = "Chrono "+j+" jour(s) et " +h + ' : '  + m + ' : ' + s ; 
 function Chrono() {
    if (m==0) {m='00'}
    if(h==0) {h='00'}
    if (ss<10){ss='0'+ss;}
    if (s<10){s='0'+s;}
     window.status = "Chrono "+j+" jour(s) et " +h + ' : '  + m + ' : ' + s ; 
    document.formu.heure.value =j+" jour(s) et "+h + ' : ' + m + ' : ' + s ;
    document.formu.seco.value =ss;
    s++;
    ss++;
    if (h==24){h='0'+0;j++;}
    if (s==60){s=0;s=0; m++;if(m<10){m='0'+m;}}
    if (m==60){m='0'+0;h++;if(h<10){h='0'+h;}}
    chrono=window.setTimeout("Chrono();",1000);
    }

squares.forEach((square) =>{
    square.addEventListener('click',function(e){
        game.play(e.target.getAttribute('data-cell'))
        event.target.style.pointerEvents= "none";
        Chrono();
    })
})

   




  


    



