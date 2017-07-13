'use strict'
//分割inputs
function buildCodeCount(inputs) {
    let i = 0;
    let cutInput = [];
    for (let input of inputs) {
        let bCount = input.split("-");
        if (bCount.length == 1) {
            cutInput[i++] = { barcode: bCount[0], count: 1 };
        } else {
            cutInput[i++] = { barcode: bCount[0], count: parseFloat(bCount[1]) };
        }
    }
    return cutInput;
}
//根据Barcode合并去重
function findCommonBarcodes(cutInput) {
    let barcodes = [];
    for (let i = 0, l = cutInput.length; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if (cutInput[i].barcode === cutInput[j].barcode) {
                j = ++i;
            }
        }
        barcodes.push(cutInput[i].barcode);
    }
    return barcodes;
}
//合并
function buildSheeting(barcodes, cutInput) {
    let newInputs = new Array();
    let count = 0;
    for (let i = 0; i < barcodes.length; i++) {
        for (let j = 0; j < cutInput.length; j++) {
            if (barcodes[i] == cutInput[j].barcode) {
                count += cutInput[j].count;
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
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
    for (let i = 0; i < newInputs.length; i++) {
        for (let j = 0; j < allCommoditys.length; j++) {
            if (newInputs[i].barcode == allCommoditys[j].barcode) {
                allMessage[p++] = { barcode: newInputs[i].barcode, 'name': allCommoditys[j].name, 'count': newInputs[i].count, 'price': allCommoditys[j].price, 'unit': allCommoditys[j].unit, };
            }
        }
    }
    return allMessage;
}
//打折
function judgeDiscount(allMessage) {
    let discountMessages = [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        },
        {
            type: 'OTHER_PROMOTION',
            barcodes: [
                'ITEM000003',
                'ITEM000004'
            ]
        }
    ]
    for (let message of allMessage) {
        let type = 'OTHER_PROMOTION';
        for (let discountMessage of discountMessages) {
            for (let barcode of discountMessage.barcodes) {
                if (message.barcode === barcode) {
                    type = discountMessage.type;
                }
            }
        }
        message.type = type;
    }
    return allMessage;
}
//全部信息
function buildShopSheet(allMessage) {
    let allShopMessage = new Array();
    let c = 0;
    let sum = 0;
    let sumSave = 0;
    for (let message of allMessage) {
        let count = parseFloat(message.count);
        let price = parseFloat(message.price);
        let save = 0;
        let prices = 0;
        if (message.type == 'BUY_TWO_GET_ONE_FREE') {
            if (count > 2) {
                prices = ((count - 1) * price)
            } else {
                prices = count * price;
            }
        } else {
            prices = count * price;
        }
        allShopMessage[c] = {
            name: message.name,
            count: message.count + message.unit,
            price: message.price.toFixed(2),
            prices: prices,
        };
        sumSave += price * count;
        sum = sum + prices;
        c++
    }
    allShopMessage.sum = sum.toFixed(2);
    allShopMessage.save = sumSave - sum.toFixed(2);
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
        save: allShopMessage.save
    }
    return shopSheets;
}
function buildSheetString(shopSheets) {
    return `
***<没钱赚商店>收据***${shopSheets.shopDrtail}
----------------------
总计：${shopSheets.sum}(元)
节省：${shopSheets.save}(元)
**********************`
}
let inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005',
    'ITEM000005-2',
];
let cutInput = buildCodeCount(inputs);
let barcodes = findCommonBarcodes(cutInput);
let newInputs = buildSheeting(barcodes, cutInput);
let allMessage = BarcodeMatch(newInputs)
let allMessages = judgeDiscount(allMessage);
let allShopMessage = buildShopSheet(allMessages);
let shopSheets = buildShopShow(allShopMessage);
let result = buildSheetString(shopSheets);
console.log(result);