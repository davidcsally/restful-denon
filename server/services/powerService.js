/* eslint no-unused-expressions: 0 */
/**
 * turn the reciever on
 */
exports.powerOn = (req, res) => {
  const { denon } = res.locals;
  denon.command('PWON')
    .then(result => setTimeout(() => {
      result === 'PWON\r'
        ? res.json({ power: true })
        : res.json({ power: false });
    }));
};

/**
 * turn the reciever off
 */
exports.powerOff = (req, res) => {
  const { denon } = res.locals;
  denon.command('PWSTANDBY')
    .then(result => setTimeout(() => {
      result === 'ZMOFF\r'
        ? res.json({ power: false })
        : res.json({ power: true });
    }));
};

exports.powerStatus = async (req, res) => {
  const { denon } = res.locals;
  const status = await denon.command('PW?');
  status === 'PWON\r'
    ? res.json({ power: true })
    : res.json({ power: false });
};
