const http = require('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json');
    res.end (JSON.stringify({ status: "ok" }));    
    //  Se tirarmos o "res.end" o servidor vai receber um pedido, mas nunca será enviado uma resposta.//
});

server.listen(porta, ()=> {
    console.log(`Servidor ouvindo na porta ${porta}`)
});console.log(new Date().toISOString())
