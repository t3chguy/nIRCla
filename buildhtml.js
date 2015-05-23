#!/usr/bin/env node
//var Templater = require('./classes/Templater.js');
var EJS = require('ejs');

try {
    var config    = require('./config.js');
} catch (err) {
    console.log('No config.js File Present - use the config.js.example as a base.');
    process.exit();
}

config.outputs.forEach(function (val, key, array) {
    var data      = {

    }

    EJS.renderFile('./themes/default/index.ejs', { title: 'FooBar', JSISversion: '420 Blaze It' }, console.log);
});

//console.log(Templater.wrap('./themes/default/index.ejs', { JSISversion: '420BlazeIt' }));