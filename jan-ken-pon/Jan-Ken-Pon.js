const skorComp = document.querySelector('.skor-computer');
const skorPlayer = document.querySelector('.skor-player');
	let skorC = 0;
	let skorP = 0;
	skorComp.innerHTML = skorC;
	skorPlayer.innerHTML = skorP;
	

function getPilihanComputer(){
	const comp = Math.random();
	if(comp<0.33) return 'kertas';
	if(comp>=0.33 && comp<0.67)	return 'gunting';
	return 'batu';
}
function getHasil(comp, player){
	if (player == comp) return 'SERI!'
	if (player == 'kertas') return (comp == 'batu') ? 'MENANG!' : 'KALAH!';
	if (player == 'gunting') return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
	if (player == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
}


function acak(){
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['kertas', 'gunting', 'batu'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 2000){
			clearInterval
			return;
		}
		imgComputer.setAttribute('src', gambar[i++] + '.png');
		if (i == gambar.length)	i = 0;
	}, 100);
}


const pilihan = document.querySelectorAll('li img');
const info = document.querySelector('.info');
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
	info.innerHTML = 'Jan ~Ken~ Pon'
	acak();
	
	setTimeout(function(){
		const imgComputer = document.querySelector('.img-computer');
	imgComputer.setAttribute('src',pilihanComputer + '.png');
	info.innerHTML = hasil;
	if 	(hasil == 'MENANG!') skorP++;
	if (hasil == 'KALAH!')	skorC++;
	skorComp.innerHTML = skorC;
	skorPlayer.innerHTML = skorP;
	}, 2000);
	});


});


 








	// 
	
	// SkorC.createTextNode (skorComp);
	// skorP.createTextNode (skorPlayer);	



















// pKertas = document.querySelector('.kertas');
// pGunting = document.querySelector('.gunting');
// pBatu = document.querySelector('.batu');

// pKertas.addEventListener('click', function(){
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pKertas.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src',pilihanComputer + '.png')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// pGunting.addEventListener('click', function(){
// const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGunting.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src',pilihanComputer + '.png')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;	
// });

// pBatu.addEventListener('click', function(){
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pBatu.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src',pilihanComputer + '.png')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });