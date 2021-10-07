function factorial(n) {
  if (n === 0) return 1
  else return n * factorial(n - 1)
}

console.log(factorial(10))

// 一個細胞，一小時分裂一次，生命週期是3小時，求 n 小時候，容器內有多少細胞？

function total(n) {
  var yellow = function (n) {
    if (n === 0 || n === 1) return 0
    return green(n - 1)
  }
  var green = function (n) {
    if (n === 0) return 0
    return white(n - 1)
  }
  var white = function (n) {
    if (n === 0) return 1
    return white(n - 1) + green(n - 1) + yellow(n - 1)
  }
  return yellow(n) + green(n) + white(n)
}

console.log(total(4))
