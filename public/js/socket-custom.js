
var socket = io();
        
socket.on('connect', function () {
    console.log('Connected to server');
});
socket.on('disconnect', function() {
    console.log('Not connection');
});
socket.emit('seendMessage', {
    user: 'jairo',
    msg: 'Hello World...!'
}, function(resp) {
    console.log('Server: ', resp);
});
socket.on('seendMessage', function(msg) {
    console.log('Server: ', msg);
});