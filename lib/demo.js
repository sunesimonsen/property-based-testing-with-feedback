module.exports = {
    findTheSecretCharacters(input) {
        let i = -1;

        if ((i = input.indexOf('s', i)) !== -1) {
            if ((i = input.indexOf('e', i)) !== -1) {
                if ((i = input.indexOf('c', i)) !== -1) {
                  if ((i = input.indexOf('r', i)) !== -1) {
                    if ((i = input.indexOf('e', i)) !== -1) {
                      if ((i = input.indexOf('t', i)) !== -1) {
                        throw new Error('BOOM!!!');
                      }
                    }
                  }
                }
            }
        }
    },
    findTheSecretWord(input) {
        let i = -1;

        if ((i = input.indexOf('s')) !== -1) {
            if (input[i + 1] === 'e') {
                if (input[i + 2] === 'c') {
                    if (input[i + 3] === 'r') {
                        if (input[i + 4] === 'e') {
                            if (input[i + 5] === 't') {
                                throw new Error('BOOM!!!');
                            }
                        }
                    }
                }
            }
        }
    },
    findTheSecretPrefix(input) {
        if (input[0] === 's') {
            if (input[1] === 'e') {
                if (input[2] === 'c') {
                    if (input[3] === 'r') {
                        if (input[4] === 'e') {
                            if (input[5] === 't') {
                                throw new Error('BOOM!!!');
                            }
                        }
                    }
                }
            }
        }
    },
    findPalindrome(input) {
      const repeatLength = 4;
      for (let i = repeatLength; i < input.length - repeatLength; i += 1) {
        let j = 0;
        while (j < repeatLength) {
          if (input[i - repeatLength + j] !== input[i + repeatLength - j]) {
            break
          }
          j++
        }

        if (j === repeatLength) {
          throw new Error('BOOM!!!');
        }
      }
    },
    findTheMagicNumbers(a, b, c) {
        if (a === 6) {
            if (b === 6) {
                if (c === 6) {
                    throw new Error('BOOM!!!');
                }
            }
        }
    }
};
