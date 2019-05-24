const { io } = require('../server');

io.on('connection', (client) => {

    console.log('User connected');

    client.emit('seendMessage', {
        user: 'admin', 
        msg: 'Welcome to the Jungle...!' 
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    client.on('seendMessage', (data, callback) => {

        console.log(data);

        client.broadcast.emit('seendMessage', data);
        
        //if ( msg.user ){
        //    callback({
        //        resp: 'OK'
        //    });
        //} else {
        //    callback({
        //        resp: 'Not OK'
        //    });
        //}
    });
});