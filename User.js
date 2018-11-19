//定义User的原型
//对User进行封装，包括数据和方法

function User(id, username, realname, password, email, phone){
    this.id = id;
    this.username = username;
    this.realname = realname;
    this.password = password;
    this.email = email;
    this.phone = phone;
}

User.protoType = {
    constructor: User
}
