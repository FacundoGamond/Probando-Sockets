const {io}=require('../server');

//Para saber si un usuario se conecto o desconecto
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);

        //Para enviar a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);

        //Verificar info ok
        /*if(mensaje.usuario){
            callback({
                resp: 'Todo bien'
            });
        }else{
            callback({
                resp: 'Todo salio mal!'
            });
        }*/
        
    })
});