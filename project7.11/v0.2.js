//根据Barcode合并去重
function findCommonBarcodes(inputs) {
    let barcode = [];
    for (let i= 0,l = inputs.length; i < l; i++) {
        for (let j = i + 1; j<l; j++) {
            if (inputs[i] === inputs[j]) {
                j = ++i;
            }
        }
        barcode.push(inputs[i]);
    }
    return barcode;
}
//合并后个数相加
function buildSheeting(barcodes, inputs) {
    let newInputs = new Array();
    let count = 0;
    for (let i = 0; i < barcodes.length; i++) {
        for (let j = 0; j < inputs.length; j++) {
            if (barcodes[i] === inputs[j]) {
                count++;
            }
        }
        newInputs[i] = { 'barcode': barcodes[i], 'count': count };
        count = 0;
    }
    return newInputs;
}
//根据Barcode匹配
function BarcodeMatch(newInputs) {
    let allMessage = new Array();
    let p = 0;
    let allCommoditys = [
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
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        }
    ];
    for (let i = 0; i < newInputs.length; i++) {
        for (let j = 0; j < allCommoditys.length; j++) {
            if (newInputs[i].barcode == allCommoditys[j].barcode) {
                allMessage[p++] = { 'name': allCommoditys[j].name, 'count': newInputs[i].count, 'price': allCommoditys[j].price, 'unit': allCommoditys[j].unit, };
            }
        }
    }
    return allMessage;
}


function buildShopSheet(allMessage) {
    let allShopMessage = new Array();
    let c = 0;
    let sum = 0
    for (let i = 0; i < allMessage.length; i++) {
        allShopMessage[c++] = {
            name: allMessage[i].name,
            count: allMessage[i].count + allMessage[i].unit,
            price: allMessage[i].price.toFixed(2),
            prices: parseInt(allMessage[i].count) * parseInt(allMessage[i].price),
        };
        sum = sum + parseInt(allMessage[i].count).toFixed(2) * parseInt(allMessage[i].price).toFixed(2);
    }
    allShopMessage.sum = sum.toFixed(2);
    return allShopMessage;
}
function buildShopShow(allShopMessage) {
    let allMessage = '';
    for (let i = 0; i < allShopMessage.length; i++) {
        allMessage += '\n名称：' + allShopMessage[i].name + '，数量：' + allShopMessage[i].count + '，单价：' + allShopMessage[i].price + '(元)，小计：' + allShopMessage[i].prices.toFixed(2) + '(元)'
    }
    let shopSheets = {
        shopDrtail: allMessage,
        sum: allShopMessage.sum,
    }
    return shopSheets;
}
function buildSheetString(shopSheets) {
    return `
***<没钱赚商店>收据***${shopSheets.shopDrtail}
----------------------
总计：${shopSheets.sum}(元)
**********************`
}
let inputs = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];

let barcode = findCommonBarcodes(inputs);
let newInputs = buildSheeting(barcode, inputs);
let allMessage = BarcodeMatch(newInputs)
let allShopMessage = buildShopSheet(allMessage);
let shopSheets = buildShopShow(allShopMessage);
let result = buildSheetString(shopSheets);


console.log(result);