// const btnInicio = document.getElementById("botao_jogar")
// const loading = document.getElementById("loading")

// loading.classList.add("invisivel")

// btnInicio.addEventListener('click', () => {
//     loading.classList.remove("invisivel")
//     loading.classList.add("loading-component")
//     setTimeout(() => {
//         window.location.assign('../principal/index.html')
//     }, 1500)
// })

door = document.querySelector(".door")

door.addEventListener('mouseleave', () => {
    door.classList.add('closing')
  });

door.addEventListener('mouseenter', () => {
    door.classList.remove('closing')
})