let emperor = {
  prince: ['p1', 'p2', 'p3'],
  princess: ['pe1', 'pe2']
}

let prince = Symbol('ext')
emperor[prince] = 'ext'

console.log(emperor)

let arr = ['leo', 'man', 'girl']

let iterator = arr[Symbol.iterator]()

console.log(iterator.next())
