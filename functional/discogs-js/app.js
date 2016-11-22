const zlib = require('zlib');
const request = require('request');
const fs = require('fs');

const URL = 'http://discogs-data.s3-us-west-2.amazonaws.com/data/2008/discogs_20081014_labels.xml.gz'
const destination = 'labelz'
var download = () => {
    request(URL).pipe(zlib.createUnzip()).pipe(fs.createWriteStream(destination))
}

download()
