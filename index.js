const express = require('express');
const app = express();

const port = 4444;

const gamesCup = require('./gamesCup');

app.listen(port, () => {
        console.log("##################################");
        console.log("APP: NLW-COPA-API");
        console.log(`RODANDO NA PORTA: ${port}`);
        console.log("##################################");
    });

app.use(express.json());

app.route('/games').get((req, res) => res.send(gamesCup));
app.route('/game').get((req, res) => {
    let dataGame = req.query.data
    console.log(`dataGame: ${dataGame}`);
    if (!dataGame) {
        return res.send('Data do jogo não informada');
    }

    const game = gamesCup[dataGame]
    if (!game) {
        return res.send('Jogo não localizado')
    }
    console.log(game)
    res.send(game)
});