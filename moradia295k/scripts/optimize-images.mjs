/**
 * Gera versões WebP otimizadas em public/images/
 * Executar: node scripts/optimize-images.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(publicDir, 'images');

const JOBS = [
  { src: 'Exterior Capa.png', out: 'exterior-capa', maxWidth: 1920, quality: 82 },
  { src: 'Exterior traseiro completo.png', out: 'exterior-traseiro-completo', maxWidth: 1400, quality: 80 },
  { src: 'Exterior Traseiro.jpg', out: 'exterior-traseiro', maxWidth: 1400, quality: 80 },
  { src: 'Sala de Jantar.png', out: 'sala-jantar', maxWidth: 1400, quality: 80 },
  { src: 'Cozinha.png', out: 'cozinha', maxWidth: 1400, quality: 80 },
  { src: 'Terceiro Andar.png', out: 'terceiro-andar', maxWidth: 1400, quality: 80 },
  { src: 'Quarto Cama.png', out: 'quarto-cama', maxWidth: 1200, quality: 80 },
  { src: 'Quarto e varanda.png', out: 'quarto-varanda', maxWidth: 1200, quality: 80 },
  { src: 'Quarto Porta.png', out: 'quarto-porta', maxWidth: 1200, quality: 80 },
  { src: 'Corredor quartos.png', out: 'corredor-quartos', maxWidth: 1200, quality: 80 },
  { src: 'planta-3d.png', out: 'planta-3d', maxWidth: 1600, quality: 85 },
  { src: 'Planta-tecnica.png', out: 'planta-tecnica', maxWidth: 1600, quality: 85 },
  { src: 'plantas3.png', out: 'plantas3', maxWidth: 1400, quality: 85 },
  { src: 'sign2.png', out: 'sign2', maxWidth: 480, quality: 90 },
  { src: 'freitas1.jpeg', out: 'freitas1', maxWidth: 320, quality: 85 },
  { src: 'silvermont1.png', out: 'silvermont1', maxWidth: 800, quality: 85 },
  { src: 'silvermont2.png', out: 'silvermont2', maxWidth: 800, quality: 85 },
  { src: 'Precos-1.png', out: 'precos', maxWidth: 1000, quality: 85 },
];

/** Thumbnails para grelha da galeria (carregamento móvel) */
const THUMB_JOBS = JOBS.filter((j) =>
  [
    'exterior-capa',
    'exterior-traseiro-completo',
    'exterior-traseiro',
    'sala-jantar',
    'cozinha',
    'terceiro-andar',
    'quarto-cama',
    'quarto-varanda',
    'quarto-porta',
    'corredor-quartos',
  ].includes(j.out)
).map((j) => ({ ...j, out: `${j.out}-thumb`, maxWidth: 640, quality: 75 }));

fs.mkdirSync(outDir, { recursive: true });

async function processJob({ src, out, maxWidth, quality }) {
  const input = path.join(publicDir, src);
  if (!fs.existsSync(input)) {
    console.warn(`SKIP (missing): ${src}`);
    return;
  }
  const output = path.join(outDir, `${out}.webp`);
  const before = fs.statSync(input).size;
  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(output);
  const after = fs.statSync(output).size;
  console.log(
    `${out}.webp  ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024).toFixed(0)}KB`
  );
}

console.log('Optimizing images...\n');
for (const job of JOBS) await processJob(job);
console.log('\nThumbnails...\n');
for (const job of THUMB_JOBS) await processJob(job);
console.log('\nDone.');
