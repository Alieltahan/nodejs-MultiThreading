const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
})

app.get('/non-blocking', (req, res) => {
	res.status(200).send('This page is non-blocking');
})

app.get('/blocking', async (req, res) => {
	let counter = 0
	for (let i = 1; i <= 20_000_000_000; i++) {
		counter ++
	}
		res.status(200).send(`Blocking - ${counter}`);
});

