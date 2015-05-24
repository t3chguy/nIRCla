// Make running from cron etc. with relative path easier
process.chdir(__dirname);

var nircla = require('./classes/NIRCLA.js');
nircla.start();
