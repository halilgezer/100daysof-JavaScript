// Create Variables 

const input = document.querySelector("input");
const addButton = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

// Add List Item 

const addTask = (e) => {
 

  const newLi = document.createElement("li");
  const delButton = document.createElement("button");

  delButton.innerHTML = '<i class="fas fa-trash-alt" ></i>' ;

  if (input.value !== "") {
    newLi.textContent = input.value ;
    newLi.appendChild(delButton);
    todoList.appendChild(newLi);
    input.value = "";
  } else {
    alert("Please enter a task.") ;
  }
  delButton.addEventListener("click", function() {
    const del = confirm("You are about to delete this task!!");
    if( del == true) {
      const parent = this.parentNode ;
      parent.remove();
  
    }
  } ) ;
} ;

function clearAll() {
  
};

addButton.addEventListener("click", addTask);



clear.addEventListener("click", () => {
  todoList.innerHTML = "";
});
