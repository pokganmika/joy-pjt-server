var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug'
});

const url = '';

casper.start();

casper.userAgent(
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
);

casper.open(url);

casper.then(function() {});

casper.run();
