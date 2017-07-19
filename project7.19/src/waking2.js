/**
 * Created by wangzai on 17-7-19.
 */
var a = [1,2,3,4,4];
var b = [3,3,4,5,6];
var c = Array.from(new Set(a.concat(b)));
console.log(c);