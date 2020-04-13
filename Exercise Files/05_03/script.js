// shorthand version of the document.ready callback function
$(() => {
  $("#send").click(() => {
    addMessages({ name: 'Tim', message: 'hello' })
  })
  getMessages()
});

const sendButton = document.querySelector('#send');
const callBackMessage = () => {
  console.log(`You clicked the Send button`)
};

sendButton.addEventListener('click', callBackMessage);

function addMessages(message) {
  // using jquery shortcut and appending the message name and message itself, also using js template literals here
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}

function getMessages() {
  $.get('http://localhost:3000/messages', (data) => {
    console.log(data);
    // call addMessages through an inline callback
    // data.forEach( function(element) {
    //   addMessages(element);
    // }, this);

    // instead call addMessages directly
    data.forEach(addMessages);
  })
}
