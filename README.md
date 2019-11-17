# cryptounit-converter

**easily convert btc, ether, bnb to their crypto unit** ✨



# Install
install npm package

    npm i cryptounit-converter 

import package 

    const conv = require('cryptounit-converter')

# Usage
This package currently supports *bitcoin* , *ethereum* and *binance chain* blockchains

## API

> convert from btc to

**convertBTC( value , unit)** 

*unit (string) - satoshi, mbtc, ubtc, btc*

> convert from satoshi to

**convertSatoshi( value , unit)** 

*unit (string) -btc*

> convert from ether to

**convertEther( value , unit)** 

*unit (string) - gewi, wei, finney, mwei, kwei, ether*

> convert from wei to

**convertWei( value , unit)** 

*unit (string) - ether*

> convert from bnb to

**convertBNB( value , unit)** 

*unit (string) - jager*

> convert from jager to

**convertJager( value , unit)** 

*unit (string) - bnb*


**example**

    conv.convertBTC(1, 'satoshi'); //100000000
    
    conv.convertBTC(12345, 'mbtc'); //12345000
    
    conv.convertSatoshi(100000000, 'btc'); //1
    
    conv.convertBNB(100, 'jager'); //10000000000
    
    conv.convertEther(300, 'finney'); //300000
    
    conv.convertWei(300, 'ether'); //0.0000000000000003
    




  

# License

MIT © codaelux

