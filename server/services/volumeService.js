/* eslint no-unused-expressions: 0 */
exports.volume = (req, res) => {
  const { denon } = res.locals;
  const { volume } = req.params;
  const num = parseInt(volume, 10);
  denon.command(`MV${num}`)
    .then(() => res.json({ volume: num }));
};

exports.volumeUp = (req, res) => {
  const { denon } = res.locals;
  denon.command('MVUP')
    .then((result) => {
      const numberd = Number(`${result.slice(2, 4)}.${result.slice(4)}`);
      res.json({ volume: numberd });
    });
};

exports.volumeStatus = (req, res) => {
  const { denon } = res.locals;
  denon.command('MV?')
    .then((result) => {
      const numberd = Number(`${result.slice(2, 4)}.${result.slice(4)}`);
      res.json({ volume: numberd });
    });
};

exports.volumeDown = (req, res) => {
  const { denon } = res.locals;
  denon.command('MVDOWN')
    .then((result) => {
      const numberd = Number(`${result.slice(2, 4)}.${result.slice(4)}`);
      res.json({ volume: numberd });
    });
};

exports.mute = async (req, res) => {
  const { denon } = res.locals;
  const status = await denon.command('MU?');
  await status === 'MUON\r'
    ? denon.command('MUOFF')
      .then(() => res.json({ mute: false }))
    : denon.command('MUON')
      .then(() => res.json({ mute: true }));
};
