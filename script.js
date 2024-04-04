document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        const additionalInfo = this.querySelector('.additional-info');
        additionalInfo.style.display = (additionalInfo.style.display === 'none') ? 'block' : 'none';
      });
    });
  });