function traducirDeMorse() {
	const morseInput = document.getElementById('textoInput').value.trim();
	const resultadoElement = document.getElementById('resultado');
 
	const textoTraducido = morseInput.split('   ').map(word => {
    	return word.split(' ').map(morseChar => reverseMorseCodeMap[morseChar]).join('');
	}).join(' ');
 
    resultadoElement.innerHTML = `Texto traducido:<br>${textoTraducido}`;
}
 
const reverseMorseCodeMap = {
	'.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
	'-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
	'..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
	'-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
	'.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
	'---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@'};
