const txt_dis = document.getElementById("txt_dis");
const submit_btn = document.getElementById("sbmt_btn");
const td_list = document.getElementById("task_list");
let list_array = [];
let taskId = 0;

submit_btn.addEventListener("click", () => {
    const text_value = txt_dis.value;
    if (!text_value) return;

    const task = {
        id: taskId++,
        text: text_value,
        completed: false
    };

    console.log(taskId)
    list_array.push(task);

    renderTasks();
    console.log(task.id)
    txt_dis.value = '';
});

function renderTasks() {
    td_list.innerHTML = '';

    list_array.forEach((task) => {
        const li = document.createElement('li');

        li.innerHTML =`
            <div class="width_checker">
                <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}">
                ${task.text.charAt(0).toUpperCase() + task.text.slice(1)}
            </div>
            <button class="delete-btn" data-id="${task.id}">Delete</button>`;

    td_list.insertBefore(li, td_list.firstChild); 
    });
}

td_list.addEventListener("click", (event) => {
    const taskId = event.target.getAttribute("data-id");

    if (event.target.type === "checkbox") {
        const task = list_array.find((t) => t.id == taskId);
        task.completed = event.target.checked;
        event.target.parentElement.style.textDecoration = task.completed ? "line-through" : 'none';
    }

    if (event.target.classList.contains("delete-btn")) {
        list_array = list_array.filter((t => t.id != taskId));
        renderTasks();
    }
});
console.log(list_array);