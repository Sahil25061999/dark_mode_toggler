var button = document.querySelector('.theme_toggler');
var body = document.querySelector('body');
var svg_container = document.querySelector('.svg_container');
button.addEventListener('click', () => {
  body.classList.toggle('dark');
  const currentRotation = parseInt(
    getComputedStyle(svg_container).getPropertyValue('--rotation')
  );
  console.log(currentRotation);
  svg_container.style.setProperty('--rotation', currentRotation + 180);
});
