const step1 = document.querySelector("#step1")
const step2 = document.querySelector("#step2")
const step3 = document.querySelector("#step3")
const step4 = document.querySelector("#step4")
const btn_next_step1 = document.querySelector('#btn_next_step1')
const btn_next_step_final = document.querySelector('#btn_next_step_final')
const step2_input = document.querySelector('#step2_input')
const step3_input = document.querySelector('#step3_input')
const step4_input = document.querySelector('#step4_input')


btn_next_step1.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.remove('invisible')
})


btn_next_step_final.addEventListener('click', () => {
    let gametype = localStorage.getItem('gameType')
    let phases = localStorage.getItem('phases')
    phases = JSON.parse(phases)
    if(gametype == '1'){
        if(phases.indexOf(3) == -1){
            phases.push(3)
            localStorage.setItem('phases', JSON.stringify(phases))
        }
    }
    window.location.replace('./../../principal/index.html')
})

document.addEventListener("keydown", function(event) {
    if(event.key == "Enter" && step2_input.value == "git branch gitinho"){
            step2.classList.add('invisible')
            step3.classList.remove('invisible')
            step2_input.value = ""
        }
    if(event.key == "Enter" && step3_input.value == "git checkout gitinho"){
            step3.classList.add('invisible')
            step4.classList.remove('invisible')
            step3_input.value = ""
        }
    if(event.key == "Enter" && step4_input.value == "git pull origin main"){
            btn_next_step_final.classList.remove('invisible')
        }
});