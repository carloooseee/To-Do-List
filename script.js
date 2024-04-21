
let inputTask = document.getElementById("inputTask"),
    addTask = document.getElementById("addTask"),
    clearTask = document.getElementById("clearTask"),
    removeTask = document.getElementById("removeButton"),
    changeTask = document.getElementById("changeButton"),
    listTask = document.getElementById("listTask"),
    warningMessage = document.getElementById("warningMessage");

addTask.addEventListener("click", function(){
    if (inputTask.value != ""){
        let taskContainer = document.createElement("div"),
            taskInputed = document.createElement("input"),
            taskRemove = document.createElement("button"),
            taskChange = document.createElement("button");

        taskContainer.classList.add("task");
        taskInputed.classList.add("listedTask");
        taskRemove.classList.add("removeButton");
        taskChange.classList.add("changeButton")

        listTask.appendChild(taskContainer);
        taskContainer.appendChild(taskInputed);
        taskContainer.appendChild(taskRemove);
        taskContainer.appendChild(taskChange);

        taskContainer.setAttribute("id", "task");
        taskInputed.setAttribute("id", "addedInput");
        taskRemove.setAttribute("id", "removeButton");
        taskChange.setAttribute("id", "changeButton");

        // taskInputed.setAttribute("readonly", "readonly");
        taskInputed.value = inputTask.value;
        inputTask.value = "";
        warningMessage.innerText = "";
    }
    else{
        warningMessage.innerText = "No task inputed";
    }
});
listTask.addEventListener("click", function(removeEvent){
    if(removeEvent.target.classList.contains("removeButton")) {
        let taskContainer = removeEvent.target.parentNode;
        taskContainer.remove();
    }
});
changeTask.addEventListener("click", function(){
    let parentContainer = this.parentElement.parentElement;
    let firstInput = parentContainer.querySelector("input");
    if (firstInput) {
        if (firstInput.hasAttribute("readonly")) {
            firstInput.removeAttribute("readonly");
        } else {
            firstInput.setAttribute("readonly", "readonly");
        }
    }
});
clearTask.addEventListener("click", function(){
    listTask.innerHTML = "";
});
