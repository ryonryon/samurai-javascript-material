window.addEventListener('load', () => {
  axios
    .get('https://uinames.com/api/?amount=10')
    .then(res => {
      if (res.status === 200) {
        console.log(res.data);
      }
    })
    .catch(err => {
      console.log(err);
    });
});
