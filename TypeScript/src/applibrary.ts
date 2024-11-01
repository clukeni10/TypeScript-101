// script.ts

// Define a interface para uma Tarefa
interface Task {
    id: number;
    title: string;
}

// Classe para gerenciar as tarefas
class TaskManager {
    private tasks: Task[] = [];
    private taskId: number = 0;

    // Adiciona uma nova tarefa
    addTask(title: string): void {
        const newTask: Task = {
            id: this.taskId++,
            title: title
        };
        this.tasks.push(newTask);
        this.renderTasks();
    }

    // Remove uma tarefa pelo ID
    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.renderTasks();
    }

    // Renderiza a lista de tarefas
    renderTasks(): void {
        const taskList = document.getElementById('taskList') as HTMLUListElement;
        taskList.innerHTML = ''; // Limpa a lista antes de renderizar

        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.className = 'delete';
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
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskTitle = taskInput.value.trim();

    if (taskTitle) {
        taskManager.addTask(taskTitle);
        taskInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira uma tarefa!');
    }
});


/*
Vamos analisar o código TypeScript passo a passo, explicando cada linha para entender o que ele faz e como funciona.

### 1. Definindo a Interface para uma Tarefa

```typescript
interface Task {
    id: number;
    title: string;
}
```
- **Interface Task**: Aqui, estamos definindo uma interface chamada `Task`. Uma interface em TypeScript serve como um contrato que especifica quais propriedades um objeto deve ter. Neste caso, cada tarefa (`Task`) deve ter um `id` (número) e um `title` (string).

### 2. Classe para Gerenciar Tarefas

```typescript
class TaskManager {
    private tasks: Task[] = [];
    private taskId: number = 0;
```
- **Classe TaskManager**: Criamos uma classe chamada `TaskManager` que vai gerenciar nossas tarefas.
- **private tasks: Task[] = [];**: Aqui estamos declarando um array privado chamado `tasks` que armazenará objetos do tipo `Task`. O modificador `private` significa que este array não pode ser acessado fora da classe.
- **private taskId: number = 0;**: Declaramos uma variável privada chamada `taskId`, que começará em 0 e será usada para atribuir IDs únicos a cada tarefa.

### 3. Método para Adicionar uma Nova Tarefa

```typescript
addTask(title: string): void {
    const newTask: Task = {
        id: this.taskId++,
        title: title
    };
    this.tasks.push(newTask);
    this.renderTasks();
}
```
- **Método addTask**: Este método é responsável por adicionar uma nova tarefa.
- **title: string**: O método aceita um argumento `title` do tipo `string`, que representa o título da nova tarefa.
- **const newTask: Task = { ... }**: Criamos um novo objeto `newTask` que se conforma à interface `Task`. Ele recebe um `id` (usando o valor atual de `taskId` e, em seguida, incrementa `taskId` para a próxima tarefa) e o `title` passado como argumento.
- **this.tasks.push(newTask)**: Adicionamos a nova tarefa ao array `tasks`.
- **this.renderTasks()**: Chamamos o método `renderTasks` para atualizar a visualização das tarefas na interface do usuário.

### 4. Método para Remover uma Tarefa

```typescript
removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.renderTasks();
}
```
- **Método removeTask**: Este método remove uma tarefa pelo seu ID.
- **id: number**: O método aceita um argumento `id` do tipo `number`, que representa o ID da tarefa a ser removida.
- **this.tasks = this.tasks.filter(...)**: Usamos o método `filter` para criar um novo array de tarefas, excluindo a tarefa com o ID correspondente ao `id` fornecido.
- **this.renderTasks()**: Chamamos novamente o método `renderTasks` para atualizar a visualização após a remoção da tarefa.

### 5. Método para Renderizar a Lista de Tarefas

```typescript
renderTasks(): void {
    const taskList = document.getElementById('taskList') as HTMLUListElement;
    taskList.innerHTML = ''; // Limpa a lista antes de renderizar

    this.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            this.removeTask(task.id);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
```
- **Método renderTasks**: Este método é responsável por renderizar (ou atualizar) a lista de tarefas no DOM.
- **const taskList = document.getElementById('taskList') as HTMLUListElement;**: Selecionamos o elemento `ul` com o ID `taskList` no HTML e o tipamos como `HTMLUListElement`.
- **taskList.innerHTML = '';**: Limpamos o conteúdo atual da lista de tarefas, para que possamos renderizá-las novamente.
- **this.tasks.forEach(...)**: Iteramos sobre o array `tasks` e para cada tarefa, realizamos as seguintes ações:
    - **const li = document.createElement('li');**: Criamos um novo elemento de lista (`li`) para cada tarefa.
    - **li.textContent = task.title;**: Definimos o texto do elemento `li` como o título da tarefa.
    - **const deleteButton = document.createElement('button');**: Criamos um botão para remover a tarefa.
    - **deleteButton.textContent = 'Remover';**: Definimos o texto do botão como "Remover".
    - **deleteButton.className = 'delete';**: Adicionamos uma classe ao botão para possíveis estilos.
    - **deleteButton.addEventListener('click', ...)**: Adicionamos um evento de clique ao botão. Quando clicado, chama o método `removeTask`, passando o ID da tarefa correspondente.
    - **li.appendChild(deleteButton);**: Adicionamos o botão ao elemento `li`.
    - **taskList.appendChild(li);**: Finalmente, adicionamos o elemento `li` à lista de tarefas no DOM.

### 6. Inicialização do Gerenciador de Tarefas e Eventos

```typescript
const taskManager = new TaskManager();

document.getElementById('addTaskButton')?.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskTitle = taskInput.value.trim();

    if (taskTitle) {
        taskManager.addTask(taskTitle);
        taskInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira uma tarefa!');
    }
});
```
- **const taskManager = new TaskManager();**: Criamos uma nova instância da classe `TaskManager`, que nos permitirá gerenciar nossas tarefas.
- **document.getElementById('addTaskButton')?.addEventListener('click', ...)**: Selecionamos o botão de adicionar tarefa (`addTaskButton`) e adicionamos um evento de clique. O operador `?` é usado para evitar erros se o elemento não for encontrado.
- **const taskInput = document.getElementById('taskInput') as HTMLInputElement;**: Selecionamos o campo de entrada onde o usuário digitará a nova tarefa e o tipamos como `HTMLInputElement`.
- **const taskTitle = taskInput.value.trim();**: Obtemos o valor do campo de entrada e usamos `trim()` para remover espaços em branco no início e no final.
- **if (taskTitle)**: Verificamos se o título da tarefa não está vazio.
    - **taskManager.addTask(taskTitle);**: Se não estiver vazio, chamamos `addTask` no gerenciador de tarefas para adicionar a nova tarefa.
    - **taskInput.value = '';**: Limpamos o campo de entrada após adicionar a tarefa.
- **else**: Se o campo estiver vazio, mostramos um alerta ao usuário pedindo que insira uma tarefa.

### Resumo

Esse código TypeScript implementa um gerenciador de tarefas básico, permitindo adicionar e remover tarefas através de uma interface simples. As principais funcionalidades estão encapsuladas na classe `TaskManager`, que usa uma interface `Task` para definir a estrutura dos objetos de tarefa. A manipulação do DOM é feita no método `renderTasks`, que atualiza a interface do usuário sempre que as tarefas são alteradas.
*/