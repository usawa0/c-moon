const field = document.querySelector('#field');
const moon = document.querySelector('#moon');

field.addEventListener('mousemove', function (event) {
  const fieldCoords = this.getBoundingClientRect();

  const ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - moon.offsetHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      moon.offsetWidth / 2,
  };

  moon.style.left = ballCoords.left + 'px';
  moon.style.top = ballCoords.top + 'px';
});
