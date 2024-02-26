const SMTPServer = require('smtp-server').SMTPServer;
const nodemailer = require('nodemailer');

const server = new SMTPServer({
    authOptional: true,
    onData(stream, session, callback) {
        let buffers = [];
        stream.on('data', (buffer) => buffers.push(buffer));
        stream.on('end', () => {
            const mail = Buffer.concat(buffers).toString('utf8');
            console.log(mail);
            callback();
        });
    },
    onAuth(session, callback) {
        callback(null, true);
    },
    onConnect(session, callback) {
        callback(null, true);
    },
});

server.on('error', (err) => {
    console.log(err);
});

server.listen(2525);