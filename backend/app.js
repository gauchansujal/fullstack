// Basic require
const assert = require('assert');

// Using strict mode (recommended)
const assert = require('assert').strict;

// Destructuring specific methods
const { strictEqual, deepStrictEqual, throws } = require('assert');

// For async/await tests
const { rejects, doesNotReject } = require('assert').strict;
