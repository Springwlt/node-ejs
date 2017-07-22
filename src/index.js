import express from 'express';
import path from 'path';
import { getData } from 'utils';
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    const datas = getData();
    res.render('index', {
        datas: datas
    });
});


const server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});