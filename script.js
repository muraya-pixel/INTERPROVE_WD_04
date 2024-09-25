document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const taskForm = document.getElementById('add-task-form');
    const taskList = document.getElementById('tasks');
    const calendarContainer = document.getElementById('calendar-container');

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Add task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const date = document.getElementById('task-date').value;
        addTask(title, description, date);
        taskForm.reset();
    });

    function addTask(title, description, date) {
        const task = document.createElement('li');
        task.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Due: ${date}</p>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(task);

        task.querySelector('.delete-task').addEventListener('click', () => {
            task.remove();
        });
    }

    // Calendar
    function generateCalendar() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarContainer.innerHTML = '';

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = day;
            
            if (date.toDateString() === today.toDateString()) {
                dayElement.style.backgroundColor = 'var(--accent-color)';
                dayElement.style.color = 'white';
            }

            calendarContainer.appendChild(dayElement);
        }
    }

    generateCalendar();
});