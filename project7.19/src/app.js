/**
 * Created by wangzai on 17-7-18.
 */
'use strict';

var readlineSync = require('readline-sync');
function buildManiMenuString() {
    var str = '';
    str += ('1. 添加学生'+'\n'+'2. 生成成绩单'+'\n'+'3. 退出'+'\n'+'请输入你的选择（1～3）：');
    return str;
}
var str = buildManiMenuString();
console.log(str);
readlineSync.promptCLLoop({
    1: function() {
        addStudentInfo();
    },
    2: function () {
        getInputWant();
    },
    3: function() { return true; }
});
console.log('Exited');

function addStudentAcheivement(addinfo) {
    var studentinfo = {name:name,chinese:num1,math:num2,english:num3,progress:num4,subtotal:num5,average:num6};
    addinfo = addStudentInfo();
    studentinfo += addinfo;
    return studentinfo;
}

function buildReport() {
    var studentinfo = addStudentAcheivement(addinfo);
    var result = [];
    var wantname = getInputWant();
    for(var i in wantname )
    {
        result.push(studentinfo.wantname[i]);
    }
    return result;

}

function getInputWant() {
    console.log('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    var wantname = [];

    readlineSync.promptCLLoop({
        function(target){
            wantname.push(target);
        }
    });
    return wantname;
    }

function addStudentInfo() {
    console.log("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    var addinfo = '';
    input = readlineSync.prompt();
            if (input != 0) {
                addinfo = input;
                console.log(addinfo);
                return addinfo;
            }
            else {
                return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：';
            }
    return addinfo;
}
var print = buildReport();
var result = '成绩单'+'\n'+ '姓名|数学|语文|英语|编程|平均分|总分'+ '========================'+ print;
console.log(result);