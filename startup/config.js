const config = require(__dirname + '/../config/config');

module.exports = function() {
  if (!config.jwtPrivateKey) {
    throw new Error('[-] FATAL ERROR: jwtPrivateKey is not defined.');
  }
};
