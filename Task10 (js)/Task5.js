alert('Task5: setInterval');

//1

var timer1 = setInterval(function() {
  alert('犬が大好き');
}, 2000);

setTimeout(function() {
  clearInterval(timer1);
}, 10000);

//2

var interval = 1000;
var delta = 2000;

function next() {
  if (interval > 9000){ 
    return;
  }
  setTimeout(function() {
    interval += delta;
    alert('犬が大好き');
    next();
  }, interval);
 }

  next();





