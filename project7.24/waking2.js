/**
 * Created by wangzai on 17-7-25.
 */
function mainfinder(a) {
    for(var i in a)
    {
        var count = 1;
        for(var j = i+1;j<a.length;j++)
        {
            if(a[i] == a[j])
            {
                count++;
            }
            else
            {
                continue;
            }
        }
        if(count>a.length/2)
        {
            break;
        }
        else
        {
            continue;
        }
    }
    if(count == 1)
    {
        console.log('不存在主元素');
    }
    else
    {
        console.log('主元素'+a[i]+'出现的次数是'+count);
    }
    return;
}
var a = [2,2,3,2,2,4,5,2,2,2];
mainfinder(a);