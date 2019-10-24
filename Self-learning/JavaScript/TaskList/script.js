function addItem(){
    var taskNameEl = document.getElementById('taskName');
    
    var taskListEl = document.getElementById('taskList');

    var taskItemEl = document.createElement('li')
    var taskItemTextEl = document.createTextNode(taskNameEl.value);
    taskItemEl.appendChild(taskItemTextEl);

    taskListEl.appendChild(taskItemEl);

    taskNameEl.value = '';

    taskNameEl.focus();
}

function enterPress(event){
    // var x = event.which || event.keyCode;
    if(event.keyCode == 11){
        addItem();
    }
};

window.onload = function(){
    document.getElementById('taskName').focus();
};