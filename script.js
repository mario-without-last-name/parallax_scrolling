let text      = document.getElementById('text');
let treeLeft  = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft  = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + 'px';
  text.style.scale     = 1 - value * 0.003;
  treeLeft.style.left  = value * -1.5 + 'px';
  treeRight.style.left = value * 1.5 + 'px';
  gateLeft.style.left  = value * 0.5 + 'px';
  gateRight.style.left = value * -0.5 + 'px';
})