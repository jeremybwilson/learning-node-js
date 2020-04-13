const socket = io();
// shorthand version of the document.ready callback function
$(() => {
  $("#send").click(() => {
    var message = { name: $("#name").val(), message: $("#message").val()}
    postMessage(message);
  })
  getMessages();
})

const localDbUrl = 'http://localhost:3000/messages';

// add messages to the page
function addMessages(message){
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}
// get messages from the api
function getMessages() {
  $.get(localDbUrl, (data) => {
    data.forEach(addMessages);
  })
}
// post messages to the api
function postMessage(message) {
  $.post(localDbUrl, message);
}
