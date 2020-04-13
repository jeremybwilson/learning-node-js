console.log('It works');

const socket = io();
$(() => {
  $("#send").click(() => {
    const message = { name: $("#name").val(), message: $("#message").val() }
    postMessage(message);
  })
  getMessages();
})

const localDbUrl = 'http://localhost:3000/messages';

socket.on('message', addMessage);

function addMessage(message) {
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}

function getMessages() {
  $.get(localDbUrl, (data) => {
    data.forEach(addMessage);
  });
}

function postMessage(message) {
  $.post(localDbUrl, message);
}
