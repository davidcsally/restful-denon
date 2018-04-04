/** all the fun sources that we can switch too */
const sources = {
  tuner: 'TUNER',
  dvd: 'DVD',
  bd: 'BD',
  tv: 'TV',
  sat: 'SAT/CBL',
  cbl: 'SAT/CBL',
  mplay: 'SMPLAY',
  game: 'GAME',
  aux: 'AUX1',
  aux1: 'AUX1',
  net: 'NET',
  pandora: 'PANDORA',
  sirius: 'SIRIUSXM',
  siriusxm: 'SIRIUSXM',
  lastfm: 'LASTFM',
  flickr: 'FLICKR',
  favorites: 'FAVORITES',
  iradio: 'IRADIO',
  server: 'SERVER',
  'usb/ipod': 'USB/IPOD', // select input
  usb: 'USB', // select and play playback
  ipd: 'IPD', // ipod direct playback
  ipod: 'IPD', // ipod direct playback
  iphone: 'IPD', // ipod direct playback
  apple: 'IPD', // ipod direct playback
  irp: 'IRP', // select network and start internet radio playback,
  fvp: 'FVP', // select favorites and start playback,
  status: '?', // return status
};

/**
 * middleware to change the source (eg dvd, tv, ipod, usb).
 * Source is selected from the sources object
 */
exports.changeSource = (req, res) => {
  const { denon } = res.locals;
  const { source } = req.query;
  const newSource = sources[source];
  if (newSource) denon.command(`SI${newSource}`);
  res.end();
};
