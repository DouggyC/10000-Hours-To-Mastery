

// Mouse coordinate from the element
function track(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  console.log(x,y);
}

document.addEventListener('mousemove', track);


// Mouse coordinate from the document
function track(e) {
  let x = e.clientX;
  let y = e.clientY;
  console.log(x,y);
}

document.addEventListener('mousemove', track);


window.scrollBy(x,y)



function track(e) {
  console.log(window.scrollX, window.scrollY);
}

document.addEventListener('scroll', track);
