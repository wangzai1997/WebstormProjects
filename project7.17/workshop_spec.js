'use strict';

var workshop = require('/home/wangzai/下载/collection-calculate-camp-master/workshop.js');
var suijishu = require('/home/wangzai/下载/collection-calculate-camp-master/workshop.js');


describe('workshop', function () {

  /*var collection_a = [1, 2, 3, 4];
  var collection_b = '4A0B';
  var collection_c = [4, 2, 3, 1];
  var collection_d = '2A2B';
  var collection_e = [5, 6, 7, 8];
  var collection_f = '0A0B';
  var collection_g = [4, 3, 2, 1];
  var collection_h = '0A4B';
  var collection_i = [5, 1, 2, 6];
  var collection_j = '0A2B';
  var collection_k = [5, 2, 3, 1];
  var collection_l = '2A1B';
  it('简单的猜数字游戏1', function() {

    var result = workshop(collection_a);
    expect(result).toEqual(collection_b);
  });

  it('简单的猜数字游戏2', function() {

    var result = workshop(collection_c);
    expect(result).toEqual(collection_d);
  });

  it('简单的猜数字游戏3', function() {

    var result = workshop(collection_e);
    expect(result).toEqual(collection_f);
  });

  it('简单的猜数字游戏4', function() {

    var result = workshop(collection_g);
    expect(result).toEqual(collection_h);
  });

  it('简单的猜数字游戏5', function() {

    var result = workshop(collection_i);
    expect(result).toEqual(collection_j);
  });

  it('简单的猜数字游戏6', function() {

    var result = workshop(collection_k);
    expect(result).toEqual(collection_l);
  });*/

  it('随机数系列测试1:判断随机数列的长度', function() {
    var result = suijishu(0,10).length;
    expect(result).toEqual(4);
  });

  it('随机数系列测试2：判断随机数列是否有重复元素', function() {
    var generator = suijishu(0,10);
    for(var i in generator)
    {
      for(var j = i+1;j<generator.length;j++)
      {
        if(generator[i] == generator[j])
        {
          var result = false;
          break;
        }
        else result = true;
      }
    }
    expect(result).toEqual(true);
  });

  it('随机数系列测试3：判断随机数列中元素是否为整数', function() {
    var generator = suijishu(0,10);
    var result;
    for(var i in generator)
    {
      if(parseInt(generator[i]) == generator[i])
      {
        result = true;
      }
      else
      {
        result = false;
      }
    }
    expect(result).toEqual(true);
  });
});
