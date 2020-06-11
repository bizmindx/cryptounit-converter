/* eslint-disable no-param-reassign */
let Big = require('bignumber.js');

const convertBTC = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();

	let bigValue = new Big(value);

	switch (unit) {
	case 'satoshi':
		return Number(bigValue.times(100000000));
	case 'mbtc':
		return Number(bigValue.times(1000));
	case 'ubtc':
		return Number(bigValue.times(1000000));
	case 'btc':
		return Number(bigValue.times(1));
	default:
		throw new TypeError('Invalid unit, units can either be satoshi, mbtc, ubtc, btc');
	}
};

const convertSatoshi = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();
	let bigValue = new Big(value);

	switch (unit) {
	case 'btc':
		return Number(bigValue.div(100000000));
	default:
		throw new TypeError('Invalid unit, units can only be btc');
	}
};

const convertEther = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();

	switch (unit) {
	case 'wei':
		return new Big(value, 10)
			.div(0.000000000000000001)
			.toString(10);
	case 'kwei':
		return new Big(value, 10)
			.div(0.000000000000001)
			.toString(10);
	case 'mwei':
		return new Big(value, 10)
			.div(0.000000000000001)
			.toString(10);
	case 'ether':
		return new Big(value, 10)
			.div(1)
			.toString(10);
	case 'finney':
		return new Big(value, 10)
			.div(0.001)
			.toString(10);
	case 'gwei':
		return new Big(value, 10)
			.div(0.000000001)
			.toString(10);

	default:
		throw new TypeError('Invalid unit, units can only be wei, kwei, mwei, finney, gwei, ether');
	}
};
const convertWei = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();

	switch (unit) {
	case 'ether':
		return new Big(value, 10)
			.times(0.000000000000000001)
			.div(1)
			.toString(10);
	default:
		throw new TypeError('Invalid unit, units can only be ether');
	}
};

const convertJager = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();

	switch (unit) {
	case 'bnb':
		return new Big(value, 10)
			.times(0.00000001)
			.div(1)
			.toString(10);
	default:
		throw new TypeError('Invalid unit, units can only be bnb');
	}
};

const convertBNB = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();

	switch (unit) {
	case 'jager':
		return new Big(value, 10)
			.div(0.00000001)
			.toString(10);
	default:
		throw new TypeError('Invalid unit, units can only be jager');
	}
};

const convertHNS = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();

	let bigValue = new Big(value);

	switch (unit) {
	case 'dollarydoos':
		return Number(bigValue.times(1000000));
	default:
		throw new TypeError('Invalid unit, units can only be dollarydoos');
	}
};

const convertDollaryDoos = (value, unit) => {
	if (!value) {
		throw new TypeError('value is required');
	}
	if (!unit) {
		throw new TypeError('unit is required');
	}
	unit = unit.toLowerCase();
	let bigValue = new Big(value);

	switch (unit) {
	case 'hns':
		return Number(bigValue.div(1000000));
	default:
		throw new TypeError('Invalid unit, unit can only be hns');
	}
};

module.exports = {
	convertBTC,
	convertEther,
	convertSatoshi,
	convertWei,
	convertBNB,
	convertJager,
	convertDollaryDoos,
	convertHNS
};
