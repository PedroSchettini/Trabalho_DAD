portainicio = document.querySelector("#botao_jogar")
door = document.querySelector(".door")
boxgameType = document.querySelector("#game_type")
close = document.querySelector("#close")
btnStudent = document.querySelector("#btn_student")
btnAdventure = document.querySelector("#btn_adventure")
// const loading = document.getElementById("loading")

// loading.classList.add("invisivel")

// btnInicio.addEventListener('click', () => {
//     loading.classList.remove("invisivel")
//     loading.classList.add("loading-component")
//     setTimeout(() => {
//         window.location.assign('../principal/index.html')
//     }, 1500)
// })

const phases = localStorage.getItem('phases')

portainicio.addEventListener('click', () => {
    boxgameType.classList.remove("invisivel")
    boxgameType.classList.add("game_type_class")
    close.classList.remove("invisivel")
})

close.addEventListener('click', () => {
  close.classList.add("invisivel")
  boxgameType.classList.add("invisivel")
  boxgameType.classList.remove("game_type_class")
})

btnStudent.addEventListener('click', () => {
    window.location.assign('../principal/index.html')
    localStorage.setItem('gameType', 1)
    if(!phases){
      localStorage.setItem('phases', JSON.stringify([1]))
    }
})

btnAdventure.addEventListener('click', () => {
  window.location.assign('../principal/index.html')
  localStorage.setItem('gameType', 2)
})

door.addEventListener('mouseleave', () => {
    door.classList.add('closing')
  });

door.addEventListener('mouseenter', () => {
    door.classList.remove('closing')
    
})

