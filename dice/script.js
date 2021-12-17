const skorPlayer1 = document.querySelector('.skor-player-1');
const skorPlayer2 = document.querySelector('.skor-player-2');
	let skorP1 = 0;
	let skorP2 = 0;
	skorPlayer1.innerHTML = skorP1;
    skorPlayer2.innerHTML = skorP2;
	


document.querySelector('.draw').addEventListener('click', function() {
    acak();
    setTimeout(function(){
        let dice = Math.floor(Math.random() * 6 + 1);
        let dice2 = Math.floor(Math.random() * 6 + 1);
        const imgPlayer1 = document.querySelector(".img1").src = "images/dice" + dice + ".png";
        const imgPlayer2 = document.querySelector(".img2").src = "images/dice" + dice2 + ".png";
        if (dice > dice2) {
            document.querySelector('.message').innerHTML = "Player 1 Win";
            skorP1 += 1;
            skorPlayer1.innerHTML = skorP1;
        } else if (dice < dice2) {
            document.querySelector('.message').innerHTML = "Player 2 Win";
            skorP2 += 1;
            skorPlayer2.innerHTML = skorP2;
        } else {
            document.querySelector('.message').innerHTML = "Draw";
        }
        }, 2000);    
})


function acak(){
	const img1 = document.querySelector('.img1');
    const img2= document.querySelector('.img2');
	const gambar = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 2000){
			clearInterval
			return;
		}
		img1.setAttribute('src','images/' + gambar[i++] + '.png');
		if (i == gambar.length)	i = 0;
        img2.setAttribute('src','images/' + gambar[i++] + '.png');
		if (i == gambar.length)	i = 0;
	}, 100);
}
