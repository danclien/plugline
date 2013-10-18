module.exports = {
  showUsage: function() {
    console.log("Usage: plugline [pluginName] ... ");
  },
  showNoPlugin: function(plugins) {
    this.showUsage();
    console.log();
    console.log("No plugin specified. Available plugins:");
    console.log();

    this.showPlugins(plugins);
  },
  showPluginNotFound: function(plugins, targetPlugin) {
    this.showUsage();
    console.log();
    console.log("Plugin \"" + targetPlugin + "\" not found. Available plugins:");
    console.log();

    this.showPlugins(plugins);
  },
  showPlugins: function(plugins) {
    for(var id in plugins) {
      var plugin = plugins[id];
      console.log("    " + id + " - " + plugin.description);
    }
  }
};