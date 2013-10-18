module.exports = {
  description: "Demo plugin that prints \"Hello, world!\"",
  run: function(argv) {
    console.log("Hello, world!");
    console.log("argv: ", argv);
  } 
};