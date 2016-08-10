var fs = require('fs'),
    path = require('path'),
    glob = require("glob")
    //execSync = require('child_process').execSync

var options = {}
var content = ""

var join = path.posix.join,
    relative = path.posix.relative,
    resolve = path.posix.resolve


if (process.argv.length <= 2) {
  console.log('You need one parameter.');
  process.exit();
}
//console.log(process.argv[2]);

//var basePath = resolve(execSync('pwd').toString(), '../')
var dirPath = join("./", process.argv[2], "/**/*.png");

// options is optional
var filenames = glob.sync(dirPath, options)
filenames.forEach(function(filename) {
  content += "![image](" + filename.substr(2) + ")\n"
});

fs.writeFileSync("./make_img_links.txt", content);

