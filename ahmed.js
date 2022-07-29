// dépendance api express
import express from "express";
/*
let express = require('express');
*/
// serveur html
let server= express();

import  bodyParser from "body-parser";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
/*
let bodyParser = require("body-parser");
*/

server.use(bodyParser.urlencoded({ extended: true }));

server.listen(8282);

server.route('/html/index.html')
    .get((req, res) => {
        res.sendFile( __dirname + '/html/index.html');
})

server.route('/post.html')
    .post((req, res)=>{
    let p1 = req.body.p1; res.writeHead(200,{'content-type':'text/html'});
    // Envoyer le contenu html dans le corps de la réponse HTTP
    res.end('<h3> Bonjour '+ p1 + ' ... Vous etes bien matinal ...</h3>');
})