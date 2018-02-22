var dis = ""; //待修正运算符与数据显示
var exec = "";
var result = "";

function list(value) {
  //obj.animate({ opacity: 0.5},100);待修正样式改变
  //obj.animate({ opacity: 0.5},100);
  //value = obj.value;
  if ((dis === "0" && value !== ".") || (dis === "" && value === "0")) {
    dis = value;
  } else if (dis === "" && value === ".") dis = "0" + value;
  else if (dis.length === 14) dis += "";
  else dis += value;
  $(".display").html(dis);
}

function oper(value) {
  if (dis === "" && result !== "") exec += result;

  exec += dis;
  exec += value;

  dis = "";
}

$("#equal").on("click", function() {
  if (exec === "") $(".display").html("");
  else {
    exec += dis;
    result = eval(exec).toFixed(12) + ""; //待修正浮点数
    if (result.length > 14) result = result.substr(0, 14);
    $(".display").html(result);

    dis = "";
    exec = "";
  }
});

function lighter(obj) {
  $(obj).animate({ opacity: 0.7 }, 100);
}

function darker(obj) {
  $(obj).animate({ opacity: 1.0 }, 100);
}

$("#clear").on("click", function() {
  $(".display").html("");
  dis = "";
  exec = "";
});