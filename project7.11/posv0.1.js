'use strict';

//合并去重
function findCommonBarcodes(inputs) {
    let barcodes = [];
    for (let i = 0; i < inputs.length; i++) {
        for (let j = i + 1; j < inputs.length; j++) {
            if (inputs[i].barcode === inputs[j].barcode) {
                j = ++i;
            }
        }
        barcodes.push(inputs[i]);
    }
    return barcodes;
}
//合并后个数相加
function buildSheeting(barcodes, inputs) {
    let newInputs = [];
    let count = 0;
    for (let i = 0; i < barcodes.length; i++) {
        for (let input of inputs) {
            if (barcodes[i].barcode === input.barcode) {
                count++;
            }
        }
        newInputs[i] = { 'name': barcodes[i].name, 'count': count, 'price': barcodes[i].price, unit: barcodes[i].unit, };
        count = 0;
    }
    return newInputs;
}
function buildShopSheet(inputs) {
    let allMessage = new Array();
    let c = 0;
    let sum = 0;
    for (let input of inputs) {
        allMessage[c++] = {
            name: input.name,
            count: input.count + input.unit,
            price: input.price.toFixed(2),
            prices: parseInt(input.count) * parseInt(input.price),
        };
        sum = sum + parseInt(input.count).toFixed(2) * parseInt(input.price).toFixed(2);
    }
    allMessage.sum = sum.toFixed(2);
    return allMessage;
}
function buildShopShow(allMessages) {
    let allMessage = '';
    for (let message of allMessages) {
        allMessage += '\n名称：' +message.name + '，数量：' + message.count + '，单价：' +message.price + '(元)，小计：' + message.prices.toFixed(2) + '(元)'
    }
    let shopSheets = {
        shopDetail: allMessage,
        sum: allMessages.sum,
    }
    return shopSheets;
}


function buildSheetString(shopSheets) {
    return `
***<没钱赚商店>收据***${shopSheets.shopDetail}
----------------------
总计：${shopSheets.sum}(元)
**********************`
}
let inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },

    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },

    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    }, {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    }, {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    }
];

let barcode = findCommonBarcodes(inputs);
let newInputs = buildSheeting(barcode, inputs);
let allMessage = buildShopSheet(newInputs);
let shopSheets = buildShopShow(allMessage);
let result = buildSheetString(shopSheets);


console.log(result);
