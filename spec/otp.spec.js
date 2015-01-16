/* Jasmine tests for classic cryto otp */

var otp = require('../otp.js');

describe("OTP Test", function () {

	//encrypt
	it("thisisatest encrypted with thisisthesecretkey should be moqkqktaikx", function(done) {
		var ct = otp.encipher('thisisatest','thisisthesecretkey');
		expect(ct).toEqual('moqkqktaikx');
		done();
	});

	//dencrypt
	it("moqkqktaikx decrypted with thisisasecretkey should be thisisatest", function(done) {
		var pt = otp.decipher('moqkqktaikx','thisisthesecretkey');
		expect(pt).toEqual('thisisatest');
		done();
	});	
});