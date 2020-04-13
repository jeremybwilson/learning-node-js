  // shorthand version of the document.ready callback function
  $(() => {
    console.log(`loaded`);
    $("#send").click(() => {
      addMessages({ name: 'Tim', message: 'hello' });
    });
  });

  const sendButton = document.querySelector('#send');
  const callBackMessage = () => {
    console.log(`You clicked the Send button`);
  };
  sendButton.addEventListener('click', callBackMessage);

  function addMessages(message) {
    // using jquery shortcut and appending the message name and message itself, also using js template literals here
    $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
  }
