const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(myFakeMiddleware);

app.get('/users/:username/books/:bookId', (req, res, next) => {
	res.send(req.params);
});

app.get('/', (req, res, next) => {
	res.render('index');
});

app.get('/get-user-info', (req, res) => {
	let name = req.query.name;
	let age = req.query.age;
	let superhero = req.query.superhero;
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.post('/login', (req, res) => {
	let email = req.body.email;
	let password = req.body.password;

	res.send(`Email: ${email}, Password: ${password}`);
});

app.get('/test', (req, res) => {
	let mySecret = req.secretValue;
	res.send(mySecret);
});

function myFakeMiddleware(req, _, next) {
	console.log('myFakeMiddleware was called!');
	req.secretValue = 'swordfish';
	next();
}

app.listen(3000, () => console.log('App listening on port 3000!'));
