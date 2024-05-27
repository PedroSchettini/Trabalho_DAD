const step1 = document.querySelector("#step1")
const step2 = document.querySelector("#step2")
const btn_next_step1 = document.querySelector('#btn_next_step1')

btn_next_step1.addEventListener('click', () => {
    step1.classList.add('invisible')
    step2.classList.remove('invisible')
})