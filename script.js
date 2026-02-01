const form = document.getElementById("todoForm");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInput = document.getElementById("task");
  const deadlineInput = document.getElementById("deadline");

  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (!taskText) return;

  // Todo container
  const todo = document.createElement("div");
  todo.className = "todo";

  // Task name
  const taskDiv = document.createElement("div");
  taskDiv.textContent = taskText;

  // Deadline
  const deadlineDiv = document.createElement("div");
  deadlineDiv.textContent = deadline;

  // Status selector (added AFTER task creation)
  const statusSelect = document.createElement("select");
  ["Pending", "Completed"].forEach(status => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    statusSelect.appendChild(option);
  });

  statusSelect.addEventListener("change", () => {
    if (statusSelect.value === "Completed") {
      todo.classList.add("completed");
    } else {
      todo.classList.remove("completed");
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => todo.remove();

  // Assemble todo
  todo.append(taskDiv, deadlineDiv, statusSelect, deleteBtn);
  list.appendChild(todo);

  // Reset form
  form.reset();
});
