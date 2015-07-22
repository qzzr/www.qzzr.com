/**
 * Module dependencies
 */

import Color from 'core/color/color.js';

exports = module.exports = require('branding/boombox');

// colors

var color = exports.color

for (var key in color)
  color[key] = new Color(color[key]);

export var color = color;
