# ck-port

check tcp port is used

## Install

```console
$ npm i --save ck-port
```

## Usage

```js
const checkPort = require('ck-port/checkPort')
;(async ()=> {
  const is = checkPort(2333)
  console.log('the tcp port used: ', is ? 'yes' : 'no')
})()
```