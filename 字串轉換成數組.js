const list = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0
}

const str = '我是楊里歐'

const toArray = function (s) {
  try {
    console.log('try ok')
    console.log('s :', s)

    return Array.prototype.slice.call(s)
  } catch (e) {
    let arr = []
    for (var i = 0, len = s.length; i < len; i) {
      arr[i] = s[i]
    }
    return arr
  }
}

console.log(toArray(list))
