function workshop(inputs) {
  var array = suijishu(0,10);
  var count1 = 0;
  var count2 = 0;
  for (var i in array)
  {
    if (array[i] == inputs[i])
    {
      count1++;
    }
    else
    {
      for (var j in inputs)
      {
        if (array[i] == inputs[j])
        {
          count2++;
        }
        else
        {
          continue;
        }
      }
    }
  }
}

function suijishu(min, max) //生成[min,max]的4个元素的随机数列
  {
    var arrry = [];
    for(var i = 0;i<4;i++)
    {
      arrry.push(Math.floor(Math.random()*(max-min+1)+min));
    }
    return arrry;
  }




module.exports = workshop;
module.exports = suijishu;
