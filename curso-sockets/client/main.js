// comprobar la ip del servidor
var socket = io.connect("http://192.168.1.38:6677", { forceNew: true });

socket.on("messages", function (data) {
  console.log(data);
  render(data);
});

function render(data) {
  var html = data
    .map(function (message, index) {
      return `
        <div class="message">
            <strong>${message.nickname}</strong>
            <p>${message.text}</p>
        </div>
      `;
    })
    .join(" ");

  var div_msgs = document.querySelector("#messages");
  div_msgs.innerHTML = html;
  div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e) {
  var message = {
    nickname: document.querySelector("#nickname").value,
    text: document.querySelector("#text").value,
  };

  document.querySelector("#nickname").style.display = "none";
  socket.emit("add-message", message);

  return false;
}
