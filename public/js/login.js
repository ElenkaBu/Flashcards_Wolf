const logForm = document.querySelector('.logForm');
const errLog = document.querySelector('.err-log');

logForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    method, action, name, password,
  } = event.target;

  const response = await fetch(action, {
    method,
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  if (data.status === 'error') {
    errLog.innerHTML = data.message;
  } else {
    window.location.assign('/');
  }
});
