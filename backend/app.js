const fs = require('fs').promises;
const path = require('path');

async function batchRename() {
  const directory = '.'; // current folder
  const pattern = /^image(\d*)\.png$/i; // matches image.png, image1.png, image23.png, etc.

  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const match = file.match(pattern);
      if (match) {
        const [_, number] = match;
        const numberStr = number ? number : '0'; // use 0 if no number
        const newName = `photo-${numberStr.padStart(3, '0')}.png`;

        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, newName);

        if (oldPath !== newPath) {
          await fs.rename(oldPath, newPath);
          console.log(`Renamed: ${file} -> ${newName}`);
        }
      }
    }

    console.log('Batch rename completed');
  } catch (err) {
    console.error('Error during batch rename:', err);
  }
}

batchRename();
