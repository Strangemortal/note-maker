// Function to add a task to the list
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${taskText}</span>
          <button class="btn" onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
  }
}

// Function to remove a task from the list
function removeTask(button) {
  const taskList = document.getElementById('task-list');
  taskList.removeChild(button.parentNode);
}
// Function to remove a task from the list with fade-out animation
function removeTask(button) {
  const taskList = document.getElementById('task-list');
  const listItem = button.parentNode;
  
  // Use GSAP for the animation
  gsap.to(listItem, {
      opacity: 0, // Fade out the item
      duration: 0.3, // Animation duration in seconds
      onComplete: () => {
          taskList.removeChild(listItem);
      },
  });
}

// Rest of your script
// Function to add a task to the list with fade-in animation
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${taskText}</span>
          <button class="btn" onclick="removeTask(this)">Remove</button>
      `;

      // Set initial opacity to 0 for the fade-in effect
      li.style.opacity = 0;

      taskList.appendChild(li);

      // Use GSAP to animate the fade-in effect
      gsap.to(li, {
          opacity: 1, // Fade in the item
          duration: 0.5, // Animation duration in seconds
      });

      taskInput.value = '';
  }
}

// Rest of your script
// Function to add a task to the list with fade-in animation and display time
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${taskText}</span>
          <span class="timestamp">${getTime()}</span>
          <button class="btn" onclick="removeTask(this)">Remove</button>
      `;

      // Set initial opacity to 0 for the fade-in effect
      li.style.opacity = 0;

      taskList.appendChild(li);

      // Use GSAP to animate the fade-in effect
      gsap.to(li, {
          opacity: 1, // Fade in the item
          duration: 0.5, // Animation duration in seconds
      });

      taskInput.value = '';
  }
}

// Function to get the current time in HH:MM format
function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Update the clock every second
function updateClock() {
  const clockElement = document.getElementById('clock');
  setInterval(() => {
      const currentTime = getTime();
      clockElement.textContent = `Current Time: ${currentTime}`;
  }, 1000); // Update every second
}

// Initialize the clock
updateClock();

// Rest of your script
// Function to get the current time in HH:MM format
function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Update the clock every second
function updateClock() {
  const clockElement = document.getElementById('clock');
  setInterval(() => {
      const currentTime = getTime();
      clockElement.textContent = currentTime; // Display only the time
  }, 1000); // Update every second
}

// Initialize the clock
updateClock();
