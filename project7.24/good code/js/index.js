'use strict'
//显示学生信息
$.showStudents = function () {
    var count = localStorage.length;
    if (count == 0) {
        $('#show').html('暂无学生信息');
    }
    for (var i = 0; i < localStorage.length; i++) {
        var localId = localStorage.key(i);
        var stuMessage = JSON.parse(localStorage.getItem(localId));
        var math = parseFloat(stuMessage.mathematics);
        var english = parseFloat(stuMessage.English);
        var chinese = parseFloat(stuMessage.Chinese);
        var program = parseFloat(stuMessage.program);
        var student = "<tr id='" + localId + "'>" +
            "<td>" + stuMessage.sname + "</td>" +
            "<td>" + stuMessage.sid + "</td>" +
            "<td>" + math + "</td> " +
            "<td>" + english + "</td>" +
            "<td>" + chinese + "</td>" +
            "<td>" + program + "</td>" +
            "<td>" + calculate(math, english, chinese, program) + "</td>" +
            "<td class='btn1'><input type='button' class='delete btn btn-warning' value='删除' onclick='deteleStudent(\"" + stuMessage.sname + "\",\"" + localId + "\")'  ></td>" +
            "<td class='btn2'><input type='button' class='btn-info btn' onclick='correctStudent(" + localId + ")' value='修改'></td>" +
            "</tr>"
        $('.show-students').append(student);
    }
}

//添加信息
function addStudent(parm) {
    var stuid = $('#sid').val();
    var stuname = $('#sname').val();
    var math = testEmpty($('#mathematics').val());
    var english = testEmpty($('#English').val());
    var chinese = testEmpty($('#Chinese').val());
    var Program = testEmpty($('#program').val());
    if (stuid == "" || stuname == "" || stuid == null || stuname == null) {
        event.preventDefault();
        alert('姓名学号不能为空');
        return false;
    }
    var message = {
        sname: stuname,
        sid: stuid,
        mathematics: math,
        English: english,
        Chinese: chinese,
        program: Program,
    }
    localStorage.setItem(stuid, JSON.stringify(message));
    $(".add-student").remove('disabled');
    if (parm === 'add') {
        $("#outcome").css('display', 'block').html("添加成功");
    } else if (parm === 'correct') {
        $("#outcome").css('display', 'block').html("修改成功");
    }
}

//删除信息
function deteleStudent(sname, datalocalkey) {
    var r = confirm("确认删除学生" + sname + ",学号" + datalocalkey);
    if (r == true) {
        localStorage.removeItem(datalocalkey);
        $('#'+datalocalkey).remove();
    }

}

//验证id是否重复
function checkId() {
    var sid = $("#sid").val();
    var stuMessage = JSON.parse(localStorage.getItem(sid));
    if (stuMessage != undefined) {
        $('#show').html('此id已存在，请重新输入');
        $("#addStu").attr('disabled', 'disabled');
    } else {
        $('#show').html('');
        $("#addStu").attr('disabled', false);
    }
}

//修改信息
function correctStudent(datalocalkey) {
    var stuMessage = JSON.parse(localStorage.getItem(datalocalkey));
    var tr =
        "<td><input class='correctInput' type='text' id='sname' value='" + stuMessage.sname + "'></td>" +
        "<td><input class='correctInput' type='text' id='sid' disabled='disabled' value='" + stuMessage.sid + "'></td>" +
        "<td><input class='correctInput' type='text' id='mathematics' value='" + stuMessage.mathematics + "' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
        "<td><input class='correctInput' type='text' id='Chinese' value='" + stuMessage.Chinese + "' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
        "<td><input class='correctInput' type='text' id='English' value='" + stuMessage.English + "' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
        "<td><input class='correctInput' type='text' id='program' value='" + stuMessage.program + "' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
        "<td width=\"12%\"><input type='' style='display: none'></td>"+
        "<td><input type='button' class='btn btn-primary btn1' value='保存'  onclick='addStudent(\"correct\")'></td>" +
        "<td><input type='submit' class='btn2 btn btn-info' value='取消' onclick=''></td>";
    $("#" + datalocalkey).html(tr);
}

