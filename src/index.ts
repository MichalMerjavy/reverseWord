#!/usr/bin/env bash
var readline = require('readline');
var rev = require('../lib/reverse.js');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Word to reverse:', (word:string) => {
    console.log(rev.reverseWord(word));
    rl.close();
});


