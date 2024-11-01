"use strict";
// script.ts
// Classe para gerenciar as tarefas
class TaskManager {
    tasks = [];
    taskId = 0;
    // Adiciona uma nova tarefa
    addTask(title) {
        const newTask = {
            id: this.taskId++,
            title: title
        };
        this.tasks.push(newTask);
        this.renderTasks();
    }
    // Remove uma tarefa pelo ID
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.renderTasks();
    }
    // Renderiza a lista de tarefas
    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ''; // Limpa a lista antes de renderizar
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.addEventListener('click', () => {
                this.removeTask(task.id);
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
}
// Inicializa o gerenciador de tarefas e adiciona eventos
const taskManager = new TaskManager();
document.getElementById('addTaskButton')?.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        taskManager.addTask(taskTitle);
        taskInput.value = ''; // Limpa o campo de entrada
    }
    else {
        alert('Por favor, insira uma tarefa!');
    }
});
