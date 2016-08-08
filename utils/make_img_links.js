var fs = require('fs'),
    path = require('path'),
    glob = require("glob")
var options = {}
var content = ""

var join = path.posix.join,
    relative = path.posix.relative


if (process.argv.length <= 2) {
  console.log('You need one parameter.');
  process.exit();
}
//console.log(process.argv[2]);

var dirPath = join("./", process.argv[2], "/**/*.png");

//console.log(dirPath);


// options is optional
var filenames = glob.sync(dirPath, options)
//console.log(filenames);
filenames.forEach(function(filename) {

  //console.log(filename);
  content += "![image](/" + relative('.', filename) + ")\n"
});

fs.writeFileSync("./make_img_links.txt", content);

