let newTask = document.querySelector("input");
let list = document.querySelector("#taskList");
let btn = document.querySelector("#createTaskBtn");
let deleteAllBtn = document.querySelector("#deleteAll");

btn.addEventListener('click', function() {
    if (newTask.value.trim() === "") {
        console.log("Submitting without any task");
        return;
    }

    console.log("New Task is added");

    let li = document.createElement("li");
    let b = document.createElement("button");
    b.className = "b";

    b.addEventListener("click", function() {
        li.classList.toggle("completed");
        b.style.backgroundColor = li.classList.contains("completed") ? "green" : "#fff";
        b.style.borderColor = li.classList.contains("completed") ? "darkgreen" : "#007BFF";
    });

    li.appendChild(b);
    li.appendChild(document.createTextNode(newTask.value));
    list.appendChild(li);
    newTask.value = '';

    if (list.children.length > 0) {
        deleteAllBtn.style.visibility = "visible";
    }
});

deleteAllBtn.addEventListener("click", function() {
    let allCompleted = true;

    for (let i = 0; i < list.children.length; i++) {
        if (!list.children[i].classList.contains("completed")) {
            allCompleted = false;
            break;
        }
    }

    if (allCompleted) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        deleteAllBtn.style.visibility = "hidden";
        } else {
            alert("Complete all tasks first");
        }
});