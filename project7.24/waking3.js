/**
 * Created by wangzai on 17-7-26.
 */
function union(a,b) {
    for(var i in b)
    {
        var flag = true;
        for(var j in a)
        {
            if(a[j] != b[i])
            {
                continue;
            }
            else
            {
                flag = false;
                break;
            }
        }
        if(flag)
        {
            a.push(b[i]);
        }
        else
        {
            continue;
        }
    }
    return a.sort(
        function (c,d) {
            return c>d;
        }
    );
}

console.log(union([1,2,3],[100,2,1,10]));

