'use strict';

let Big = require('bignumber.js');

const convertBTC = (value, unit) => {

    if (value == undefined) {
        throw new TypeError('value is required');
    }
    if (unit == undefined) {
        throw new TypeError('unit is required');
    }
    unit = unit.toLowerCase();

    let bigValue = new Big(value);

    switch (unit) {
        case 'satoshi':
            return Number(bigValue.times(100000000));
            break;
        case 'mbtc':
            return Number(bigValue.times(1000));
            break;
        case 'ubtc':
            return Number(bigValue.times(1000000));
            break;
        case 'btc':
            return Number(bigValue.times(1));
            break;
        default:
            throw new TypeError('Invalid unit, units can either be satoshi, mbtc, ubtc, btc');
    }

}

const convertSatoshi = (value, unit) => {
    if (value == undefined) {
        throw new TypeError('value is required');
    }
    if (unit == undefined) {
        throw new TypeError('unit is required');
    }
    unit = unit.toLowerCase();
    let bigValue = new Big(value);

    switch (unit) {
        case 'btc':
            return Number(bigValue.div(100000000));
            break;
        default:
            throw new TypeError('Invalid unit, units can only be btc');
    }
}

const convertEther = (value, unit) => {
    if (value == undefined) {
        throw new TypeError('value is required');
    }
    if (unit == undefined) {
        throw new TypeError('unit is required');
    }
    unit = unit.toLowerCase();

    switch (unit) {
        case 'wei':
            return new Big(value, 10)
                .div(0.000000000000000001)
                .toString(10);
            break;
        case 'kwei':
            return new Big(value, 10)
                .div(0.000000000000001)
                .toString(10);
            break;
        case 'mwei':
            return new Big(value, 10)
                .div(0.000000000000001)
                .toString(10);
            break;
        case 'ether':
            return new Big(value, 10)
                .div(1)
                .toString(10);
            break;
        case 'finney':
            return new Big(value, 10)
                .div(0.001)
                .toString(10);
            break;
        case 'gwei':
            return new Big(value, 10)
                .div(0.000000001)
                .toString(10);
            break;

        default:
            throw new TypeError('Invalid unit, units can only be wei, kwei, mwei, finney, gwei, ether');
    }

}
const convertWei = (value, unit) => {
    if (value == undefined) {
        throw new TypeError('value is required');
    }
    if (unit == undefined) {
        throw new TypeError('unit is required');
    }
    unit = unit.toLowerCase();

    switch (unit) {
        case 'ether':
            return new Big(value, 10)
                .times(0.000000000000000001)
                .div(1)
                .toString(10);
            break;
        default:
            throw new TypeError('Invalid unit, units can only be ether');
    }
}

const convertJager = (value, unit) => {
    if (value == undefined) {
        throw new TypeError('value is required');
    }
    if (unit == undefined) {
        throw new TypeError('unit is required');
    }
    unit = unit.toLowerCase();

    switch (unit) {
        case 'bnb':
            return new Big(value, 10)
                .times(0.00000001)
                .div(1)
                .toString(10);
            break;
        default:
            throw new TypeError('Invalid unit, units can only be bnb');
    }
}

const convertBNB = (value, unit) => {
    if (value == undefined) {
        throw new TypeError('value is required');
    }
    if (unit == undefined) {
        throw new TypeError('unit is required');
    }
    unit = unit.toLowerCase();

    switch (unit) {
        case 'jager':
            return new Big(value, 10)
                .div(0.00000001)
                .toString(10);
            break;
        default:
            throw new TypeError('Invalid unit, units can only be jager');
    }

}

module.exports = {
    convertBTC,
    convertEther,
    convertSatoshi,
    convertWei,
    convertBNB,
    convertJager
};
