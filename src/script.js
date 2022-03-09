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
                `<li id=` + item[i].ID + `><input type='checkbox'><label>` + item[i].task + `</label><input type='text'><button class='edit'>Edit</button><button onclick=deleteTask(`+item[i].ID+`) class='delete'>Delete</button></li>`;
            console.log(item[i]);
        }

    }
        incomplete.innerHTML = html;
}

//Input box cleared.
function clearInput()
{
    document.getElementById("new-task").value = "";
}

//Deleting the task/item from the list 
function deleteTask(id)
{
    
     for(i=0;i<item.length;i++)
     {
         
          if(item[i].ID == id)
          {
            //console.log("working");
            item.splice(i,1);
            displayIncomplete();

          }
     } 
}