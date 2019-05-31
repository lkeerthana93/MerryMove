var express      = require('express');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
const bodyParser = require('body-parser');
const path       = require('path');
const http       = require('http');
const app        = express();

app.use(cookieParser());
app.use(session({
  secret : "MerryMove",
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require("./server/app")(app);

app.get('/assets/*', function(req, res) {
  res.sendFile(path.join(__dirname, "src", req.path));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
