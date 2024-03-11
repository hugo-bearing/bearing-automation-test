const tasks = [];

const addTask = () => {
  const taskName = document.querySelector("#task-name").value;

  tasks.push(taskName);

  const tasksList = document.querySelector("#tasks-list");

  const taskHtml = tasks.map((task, i) => {
    return `<li><input type="checkbox"> ${task} <button onclick="del(${i})">x</button></li>`;
  });

  tasksList.innerHTML = taskHtml.join("\n");
};

const del = (index) => {
  tasks.splice(index, 1);

  const tasksList = document.querySelector("#tasks-list");

  const taskHtml = tasks.map((task, i) => {
    return `<li><input type="checkbox"> ${task} <button onclick="del(${i})">x</button></li>`;
  });

  tasksList.innerHTML = taskHtml.join("\n");
};
