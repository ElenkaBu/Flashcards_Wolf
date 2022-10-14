const logout = document.querySelector('#logout');

if (logout) {
  logout.addEventListener('click', async (event) => {
    event.preventDefault();
    await fetch('/api/logout');
  });
}
