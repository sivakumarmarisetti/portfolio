window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.style.display = 'none';
  }, 3000); // Adjust the delay to match the animation duration
});