import express from 'express';

// @types/express
const app = express();


app.get('/', (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá mundo GET")
})

app.post('/teste-post', (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá mundo POST")
})

// https://localhost:3000
app.listen(3000, () => console.log("Server is ruinning"));
