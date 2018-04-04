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
  const status = await denon.command('MU?');
  await status === 'MUON\r'
    ? denon.command('MUOFF')
    : denon.command('MUON');
  res.end();
};
