/**
 * Module dependencies
 */

var stack = require('poe-ui/server');
var glob = require('glob').sync;
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Expose the app
 */

var app = module.exports = stack({});
var builder = app.builder;

builder.resolve.modulesDirectories.push('node_modules/movement-ui-kit/blocks');
builder.resolve.modulesDirectories.push('./src');

builder.module.loaders = builder.module.loaders.filter(function(loader) {
  if (!loader.extensions) return true;
  return !~loader.extensions.indexOf('jade');
});

builder.entry.main = [builder.entry.main];

var pages = __dirname + '/src/modules/pages';
glob(pages + '/**/*.jade').forEach(function(source) {
  var relative = formatRelativeName(source);

  var plugin = new ExtractTextPlugin(source, relative, {extract: true, remove: true});
  builder.plugins.push(plugin);

  var loader = plugin.extract('html-loader?root=' + __dirname + '/src!jade-html-loader');
  builder.module.loaders.push({test: new RegExp(source), loader: loader, loaders: loader});

  builder.entry.main.push(source);
});

function formatRelativeName(source) {
  var relative = path.relative(pages, source).replace('.jade', '');
  if (relative === 'index') return 'index.html';
  return relative + '/index.html';
}