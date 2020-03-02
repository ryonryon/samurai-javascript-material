window.addEventListener('load', () => {
  fetch('https://uinames.com/api/?amount=10')
    .then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          console.log(data);
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});
