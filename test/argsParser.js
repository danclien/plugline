var assert = require('assert');
var should = require('should');
var argsParser = require('../src/argsParser');

describe('findPluginName', function(){
  var findPluginName = argsParser.findPluginName;
  it('should find the plugin name', function(){
    findPluginName(['node', 'plugline.js', 'plugin', 'arg1', 'arg2']).should.equal('plugin');
  });
});

describe('buildArgvForPlugin', function(){
  var buildArgvForPlugin = argsParser.buildArgvForPlugin;
  it('should remove the plugin name for commander.js', function(){
    var input = ['node', 'plugline.js', 'plugin', 'arg1', 'arg2'];
    var output = buildArgvForPlugin(input);
    var targetOutput = ['node', 'plugline.js', 'arg1', 'arg2'];

    assert.deepEqual(output, targetOutput);
  });
});