//查询信息
$.inquireStudentId = function () {
    $(".inquireBtn").click(function () {
        var sids = splitId($('#inquireInput').val());
        var student = '';
        var allsum = 0;
        let noId = '';
        for (let id of sids) {
            var stuMessage = JSON.parse(localStorage.getItem(id));
            if (stuMessage == undefined) {
                noId += '学号' + id + ' ';
            } else {
                var math = parseFloat(stuMessage.mathematics);
                var english = parseFloat(stuMessage.English);
                var chinese = parseFloat(stuMessage.Chinese);
                var program = parseFloat(stuMessage.program);
                var sum = calculate(math, english, chinese, program);
                $('#show').html('');
                student += "<tr id='" + id + "'>" +
                    "<td>" + stuMessage.sname + "</td>" +
                    "<td>" + stuMessage.sid + "</td>" +
                    "<td>" + math + "</td> " +
                    "<td>" + english + "</td>" +
                    "<td>" + chinese + "</td>" +
                    "<td>" + program + "</td>" +
                    "<td>" + sum + "</td>" +
                    "<td><input type='button' class='delete btn btn-warning btn1' value='删除' onclick='deteleStudent(\"" + stuMessage.sname + "\"," + id + ")'  ></td>" +
                    "<td><input type='button' class='btn1 btn btn-info'  onclick='correctStudent(" + id + ")' value='修改'></td>" +
                    "</tr>"
                allsum += sum;
            }
        }
        if (student == undefined) {
            $('#show').html('学生id错误')
        } else {
            $('.show-students').html(student);
            console.log(noId);
            if (noId == '') {
                $('#show').html('此次查询的学生中的总成绩为' + allsum);
            } else {
                $('#show').html('此次查询的学生中的总成绩为' + allsum + ',其中' + noId + '不存在！');
            }
        }

    });

}
//添加学生信息
$.addStudentBtn = function () {
    $(".add-student").click(function () {
        let tr = "<tr class='CaseRow'id='newAdd'>" +
            "<td><input type='text' id='sname' placeholder='姓名'></td>" +
            "<td><input type='text' id='sid'  placeholder='学号' onkeyup='checkId()'></td>" +
            "<td><input type='text' id='mathematics'  placeholder='数学成绩' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
            "<td><input type='text' id='Chinese'  placeholder='语文成绩' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
            "<td><input type='text' id='English'  placeholder='英语成绩' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
            "<td><input type='text' id='program'  placeholder='编程成绩' onkeyup=\"value=this.value.replace(/\\D+/g,'')\"></td>" +
            "<td width=\"12%\"><input type='' style='display: none'></td>"+
            "<td><input type='submit'  class='btn btn-primary btn1 ' id='addStu' value='保存' onclick='addStudent(\"add\")'></td>" +
            "<td><input type='button' value='取消' onclick='cancelAdd(\"newAdd\")' class='btn1 btn btn-info'></td>" +
            "</tr>";
        $(".show-students").append(tr);
        $(".add-student").attr('disabled', "disabled")
    });
}

//计算总分
function calculate(math, english, chinese, program) {
    var sum = math + english + chinese + program;
    return sum;
}

//数值范围在0-150之间
function range(i) {
    if (parseFloat(i) < 0) {
        alert(i + '分数不能为负数')
        event.preventDefault();
    } else if (parseFloat(i) > 150) {
        console.log(i);
        alert(i + '分值不能超过150')
        event.preventDefault();
    }
    else {
        return i;
    }

}

//检测是否为空
function testEmpty(parm) {
    if (parm == '' || parm == null) {
        parm = 0;
    }
    return range(parm);
}

function splitId(string) {
    var id = string.split(',');
    let ids = new Set(id);
    return ids;
}
//操作结果提醒
$.inquire = function () {
    $('#inquireInput').keyup(function () {
        if ($('#inquireInput').val() == "") {
            $(".inquireBtn").attr('disabled', "disabled");
        } else {
            $(".inquireBtn").attr('disabled', false);
        }
    });
}
//取消添加
function cancelAdd() {
    $(".add-student").attr('disabled',false);
    $('#newAdd').remove();
}
// function findMessage(id) {
//     var stuMessage = JSON.parse(localStorage.getItem(localId));
//     return stuMessage;
// }