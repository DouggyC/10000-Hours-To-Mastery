// Uses ES6 function context syntax to random which background to display
{
  let num = Math.random().toFixed(2);
  let source = document.createElement('source');
  source.id = 'bg';
  source.setAttribute('type', 'video/mp4');
  if (num <= 0.5) source.setAttribute('src', 'lake.mp4');
  if (num >= 0.5) source.setAttribute('src', 'space.mp4');
  document.getElementsByTagName('video')[0].appendChild(source);
}

/** 
// HTML
<video autoplay muted loop>
  <source id="bg" type="video/mp4" />
</video>

// CSS
video {
  position: fixed;
  object-position: center center;
  object-fit: cover;
  width: 120vw;
  max-width: 100%;
  height: 100%;
  z-index: -90;
}

*/
