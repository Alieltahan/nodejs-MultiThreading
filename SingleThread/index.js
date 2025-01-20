const express = require('express');
const app = express();
const { Worker } = require('worker_threads');

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
})

app.get('/non-blocking', (req, res) => {
	res.status(200).send('This page is non-blocking');
})

app.get('/blocking', async (req, res) => {
	const worker = new Worker('./SingleThread/worker.js');
	worker.on('message', (message) => {
		res.status(200).send(`Blocking - ${message}`);
	})

	worker.on('error', (err) => {
		res.status(400).send(`Error--: ${err.message}`);
	})
});

