/**
 * Created by wangzai on 17-7-21.
 */
function counttimes(str, char) {
    str.split();
    var count = 0;
    for(var i in str)
    {
        if(str[i] == char)
        {
            count ++;
        }
        else continue;
    }
    return count;
}
var str = 'my mother make a map';
console.log(counttimes(str,'m'));
