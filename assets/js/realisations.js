document.addEventListener('DOMContentLoaded', () => {
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalImageTitle');
  const modalDesc = document.getElementById('modalImageDescription');
  const downloadBtn = document.getElementById('downloadImageBtn');

  document.querySelectorAll('.image-container[data-image]').forEach(el => {
    el.addEventListener('click', () => {
      modalImage.src = el.dataset.image;
      modalTitle.textContent = el.dataset.title;
      modalDesc.textContent = el.dataset.description;
      downloadBtn.href = el.dataset.image;
    });
  });
});
