const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'src', 'app', 'blogs', 'notes');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Ensure the notes directory exists (if submodule is initialized)
if (!fs.existsSync(notesDir)) {
  console.log('Notes submodule not found. Skipping image sync.');
  process.exit(0);
}

const copyImages = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively search directories
      copyImages(fullPath);
    } else {
      // Check if file is an image
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
        const destPath = path.join(publicImagesDir, file);
        fs.copyFileSync(fullPath, destPath);
        console.log(`Copied ${file} to public/images/`);
      }
    }
  });
};

console.log('Syncing images from Obsidian notes...');
copyImages(notesDir);
console.log('Image sync complete!');
