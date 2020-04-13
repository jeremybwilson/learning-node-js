const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = require('./mongodb-url').mongoDbURL;   //mongodb connection url
// const dbUrl = "mongodb+srv://user:user@cluster0-knatq.mongodb.net/learning-node?retryWrites=true&w=majority";

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://user:user@cluster0-knatq.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("learning-node").collection("messages");
//   // perform actions on the collection object
//   client.close();
// });

const Message = mongoose.model('Message', {
  name: String,
  message: String
});

var messages = [
  { name: 'Alex', message: 'Hi' },
  { name: 'Anika', message: 'Hello' }
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  messages.push(req.body);
  io.emit('message', req.body);
  res.sendStatus(200);
});

io.on('connection', (socket) => {
  console.log('a user connected')
});

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    console.log('mongo db connection', err)
});

var server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port)
});
