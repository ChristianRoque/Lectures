const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/cat', (req, res, next) => {
	res.sendFile(__dirname + '/views/cat-page.html');
});

// Server Started
app.listen(3000, () => {
	console.log('My first app listening on port 3000!');
});
