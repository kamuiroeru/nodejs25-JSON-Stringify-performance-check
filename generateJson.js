// generate.js
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { createGzip } from 'node:zlib';

async function run() {
  const output = createWriteStream('test.json.gz');
  const total = 500_000;  // 要素数、必要に応じて調整

  const readable = new Readable({
    read() {}  // _read を空実装
  });

  // 非同期にデータを push
  (async () => {
    readable.push('[');
    for (let i = 0; i < total; i++) {
      const obj = {
        id: i,
        name: `name_${i}`,
        value: Math.random(),
        timestamp: new Date().toISOString(),
        nested: {
          a: i % 100,
          b: `str_${i % 1000}`,
          c: { flag: i % 2 === 0 }
        }
      };
      readable.push(JSON.stringify(obj));
      if (i !== total - 1) readable.push(',');
    }
    readable.push(']');
    readable.push(null);  // ストリーム終端
  })();

  // pipeline によるストリーム圧縮
  await pipeline(
    readable,
    createGzip(),
    output
  );

  console.log('Completed generating test.json.gz');
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
