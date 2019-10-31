const tcpPortUsed = require('tcp-port-used')
const host = `127.0.0.1`

module.exports = async port=> await tcpPortUsed.check(+port, host)