let lightTheme = false;
document.querySelector('.btn').addEventListener('click', () => {
  let body = document.body;
  let link = document.querySelector('.link');
  if (!lightTheme) {
    body.style.backgroundColor = '#fff';
    body.style.color = '#222';
    link.style.color = '#222';
    lightTheme = true;
  } else {
    body.style.backgroundColor = '#222';
    body.style.color = '#fff';
    link.style.color = '#fff';
    lightTheme = false;
  }
});
