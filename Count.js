//做统计方面的数据封装
//主要是页面中的各种控制位

function UserCount(isSelected, id, username, realname, password, email, phone){
    this.isSelected = isSelected;
    //借用构造函数==.== 经典
    User.call(this, id, username, realname, password, email, phone);
}

//继承User
UserCount.prototype = new User(id, username, realname, password, email, phone);

//将对应id的UserCount实例的isSelected位置1，0->1 之间的转换
UserCount.prototype.set_selected = function (){
    if(this.isSelected == 0){
        this.isSelected = 1;
    }else{
        this.isSelected = 0;
    }
}

//判断某个id对应的用户是否存在
function judge_id(){
    var id = event.target.value;
    var length = users.length;
    var j = 0;
    for(var i=0; i<length; i++){
        if(users[i].id == id){
            document.getElementById("id_desc").className = "input_desc_red";
            document.getElementById("id_desc").innerText = "此id已存在";
            return "已经存在";
        }
    }
    document.getElementById("id_desc").className = "input_desc_green";
    document.getElementById("id_desc").innerText = "不存在此id";
    return "不存在此id";
}


//通过id，返回对应的UserCount实例
//统计有多少行被选中
function chenge_selected(id, users){
    var ret = 0;
    for(var i=0; i<users.length; i++){
        if(users[i].id == id){
            users[i].set_selected();
        }
        if(users[i].isSelected == 1){
            ret++;
        }
    }
    return ret;
}

var users = new Array();
