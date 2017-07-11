'use strict'
function sumItemMoney(inputs) {
    for(var i=0;i<inputs.length;i++){
        let Item = {
            barcode: inputs[i],
            name: inputs[i],
            unit: inputs[i],
            price: inputs[i],
            count: inputs[i]
        };
        var summary[i] = parseInt(Item.price[i])*parseInt(Item.count[i]);
        Item.summary = summary[i];
    }

    return Item;
    
}

function allMoney(Item) {
    var allmoney;
    for(var i=0;i<inputs.length;i++)
    allmoney+=Item.summary[i];
    return allmoney;
    
}

function printReceipt(allmoney) {
    return`
    ***<没钱赚商店>收据***`
    for(var i=0;i<inputs.length;i++)
    {return`
    名称：${Item.name[i]},数量：${Item.count[i]}瓶，单价：${Item.price[i]}(元)，小计：${Item.summary[i]}(元)`}
    return`
    ----------------------
    总计：${allMoney.allMoney}(元)
    **********************`
    
}

let inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }
];
let Item = sumItemMoney(inputs);
let result = printReceipt(inputs);
console.log(result);