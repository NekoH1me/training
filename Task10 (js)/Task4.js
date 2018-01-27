console.log('Task4: Comparison');

function sumWith(number) {
  return this.currentValue += number;
  }

  var number = 2;
  var value = {currentValue: 3};
  var new_value = {currentValue: -1};

console.log(sumWith.bind(value)(number));  
console.log(sumWith.call(value, number-2));
console.log(sumWith.apply(value, [number-2]));

function NewsumWith() {    
    return {
        sum: function() {
            return sumWith.call(new_value, number)
          }
        }
    }

var sum = NewsumWith();

console.log(sum.sum());
console.log(sum.sum());
console.log(sum.sum());
console.log(sum.sum());
console.log(sum.sum());
console.log(sum.sum());
