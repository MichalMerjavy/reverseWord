#!/usr/bin/env bash
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWord = void 0;
var fs = require('fs');
var _a = require('perf_hooks'), PerformanceObserver = _a.PerformanceObserver, performance = _a.performance;
var reverseWord = function (word) {
    try {
        var t0 = performance.now();
        var res = reverse(word);
        var t1 = performance.now();
        var data = {
            input: word,
            output: res,
            duration: t1 - t0
        };
        var jsonData = JSON.stringify(data);
        fs.writeFile("processed.json", jsonData, function (err) {
            if (err) {
                console.log(err);
            }
        });
        return res;
    }
    catch (e) {
        console.error(e);
    }
};
exports.reverseWord = reverseWord;
function reverse(word) {
    if (!word.match(/^[0-9a-zA-Z]+$/)) {
        throw 'Invalid input';
    }
    var res = "";
    for (var i = word.length - 1; i >= 0; i--) {
        if (isLowerCase(word.charAt(i))) {
            res += word.charAt(i).toUpperCase();
        }
        else {
            res += word.charAt(i).toLowerCase();
        }
    }
    return res;
}
function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}
