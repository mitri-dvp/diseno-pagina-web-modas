// Elements
const header = document.querySelector('.header_container')
const mobile_button = document.querySelector('.mobile_button')
const mobile_nav = document.querySelector('.mobile_nav')
const form = document.querySelector('form')
const form_output = document.querySelector('.form_output')
let timerId;

// Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  form_output.classList.remove('dnone')
})

mobile_button.addEventListener('click', () => {
  mobile_nav.classList.toggle('active')
})

window.addEventListener('scroll', () => {
	throttleFunction(() => {
    if(window.scrollY > header.offsetHeight) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  }, 200)
})

const throttleFunction  =  (func, delay) => {
	if (timerId) {
		return
	}
	timerId  =  setTimeout(() => {
		func()
		timerId  =  undefined;
	}, delay)
}

// SLIDERS INIT
const new_slider = new KeenSlider(`#${'new'}_slider`, {
	slidesPerView: 3,
	spacing: 15,
  created: function (instance, id='new') {
    document
      .getElementById(`${id}-arrow-left`)
      .addEventListener(`click`, function () {
        instance.prev()
      })

    document
      .getElementById(`${id}-arrow-right`)
      .addEventListener(`click`, function () {
        instance.next()
      })
    var dots_wrapper = document.getElementById(`${id}-dots`)
    var slides = document.querySelectorAll(`#${id}_slider .slide`)
    slides.forEach(function (t, idx) {
      var dot = document.createElement(`button`)
      dot.classList.add(`${id}-dot`)
      dot.classList.add(`dot`)
      dots_wrapper.appendChild(dot)
      dot.addEventListener(`click`, function () {
        instance.moveToSlide(idx)
      })
    })
    this.updateClasses(instance)
  },
  slideChanged(instance) {
    this.updateClasses(instance)
  },
  updateClasses(instance, id='new') {
    var slide = instance.details().relativeSlide
    var arrowLeft = document.getElementById(`${id}-arrow-left`)
    var arrowRight = document.getElementById(`${id}-arrow-right`)
    slide === 0
      ? arrowLeft.classList.add(`arrow--disabled`)
      : arrowLeft.classList.remove(`arrow--disabled`)
    slide === instance.details().size - 1
      ? arrowRight.classList.add(`arrow--disabled`)
      : arrowRight.classList.remove(`arrow--disabled`)
  
    var dots = document.querySelectorAll(`.${id}-dot`)
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add(`dot--active`)
        : dot.classList.remove(`dot--active`)
    })
  }
})

const trends_slider = new KeenSlider(`#${'trends'}_slider`, {
	slidesPerView: 3,
	spacing: 15,
  created: function (instance, id='trends') {
    document
      .getElementById(`${id}-arrow-left`)
      .addEventListener(`click`, function () {
        instance.prev()
      })

    document
      .getElementById(`${id}-arrow-right`)
      .addEventListener(`click`, function () {
        instance.next()
      })
    var dots_wrapper = document.getElementById(`${id}-dots`)
    var slides = document.querySelectorAll(`#${id}_slider .slide`)
    slides.forEach(function (t, idx) {
      var dot = document.createElement(`button`)
      dot.classList.add(`${id}-dot`)
      dot.classList.add(`dot`)
      dots_wrapper.appendChild(dot)
      dot.addEventListener(`click`, function () {
        instance.moveToSlide(idx)
      })
    })
    this.updateClasses(instance)
  },
  slideChanged(instance) {
    this.updateClasses(instance)
  },
  updateClasses(instance, id='trends') {
    var slide = instance.details().relativeSlide
    var arrowLeft = document.getElementById(`${id}-arrow-left`)
    var arrowRight = document.getElementById(`${id}-arrow-right`)
    slide === 0
      ? arrowLeft.classList.add(`arrow--disabled`)
      : arrowLeft.classList.remove(`arrow--disabled`)
    slide === instance.details().size - 1
      ? arrowRight.classList.add(`arrow--disabled`)
      : arrowRight.classList.remove(`arrow--disabled`)
  
    var dots = document.querySelectorAll(`.${id}-dot`)
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add(`dot--active`)
        : dot.classList.remove(`dot--active`)
    })
  }
})

const sale_slider = new KeenSlider(`#${'sale'}_slider`, {
	slidesPerView: 3,
	spacing: 15,
  created: function (instance, id='sale') {
    document
      .getElementById(`${id}-arrow-left`)
      .addEventListener(`click`, function () {
        instance.prev()
      })

    document
      .getElementById(`${id}-arrow-right`)
      .addEventListener(`click`, function () {
        instance.next()
      })
    var dots_wrapper = document.getElementById(`${id}-dots`)
    var slides = document.querySelectorAll(`#${id}_slider .slide`)
    slides.forEach(function (t, idx) {
      var dot = document.createElement(`button`)
      dot.classList.add(`${id}-dot`)
      dot.classList.add(`dot`)
      dots_wrapper.appendChild(dot)
      dot.addEventListener(`click`, function () {
        instance.moveToSlide(idx)
      })
    })
    this.updateClasses(instance)
  },
  slideChanged(instance) {
    this.updateClasses(instance)
  },
  updateClasses(instance, id='sale') {
    var slide = instance.details().relativeSlide
    var arrowLeft = document.getElementById(`${id}-arrow-left`)
    var arrowRight = document.getElementById(`${id}-arrow-right`)
    slide === 0
      ? arrowLeft.classList.add(`arrow--disabled`)
      : arrowLeft.classList.remove(`arrow--disabled`)
    slide === instance.details().size - 1
      ? arrowRight.classList.add(`arrow--disabled`)
      : arrowRight.classList.remove(`arrow--disabled`)
  
    var dots = document.querySelectorAll(`.${id}-dot`)
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add(`dot--active`)
        : dot.classList.remove(`dot--active`)
    })
  }
})


