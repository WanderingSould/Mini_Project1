const sharp = require('sharp');

async function generateIcons() {
  const sizes = [192, 512];
  
  for (const size of sizes) {
    await sharp('public/icon.svg')
      .resize(size, size)
      .png()
      .toFile(`public/icon-${size}.png`);
  }
}

generateIcons().catch(console.error);
