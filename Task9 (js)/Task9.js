
  console.log('Task9: Quotation marks in the text');

  function replaceQuotes(text) {
    return text.replace(/(\w'\w)|(')/g, 
    function(match, p1, p2) {
      if (p1) {
        return p1;
      }
      if (p2) {
        return '"';
      }
    })
  }
  console.log(replaceQuotes("I'm a 'hero'"));
  
