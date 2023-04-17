const deleteBtn = document.querySelectorAll('.del')
const item = document.querySelectorAll('.uncompleted')
const itemCompleted = document.querySelectorAll('.completed')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUncomplete)
})

async function deleteItem(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('/todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': todoId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
   
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('/todos/markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': todoId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUncomplete(){
   
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('/todos/markIncomplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': todoId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}