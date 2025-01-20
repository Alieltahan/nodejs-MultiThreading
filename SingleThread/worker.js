const { parentPort } = require('worker_threads');

let counter = 0
for (let i = 1; i <= 20_000_000_000; i++) {
	counter ++
}

parentPort.postMessage(counter);
