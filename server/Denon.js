const { Socket } = require('net');

// hard coded defaults
const PORT = 23;
const ADDRESS = '192.168.0.20';

/**
 * Class to connect to reciever
 */
module.exports = class Denon {
  constructor() {
    const socket = new Socket({ allowHalfOpen: true });
    socket.setTimeout(250);
    socket.setEncoding('utf8');

    this.socket = socket;
    this.on = socket.on.bind(socket);
    this.end = socket.end.bind(socket);
  }

  /**
   * Connect to the reciever
   * @param {string} address
   * @param {string} port
   */
  connect(address = ADDRESS, port = PORT) {
    return new Promise(resolve =>
      this.socket.connect(port, address, resolve))
      .then(() => console.log('Connected Successfully!'));
  }

  /**
   * Log all incoming data. Call this function when instantiating the Denon object
   */
  logData() {
    return this.socket.on('data', d => console.log('data: ', d));
  }

  /**
   * Send a command to the reciever, resolve promise with response
   * @param {string} cmd
   */
  command(cmd) {
    return new Promise((resolve, reject) => {
      this.socket.write(`${cmd}\r`);
      this.socket.once('data', d => resolve(d));
      this.socket.once('error', err => reject(err));
    });
  }
};
