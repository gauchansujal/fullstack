const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
  try {
    const data = await readFileAsync('my.text', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readWithPromisify();