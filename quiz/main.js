const start = document.querySelector('#start')
const quiz1 = document.querySelector('#quiz1')
const quiz2 = document.querySelector('#quiz2')
const quiz3 = document.querySelector('#quiz3')
const final = document.querySelector('#final')

const btn_next_start = document.querySelector('#btn_next_step1')
const btn_next_step2 = document.querySelector('#btn_next_step2')
const btn_next_step3 = document.querySelector('#btn_next_step3')
const btn_next_final = document.querySelector('#btn_next_final')

const cardOption1 = document.querySelectorAll(".cardOption1")
Array.from(cardOption1).map((item) => {
  if(item.textContent == "git init"){
    item.addEventListener('click', () => {
      quiz1.classList.add('invisible')
      quiz2.classList.remove('invisible')
    })
  }
  else{
    item.addEventListener('click', () => {
      window.location.replace('./index.html')
    })
  }
})

const optionsContainer = document.getElementById("initial_dropzone")
const dropzones = document.querySelectorAll(".dropzone") 
const options = ["commit", "add", "-m", "save", "-n", "-R"] 

// Adicionar opções iniciais ao container
options.forEach((option) => {
    const draggable = document.createElement("div") 
    draggable.draggable = true 
    draggable.className = "draggable" 
    draggable.id = `option-${option}` 
    draggable.textContent = option 
    optionsContainer.appendChild(draggable) 
}) 

// Adicionar evento de dragstart aos itens
optionsContainer.querySelectorAll(".draggable").forEach((draggable) => {
    draggable.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id) 
    }) 
}) 

// Adicionar evento de dragover e drop às caixas
let correct = 0
dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragover", (event) => {
        event.preventDefault() 
    }) 

    dropzone.addEventListener("drop", (event) => {
        event.preventDefault() 
        const draggableId = event.dataTransfer.getData("text/plain") 
        const draggable = document.getElementById(draggableId) 
        const dropzoneChildren = dropzone.children 
        
        if (dropzoneChildren.length > 0) {
            const oldDraggable = dropzoneChildren[0] 
            oldDraggable.parentNode.removeChild(oldDraggable) 
            optionsContainer.appendChild(oldDraggable) 
        }
        
        dropzone.appendChild(draggable) 
        
        // if (draggableId === "option-commit" && dropzone.id === "dropzone1") {
        //     dropzone.classList.add("locked") 
        //     draggable.draggable = false 
        //     draggable.classList.add("correct") 
        // }
        // if (draggableId === "option--m" && dropzone.id === "dropzone2") {
        //     dropzone.classList.add("locked") 
        //     draggable.draggable = false 
        //     draggable.classList.add("correct") 
        // }
        if (draggableId === "option-commit" && dropzone.id === "dropzone1") {
          correct += 1
        }
        if (draggableId === "option--m" && dropzone.id === "dropzone2") {
          correct += 1
        }
    }) 
}) 

const boxes = document.querySelectorAll(".cardOptionBox") 
const correctOrder = ['2', '3', '1', '4'] 

boxes.forEach(box => {
    box.draggable = true 
    box.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text', e.target.id) 
      validateOrder()
    }) 

    box.addEventListener('dragover', (e) => {
      e.preventDefault() 
      validateOrder()
    }) 

    box.addEventListener('drop', (e) => {
      e.preventDefault() 
      const draggedBoxId = e.dataTransfer.getData('text') 
      const draggedBox = document.getElementById(draggedBoxId) 
      const targetBox = e.target 

      // Troca o conteúdo dos boxes
      const tempContent = targetBox.innerHTML 
      targetBox.innerHTML = draggedBox.innerHTML 
      draggedBox.innerHTML = tempContent 
      validateOrder()
    }) 
  }) 

  function validateOrder() {
    const correctOrder = ['2', '3', '1', '4'] 
  
    let isValid = true 
    boxes.forEach((box, index) => {
      if (box.innerHTML!== correctOrder[index]) {
        isValid = false 
      }
    }) 
  
    if (isValid) {
      return true
    } else {
      return false 
    }
  }

btn_next_start.addEventListener('click', () => {
    start.classList.add('invisible')
    quiz1.classList.remove('invisible')
})

btn_next_step2.addEventListener('click', () => {
  if(correct >= 2){
    quiz2.classList.add('invisible')
    quiz3.classList.remove('invisible')
  }
  else{
    window.location.replace('./index.html')
  }
})

btn_next_step3.addEventListener('click', () => {
  if(validateOrder()){
    quiz3.classList.add('invisible')
    final.classList.remove('invisible')
  }
  else{
    window.location.replace('./index.html')
  }
})

btn_next_final.addEventListener('click', () => {
  window.location.replace('../principal/index.html')
})