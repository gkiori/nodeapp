import express from 'express';
import api from "./api.js";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
let app = express();

let jsonParser = express.json({extended: true});

app.use(jsonParser);
app.use('/html', express.static(__dirname + "/html"));

app.get('/', function (req, res) {
    res.redirect('/html/formulaire.html');
});

app.use(api.apiRouter);

app.listen(8282, function () {
    console.log("http://localhost:8282");
})
