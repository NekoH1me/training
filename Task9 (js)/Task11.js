<<<<<<< HEAD
  console.log('Task11: Day and month');

  function getNames(date) {
    if (typeof date === 'object') {
      return date.toLocaleString("ja-JP-u-ca-japanese", {month: 'long'}) 
      + '(' + date.toLocaleString("en", {month: 'long'}) + ') '
      + date.toLocaleString("ja-JP-u-ca-japanese", {weekday: 'long'})
      + '(' + date.toLocaleString("en", {weekday: 'long'}) + ')'
    }
  }

  console.log(getNames(new Date()));
  
=======
  console.log('Task11: Day and month');

  function getNames(date) {
    if (typeof date === 'object') {
      return date.toLocaleString("ja-JP-u-ca-japanese", {month: 'long'}) 
      + '(' + date.toLocaleString("en", {month: 'long'}) + ') '
      + date.toLocaleString("ja-JP-u-ca-japanese", {weekday: 'long'})
      + '(' + date.toLocaleString("en", {weekday: 'long'}) + ')';
    }
  }

  console.log(getNames(new Date()));
  
>>>>>>> 2a700921430edc158a99c3abf228f615bf2b1108
