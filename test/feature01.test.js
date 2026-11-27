// Testes de referência – Feature 01
// Execute com: node --test test/feature01.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const feature = require('../src/features/feature01');

test('caso de referência: 15% de 200', () => {
  assert.equal(feature.execute({ valor: 200, percentual: 15 }).resultado, 30);
});
test('aceita limites zero e percentual de 100%', () => {
  assert.equal(feature.execute({ valor: 0, percentual: 100 }).resultado, 0);
  assert.equal(feature.execute({ valor: 80, percentual: 0 }).resultado, 0);
  assert.equal(feature.execute({ valor: 80, percentual: 100 }).resultado, 80);
});
test('aceita decimal e percentual máximo permitido', () => {
  assert.equal(feature.execute({ valor: 10.5, percentual: 10 }).resultado, 1.05);
  assert.equal(feature.execute({ valor: 2, percentual: 1000 }).resultado, 20);
});
test('rejeita negativos, ausentes, strings e não finitos', () => {
  for (const input of [
    { valor: -1, percentual: 10 }, { valor: 10, percentual: -1 },
    { valor: 10, percentual: 1001 }, { percentual: 10 },
    { valor: 10, percentual: '15' }, { valor: Infinity, percentual: 10 },
    { valor: 10, percentual: NaN }
  ]) assert.throws(() => feature.execute(input), { name: 'Error' });
});
