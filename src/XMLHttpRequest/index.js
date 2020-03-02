window.addEventListener('load', () => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        var data = xhr.responseText;
        console.log(data);
      } else {
        console.log('Failed. HttpStatus: ' + xhr.statusText);
      }
    }
  };

  xhr.open('GET', 'https://uinames.com/api/?amount=10');

  xhr.send();
});
