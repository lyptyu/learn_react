// function *test() {
//   console.log("11111")
//   var input1 = yield "111-输出";
//   console.log("22222",input1)
//   var input2 = yield "222-输出";
//   console.log("3333",input2)
//   var input3 = yield "333-输出";
//   console.log("44444",input3)
// }
// var kerwintest = test()
// var res1 = kerwintest.next()
// console.log('res1', res1)
// var res2 = kerwintest.next('aaa')
// console.log('res2', res2)
// var res3 = kerwintest.next('bbb')
// console.log('res3', res3)
// var res4 = kerwintest.next('ccc')
// console.log('res4', res4)

function *test1() {
  setTimeout(()=>{
    console.log('11111-success')
    kerwintest1.next()
  },1000)
  yield
  setTimeout(()=>{
    console.log('22222-success')
    kerwintest1.next()
  },1000)
  yield
  setTimeout(()=>{
    console.log('33333-success')
  },1000)
  yield
}

var kerwintest1 = test1()
kerwintest1.next()

