const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5');
xhr.setRequestHeader('X-RapidAPI-Key', 'a568f8e404mshe6cd3ddc4962405p1fc956jsn94cec1132327');
xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');

xhr.send(data);