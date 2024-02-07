
function printMousePos(event) {


  var offs = document.getElementById("myIframe").getBoundingClientRect();
  
  console.log(offs.top)
  console.log(event.clientY)
  x=(event.clientX - offs.left)
  y=(event.clientY - offs.top)
  console.log("clientX: " + x + " clientY: " + y);
  var headers = {
    "Content-Type": "application/json",
  };

  // Send extension chat message
  var url = "http://34.124.227.183:8000"

  const body = JSON.stringify({sx:y,sy:x});
  fetch(url, {
      method: "POST",
      headers: headers,
      body: body
  })


    
}

function hideFrame() {
  var x = document.getElementById("myIframe");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
// Twitch onAuthorized callback
// The JWT returned here will give us the broadcaster role, which is needed to post to chat
// Reference: https://dev.twitch.tv/docs/extensions/reference/#onauthorized


document.getElementById("myIframe").addEventListener("click", printMousePos);




console.log("test")


