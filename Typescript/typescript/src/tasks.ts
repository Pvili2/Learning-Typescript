//if we not give it the type, then typescript does not know that we will definitely get a non-null value back
//the querySelector is a generic function, so we need to specify which HTML element we want to return
const btn = document.querySelector<HTMLButtonElement>('.test-btn')!; //we need to add ! mark if we sure that this element exists

//if we specify the html element type, now we access all the attributes of the element
//console.log(btn.value);

const taskForm = document.querySelector<HTMLFormElement>('.form')!;
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
    description: string,
    isCompleted: boolean,
}
//array of Tasks

const tasks: Task[] = loadTasks();

//less OP solution
/* tasks.forEach((task) => {
    renderTask(task);
}) */

//OP solution
tasks.forEach(renderTask)

taskForm?.addEventListener('submit', (event) =>{
    event.preventDefault();

    const taskDescription = formInput?.value;
    if(taskDescription){
        const task = {description: taskDescription, isCompleted: false};
        //add task to list
        addTask(task);
        //render tasks
        renderTask(task)
        
        //update localStorage
        updateLocalStorage();

        formInput.value = '';
        return;
    }

    alert('Please enter a task description')
})


function addTask(data: Task):void{
    tasks.push(data);
}

function renderTask(task: Task): void{
    const taskElement = document.createElement('li');

    taskElement.textContent = task.description;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    checkBox.checked = task.isCompleted;
    taskElement.appendChild(checkBox);

    checkBox.addEventListener('change', ()=>{
        task.isCompleted = !task.isCompleted;
        updateLocalStorage();
    })

    taskListElement?.appendChild(taskElement);
}

function updateLocalStorage() : void{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks():Task[]{
    const storedTasks = localStorage.getItem('tasks');

    return storedTasks ? JSON.parse(storedTasks) as Task[] : [];
}