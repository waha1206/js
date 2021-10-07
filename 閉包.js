// function a() {
//   b()
//   function b() {
//     c()
//     function c() {
//       console.log('我在裡面！')
//     }
//   }
// }
// a()

// for (var i = 0; i < 5; i++) {
//   // setTimeout(function () {
//   //   console.log(i++)
//   // }, 4000)

//   ;(function (x) {
//     setTimeout(function () {
//       console.log(x++)
//     }, 4000)
//   })(i)
// }

// console.log(i)

var a = 'apple'
function fighting() {
  var a = 'angle'
  console.log(this)
}

fighting()
console.log(a)
