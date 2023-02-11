const net = require('net');
const PORT = 6969;

const server = net.createServer();

server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('Hello client from server');
    });

    sock.on('end', function() {
        console.log('CONNECTION CLOSED: ' + sock.remoteAddress + ':' + sock.remotePort);
    });

    sock.on('error', function(err) {
        console.log(`Error ${sock.remoteAddress}: ${err}`);
    });
});

server.listen(PORT, () => {
    console.log('TCP Server is running on port ' + PORT + '.');
});

module.exports = {server};