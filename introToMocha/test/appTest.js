const assert = require('chai').assert;
// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;

const app = require('../index');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(7, 2);

describe('App', () => {
    describe('sayHello()', () => {
        it('sayHello', () => {
            // let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', () => {
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', () => {
        it('addNumbers should be greater than five', () => {
            // let result = app.addNumbers(7, 2);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return type number', () => {
            // let result = app.addNumbers(7, 2);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
})