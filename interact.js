
function printMousePos(event) {
  console.log("clientX: " + event.clientX + " clientY: " + event.clientY);

  



  var headers = {
    "Content-Type": "application/json",
  };
  console.log(token)



  // Send extension chat message
  var url = "http://35.187.231.87:8000"

  

  const body = JSON.stringify({sx:event.clientX,sy:event.clientY});
  fetch(url, {
      method: "POST",
      headers: headers,
      body: body
  })
    


  

}

// Twitch onAuthorized callback
// The JWT returned here will give us the broadcaster role, which is needed to post to chat
// Reference: https://dev.twitch.tv/docs/extensions/reference/#onauthorized


document.getElementById("twitch-embed").addEventListener("click", printMousePos);





