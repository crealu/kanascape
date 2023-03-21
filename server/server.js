const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 9100;
const app = express();
const pathToBuild = path.join(__dirname, '../client/build');

// const uri = require('keyconfig').MongoURI;
// const client = new MongoClient(uri, { useNewUrlParser: true })

// async function connectToDB() {
// 	await client.connect( err => {
// 		err ? console.log(err) : console.log('Connected to database');
// 	});
// }
// connectToDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./vanilla'));

// app.get('/vanilla', (req, res) => {
// 	app.use(express.static(pathToBuild));
// 	res.sendFile(pathToBuild, 'index.html');
// });

app.get('/', (req, res) => {
	res.sendFile('kanascape.html', {root: './vanilla'});
})

app.listen(port, () => console.log('Listening on ' + port));
