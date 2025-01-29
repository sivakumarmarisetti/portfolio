window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.style.display = 'none';
    document.body.classList.remove('loading');
  }, 3000); // Adjust the delay to match the animation duration
  document.body.classList.add('loading');
});