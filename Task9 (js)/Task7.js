 console.log('Task7: Repeat');
 
  function MultiplyOrThrow(a, b) {
    if (Math.random() < 0.5) {
      return a * b;
    } else {
      throw 'MultiplicatorUnitFailure';
    }      
  }

  function reliableMultiply(a, b) {
    var res;
    while (true) {
      try {
        res = MultiplyOrThrow(a, b);
        break;
      } catch (err) {
        if (!(err instanceof MultiplicatorUnitFailure)) {
          throw err;
        }
      }
    }

    return res;
  }

  console.log('Power of random \n', reliableMultiply(1,2));
