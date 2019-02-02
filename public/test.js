const out = document.getElementsByTagName('textarea')[0];

document.querySelectorAll('input').forEach(btn => {
  btn.addEventListener('click', event =>
    axios.get(btn.getAttribute('data-endpoint'))
      .then(response => {
        out.value = JSON.stringify(response, null, 2);
      })
      .catch(error => {
        out.value = JSON.stringify(error.response, null, 2);
      }));
});
