// 面试

/**
 * 传入数据、操作函数
 */
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

function groupBy(arr, fn) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i]) in obj) {
      obj[fn(arr[i])].push(arr[i]);
    } else {
      obj[fn(arr[i])] = [arr[i]];
    }
  }
  console.log(obj);
}

/**
 * 闭包应用，实现once函数
 */
const test = () => { console.log(1) }
const func = once(test)

func(); // 输出1
func(); // 无输出
func(); // 无输出

function once(fn) {
  let flag = true
  return function () {
    if (flag) {
      fn();
      flag = false;
    };
  }
}
