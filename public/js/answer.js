const form = document.querySelector('#questForm');
console.log(form);
const errAnswer = document.querySelector('.err-answer');
console.log(form);

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const answer = event.target.answer.value;
  const { id } = event.target;

  const response = await fetch(`/topic/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      answer,
      id,
    }),
  });
  const data = await response.json();
  errAnswer.innerHTML = data.message;
});
