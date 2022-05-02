/*
 * @Author Moon
 * @Date 2022-01-23 09:02:48
 * @LastEditTime 2022-02-05 12:58:26
 * @LastEditors Please set LastEditors
 * @Description 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath \monorepoe:\webpack-demo\index.js
 */
import test from "./test.js";
import moment from "moment";
console.log("入口js");
console.log(test.str, test.add(1, 2));
require("../css/index.css");

// babel转换
let fun = () => {
  console.log("箭头函数1");
};
fun();

class A {
  a = 1;
}
let a = new A();
console.log(a.a);

// 跨域
let xhr = new XMLHttpRequest();
xhr.open("GET", "/user", true);
xhr.onload = function () {
  console.log(JSON.parse(xhr.response).name);
  console.log(12356);
};
xhr.send();

// 环境变量
let url = "";
if (ENV === "dev") {
  url = `http://localhost:3000`;
} else {
  url = `http://www.moon.cn`;
}
console.log(ENV, "环境；", url);

// moment依赖优化
// 手动引入所需语言包
import "moment/locale/zh-cn";
// 设置语言
moment.locale("zh-cn");
let r = moment().endOf("day").fromNow();
console.log(r);
