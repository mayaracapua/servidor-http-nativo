const http = require('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end("Servidor Funcionando!");    
});

server.listen(porta, ()=> {
    console.log(`Servidor ouvindo na porta ${porta}`)
});
