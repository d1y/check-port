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

the `CLI` usage

```console

npm i -g ck-port

# check

ck-port 2333

# loop check

ck-port loop 2333

```

Thank you🍓
