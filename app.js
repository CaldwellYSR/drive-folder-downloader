"use strict";

var Flickr = require("flickrapi");

var flickrOpts = require("./flickroptions.js");

Flickr.authenticate(flickrOpts, Flickr.downsync("./data/images", true));
