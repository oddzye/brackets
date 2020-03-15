module.exports = function check(str, bracketsConfig) {
  const isEven = str.length % 2 === 0;
  const openingBrackets = bracketsConfig.map(item => item[0]);
  const closingBrackets = bracketsConfig.map(item => item[1]);

  const isClosingPrevBracket = (closingBracket, prevBracket) => {
    const closingBracketIdx = closingBrackets.findIndex(value => value === closingBracket);
    return openingBrackets[closingBracketIdx] === prevBracket;
  } 
  
  const isOpeningBracket = (bracket) => {
      if (openingBrackets.includes(bracket) && closingBrackets.includes(bracket)) {
        if (stack[stack.length - 1] !== bracket) {
            return true;
        } else {
            return false;
        }
      }
      return openingBrackets.includes(bracket);
  };

  let stack = [];

  if (!isEven) return false;

  str.split('').forEach(item => {
      if (isOpeningBracket(item)) {
          stack.push(item);
      } else if (closingBrackets.includes(item)) {
        if (stack.length === 0) return false;

        if (isClosingPrevBracket(item, stack[stack.length - 1])) {
            stack.pop();
        }
      } else {
          return false;
      }
  });

  return stack.length === 0;
};
