//每一行都有几个对应的标志位，如是否选中
//var isSelected = new Array();  //这种方式不好用


//页面初始的时候需要加载的函数
function init(){
    //将所有行添加一个点击事件函数
    var tb_body = document.getElementById("tb_body");
    //第一行是表头，直接跳到数据的第一行
    var tr = tb_body.firstElementChild.nextElementSibling;
    while(tr != null){
        tr.onclick = select_effect;
        //将tr对应的一条数据封装大users数组中
        var uc1 = new UserCount(0, tr.children[0].innerText, tr.children[1].innerText, tr.children[2].innerText, tr.children[3].innerText, tr.children[4].innerText, tr.children[5].innerText);
        users.push(uc1);
        tr.onmouseenter = effect_in;
        tr.onmouseleave = effect_out;
        tr = tr.nextElementSibling;
    }

}
init();
function effect_in(){
    event.target.style.backgroundColor = "gray";
}
function effect_out(){
    event.target.style.backgroundColor = "";
}
//当选中一行数据时，发生的效果， 将表格数据在右侧信息栏中显示出来
function select_effect(){
    var tr = event.target.parentNode;
    if(tr.className == "rowSelected" ){
        tr.className = "";
    }else{
        tr.className = "rowSelected";
    }
    var td = tr.firstElementChild;
    var td_id = tr.firstElementChild;
    //存放一批输入框
    var inputs = new Array();
    var input_elements = document.querySelectorAll(".input_text");
    var i = 0;
    //将本行的数据 写到右侧的信息栏中
    while(td != null){
        //alert(td.innerText);
        input_elements[i++].value = td.innerText;
        td = td.nextElementSibling;
    }
    //选中行数统计
    var id = td_id.innerText;
    //将对应id的UserCount实例的isSelected位置1，0->1 之间的转换
    //更新对应的显示标签
    document.getElementById("num_selected").innerText = chenge_selected(id, users);
}
//当用户点击增加按钮时， 弹出对应的面板，是用户进行添加操作
function addUserPanel(){
    var div_bg = document.getElementById("div_bg");
    //div_bg.style.backgroundColor = "#6f6f6f";
    div_bg.style.backgroundColor = "#fff";

    var div_pop = document.createElement("div");
    div_pop.id = "div_pop_add";

    div_bg.appendChild(div_pop);

    //文本标签
    var label = document.createElement("text");
    label.value = "增加用户";
    label.text = "增加用户";
    label.innerText = "增加用户";
    label.id = "div_pop_add_label1";
    div_pop.appendChild(label);

    alert("123");
}

//在表格中添加一行数据
function addRow(){
    var tb_content = document.getElementById("tb_content");
    var tb_body = document.getElementById("tb_body");
    with(document){
        var id = getElementById("id").value;
        var username = getElementById("username").value;
        var realname = getElementById("realname").value;
        var password = getElementById("password").value;
        var email = getElementById("email").value;
        var phone = getElementById("phone").value;

        var td0 = createElement("td");
        var td1 = createElement("td");
        var td2 = createElement("td");
        var td3 = createElement("td");
        var td4 = createElement("td");
        var td5 = createElement("td");

        var tr = createElement("tr");
        td0.appendChild(createTextNode(id));
        td1.appendChild(createTextNode(username));
        td2.appendChild(createTextNode(realname));
        td3.appendChild(createTextNode(password));
        td4.appendChild(createTextNode(email));
        td5.appendChild(createTextNode(phone));
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5)

        tb_body.appendChild(tr);

        //新增完后，重新执行init，将数据添加交互效果
        init();
    }
}

//ajax请求 用户数据， 并填充表格
function getUsers(){
    var xhr = createXHR();

    xhr.open("get", "")

}
//指定事件处理程序
var btn_add = document.getElementById("btn_add");
btn_add.onclick =  addRow;

//id 对应的是input输入框，当失去焦点的时候应该判断，id是否存在
document.getElementById("id").onblur = judge_id;