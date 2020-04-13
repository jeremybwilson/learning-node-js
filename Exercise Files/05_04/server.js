const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const messages = [
  {name: 'Alex', message: 'Hi'},
  {name: 'Anika', message: 'Hello'},
  {name: 'Dad', message: 'I love you'}
];

app.get('/messages', (req, res) =>{
  res.send(messages);
})

app.post('/messages', (req, res) =>{
  // console.log(req.body);
  // if((/^react-devtools/gi).test(event.data.source)) {
  //   console.log(`.:: DEBUG ::. react-devtools check has been fired, exiting app.post()`)
  //   return;
  // }
  messages.push(req.body);
  res.sendStatus(200);
})

var server = app.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
})
