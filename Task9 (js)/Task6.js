 console.log('Task6: Every and some');

  function every(arr, func) {
    var allTrue = true;

    for(var i = arr.length; i--;) {
      allTrue = !!func(arr[i]);
      if (!allTrue) {
        break;
      }
    }
      
    return allTrue;
  }

  function some(arr, func) {
    var oneTrue = false;

    for(var i = arr.length; i--;) {
      oneTrue = !!func(arr[i]);
      if (oneTrue) {
        break;
      }
    }

    return oneTrue;
  }

  console.log('test every([NaN, NaN, NaN], isNaN)', every([NaN, NaN, NaN], isNaN));
  console.log('test every([NaN, NaN, 4], isNaN)', every([NaN, NaN, 4], isNaN));
  console.log('test some([NaN, 3, 4], isNaN)', some([NaN, 3, 4], isNaN));
  console.log('test some([2, 3, 4], isNaN)', some([2, 3, 4], isNaN));
