'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {

  const base = possible.length;
  let str = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    str += possible[index];
  }
  return str;
};

module.exports = { generateKey };
