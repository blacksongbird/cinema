var express   = require('express');
var app       = express();  //Utilizamos express.
var mongoose  = require('mongoose'); //Utilizamos mongoos para mongodb.
var port      = process.env.PORT || 8080; //Utilizamos el puerto 8080.
mongoose.connect('mongodb://mavar84:Candelabro30@ds111589.mlab.com:11589/conflicto');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.configure(function(){
  app.use(express.static(__dirname + '/'));
  app.use(express.logger('dev')); //Activamos el log en modo dev.
  app.use(express.methodOverride());
});
var bodyParser= require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true}));
//Cargamos los endpoints.
require('./routes.js')(app);
app.listen(port);
console.log("APP por el puerto "+ port);
