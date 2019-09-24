console.log('this is worker_02')
/**
 * 在页面中显示0~10000内所有可以被 n 整除的数
 */
// function calc(n) {
//   var result = []
//   for (var i = 1; i < 10000; i++) {
//     var tmp = i
//     if (i % n == 0) {
//       if (i % (10  * n) == 0) {
//         tmp += ' \n'
//       }
//       result.push(tmp)
//     }
//   }
//   console.log('result', result)
//   self.postMessage(result.join(' '))
//   self.close()
// }

// onmessage = function(e) {
//   calc(e.data.n)
// }

self.addEventListener('message', function(e) {
  var data = e.data
  console.log(data)
  switch (data.cmd) {
    case 'start':
      self.postMessage('<p>WORKER STARTED: ' + data.msg + '</p>')
      break;
    case 'stop':
      self.postMessage('<p>WORKER STOPED: ' + data.msg + '</p>')
      self.close()
      break;
    default:
      self.postMessage('<p>UnKnown command: ' + data.msg + '</p>')
  }
}, false)
