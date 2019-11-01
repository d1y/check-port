#!/usr/bin/env node
const checkPort = require('./checkPort')

const sayPort = async port=> {
  let is = await checkPort(port)
  console.log('端口:', +port, is ? '已占用' : '未占用')
}

;(async ()=> {
  const args = process.argv
  let port = args[2]
  let middle = port == 'loop'
  if (port == 'loop') port = args[3]
  if (middle) {
    setInterval(()=> {
      sayPort(port)
    }, 2e3)
  } else {
    sayPort(port)
  }

})()
