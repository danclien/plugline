function findPluginName(argv, plugins) {
  return argv[2];
}

function buildArgvForPlugin(argv) {
  argv.splice(2, 1);
  return argv;
}

module.exports = {
  findPluginName: findPluginName,
  buildArgvForPlugin: buildArgvForPlugin
};