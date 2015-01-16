/* Classic One Time Pad Cipher */

var OneTimePad = require('./lib/onetimepad.js');

module.exports = {
  encipher: function (pt,key) {
    return OneTimePad(1, pt, key);
  },

  decipher: function (ct,key) {
    return OneTimePad(-1, ct, key);
  }
};