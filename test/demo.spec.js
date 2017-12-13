/*global describe, it, beforeEach*/
const Generators = require('chance-generators');
const expect = require('unexpected');

const demo = require('../lib/demo');

expect.use(require('unexpected-check'));

const { natural, string } = new Generators(42);

describe('unexpected-check', () => {
    it('does not find the secret characters', () => {
        expect((text) => {
            demo.findTheSecretCharacters(text);
        }, 'to be valid for all', string({ length: natural({ max: 50 }) }));
    });

    it('does not find the secret word', () => {
        expect((text) => {
            demo.findTheSecretWord(text);
        }, 'to be valid for all', string({ length: natural({ max: 50 }) }));
    });

    it('does not find the secret prefix', () => {
        expect((text) => {
            demo.findTheSecretPrefix(text);
        }, 'to be valid for all', string({ length: natural({ max: 50 }) }));
    });

    it('foo', () => {
      demo.findPalindrome('watkayakwat')
      expect((text) => {
        demo.findPalindrome(text);
      }, 'to be valid for all', string({ length: natural({ max: 50 }) }));
    });

    it('does not find magic numbers', () => {
        const numbers = natural({ max: 200 });

        expect((a, b, c) => {
            demo.findTheMagicNumbers(a, b, c);
        }, 'to be valid for all', numbers, numbers, numbers);
    });
});
