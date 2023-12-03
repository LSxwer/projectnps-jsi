const apiKey = 'a568f8e404mshe6cd3ddc4962405p1fc956jsn94cec1132327'; // Thay thế YOUR_RAPIDAPI_KEY bằng khóa API thực của bạn

const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "a568f8e404mshe6cd3ddc4962405p1fc956jsn94cec1132327",
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.text())
	.then(result => console.log(result))
	.then((result) => {
		console.log(result); //// kết quả là gì
		
		
	  })
	  .catch(error => console.error(error));