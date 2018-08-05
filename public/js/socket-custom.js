var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor')
});

// escuchar
socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviar_mensaje', {
    usuario: 'Lucas Suarez',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('respuesta server:', resp);
});

// escuchaar informacion
socket.on('enviar_mensaje', function (resp) {
    console.log('servidor: ', resp)
});

