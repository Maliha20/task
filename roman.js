function romToInt(num) {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let int = 0;
    for (let i = 0; i < num.length; i++) {
      const currentSymbolValue = romanValues[num[i]];
      const nextSymbolValue = romanValues[num[i + 1]];
  
      if (nextSymbolValue > currentSymbolValue) {
        int += nextSymbolValue - currentSymbolValue;
        i++; 
      } else {
        int += currentSymbolValue;
      }
    }
  
    return int;
  }
  
 
  const rom1 = "V";
  const rom2 = "XI";
  console.log(`${rom1} in integer is: ${romToInt(rom1)}`);
  console.log(`${rom2} in integer is: ${romToInt(rom2)}`);
  