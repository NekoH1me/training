console.log('Task5: Merge arrays');

  function mergeArrays(...arrays){
    var result = [];
    arrays.forEach(function(arr){
      result = result.concat(arr.filter(function(arrElement){
        return result.indexOf(arrElement) === -1;
      }));
    });
    return result;
  }

  console.log('mergeArrays([1,2,3], [4,5,6]):', mergeArrays([1,2,3], [4,5,6], [7,8]));
  console.log('mergeArrays([1,2,4], [4,5,6], [7,8]):', mergeArrays([1,2,4], [4,5,6], [7,8]));