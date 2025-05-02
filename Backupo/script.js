// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  // Button bounce effect
  const playBtn = document.querySelector('.image-button');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playBtn.style.transform = 'scale(1.1)';
      setTimeout(() => playBtn.style.transform = 'scale(1)', 150);
    });
  }
  