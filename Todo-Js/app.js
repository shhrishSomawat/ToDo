let inputBox = document.getElementById("taskSection");
let addBtn = document.getElementById("btn");
let taskbarPara = document.getElementById("taskAdder");

let item = inputBox.innerText;

addBtn.addEventListener("click", () => {
  if (inputBox.value.length == 0) {
    alert("Please Enter a Task!");
  } else {
    taskbarPara.innerHTML += `
        <div class="task">
        <span id="taskname">
            ${inputBox.value}
        </span>
        
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>

        </div>
        `;
        let currentTasks = document.querySelectorAll(".delete");
        for(let i=0;i<currentTasks.length;i++)
        {
            currentTasks[i].onclick = function()
            {
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".task");
        for(let i=0;i<tasks.length;i++)
        {
            tasks[i].onclick = function()
            {
                this.classList.toggle('completed');
            }
            
        }
        document.querySelector("#taskSection").value="";
  }
});
