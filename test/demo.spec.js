/*global describe, it, beforeEach*/
const Generators = require('chance-generators');
const expect = require('unexpected');

const demo = require('../lib/demo');

expect.use(require('unexpected-check'));

const { number, text } = new Generators(42);

describe('unexpected-check', () => {
    it('does not find the secret characters', () => {
        expect((text) => {
            demo.findTheSecretCharacters(text);
        }, 'to be valid for all', text);
    });

    it('does not find the secret word', () => {
        expect((text) => {
            demo.findTheSecretWord(text);
        }, 'to be valid for all', text);
    });

    it('does not find the secret prefix', () => {
        expect((text) => {
            demo.findTheSecretPrefix(text);
        }, 'to be valid for all', text);
    });

    it('does not find magic numbers', () => {
        expect((a, b, c) => {
            demo.findTheMagicNumbers(a, b, c);
        }, 'to be valid for all', number, number, number);
    });
});
