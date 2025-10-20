// benchmark.js
import { createReadStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { performance } from 'node:perf_hooks';

async function readJsonGz(path) {
  let jsonString = '';
  const gunzip = createGunzip();
  const readStream = createReadStream(path);

  await pipeline(
    readStream,
    gunzip,
    async function* (source) {
      for await (const chunk of source) {
        jsonString += chunk.toString('utf8');
      }
    }
  );

  return JSON.parse(jsonString);
}

async function main() {
  const obj = await readJsonGz('./test.json.gz');
  console.log('Parsed object from test.json.gz');

  const iterations = 50;

  // ベンチマーク
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    JSON.stringify(obj);
  }
  const end = performance.now();

  console.log(`Iterations: ${iterations}, time: ${(end - start).toFixed(2)} ms`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
