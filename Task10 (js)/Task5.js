alert('Task5: setInterval');

//1

var count = 0;
var timer = setInterval(function() {
  alert('犬が大好き');
  count++;
  if (count >= 5) {
    clearInterval(timer);
  }
  alert(count)
}, 2000);

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





