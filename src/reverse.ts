#!/usr/bin/env bash


var fs = require('fs');
const { PerformanceObserver, performance } = require('perf_hooks');



export const reverseWord = (word:string) => { 
    try {
        var t0 = performance.now();
        var res = reverse(word);
        var t1 = performance.now();
        var data = {
            input: word,
            output: res,
            duration: t1 - t0
        }
        var jsonData = JSON.stringify(data);
        fs.writeFile("processed.json", jsonData, function(err: unknown) {
            if (err) {
                console.log(err);
            }
        });
        return res;
    } catch(e){
        console.error(e);
    }
 }


function reverse(word:string) {
    if (!word.match(/^[0-9a-zA-Z]+$/)) {
        throw 'Invalid input';
    }
    var res = "";
    for (var i = word.length - 1; i >=0; i--) {
        if (isLowerCase(word.charAt(i))) {
            res += word.charAt(i).toUpperCase();
        } else {
            res += word.charAt(i).toLowerCase();
        }
    }
    return res;

}

function isLowerCase(str:string)
{
    return str == str.toLowerCase() && str != str.toUpperCase();
}