var slides = document.querySelectorAll(".slide-wrapper");
var sliderControls = document.querySelectorAll(".slider__control");
var controlIndicators = document.querySelectorAll(".slider__control-indicator");
var showIfJS = document.querySelectorAll(".no-js-hide");

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


