const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider2');

const indicatorParent = document.querySelector('.control2 ul'); 
const indicators = document.querySelectorAll('.control2 li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control2 .selected2').classList.remove('selected2');
    indicator.classList.add('selected2');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control2 .selected2').classList.remove('selected2');
  indicatorParent.children[index].classList.add('selected2');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 4 - 1) ? index+1 : 3;
  document.querySelector('.control2 .selected2').classList.remove('selected2');
  indicatorParent.children[index].classList.add('selected2');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});
