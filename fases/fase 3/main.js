const step1 = document.querySelector("#step1")
const step2 = document.querySelector("#step2")
const step3 = document.querySelector("#step3")
const step4 = document.querySelector("#step4")
const step5 = document.querySelector("#step5")
const step6 = document.querySelector('#step6')
const step7 = document.querySelector('#step7')
const step8 = document.querySelector('#step8')
const step9 = document.querySelector('#step9')
const step10 = document.querySelector('#step10')
const step11 = document.querySelector('#step11')


const input_step2 = document.querySelector('#step2_input')
const input_step4 = document.querySelector('#step4_input')
const input_step6 = document.querySelector('#step6_input')
const input_step8 = document.querySelector('#step8_input')
const input_step10 = document.querySelector('#step10_input')


const btn_next_step1 = document.querySelector('#btn_next_step1')
const btn_next_step3 = document.querySelector('#btn_next_step3')
const btn_next_step5 = document.querySelector('#btn_next_step5')
const btn_next_step7 = document.querySelector('#btn_next_step7')
const btn_next_step9 = document.querySelector('#btn_next_step9')
const btn_next_step11 = document.querySelector('#btn_next_step11')

btn_next_step1.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.remove('invisible')
})

document.addEventListener("keydown", function(event) {
    if(event.key == "Enter" && input_step2.value == "git status"){
            step2.classList.add('invisible')
            step3.classList.remove('invisible')
            input_step2.value = ""
        }
    if(event.key == "Enter" && input_step4.value == "git add ."){
        step4.classList.add('invisible')
        step5.classList.remove('invisible')
        input_step4.value = ""
    }
    if(event.key == "Enter" && input_step6.value == "git status"){
        step6.classList.add('invisible')
        step7.classList.remove('invisible')
        input_step6.value = ""
    }
    if(event.key == "Enter" && input_step8.value == "git commit -m \"atualizando os arquivos\""){
        step8.classList.add('invisible')
        step9.classList.remove('invisible')
        input_step8.value = ""
    }
    if(event.key == "Enter" && input_step10.value == "git push origin main"){
        step10.classList.add('invisible')
        step11.classList.remove('invisible')
        input_step10.value = ""
    }
});

btn_next_step3.addEventListener('click', () => {
    step3.classList.add('invisible')
    step4.classList.remove('invisible')
})

btn_next_step5.addEventListener('click', () => {
    step5.classList.add('invisible')
    step6.classList.remove('invisible')
})

btn_next_step7.addEventListener('click', () => {
    step7.classList.add('invisible')
    step8.classList.remove('invisible')
})

btn_next_step9.addEventListener('click', () => {
    step9.classList.add('invisible')
    step10.classList.remove('invisible')
})

btn_next_step11.addEventListener('click', () => {
    window.location.replace("./../../quiz/index.html")
})