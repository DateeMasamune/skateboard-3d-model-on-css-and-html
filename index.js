document.addEventListener("DOMContentLoaded",  () => {

  const trick = 'flip' //написать название анимации из списка ниже

  const duration = 3 //длительность анимации

  const skateboard = document.querySelector('.skateboard')
  const shadow = document.querySelector('.shadow')

  skateboard.style.animation = `${trick} ${duration}s linear infinite`
	shadow.style.animation = `shadow ${duration}s linear infinite`

});

/**
 * TRICK LIST
 * 
 * flip
 * impossible
 * ollie
 * hardFlip
 * hardFlipV2
 * treeFlip
 * popShuvit
 * varialHeelFlip
 */