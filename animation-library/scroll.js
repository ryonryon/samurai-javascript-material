const option = {
  delay: 400,
  duration: 2000,
  easing: 'ease-in',
  opacity: 0
};
const option2 = {
  ...option,
  rotate: {
    x: 0,
    y: 90,
    z: 0
  }
};
const option3 = {
  ...option,
  rotate: {
    x: 0,
    y: 0,
    z: 90
  }
};
const option4 = {
  ...option,
  rotate: {
    x: 90,
    y: 90,
    z: 90
  }
};
ScrollReveal().reveal('.about', option);
ScrollReveal().reveal('.works', option4);
ScrollReveal().reveal('.skills', option3);
ScrollReveal().reveal('.contact', option4);
