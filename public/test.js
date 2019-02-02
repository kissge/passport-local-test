const out = document.getElementsByTagName('textarea')[0];

document.querySelectorAll('input').forEach(btn => {
  btn.addEventListener('click', event =>
    axios[btn.getAttribute('data-method')](
      btn.getAttribute('data-endpoint'),
      btn.getAttribute('data-payload'),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      },
    )
      .then(response => {
        out.value = JSON.stringify(response, null, 2);
      })
      .catch(error => {
        out.value = JSON.stringify(error.response, null, 2);
      }));
});
