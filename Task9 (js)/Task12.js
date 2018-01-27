<<<<<<< HEAD
  console.log('Task12: Difference in Years');

  function differenceInYears(year1, year2) {
    if ((typeof year1 === 'object') && (typeof year2 === 'object')) {
      return Math.abs((year1 - year2)/(1000 * 60 * 60 * 24 * 365));
    }
  }

  console.log('Difference between years (2016,10,2) and (2016,10,2): ', 
               differenceInYears(new Date(2014,10,2), new Date(2016,10,2)) + ' years');
  
=======
  console.log('Task12: Difference in Years');

  function differenceInYears(year1, year2) {
    if ((typeof year1 === 'object') && (typeof year2 === 'object')) {
      return Math.abs((year1 - year2)/(1000 * 60 * 60 * 24 * 365));
    }
  }

  console.log('Difference between years (2016,10,2) and (2016,10,2): ', 
               differenceInYears(new Date(2014,10,2), new Date(2016,10,2)) + ' years');
  
>>>>>>> 2a700921430edc158a99c3abf228f615bf2b1108
