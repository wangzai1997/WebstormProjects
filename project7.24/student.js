function getnewstudent() {
    let name = document.getElementById('name').value;
    let a1 = document.getElementById('math').value;
    let b1 = document.getElementById('chinese').value;
    let c1 = document.getElementById('english').value;
    let d1 = document.getElementById('progress').value;
    let e1 = document.getElementById('average').value;
    let f1 = document.getElementById('subtotal').value;
    let student = {
        name: name,
        math: a1,
        chinese: b1,
        english: c1,
        progress: d1,
        average: e1,
        subtotal: f1
    };
    return student;
}

function submitTest() {
    let table = document.getElementById('table');
    let name = document.getElementById('name').value;
    let a1 = document.getElementById('math').value;
    let b1 = document.getElementById('chinese').value;
    let c1 = document.getElementById('english').value;
    let d1 = document.getElementById('progress').value;
    let e1 = document.getElementById('average').value;
    let f1 = document.getElementById('subtotal').value;
    let a = parseInt(document.getElementById('math').value);
    let b = parseInt(document.getElementById('chinese').value);
    let c = parseInt(document.getElementById('english').value);
    let d = parseInt(document.getElementById('progress').value);
    let e = parseInt(document.getElementById('average').value);
    let f = parseInt(document.getElementById('subtotal').value);
    var student = getnewstudent();
    var data=JSON.stringify(student);
    if(a==a1&&b==b1&&c==c1&&d==d1&&e==e1&&f==f1)
    {
        table.innerHTML += `<tr>
                <td>${name}</td>
                <td>${a1}</td>
                <td>${b1}</td>
                <td>${c1}</td>
                <td>${d1}</td>
                <td>${e1}</td>
                <td>${f1}</td>
            </tr>`;
        localStorage.setItem('students',data);
        //将JSON字符串转换成为JSON对象输出
        var json=localStorage.getItem('student');
        var jsonObj=JSON.parse(json);
        var students = [];
        students.push(jsonObj);
        console.log(typeof jsonObj);
        alert('添加信息成功');
    }
    else
    {
        alert('请按正确格式输入');
    }

}


function searchTest() {
    let student = getnewstudent();
    let input = document.getElementById('input').value;
    if(input == student.name)
    {
        table.innerHTML += `<tr>
                <td>${student.name}</td>
            </tr>`;
    }

}
