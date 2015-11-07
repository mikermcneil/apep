require("babel-polyfill");
const gen = require('../index');
const assert = require('assert');

describe('lit', () => {

it('should yield input value', () => {
    const p = gen.run(gen.lit(5));
    const n = Array.from(p);
    assert.strictEqual(1, n.length);
    assert.strictEqual(5, n[0]);
});

});