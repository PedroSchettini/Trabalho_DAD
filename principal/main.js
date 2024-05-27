const gameType = localStorage.getItem('gameType')
let phases = localStorage.getItem('phases')
phases = JSON.parse(phases)

phase1 = document.querySelector('#phase1')
phase2 = document.querySelector('#phase2')
phase3 = document.querySelector('#phase3')
phase4 = document.querySelector('#phase4')
phase5 = document.querySelector('#phase5')
phase6 = document.querySelector('#phase6')
let phasesArray = [phase1, phase2, phase3, phase4, phase5, phase6]

if(gameType == 1){
    for(let i = 5; i >= phases.length; i--){
        phasesArray[i].setAttribute('src', '../assets/gitinho_bloqueado.png')
        phasesArray[i].classList.remove('unlocked')
    }
}

if(!!phase1.classList[1]){
    phase1.addEventListener('click', () => {
        window.location.assign('../fase1/index.html')
    })
}
if(!!phase2.classList[1]){
    phase2.addEventListener('click', () => {
        window.location.replace('../principal/index.html')
    })
}
if(!!phase3.classList[1]){
    phase3.addEventListener('click', () => {
        window.location.replace('../principal/index.html')
    })
}
if(!!phase4.classList[1]){
    phase4.addEventListener('click', () => {
        window.location.replace('../principal/index.html')
    })
}
if(!!phase5.classList[1]){
    phase5.addEventListener('click', () => {
        window.location.replace('../principal/index.html')
    })
}
if(!!phase6.classList[1]){
    phase6.addEventListener('click', () => {
        window.location.replace('../principal/index.html')
    })
}