function generateColors() {
  const letters = '0123456789ABCDEF';
  let changeColor = ['cor1', 'cor2', 'cor3']
  for (let index = 0; index < changeColor.length; index += 1) {
    let colorGenerate = '#';
    for (let index2 = 0; index2 < 6; index2 += 1) {
      colorGenerate += letters[Math.floor(Math.random() * 16)];
    }
    console.log(colorGenerate);
    changeColor[index] = colorGenerate
    // changeColor[index].style.backgroundColor = colorGenerate;
    // console.log(changeColor[index].style.backgroundColor);
    console.log(changeColor);
  }
}

console.log(generateColors());
