  console.log('Task4: Reverse array');

  function reverseArray(arr) {
    var newArr = [];
    arr.forEach(function(e) {
      newArr.unshift(e);
    });
    return newArr;
  }

  function reverseArrayInPlace(arr) {
    var temp;
    for(var begin = 0, end = arr.length; begin < --end; begin++) {
      temp = arr[begin];
      arr[begin] = arr[end];
      arr[end] = temp;
    }
  }

  console.log('Reverse array [1,2,3,4]:', reverseArray([1,2,3,4]));

  var arr;
  arr = [1,2,3,4];
  reverseArrayInPlace(arr);
  console.log('Reverse array in place [1,2,3,4]:', arr);
