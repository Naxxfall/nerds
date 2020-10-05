const slides = document.querySelectorAll(".slide-wrapper");
const sliderControls = document.querySelectorAll(".slider__control");
const controlIndicators = document.querySelectorAll(".slider__control-indicator");
const showIfJS = document.querySelectorAll(".no-js-hide");
const rangeMin = document.querySelector(".range__scale--min");
const rangeMax = document.querySelector(".range__scale--max");
const priceMin = document.querySelector(".range-value__min-price");
const priceMax = document.querySelector(".range-value__max-price");
const numbers = /^[0-9]+$/;

showIfJS.forEach((element) =>{
  element.classList.remove("no-js-hide");
});

function changeSlide(slides, number){
  slides.forEach((slide)  => {
    slide.classList.remove("slider__slide--show");
  });
  slides[number].classList.add("slider__slide--show");
}

function changeSliderControls(controls, indicators, number) {
  controls.forEach((control, index) => {
    control.disabled = false;
    indicators[index].classList.remove("slider__control-indicator--current");
  });
  controls[number].disabled = true;
  indicators[number].classList.add("slider__control-indicator--current");
}

sliderControls.forEach((slideControl, index) => {
  slideControl.addEventListener("click", function(evt){
    evt.preventDefault();
    changeSlide(slides, index);
    changeSliderControls(sliderControls, controlIndicators, index);
  });
});

function checkScales(min, max){
  if (min.value > max.value){
    max.value=min.value;
  }
  if (max.value < min.value){
    min.value=max.value;
  }
}

function minRangeMove(){
  if (+rangeMin.value > +rangeMax.value){
    rangeMax.value = +rangeMin.value;
    priceMax.value = rangeMax.value;
  }
  priceMin.value=rangeMin.value;
}

function maxRangeMove(){
  if (+rangeMax.value < +rangeMin.value){
    rangeMin.value = +rangeMax.value;
    priceMin.value = rangeMin.value;
  }
  priceMax.value=rangeMax.value;
}

