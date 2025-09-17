const fs = require('fs').promises;

async function writeFileExample() {
  try {
    await fs.writeFile('my.text', 'hello world', 'utf8');
    const data = { name: 'jhon', age: 30, city: 'New york' };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('files created successfully');
  } catch (err) {
    console.log('error writing files:', err);
  }
}

writeFileExample();
