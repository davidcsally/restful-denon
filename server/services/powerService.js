/**
 * turn the reciever on
 */
exports.powerOn = (req, res) => {
  const { denon } = res.locals;
  denon.command('PWON');
  res.send();
};

/**
 * turn the reciever off
 */
exports.powerOff = (req, res) => {
  const { denon } = res.locals;
  denon.command('PWSTANDBY');
  res.send();
};
