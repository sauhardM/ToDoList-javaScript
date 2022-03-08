//Global item variable
var item = [];

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
                `<li id=` + item[i].ID + `><input type='checkbox'><label>` + item[i].task + `</label><input type='text'><button class='edit'>Edit</button><button class='delete'>Delete</button></li>`;
            console.log(item[i]);
        }

    }
            incomplete.innerHTML = html;
}