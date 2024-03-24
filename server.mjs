// server.mjs

import { createServer } from 'node:http';

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'test/plain' });
	res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '0.0.0.0', () => {
	console.log('Listening on 0.0.0.0:3000');
});

// run with 'node server.mjs'
