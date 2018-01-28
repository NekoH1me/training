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
  
