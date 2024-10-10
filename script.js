document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const removeLastTaskButton = document.getElementById("removeLastTaskButton");
    const taskList = document.getElementById("taskList");
    const arrayStatus = document.getElementById("arrayStatus");

    // Task array
    let tasks = [];

    // Function to update the task list in the UI
    function updateTaskList() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<span class="task-number">${index + 1}.</span> ${task}`;
            taskList.appendChild(listItem);
        });
        updateArrayStatus();
    }

    // Function to update the array status in the UI
    function updateArrayStatus() {
        arrayStatus.innerHTML = `<strong>Current Task Array:</strong> <p>${JSON.stringify(tasks)}</p>`;
    }

    // Add task function
    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue !== "") {
            tasks.push(taskValue);
            taskInput.value = "";
            updateTaskList();
        } else {
            alert("Please enter a task!");
        }
    }

    // Remove the last task
    function removeLastTask() {
        if (tasks.length > 0) {
            tasks.pop();
            updateTaskList();
        } else {
            alert("No tasks to remove!");
        }
    }

    // Event listeners
    addTaskButton.addEventListener("click", addTask);
    removeLastTaskButton.addEventListener("click", removeLastTask);

    // Add task with Enter key
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Initial update
    updateTaskList();
});
