var str = 'I really want to sleep';
var array = str.split(' ');
var longest = '';
for(var i in array)
  {
    if(array[i].length>longest.length)
    {
      longest = array[i];
    }
    else
    {
      continue;
    }
  }
  console.log(longest);
