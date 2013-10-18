var _ = require('lodash'),
    argsParser = require('./argsParser'),
    plugins = require('./plugins').all,
    help = require('./help');

var argv = process.argv;
var pluginName = argsParser.findPluginName(argv, plugins);

if(pluginName == null) {
  help.showNoPlugin(plugins);
  process.exit(1);
}

var pluginFound = _.contains(_.keys(plugins), pluginName);
if(!pluginFound) {
  help.showPluginNotFound(plugins, pluginName);
  process.exit(2);
}

var pluginArgv = argsParser.buildArgvForPlugin(argv);
var plugin = plugins[pluginName];
plugin.run(pluginArgv);