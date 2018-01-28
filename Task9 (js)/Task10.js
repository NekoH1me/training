 console.log('Task10: Find Numbers');

 function findNumbers(string){

  var number = /^[+-]?(?:\d+\.\d+|\d+\.|\.\d+|\d+)(?:[Ee][+-]?\d+)?$/;
  var string1 = '';

  string.forEach(function(s) {
    if (!number.test(s))
      string1 += '';
  });
  string.forEach(function(s) {
    if (number.test(s))
      string1 += s + ' ';    
  });
    var split = string1.split(' ');
    var pop = split.pop();
    
    console.log(split);
 }

 console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));
 console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));

  