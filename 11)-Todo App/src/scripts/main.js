window.addEventListener("DOMContentLoaded", init);

//!  events

function init() {
  const form = document.getElementById("todoAddForm");
  const inp = document.getElementById("todoName");
  const ulList = document.querySelector(".list-group");
  const cardBody = document.querySelectorAll(".card-body")[0];
  // const cardBodySecond = document.querySelectorAll(".card-body")[1];
  const clearBtn = document.querySelector("#clearButton");
  const filterInp = document.querySelector("#todoSearch");

  let todos = [];

  runEvents();

  function runEvents() {
    form.addEventListener("submit", addTodo);
    pageLoaded();

    filterInp.addEventListener("keyup", (e) => {
      const filterVal = e.target.value.toLowerCase().trim();
      const todoList = document.querySelectorAll(".list-group-item");

      if (todoList.length > 0) {
        todoList.forEach((todo) => {
          if (todo.textContent.toLowerCase().trim().includes(filterVal)) {
            todo.setAttribute("style", "display:block");
          } else {
            todo.setAttribute("style", "display:none !important;");
          }
        });
      } else {
        showAlert("warning", `Write something for filtered Todo lists.`);
      }
    });

    clearBtn.addEventListener("click", () => {
      const allTodos = document.querySelectorAll(".list-group-item");

      if (allTodos.length > 0) {
        allTodos.forEach((todo) => {
          todo.remove();
        });

        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "All todos deleted successfully");
      } else {
        showAlert("warning", `Can't founded for delete.`);
      }
    });
  }

  function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach((todo) => {
      console.log(todo);
      addTodoUi(todo);
    });
  }

  function addTodo(e) {
    e.preventDefault();
    const inpText = inp.value.trim();
    if (inpText == null || inpText == "") {
      showAlert("danger", "Please enter something");
    } else {
      addTodoUi(inpText);
      addTodoStorage(inpText);
      showAlert("success", "Todo added successfully!");
    }
  }

  function addTodoUi(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    ulList.appendChild(li);
    inp.value = "";

    i.addEventListener("click", () => {
      li.remove();
      showAlert("success", "Todo deleted successfully");
      removeTodoFromStorage(li.textContent);
    });
  }

  function removeTodoFromStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach((todo, index) => {
      if (removeTodo === todo) {
        todos.splice(index, 1);
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodoStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  }

  function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    cardBody.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 2500);
  }
}
