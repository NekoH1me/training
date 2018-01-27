console.log('Task3: Сlosures');
    
    function makeCounter() {
        var count = 0;
        var tenremember = [];
        
     return {
          next: function() {
            count++;
            tenremember.push(count);
            return count;
          },
          prev: function() {
            count--;
            tenremember.push(count);
            return count;
          },
          iremember: function() {
            if (tenremember.length > 10){
             tenremember.splice(0, tenremember.length - 10);
          }
            return tenremember;
          }
     }  
    };   
    
    var counter = makeCounter();

console.log('Increase the counter: ',counter.next());
console.log('Increase the counter: ',counter.next());
console.log('Reduce the counter: ',counter.prev());
console.log('Reduce the counter: ',counter.prev());
console.log('Reduce the counter: ',counter.prev());
console.log('Reduce the counter: ',counter.prev());
console.log('Reduce the counter: ',counter.prev());
console.log('Reduce the counter: ',counter.prev());
console.log('Reduce the counter: ',counter.prev());
console.log('Increase the counter: ',counter.next());
console.log('Reduce the counter: ',counter.prev());
console.log('Increase the counter: ',counter.next());
console.log('Increase the counter: ',counter.next());
console.log('History of the last ten values: ', counter.iremember());