#!/usr/bin/env node

var exec = require('child_process').exec,
    path = require('path'),
    step = require('step'),
    colors = require('colors'),
    mkdirp = require('mkdirp'),
    conf = require('../config');

var src = path.resolve(conf.themeDir, conf.theme.name, 'public/js');
var files = [
    'jquery.min.js',
    'bootstrap.min.js',
    'jquery.jsonp.js',
    'prettify.js',
    'mustache.js',
    'toc.js',
    'apps/github.js',
    'apps/twitter.js'
];

function merge() {
    process.chdir(src);
    mkdirp.sync('./dist');

    console.log('>>merge files¶'.yellow);
    exec('cat '+ files.join(' ') +' > ./dist/haroopress.js', function(err, stdout, stdin) {
        console.log(stdout.white);
        console.log('>>minify haroopress.js¶'.yellow);

        exec('uglifyjs -nc ./dist/haroopress.js > ./dist/haroopress.min.js', function(err, stdout, stdin) {
            console.log(stdout.white);
            console.log('>>minify completed'.yellow);
        });
    });
}

merge();
