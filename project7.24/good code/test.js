'use strict'
let a = [1, 2, 3, 1, 2, 321, 3, 12, 2, 2, 2, 3, 22, 2, 2, 2, 22,]
let b = new Set(a);
for (let c of b) {
    console.log(c);
}
