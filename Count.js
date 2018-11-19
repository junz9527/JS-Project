//做统计方面的数据封装
//主要是页面中的各种控制位

function UserCount(isSelected, id, username, realname, password, email, phone){
    this.isSelected = isSelected;
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
