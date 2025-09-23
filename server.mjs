// server.mjs
import { createServer } from 'node:http';

let mensajes = []; // simulamos la "base de datos"

const server = createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/contacto') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = JSON.parse(body);
      mensajes.push(data); // guardamos el mensaje
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, recibido: data }));
    });
  } else if (req.method === 'GET' && req.url === '/contacto') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(mensajes));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor de contacto activo\n');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor escuchando en http://127.0.0.1:3000');
});
