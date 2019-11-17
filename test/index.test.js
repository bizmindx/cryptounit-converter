const converter = require('../src');

describe('convertBTC', () => {
  describe('convertBTC success', () => {
    it('should successfully convert values', () => {
      const btcTestData = [
        {
          value: 4.6,
          unit: 'satoshi',
          result: 460000000
        },
        {
          value: 4.6,
          unit: 'mbtc',
          result: 4600
        },
        {
          value: 4.6,
          unit: 'ubtc',
          result: 4600000
        },
        {
          value: 4.6,
          unit: 'btc',
          result: 4.6
        }
      ];
      btcTestData.map(data => {
        expect(converter.convertBTC(data.value, data.unit)).toBe(data.result);
      });
    });
  });
  describe('convertBTC error', () => {
    it('should throw an error', () => {
      const btcTestData = [
        {
          value: 4.6,
          result: 'unit is required'
        },
        {
          unit: 'satoshi',
          result: 'value is required'
        },
        {
          value: 4.6,
          unit: 'satoshiiii',
          result: 'Invalid unit, units can either be satoshi, mbtc, ubtc, btc'
        }
      ];
      btcTestData.map(data => {
        expect(() => converter.convertBTC(data.value, data.unit)).toThrow(data.result);
      });
    });
  });
});
describe('convertSatoshi', () => {
  describe('convertSatoshi success', () => {
    it('should successfully convert values', () => {
      const btcTestData = [
        {
          value: 100000000,
          unit: 'btc',
          result: 1
        },
        {
          value: 9000,
          unit: 'btc',
          result: 0.00009
        },
      ];
      btcTestData.map(data => {
        expect(converter.convertSatoshi(data.value, data.unit)).toBe(data.result);
      });
    });
  });
  describe('convertSatoshi error', () => {
    it('should throw an error', () => {
      const btcTestData = [
        {
          value: 4.6,
          result: 'unit is required'
        },
        {
          unit: 'satoshi',
          result: 'value is required'
        },
        {
          value: 4.6,
          unit: 'satoshiiii',
          result: 'Invalid unit, units can only be btc'
        }
      ];
      btcTestData.map(data => {
        expect(() => converter.convertSatoshi(data.value, data.unit)).toThrow(data.result);
      });
    });
  });
});

