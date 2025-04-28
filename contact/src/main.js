import './style.css';

const fetchBtn = document.querySelector('#fetchBtn');

const handleFetchBtn = () => {
  console.log('Button clicked');

  const taskContainer = document.querySelector('#taskContainer');
  taskContainer.innerHTML = ''; // Clear old rows

  fetch('http://localhost:3000/tasks')
    .then((res) => res.json())
    .then((tasks) => {
      tasks.forEach((task) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="py-2 px-4 border">${task.title}</td>
          <td class="py-2 px-4 border">${task.description}</td>
          <td class="py-2 px-4 border">${task.status}</td>
          <td class="py-2 px-4 border">${task.priority}</td>
          <td class="py-2 px-4 border">${task.dueDate}</td>
          <td class="py-2 px-4 border">${task.assignedTo}</td>
        `;
        taskContainer.appendChild(row);
      });
    })
  
};

fetchBtn.addEventListener('click', handleFetchBtn);
