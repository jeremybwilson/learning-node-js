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

const Message = mongoose.model('Message', {
  name: String,
  message: String
});

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages)
  })
});

app.post('/messages', (req, res) => {
  const message = new Message(req.body);

  message.save((err) => {
    if (err)
      sendStatus(500);

    // messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
  });

});

io.on('connection', (socket) => {
  console.log('a user connected')
})

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  console.log('mongo db connection', err)
});

const server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
});
