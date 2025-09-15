// =====================
// Scroll Animations
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
});

// =====================
// Anime.js Animations
// =====================
document.addEventListener("DOMContentLoaded", () => {
  // Text animation (hero)
  const textWrapper = document.querySelector('.ml3');
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({ loop: false })
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        translateY: [50,0],
        easing: "easeOutExpo",
        duration: 750,
        delay: (el, i) => 50 * i
      });
  }

  // Course cards stagger animation
  anime({
    targets: '.course-card',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200, {start: 500}),
    duration: 800,
    easing: 'easeOutExpo'
  });

  // Floating shapes animation
  anime({
    targets: '.floating-shape',
    translateY: [0, 20],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 2000
  });
});
