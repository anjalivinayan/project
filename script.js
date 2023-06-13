// Get elements from the DOM
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener to the form
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const taskText = taskInput.value.trim(); // Get the task text and remove whitespace

  if (taskText !== '') {
    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add event listener to the delete button
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
});