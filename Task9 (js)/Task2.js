  function countChar(str, chr) {
    console.log('Task 2: Random string');

    var len = str.length;
    var counter = 0;
    while(len--) {
      if (str.charAt(len).toLowerCase() === chr.toLowerCase()) {
        counter++;
      }
    }
    return counter;
  }

  console.log('Lets test! \n', countChar('I love dogs', 'o'));
