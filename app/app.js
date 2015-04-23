import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import apiRouter from './app.router.js';

let app = express();
app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(app.get('port'), function() {
    console.log('Express server listening at http://localhost:' + app.get('port'));
});