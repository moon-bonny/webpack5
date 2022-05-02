/*
 * @Author Moon
 * @Date 2022-01-23 09:02:48
 * @LastEditTime 2022-02-02 11:22:01
 * @LastEditors Please set LastEditors
 * @Description 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath \monorepoe:\webpack-demo\index.js
 */
let str = "test文件中的string";
class StrClass {}

let add = function (a, b) {
  return a + b + "sum";
};
let minus = (a, b) => {
  return a - b + "minus";
};
export default { str, add, minus };
