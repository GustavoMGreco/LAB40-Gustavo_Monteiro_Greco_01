const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const app = require('../src/app');

async function run() {
  const server = createServer(app);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const health = await fetch(`${base}/health`);
    assert.equal(health.status, 200);
    const features = await fetch(`${base}/api/features`);
    assert.equal(features.status, 200);
    console.log('Smoke test OK');
  } finally {
    server.close();
  }
}

run();
