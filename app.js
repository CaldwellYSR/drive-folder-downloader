"use strict";

var Flickr = require("flickrapi");

var flickrOpts = require("./flickroptions.js");

Flickr.authenticate(flickrOpts, (error, flickr) => {
    console.log(error);
    console.log(flickr);
});
