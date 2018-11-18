
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
}


//创建自定义类型的面板
