
// function colorSort () {
//   colors.forEach(c => console.log(c.match('a')))
// }


// console.log(colors);



// console.log(colors.map((n) => ({
//     `<li>${n.name} ${n.hex}</li>`
//   })));


// let li = document.createElement('li');









colors.map(n => ({
  name: n.name
})).forEach(i => {
  let lit = document.createElement('li');
  lit.innerHTML = i.name;
  document.body.appendChild(lit);
})
