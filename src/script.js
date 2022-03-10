//Global item variable
var item = [];

//Global unique id for item/task 
let uniqueIDForTask = 0;

//ADD button click function
function add() {

    uniqueIDForTask += 1;
    var newTask = document.getElementById("new-task").value;

    var task = {
        "ID": uniqueIDForTask,
        "task": newTask,
        "completed": false
    };

    item.push(task);
    displayIncomplete();
    clearInput();
}

//Incomplete item list display function
function displayIncomplete() {

    var incomplete = document.getElementById("incomplete-tasks");

    //Incomplete Task
    incomplete.innerHTML = "";
    let html = "";

    console.log(item);
    for (var i = 0; i < item.length; i++) {

        console.log(item[i]);

        if (item[i].completed == false) {
            console.log("working");

            html +=
                `<li id=` + item[i].ID + `><input  type='checkbox' id="chek" onclick=taskChecked(`+item[i].ID+`)><label>` + item[i].task + `</label><input type='text'><button onclick=EditTask(` + item[i].ID + `) class='edit'>Edit</button><button onclick=deleteTask(` + item[i].ID + `) class='delete'>Delete</button></li>`;
            console.log(item[i]);
        }

    }
    incomplete.innerHTML = html;
}

//Input box cleared.
function clearInput() {
    document.getElementById("new-task").value = "";
}

//Deleting the task/item from the list 
function deleteTask(id) {

    for (i = 0; i < item.length; i++) {

        if (item[i].ID == id) {
            //console.log("working");
            item.splice(i, 1);
            displayIncomplete();
            displayComplete();

        }
    }
}

//Editing the item/task
function EditTask(id) {
    var html = "";
    document.getElementById("input-field").innerHTML = "";
    for (i = 0; i < item.length; i++) {

        if (item[i].ID == id) {
            html = '\
                    <input id="edit-task" type="text" value='+ item[i].task + '>\
                    <button id="edit-task" onclick="updateTask('+ item[i].ID + ')">\
                        Update\
                    </button>\
                ';
            document.getElementById("input-field").innerHTML = html;
            break;

        }
    }
}

function updateTask(id) {

    for (var i = 0; i < item.length; i++) 
    {
        if (item[i].ID == id) 
        {
            item[i].task = document.getElementById("edit-task").value;
            if (item[i].completed == false) 
            {
                displayIncomplete();
            }else{
                displayComplete();
            }
            html = '\
                    <input id="new-task"  type="text" value="">\
                    <button id="addbtn" onclick="add()">\
                        Add\
                    </button>\
                ';
            document.getElementById("input-field").innerHTML = html;
        }

    }

}

function taskChecked(id){
    for(var i=0;i<item.length;i++)
    {
        console.log(id);
        if(item[i].ID == id)
        {
            if(item[i].completed == false)
            {
                 item[i].completed = true;
                 console.log(item);
                 break;
            }
            else {
                item[i].completed == false;
                break
            }
        }
    }
    displayIncomplete();
    displayComplete();
    
}

function displayComplete()
{
    document.getElementById("completed-tasks").innerHTML = "";
    var html = "";
    for(i=0;i<item.length;i++)
    {
        if(item[i].completed == true)
        {
            html += 
            `<li id=` + item[i].ID + `><input  type='checkbox' id="chek" onclick=taskChecked(`+item[i].ID+`)><label>` + item[i].task + `</label><input type='text'><button onclick=EditTask(` + item[i].ID + `) class='edit'>Edit</button><button onclick=deleteTask(` + item[i].ID + `) class='delete'>Delete</button></li>`;
        }
    }
    document.getElementById("completed-tasks").innerHTML = html;
}