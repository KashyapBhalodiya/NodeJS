// Path Module
/*
To remove the inconsistencies in handling the file system paths.

* basename()        Returns the last part of a path
* delimiter	        Returns the delimiter specified for the platform
* dirname()     	Returns the directories of a path
* extname()	        Returns the file extension of a path
* format()	        Formats a path object into a path string
* isAbsolute()	    Returns true if a path is an absolute path, otherwise false
* join()            Joins the specified paths into one
* normalize()	    Normalizes the specified path
*/
var path = require('path');

var filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);

console.log(path.delimiter);

var directories = path.dirname('/Users/Refsnes/demo_path.js');
console.log(directories);

var ext = path.extname('/Users/Refsnes/demo_path.js');
console.log(ext);

var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
var p = path.format(obj);
console.log(p);

console.log(path.isAbsolute('/test/demo_path.js'));
console.log(path.isAbsolute('test/demo_path.js')); 
console.log(path.isAbsolute('C:\\test\\demo_path.js')); 

var x = path.join('Users', 'Refsnes', 'demo_path.js');
console.log(x);

var x = path.normalize('Users/Refsnes/../Jackson');
console.log(x);

// fs module
/*
It allows you to work with the file system on your computer.

* readFile(), appendFile(), open(), writeFile(), writeFile(), unlink(), rename
*/

var http = require('http');
var fs = require('fs');
// read the file
http.createServer(function(req, res) {
    fs.readFile('./3_Read.html', function(err, data) {
        // content-type: We can set to inform how client would interpret the data from the server.
        res.writeHead(200, {'Content-Type': 'text/html'}); // It sends a response header to teh request
        res.write(data);
        return res.end();
    });
}).listen(8080);

// create the files using appendFile() or update the file using openFile()
fs.appendFile('3_AppendFile.txt', 'Hello World', function(err) {
    if (err)
        throw err;
    console.log('Saved!');
});

// opne(): File is not exist then empty file is created
fs.open('3_AppendFile.txt', 'w', function(err, file) {
    if (err)
        throw err;
    console.log('Saved!');
});

// writeFile(): If the file doesn't exist, a new file, containing the specified content will be created.
// It also update the file
fs.writeFile('3_Delete.txt', 'Hello Content!', function(err) {
    if (err)
        throw err;
    console.log('Saved!');
});

// unlink(): To delete the files
fs.unlink('3_Delete.txt', function(err) {
    if (err)
        throw err;
    console.log('File deleted!');
});

// Rename the files: rename()
fs.rename('3_AppendFile.txt', '3_Rename.txt', function(err) {
    if (err)
        throw err;
    console.log('File Renamed!');
});


// os module
/*
* arch()	Returns the operating system CPU architecture
* freemem()	Returns the number of free memory of the system
* hostname()	Returns the hostname of the operating system
* networkInterfaces()	Returns the network interfaces that has a network address
* platform()	Returns information about the operating system's platform
* release()	Returns information about the operating system's release
* tmpdir()	Returns the operating system's default directory for temporary files
* totalmem()	Returns the number of total memory of the system
* type()	Returns the name of the operating system
* uptime()	Returns the uptime of the operating system, in seconds
* userInfo()	Returns information about the current user
*/

var os = require('os');
console.log("Architecture: " + os.arch());
console.log('Free Memory: ' + os.freemem());
console.log('Hostname: ' + os.hostname());
console.log('Network Interface: ' + os.networkInterfaces());
console.log('Platform: ' + os.platform());
console.log('Release: ' + os.release());
console.log('Temparory Directory: ' + os.tmpdir());
console.log('Total Memory: ' + os.totalmem());
console.log('Type: ' + os.type());
console.log('up time: ' + os.uptime());
console.log('User Information: ' + os.userInfo());


// Util module
/*
The Util module provides access to some utility functions.

* debuglog()	  Writes debug messages to the error object
* deprecate()	  Marks the specified function as deprecated
* format()	    Formats the specified string, using the specified arguments
* inherits()	  Inherits methods from one function into another
* inspect()	    Inspects the specified object and returns the object as a string
*/

var util = require('util');
var txt = "Congratulation %s on his %dth Birthday";
var result = util.format(txt, 'Linux', 6);
console.log(result);

/*
// How to upload the files
// Create an upload form
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);
// Parse the upload file
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
// save the file
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
*/