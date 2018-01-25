  console.log('Task8: Deep comparison');

  function deepCompare(a, b) {
    if (a === null && b === null) {
      return true;
    }
    if (a === null || b === null) {
      return false;
    }

    if (typeof a === 'object' && typeof b === 'object') {
      if (a === b) {
        return true;
      }

      if (
        (Array.isArray(a) || Array.isArray(b)) &&
        !(Array.isArray(a) && Array.isArray(b))
      ) {
        return false;
      }

      var keysA = Object.keys(a);
      var keysB = Object.keys(b);

      if (keysA.length !== keysB.length) {
        return false;
      }

      return keysA.every(function (key) {
        return deepCompare(a[key], b[key]);
      });
    }

    if (typeof a === 'object' || typeof b === 'object') {
      return false;
    }

    return a === b;
  }

  var obj1 = { one: 1, two: '2' };
  var obj2 = { one: 1, two: '2' };
  console.log("deepCompare({ one: 1, two: '2' },{ one: 1, two: '2' }): ", deepCompare(obj1, obj2));
  var obj3 = { two: '2' };
  console.log("deepCompare({ one: 1, two: '2' },{two: '2' }): ", deepCompare(obj1, obj3));

