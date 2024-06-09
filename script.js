let tasks = [
   
]
function getTasksFromStorage(){
    let retrieved = JSON.parse(localStorage.getItem("tasks"));
    tasks = retrieved ?? []
}
getTasksFromStorage(); 

function FillTasks(){
    document.getElementById("tasks").innerHTML = ""
    let index = 0
    for(let task of tasks){
        document.getElementById("tasks").innerHTML += `<div class="task ${task.isDone ? "done" : "task"}">
        <div class="info">
            <h3>${task.title}</h3>
            <span>${task.date}</span>
        </div>
        <div class="btns">
            <button id="delet" onclick="deletTask(${index})" class="delet">Delet</button>
            <button id="upDate" onclick="upDate(${index})" class="upDate">Up Date</button>
            ${task.isDone ? `<button onclick="toggelTask(${index})" class="isDone">Done</button>
            </div>` : `<button onclick="toggelTask(${index})" class="isDone">Is Done</button>
            </div>`}
            
        </div>`
        index++
        }
       
}
FillTasks()
document.getElementById("addTask").addEventListener("click", function(){
    let now = new Date();
    let date = now.getDate()  + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
   let promptAdd = prompt("أدخل اسم المهمة الجديدة")
   let taskObj =
    {
        title: promptAdd,
        date : date,
        isDone : false
    }
    tasks.push(taskObj)
    setTasksStorage()
    FillTasks()
})
function deletTask(index){
    let titleTask = tasks[index]
    let removeTask = confirm("هل أنت متأكد من حذف المهمة: " + titleTask.title)
    if(removeTask){
        tasks.splice(index, 1)
        setTasksStorage()
        FillTasks()
    }
}
function upDate(index){
    let titleTask = tasks[index]
    let editTask = prompt("أدخل عنوان المهمة الجديد: " , titleTask.title)
    titleTask.title = editTask
    setTasksStorage()
    FillTasks()
}

function toggelTask(index){
    let task = tasks[index];
    task.isDone = !task.isDone
    FillTasks()
}
function setTasksStorage(){
    localStorage.setItem("tasks" , JSON.stringify(tasks))
}