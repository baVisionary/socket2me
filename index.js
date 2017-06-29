 $(function () {
   var socket = io();
   $('form').submit(() => {
     socket.emit('chat message', `${$('#user').val()}: ${$('#m').val()}`);
     $('#m').val('');
     return false;
   });
   socket.on('chat message', (msg) => {
     $('#messages').append($('<li>').text(msg));
   });
 });