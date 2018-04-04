/* eslint no-unused-expressions: 0 */
exports.volume = (req, res) => {
  const { denon } = res.locals;
  const { volume } = req.params;
  const num = parseInt(volume, 10);
  denon.command(`MV${num}`);
  res.end();
};

exports.volumeUp = (req, res) => {
  const { denon } = res.locals;
  denon.command('MVUP');
  res.end();
};

exports.volumeDown = (req, res) => {
  const { denon } = res.locals;
  denon.command('MVDOWN');
  res.end();
};

exports.mute = async (req, res) => {
  const { denon } = res.locals;
  console.log('hello');
  const status = await denon.command('MU?');
  console.log('status:', status);

  status ? denon.command('MUON') : denon.command('MUOFF');
  res.end();
};
