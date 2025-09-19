const fs = require('fs').promises;

async function removeFile() {
  try {
    await fs.unlink('C:/Users/Sujal/OneDrive/Desktop/fullstack/backend/important-config.json');
    console.log('File deleted successfully');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

// Usage
removeFile();
