
const switchElement = document.querySelector('.switch');

const BackgroundShadow1 = document.querySelector('.background-sub-section1');
const BackgroundShadow2 = document.querySelector('.background-sub-section2');
const BackgroundShadow3 = document.querySelector('.background-sub-section3');
const BackgroundShadow4 = document.querySelector('.background-sub-section4');

const square1 = document.getElementById('tesla');
const square2 = document.getElementById('oshop');
const square3 = document.getElementById('games');
const square4 = document.getElementById('pizza');

const Tesla_msg = document.querySelector('.tesla__msg');
const oshop_msg = document.querySelector('.oshop__msg');
const games_msg = document.querySelector('.games__msg');
const pizza_msg = document.querySelector('.pizza__msg');

const SkillsList1 = document.querySelector('.skills__list1');
const SkillsList2 = document.querySelector('.skills__list2');

const skills_html = document.querySelector('.skills__percentage__html');
const skills_css = document.querySelector('.skills__percentage__CSS');
const skills_javascript = document.querySelector('.skills__percentage__Javascript');
const skills_react = document.querySelector('.skills__percentage__React');

const skills_blender = document.querySelector('.skills__percentage__blender');
const skills_painter = document.querySelector('.skills__percentage__painter');
const skills_lowpoly = document.querySelector('.skills__percentage__lowpoly');

const Span_90 = document.querySelector('.span__90');
const Span_80 = document.querySelector('.span__80');
const Span_75 = document.querySelector('.span__75');
const Span_70 = document.querySelector('.span__70');
const Span_65 = document.querySelector('.span__65');
const Span_60 = document.querySelector('.span__60');
const Span_35 = document.querySelector('.span__35');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})


square1.addEventListener('mouseenter', () => {
  BackgroundShadow1.classList.toggle('shadow');
  Tesla_msg.classList.add('show__msg');
})

square1.addEventListener('mouseleave', () => {
  BackgroundShadow1.classList.toggle('shadow');
  Tesla_msg.classList.remove('show__msg');
})



square2.addEventListener('mouseenter', () => {
  BackgroundShadow2.classList.toggle('shadow');
  oshop_msg.classList.add('show__msg');
})

square2.addEventListener('mouseleave', () => {
  BackgroundShadow2.classList.toggle('shadow');
  oshop_msg.classList.remove('show__msg');
})



square3.addEventListener('mouseenter', () => {
  BackgroundShadow3.classList.toggle('shadow');
  games_msg.classList.add('show__msg');
})

square3.addEventListener('mouseleave', () => {
  BackgroundShadow3.classList.toggle('shadow');
  games_msg.classList.remove('show__msg');
})



square4.addEventListener('mouseenter', () => {
  BackgroundShadow4.classList.toggle('shadow');
  pizza_msg.classList.add('show__msg');
})

square4.addEventListener('mouseleave', () => {
  BackgroundShadow4.classList.toggle('shadow');
  pizza_msg.classList.remove('show__msg');
})


SkillsList1.addEventListener('mouseenter', () => {

  skills_html.style.width = "80%";
  skills_css.style.width = "75%";
  skills_javascript.style.width = "65%";
  skills_react.style.width = "60%";

  Span_80.textContent = "80%";
  Span_75.textContent = "75%";
  Span_65.textContent = "65%";
  Span_60.textContent = "60%";

  Span_80.classList.add('show');
  Span_75.classList.add('show');
  Span_65.classList.add('show');
  Span_60.classList.add('show');

})

SkillsList2.addEventListener('mouseenter', () => {

  skills_blender.style.width = "70%";
  skills_painter.style.width = "35%";
  skills_lowpoly.style.width = "95%";

  Span_35.textContent = "35%";
  Span_70.textContent = "70%";
  Span_90.textContent = "90%";

  Span_35.classList.add('show');
  Span_70.classList.add('show');
  Span_90.classList.add('show');

})




