#!/usr/bin/env node

var fs = require('fs'),
    rl = require('readline'),
    path = require('path'),
    conf = require('../_config'),
    colors = require('colors');

var i = rl.createInterface(process.stdin, process.stdout, null);
var metas = [
    { key: 'defaultTitle', question: 'Insert your site title' },
    { key: 'description', question: 'Insert your site description' },
    { key: 'siteUrl', question: 'Insert site url (e.g. "http://site.com")' },
    { key: 'author', question: 'Insert you name (e.g "Rhio Kim")' },
    { key: 'email', question: 'Insert you gravatar emaill address (e.g "rhiokim@gmail.com")' },
    { key: 'keywords', question: 'Insert you site meta information (e.g "node.js, javascript, html5")' }
];

var config = [
    { key: 'lang', question: 'Character set'},
    { key: 'contentLength', question: 'Shorten content block'}, 
    { key: 'CNAME', question: 'CNAME (e.g. blog.site.com)'},
    { key: 'sourceDir', question: 'Please! insert your blog data full-path (e.g. /path/to/haropress/source/data)'}
];

function setMeta(key, value) {
    conf.meta[key] = value;
}

function setConf(key, value) {
    conf[key] = value;
}

function printConfig(key) {
    var res, key = key || 'meta';

    res = JSON.stringify(conf, null, 4);
    console.log(conf.meta.siteUrl +' Meta Information');
    console.log('-----------------------------------------------');
    console.log(JSON.stringify(conf[key], null, 4));
    return 'module.exports = '+ res;
}

function save() {
    var str = printConfig(),
        pattern = new RegExp('"'+ path.resolve(__dirname, '..'), 'g');

    str = str.replace(pattern, '__dirname +"');

    i.question('haroo> Save? [y/n] : '.yellow, function(answer) {
        if(answer == 'y') {
            //TODO file save
            fs.writeFileSync('./config.js', str, 'utf8');
        } else {
        }

        i.close();
        process.stdin.destroy();
        
    });
}

function queue(idx) {
    var msg, item;
    
    idx = idx || 0;
    item = metas[idx];

    if(!item) {
        save(); 
        return;
    }

    msg = 'haroo> '+ item.question +' :';
    key = item.key;

    i.question(msg.yellow, function(answer) {
        if (key == 'keywords') {
            answer = answer.replace(/ /g,'').split(',');
        }
        setMeta(key, answer);
        queue(++idx);
    });
}

queue();
