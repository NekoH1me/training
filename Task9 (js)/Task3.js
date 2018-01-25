  console.log('Task 3: Range');
  
  function makeArray(start, end, step) {

    var res = [];
    step = step || 1;

    if (start < end) {
      while (start <= end) {
        res.push(start);
        start += step;
      }
    } else if ((end < start) && (step < 0)) {
      while (end <= start) {
        res.push(start);
        start += step;
      } 
    } else {console.log('If beginning of the range is greater than end of the range the step is going to be negative, so your array is empty.');}

    return res;
  }

  console.log('Range = (1,10):', makeArray(1,10));
  console.log('Range = (-1,9):', makeArray(-1,9));
  console.log('Range = (2,-3):', makeArray(2,-3));
  console.log('Range = (2,-3,-1):', makeArray(2,-3,-1));
  console.log('Range = (1,10,2):', makeArray(1,10,2));
  console.log('Range = (-1,10,2):', makeArray(-1,10,2));
  console.log('Range = (10,1,-1):', makeArray(10,1,-1));
