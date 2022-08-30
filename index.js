document.addEventListener("DOMContentLoaded", function () {

  const trick = 'treeFlip' //написать названию анимации из списка ниже

  const duration = 5 //длительность анимации

  const skateboard = document.querySelector('.skateboard')

  skateboard.style.animation = `${trick} ${duration}s linear infinite`

});

/**
 * TRICK LIST
 * 
 * flip
 * impossible
 * ollie
 * hardFlip
 * treeFlip
 */