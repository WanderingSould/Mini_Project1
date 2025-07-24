import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

async function generateIcons() {
  // Create a simple purple square with white C as the base icon
  const svg = Buffer.from(`
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#4C1D95"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="300" fill="white" font-family="Arial">C</text>
    </svg>
  `);

  try {
    // Generate icons in different sizes
    await sharp(svg)
      .resize(192, 192)
      .png()
      .toFile(join(publicDir, 'icon-192.png'));

    await sharp(svg)
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, 'icon-512.png'));

    console.log('PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
