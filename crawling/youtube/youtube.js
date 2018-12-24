require('dotenv').config();

var Youtube = require('youtube-node');
var youtube = new Youtube();

youtube.setKey(process.env.YOUTUBE_API_KEY);

var keyword = 'wesbos';
var limit = 10;

youtube.search(keyword, limit, function(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(result, null, 2));
});
