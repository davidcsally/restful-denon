/**
 * Power on and set volume to 50
 */
const Denon = require('../server/Denon');

const denon = new Denon();

denon.connect();
denon.command('PWON')
  .then(() => setTimeout(() => {
    denon.command('MV50')
      .then(() => {
        setTimeout(() => {
          process.exit(0);
        }, 1010);
      });
  }, 1010));
