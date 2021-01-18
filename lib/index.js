#!/usr/bin/env bash
"use strict";
var readline = require('readline');
var rev = require('../lib/reverse.js');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Word to reverse:', function (word) {
    console.log(rev.reverseWord(word));
    rl.close();
});
