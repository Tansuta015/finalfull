var express = require('express');
var app = express();
var db = require('./database')
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json()); //บรรทัดนี้สำคัญมาก
app.use(bodyParser.urlencoded({
    extended: true
}));

//Add routing
app.get('/', function (req, res) {
    res.send('Express is running');
});
var output = {
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});
//customer
app.get('/api/customers/', db.getAllCustomers);



var port = process.env.PORT || 8080; //เผื่อขึ้นheroku
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});