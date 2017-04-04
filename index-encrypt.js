const socket = require('socket.io-client')( process.env.MD5 || 'https://md5-check.herokuapp.com');
const clipboardy = require('clipboardy');
const colors = require('colors');

socket.emit('encrypt', process.argv[2]);
socket.on('encrypted', (data) => {
  clipboardy.writeSync(data.response);
  console.log('Encrypted:'.gray)
  console.log(colors.green(data.response))
  console.log('Copied clipboard'.gray);
  process.exit(1);
});
