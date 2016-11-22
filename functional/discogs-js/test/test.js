'use strict'
const R = require ('ramda')
const assert = require('assert');
const parseString = require('xml2js').parseString;
const zlib = require('zlib');
const fs = require('fs');
const through2 = require('through2');
const Transform = require('stream').Transform;
const xml2obj = require('xml2obj-stream');



var uncompress = 
  (input, output) => {
    const unzip = zlib.createUnzip();
    const inp = fs.createReadStream(input);
    inp.pipe(unzip).pipe(output);
  }






const xmlToJsonTransform = new Transform({
  transform(chunk, encoding, callback) {
    parseString(xml, (err, result) => {
      console.log(result)
      this.push(result)
    })
  }
});

describe('Reading the downloaded artists file', () => {
  it('should uncompress a .gz file and save as xml', () => {

    let uri = './test/discogs_artists.xml.gz'

    const out = fs.createWriteStream('./test/input.xml');
    const unzip = zlib.createUnzip();
    const inp = fs.createReadStream(uri);

    inp.pipe(unzip).pipe(xmlToJsonTransform).pipe(out);

    //uncompress(uri, xmlToJsonTransform).pipe(out)
    //uncompress(uri)(out)// xmlToJsonTransform)//.pipe(out);
  })
})

describe('Making pipe work with through2', () => {
  it.only
  ('pipe without subclassing boilerplate', () => {

    fs.createReadStream('./test/discogs_artists.xml.gz')
      .pipe(zlib.createUnzip())
      .pipe(through2(function (chunk, enc, callback) {

        parseString(chunk, (err, result) => {
          console.log(result)
          this.push(result)
        })
        //  this.push(chunk)

        callback()
      }))
      .pipe(fs.createWriteStream('./test/input.json'))


  })
})

describe('Parsing XML with xml2js', () => {

  it('should parse a simple XML string', () => {
    let xml = "<root>Hello xml2js!</root>"
    let json = { root: 'Hello xml2js!' }

    parseString(xml, (err, result) => { assert.deepEqual(result, json) })
  })
})




describe('Learning Functional Programing, with JS and Ramda', () => {

  it('simple function curry test', () => {
    var addFourNumbers = (a, b, c, d) => a + b + c + d;
    var sumArgs = (...args) => R.sum(args);

    var curriedAddFourNumbers = R.curry(addFourNumbers);
    assert.equal(curriedAddFourNumbers(1, 2, 3, 4), 10);
    assert.equal(sumArgs(1, 2, 3, 4, 5), 15);

  });

  it('R.pipe should pipe function calls', () => {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  });

});


