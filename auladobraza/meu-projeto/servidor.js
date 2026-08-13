const http = require("http");
const servidor = http.createServer((req, res) => {
res.write("Bem-vindo ao meu servidor!");
res.end();
});
servidor.listen(8080, () => {
console.log("Servidor rodando na porta 8080");
});