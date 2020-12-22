var socket = io();

        //Son para escuchar, para ver cuando se conecta un usuario
        socket.on('connect', function () {
            console.log('Conectado al servidor');
        });

        //Son para escuchar, para ver cuando se apaga el servidor o no responde o lo que sea
        socket.on('disconnect', function () {
            console.log('Perdimos conexion con el servidor');
        });

        //Son para enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Facundo',
            mensaje: 'Hola Mundo!'
        }, function(res){
            //Verificar info ok
            console.log(res);
        });

        //Son para escuchar informacion
        socket.on('enviarMensaje', function (res) {
            console.log('Servidor: ', res);
        });