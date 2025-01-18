const express = require('express');
const app = express();
const { Worker } = require('worker_threads');

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
})

const THREAD_COUNT = 4;
function createWorker () {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./four-workers.js', {
			workerData: { thread_count: THREAD_COUNT  }
		});

		worker.on('message', (message) => {
			resolve(`Blocking - ${message}`);
		})

		worker.on('error', (err) => {
			reject(`Error: ${err.message}`);
		})
	})
}
app.get('/non-blocking', (req, res) => {
	res.status(200).send('This page is non-blocking');
})

app.get('/blocking', async (req, res) => {
	const workerPromises = [];
	for (let i = 0; i < THREAD_COUNT; i++) {
		workerPromises.push(createWorker());
	}

	const threadResults = await Promise.all(workerPromises);

	const total = threadResults.reduce((acc, current) => {
		return acc + current;
	});

	res.status(200).send(`Blocking ${threadResults.length} cores = ${total}`);
});

