import http from 'node:http'
import { url } from 'node:inspector';
import { URL } from 'node:url'

const port = 3000

const status = {
    "status": "ok",
    "date": new Date().toISOString()
}

const produtos = [
    { id: 1, nome: "Sabonete" },
    { id: 2, nome: "Monitor" },
    { id: 3, nome: "Cadeira Gamer" }
]


const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');

    if (req.method == "GET" && urlObj.pathname == "/contato") {
        res.statusCode = 200;
        return res.end(JSON.stringify({
            "numero_telefone": "67 99999-9999",
            "endereco": "Rua da Alegria, 99"
        }));
    }

    if (req.method == "GET" && urlObj.pathname == "/produtos") {
        res.statusCode = 200;
        return res.end(JSON.stringify(produtos));
    }

    res.end(JSON.stringify({ "data": "Página Inexistente" }));
});

server.listen(port, () => {
    console.log("Servidor funcionando na porta ", port)
});
