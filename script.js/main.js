const todoForm = document.getElementById('form');
const todoInput = document.getElementById('input');
const todoList = document.getElementById('lista');
const clearBtn = document.getElementById('borrar');

// obtiene los datos guardados en el local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// muestra los datos guardados en el local storage
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

// agregar un nuevo to-do item y guarda en el local storage
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
    todoInput.value = '';
  }
}

// borrar todos los to-do items y borra del local storage
function clearTodos() {
  todos = [];
  localStorage.removeItem('todos');
  renderTodos();
}

// llama a la función addTodo cuando se envía el formulario
todoForm.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

clearBtn.addEventListener('click', clearTodos);

// llama a la función renderTodos para mostrar los datos guardados en el local storage
renderTodos();

