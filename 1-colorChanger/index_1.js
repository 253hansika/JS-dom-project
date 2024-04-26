const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

box.forEach(function (boxs) {
  boxs.addEventListener('click', function (e) {
    if (e.target.id === 'yellow') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'aquamarine') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'aqua') {
      body.style.background = e.target.id;
    }
  });
});
