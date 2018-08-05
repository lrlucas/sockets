const { io } = require('../server')


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviar_mensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    // escuchar el cliente
    client.on('enviar_mensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviar_mensaje', data)



        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'todos salio bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'todos salio mallllllll'
        //     });
        // }
    });

});