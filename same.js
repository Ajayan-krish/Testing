function hasCommonKeyword(array1, array2) {
    return array1.some(keyword => array2.includes(keyword));
  }
  
  // Example usage:
  const keywords1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const keywords2 = ['fig', 'grape', 'date'];
  
  const result = hasCommonKeyword(keywords1, keywords2);
  
  
  console.log(result); // Output: true (since 'date' is common)
  