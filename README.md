# plugline

Template project for creating a modularized command line tool.

## How to use

`plugline [plugin] [arguments...]`

## How to customize

Rename the following files:

* `bin/plugline` to `bin/yourCustomName`
* `bin/plugline.cmd` to `bin/yourCustomName.cmd`

Update any reference to `plugline` in the following files:

* `package.json`
* `src/help.js`


## How to extend

Add `.js` files `/src/plugins` which have the following interface:

```
module.exports = {
  description: "Description of your plugin",
  run: function(argv) {
    //argv is equal the arguments passed from the command line without the plugin name
    //Use commander.js or another command line parser library to perform actions here
  } 
};
```

