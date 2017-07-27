/**
 * Created by wangzai on 17-7-24.
 */
var a = [1];
for(var i = 2;i<=100;i++)
{
    var b = true;
    for(var j = 2;j<i;j++)
    {
        if (i%j == 0)
        {
            b = false;
            break;
        }
        else
        {
            continue;
        }
    }
    if(b)
    {
        a.push(i);
    }
}
console.log(a);