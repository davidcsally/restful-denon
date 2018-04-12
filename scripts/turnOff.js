const Denon = require('../server/Denon');

const denon = new Denon();

denon.connect();
denon.command('PWSTANDBY')
  .then(() => {
    setTimeout(() => {
      process.exit(0);
    }, 1010);
  });
