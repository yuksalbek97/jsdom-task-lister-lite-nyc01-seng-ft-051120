// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.



const newTasksUl = document.getElementById("tasks")

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")


  newTaskForm.addEventListener("submit", createTask)
});

const createTask = e => {
const newTask = document.createElement("li")
const newTaskDescription = document.getElementById("new-task-description")
newTask.innerText = newTaskDescription.value 
newTasksUl.append(newTask)
}
