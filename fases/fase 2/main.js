const step1 = document.querySelector("#step1")
const step2 = document.querySelector("#step2")
const step3 = document.querySelector("#step3")
const step4 = document.querySelector("#step4")
const btn_next_step1 = document.querySelector('#btn_next_step1')
const btn_next_step2 = document.querySelector('#btn_next_step2')
const btn_next_step3 = document.querySelector('#btn_next_step3')
const btn_next_step_final = document.querySelector('#btn_next_step_final')

btn_next_step1.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.remove('invisible')
})

btn_next_step2.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.add('invisible')
    step3.classList.remove('invisible')
})

btn_next_step3.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.add('invisible')
    step3.classList.add('invisible')
    step4.classList.remove('invisible')
})

btn_next_step_final.addEventListener('click', () => {
    let gametype = localStorage.getItem('gameType')
    let phases = localStorage.getItem('phases')
    phases = JSON.parse(phases)
    if(gametype == '1'){
        if(phases.indexOf(2) == -1){
            phases.push(2)
            localStorage.setItem('phases', JSON.stringify(phases))
        }
    }
    window.location.replace('./../../principal/index.html')
})