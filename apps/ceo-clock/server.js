// CEO Clock — standalone npm app. Honours PORT and HOST from the environment
// so NPM Desktop (or you) can run it on any address.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 5001;
const HOST = process.env.HOST || '127.0.0.1';

createServer(async (req, res) => {
  try {
    const html = await readFile(join(__dirname, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain' }).end('Failed to load app');
  }
}).listen(PORT, HOST, () => {
  console.log(`CEO Clock running at http://${HOST}:${PORT}`);
});
