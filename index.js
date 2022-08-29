document.addEventListener("DOMContentLoaded", function (event) {

  const trick = 'impossible' //написать названию анимации из списка ниже

  const duration = 4 //длительность анимации

  const skateboard = document.querySelector('.skateboard')

  skateboard.style.animation = `${trick} ${duration}s linear infinite`

});

/**
 * TRICK LIST
 * 
 * flip
 * impossible
 */