const { test } = require()

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testa se uppercase é uma função', () => {
  expect(typeof uppercase()).toBe('function');
});