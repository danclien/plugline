var fs = require("fs");
var _ = require("lodash");

function filterPluginFiles(files) {
  return _.filter(files, function(filename) { 
    var isJsFile = /\.js$/gi.test(filename);
    var isIndexJs = filename == "index.js";

    return (isJsFile && !isIndexJs);
  });
}

function stripJsFileExtension(filename) {
  return filename.slice(0,-3);
}

function loadPlugins() {
  var pluginsDirectory = __dirname;
  var allFiles = fs.readdirSync(pluginsDirectory);
  var pluginFiles = filterPluginFiles(allFiles);
  var plugins = {};

  pluginFiles.forEach(function(filename) {  
    var pluginName = stripJsFileExtension(filename);
    plugins[pluginName] = require("./" + filename);
  });  

  return plugins;
}

var plugins = loadPlugins();

module.exports = {
  filterPluginFiles: filterPluginFiles,
  stripJsFileExtension: stripJsFileExtension,
  all: plugins
};