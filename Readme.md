crypto-classic-otp
==========================

Classic One Time Pad cipher

Usage
-----

  var otp = require('../otp.js');
  
  //encrypt
  var ciperText = otp.encipher('thisisthemessage','thisisthesecretkey');
  
  //decrypt
  var plainText = otp.decipher('moqkqkmoieiujezo ','thisisthekey');
