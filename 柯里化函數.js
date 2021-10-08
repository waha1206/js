function url_curring(protocol) {
  return function (hostname, pathname) {
    return `${protocol}${hostname}${pathname}`
  }
}

const url_https = url_curring('https://')

const host1 = url_https('myoacg', '/首頁')
const host2 = url_https('myoacg', '/關於我')
const host3 = url_https('myoacg', '/商品')

console.log(host1)
console.log(host2)
console.log(host3)

console.log(url_curring)

// 檢查不同瀏覽器 監聽事件的用法 這個需要用再瀏覽器端，不能使用再 server 端

// const whichEvent = (function () {
//   if (window.addEventListener) {
//     return function (element, type, listener, useCapture) {
//       element.addEventListener(
//         type,
//         function (e) {
//           listener.call(element, e)
//         },
//         useCapture
//       )
//     }
//   } else if (window.attachEvent) {
//     return function (element, type, handler) {
//       element.attachEvent('on' + type, function (e) {
//         handler.call(element, e)
//       })
//     }
//   }
// })()

// function add() {
//   let args = arguments
//   let inner = function () {
//     args.push(...arguments)
//   }
//   console.log(arguments)
//   return inner
// }

// console.log(add(1)(2))

// 使用柯理化重複利用
const nameList1 = [
  {
    name: 'leo',
    age: 15
  },
  {
    name: 'leo2',
    age: 19
  },
  {
    name: 'leo3',
    age: 14
  }
]

const nameList2 = [
  {
    like: 'apple',
    age: 25
  },
  {
    like: 'banner',
    age: 29
  },
  {
    like: 'fruit',
    age: 24
  }
]

const curring = (name) => (element) => element[name]
//  上面的與下面的意思是一樣的
// const curring = function (name) {
//   return function (element) {
//     return element[name]
//   }
// }
const name_name = curring('name')
const name_like = curring('age')
// map 本身就要放一個 callback 進去了
// map 語法 array.map(function(currentValue, index, arr), thisValue)
console.log(nameList1.map(name_name))
console.log(nameList2.map(name_like))

// -------------------------------------------------------------------------
var sum = 0

function add() {
  // let args = Array.prototype.slice.call(arguments)
  let args = [...arguments]

  let inner = function () {
    args.push(...arguments)
    console.log('args :', args)
    sum = args.reduce((a, b) => a + b)

    return inner
  }
  return inner
}

console.log(add(5, 7)(9)(8)(1, 2, 4)) // 有兩個括號 就會呼叫兩次內函式 如果有多個就要預先做很多 add(1)(2)(3)(4)(5)(6) ... 以此類推
console.log('sum :', sum)

sum = 0
add(1)(2) // add(1) 的時候會出錯，所以再稍微改一下就好了
console.log('sum :', sum)

// 嘗試做一道題目
// add(1)(2)(3) >> 6
// add(1,2,3,4)(3) >> 10
// add(1)(2)(3)(4)(5)(6) >> 21

// function add2(...arg) {
//   console.log(arg)
//   let inner = function (...arg2) {
//     console.log(arg2)
//     return inner
//   }
// }

// add2(1, 2, 3, 4)(5, 7)

// -------------------------------------------------------------------------
// f()執行f函數，返回子函數
// f()()執行子函數，返回孫函數
// f()()()執行孫函數，返回重孫函數



原文網址：https://kknews.cc/code/b56m2oj.html

function fn(n) {
  function f(m) {
    return n + m
  }
  return f
}

s = fn(1)(2)
console.log('s :', s)
