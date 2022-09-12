type InitialTrickType = (trick?: string) => void
type TricksType = string[]

document.addEventListener("DOMContentLoaded", () => {

  const skateboard: HTMLDivElement = document.querySelector('.skateboard')
  const shadow: HTMLDivElement = document.querySelector('.shadow')

  let currentTrick = 0
  const duration = 4000   //длительность анимации

  const tricks: TricksType = [
    'flip',
    'impossible',
    'ollie',
    'hardFlip',
    'hardFlipV2',
    'treeFlip',
    'popShuvit',
    'varialHeelFlip',
  ]

  const initialTrick: InitialTrickType = (trick = 'flip') => {
    skateboard.style.animation = `${trick} ${duration}ms linear infinite` //написать название анимации из списка ниже
    shadow.style.animation = `shadow ${duration}ms linear infinite`
  }

  const updateTrick = () => {
    const trick = tricks[currentTrick]
    initialTrick(trick)
  }

  const nextTrick = () => {
    currentTrick = (currentTrick + 1) % tricks.length
    updateTrick()
  }

  const trickInterval = setInterval(nextTrick, duration)
  initialTrick()
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