document.addEventListener("DOMContentLoaded",  () => {

  const trick = 'varialHeelFlip' //написать название анимации из списка ниже

  const duration = 5 //длительность анимации

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
 * treeFlip
 * popShuvit
 * varialHeelFlip
 */