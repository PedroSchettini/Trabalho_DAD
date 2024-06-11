const step1 = document.querySelector('#step1')
const step2 = document.querySelector('#step2')
const step3 = document.querySelector('#step3')
const step4 = document.querySelector('#step4')
const step5 = document.querySelector('#step5')
const step6 = document.querySelector('#step6')
const step7 = document.querySelector('#step7')
const step8 = document.querySelector('#step8')
const step9 = document.querySelector('#step9')

const btn_next_step1 = document.querySelector('#btn_next_step1')
const btn_pratice1 = document.querySelector('#btn_pratice1')
const btn_next_step5 = document.querySelector('#btn_next_step5')
const btn_next_step6 = document.querySelector('#btn_next_step6')
const btn_next_step7 = document.querySelector('#btn_next_step7')
const btn_next_step10 = document.querySelector('#btn_next_step10')
const btn_box6 = document.querySelector('#btn_box6')


const folder_terminal = document.querySelector('#folder_terminal')
const open_terminal = document.querySelector('#open_terminal')
const input_step4 = document.querySelector('#step4_input')
const input_step6 = document.querySelector('#step6_input')
const input_step9 = document.querySelector('#step9_input')
const second_branch = document.querySelector('.second_branch')
const branch_master = document.querySelector('.branch_master')

btn_next_step1.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.remove('invisible')
})

btn_pratice1.addEventListener('click', () => {
    step2.classList.add('invisible')
    step3.classList.remove('invisible')
})

folder_terminal.addEventListener('click', () => {
    open_terminal.classList.remove('invisible')
})

open_terminal.addEventListener('click', () => {
    step3.classList.add('invisible')
    step4.classList.remove('invisible')
})

document.addEventListener("keydown", function(event) {
    if(event.key == "Enter" && input_step4.value == "git init"){
            step4.classList.add('invisible')
            step5.classList.remove('invisible')
            input_step4.value = ""
        }
    if(event.key == "Enter" && input_step6.value == "git branch -M main"){
        second_branch.classList.remove('invisible')
        btn_box6.classList.remove('invisible')
        branch_master.classList.add('invisible')
    }
    if(event.key == "Enter" && input_step9.value == "git remote add origin https://github.com/Gitinho/IniciandoRepositorio.git"){
        step9.classList.add('invisible')
        step10.classList.remove('invisible')
    }
});

btn_next_step5.addEventListener('click', () => {
    step5.classList.add('invisible')
    step6.classList.remove('invisible')
})

btn_next_step6.addEventListener('click', () => {
    step6.classList.add('invisible')
    step7.classList.remove('invisible')
})

btn_next_step7.addEventListener('click', () => {
    step7.classList.add('invisible')
    step8.classList.remove('invisible')
})

btn_next_step8.addEventListener('click', () => {
    step8.classList.add('invisible')
    step9.classList.remove('invisible')
})

btn_next_step10.addEventListener('click', () => {
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

