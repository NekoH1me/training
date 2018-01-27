console.log('Task2: Promisification');
//a

 function random(sumWith) {
   return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
       setTimeout(function(){ resolve(Math.random()*3 + sumWith);
          }, timeout)
         })
      }

  random(5)
  .then(
    function(result) { console.log('1st sum = ', result); return random(result); })
  .then(
    function(result) { console.log('2nd sum = ', result); return random(result); })
  .then(
    function(result) { console.log('3rd sum = ', result); })

 //b

    function random() {
      return new Promise(function(resolve) {
         var timeout = Math.random()*3000;
          setTimeout(function(){ resolve(Math.random()*3);
             }, timeout)
            })
         }

    var i = 0;

    for (result = 0; result < 7; result++){  
      random()
      .then(
        function(result) { i++; console.log(i + ' result = ', result); } 
      )
    }   
    

    