/**
 * Web Worker
 * Worker(path, option)
 * path: 
 * option: 
 */

if (window.Worker) {
  var worker = new Worker('./worker_02.js')
  console.log(worker)
  worker.postMessage({
    // n: 80
    cmd: 'start',
    msg: 'Hello World!'
  })


  worker.onmessage = function(e) {
    console.log(e)
    // console.group('worker onmessage')
    console.log('%c <-----start----->', 'color:#5cfd99;')
    // console.log(e)
    console.log('\n %c ' + e.data + ' %c', 'color:#7ec699;font-size:20px;', '\n\n')
    console.log('%c <-----end----->', 'color:#5cfd99;')
    // console.groupEnd()
    document.getElementById('test').innerHTML += e.data
    setTimeout(function() {
      worker.postMessage({
        cmd: 'stop',
        msg: 'close!'
      })
    }, 3000);
    
  }
  worker.onerror = function(e) {
    console.group('worker onerror')
    console.log('----------')
    // console.log(e)
    console.log(e.data)
    console.groupEnd()
  }
}