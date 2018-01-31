console.log('Task1: Comparison');

function AlertNumbers(value1, value2){
  return new Promise(function (resolve, reject) {

    if (typeof value1 === 'number' && typeof value2 === 'number') {
     setTimeout(function(){ resolve(CompareNumbers(value1, value2)) }, 1000);
      } else {
           setTimeout(function(){ reject('Error')}, 1000);
      }

     });
}
 AlertNumbers(1,2)
    .then(
      function(result) { console.log('Task1: Comparison: ' + result); })
    .catch(
      function(error) { console.log(error); })

function CompareNumbers(value1, value2){
        if (value1 == value2) {
          return 0;
        }
        
        if (value1 > value2) {
          return 1;
        }

        if (value1 < value2) {
          return -1;
        }
}