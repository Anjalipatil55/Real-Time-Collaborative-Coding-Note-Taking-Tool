var socket = io();
var editor = document.getElementById("editor");

editor.addEventListener("keyup", function () {
    socket.emit("text_update", editor.value);
});

socket.on("text_update", function (data) {
    editor.value = data;
});
