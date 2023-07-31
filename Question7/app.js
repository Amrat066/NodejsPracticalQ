const fs = require('fs');
const { promisify } = require('util');

// Promisify the fs.unlink function
const unlinkAsync = promisify(fs.unlink);

// Function to delete a file using promisified fs.unlink
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`${filePath} deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting ${filePath}: ${err.message}`);
  }
}

// Call the deleteFile function with the file path you want to delete
const filePathToDelete = './index.txt';
deleteFile(filePathToDelete);
