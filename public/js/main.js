const btn = document.querySelector('.play');
const errBtn = document.querySelector('.err-btn');

btn.addEventListener('click', async (event) => {
  event.preventDefault();

  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
  });
  const data = await response.json();
  if (data.status === 'error') {
    errBtn.innerHTML = data.message;
  }
});
