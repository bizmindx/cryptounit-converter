/* eslint-disable no-console */
const Converter = require('../src')

const btc = Converter.convertBTC(12345, 'mbtc');
console.log(btc)

let satoshi = Converter.convertSatoshi(403020, 'btc');
console.log(satoshi);

const ether = Converter.convertEther(300, 'finney')
console.log(ether);

const wei = Converter.convertWei(300, 'ether')
console.log(wei);

const jager = Converter.convertJager(10000000000, 'bnb')
console.log(jager);

const bnb = Converter.convertBNB(100, 'jager');
console.log(bnb);

