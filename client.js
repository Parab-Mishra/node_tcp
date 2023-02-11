const Net = require('net');

const port = 6969;
// const host = '35.154.216.77';

const client = new Net.Socket();

client.connect({ port,  }, function() {
    console.log('TCP connection established with the server.');
    client.write('hello server from client.');
});

client.on('data', function(chunk) {
    console.log(`Data received from the server: ${chunk.toString()}.`);
    // client.end();
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});