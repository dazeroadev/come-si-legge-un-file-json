fetch('family.json')
	.then(response => response.json())
	.then(data => {
		console.log(data[0].nome)
	})
	.catch(error => console.error('Error loading the JSON file:', error));
