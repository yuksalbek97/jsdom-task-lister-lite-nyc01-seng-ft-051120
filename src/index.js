// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {



const form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault()

  const task = e.target['new-task-description'].value
  const taskLi = document.createElement('li')
  taskLi.textContent = task

  const button = document.createElement("button")
  button.textContent = "X"
  taskLi.append(button)

  button.addEventListener("click", function(e){
    const taskLi = e.target.parentElement
    taskLi.remove()
  })

  const tasks = document.getElementById('tasks')
  tasks.append(taskLi)
})
});








// function resetList(){
//    document.getElementById('new-task-description').reset()
// }


// a delete function that will remove tasks from your list
// 
