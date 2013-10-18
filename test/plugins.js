var should = require('should');
var plugins = require('../src/plugins');

describe('filterPluginFiles', function(){
  var filterPluginFiles = plugins.filterPluginFiles;

  it('should return only test.js files when "test", "test.js", "test.css", "test.jpg", "test.html" is passed in', function(){
    var filteredFiles = filterPluginFiles(['test', 'test.js', 'test.css', 'test.jpg', 'test.html']);

    filteredFiles.length.should.equal(1);
    filteredFiles.should.include('test.js');
  });

  it('should remove "index.js" when "index.js" is passed in', function(){
    filterPluginFiles(['test.js', 'index.js']).should.not.include('index.js');
  });
});

describe('stripJsFileExtension', function(){
  var stripJsFileExtension = plugins.stripJsFileExtension;

  it('should return "test" when "test.js" is passed in', function(){
    stripJsFileExtension('test.js').should.equal('test');
  });
});