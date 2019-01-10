const fs = require('fs');
const path = require('path');

const AWS = require('aws-sdk');
require('dotenv').config();

const BUCKET_NAME = 'joy-learn-image';

var upload = file => {
  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: BUCKET_NAME
  });
  return new Promise((resolve, reject) => {
    s3bucket.createBucket(function() {
      var params = {
        Bucket: BUCKET_NAME,
        Key: 'avatar/' + Date.now() + '_' + path.basename(file.name) + '.svg',
        Body: file.data
      };
      s3bucket.upload(params, function(err, data) {
        if (err) {
          console.log('[-] error in callback');
          console.log(err);
          reject(err);
        }
        console.log('[+] success');
        console.log(data);
        resolve(data);
      });
    });
  });
};

// var upload = async (stream, fileName) => {
//   const params = {
//     Bucket: 'joy-learn-image',
//     Key: `avatar/${fileName}`,
//     Body: JSON.stringify(stream, null, 2)
//   };
//   s3.upload(params, function(err, data) {
//     console.log(err, data);
//   });
// };

exports.upload = upload;
