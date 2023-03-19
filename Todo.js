// Nihar Satasia (niharsatasia@vt.edu)

// Initializaing the todoList that will store Todo objects.
let todoList = [];

/**
 * Todo constructor with 5 parameters that a todo object needs.
 * 
 * @param {string} title -- Title of event
 * @param {string} description -- Description of event
 * @param {string} date -- Date created
 * @param {string} deadline -- Date due
 * @param {string} progress -- Status (New, Working on, Finished, etc.)
 */
function Todo(title, description, date, deadline, progress)
{
    this.Title = title;
    this.Description = description;
    this.Date = date;
    this.Deadline = deadline;
    this.Progress = progress;
}

/**
 * Function that allows the user to add Todo objects into the todoList array by inputting the 5 paramters that go along with the object.
 * 
 * @param {string} title -- Title of event
 * @param {string} description -- Description of event
 * @param {string} date -- Date created
 * @param {string} deadline -- Date due
 * @param {string} progress -- Status (New, Working on, Finished, etc.)
 */
function addTodo(title, description, date, deadline, progress)
{   
    const todo = new Todo(title, description, date, deadline, progress);
    // Pushing the object onto the array.
    todoList.push(todo);
}

/**
 * Function that allows the user to remove Todo objects from the todoList array by inputting the title of the object.
 * 
 * @param {string} remove -- Title of the object that needs to be removed
 */
function removeTodo(remove)
{
    for(let i = 0; i < todoList.length; i++)
    {
        if(todoList[i].Title == remove)
        {
            // Using splice() to remove the object at its unique index.
            todoList.splice(i, i);
        }
    }
}

/**
 * Function that allows the user to reorder objects within the todoList by inputting
 * the index of the object and the index of where that object should be moved to.
 * 
 * @param {number} old -- Old index
 * @param {number} neww -- New index
 */
function reorganizeTodo(old, neww)
{
    // Handles the scenario in which the user tries to reorganize to an out of bounds number.
    if(neww >= todoList.length)
    {
        
    }
    else
    {
        // Splices out element at old index then inserts it into new index using splice again.
        todoList.splice(neww, 0, todoList.splice(old, 1)[0]);
    }
}

/**
 * Function that allows the user to edit the list by inputting the title of the object that they want to edit,
 * the category that needs to be edited, the old information, and the new information.
 * 
 * @param {string} event -- Title of the event
 * @param {string} key -- Category that needs to be edited
 * @param {string} old -- Old input
 * @param {string} neww -- New input
 */
function editTodo(event, key, old, neww )
{
    // Checks which category needs to be edited.
    if(key == "Title"){
        for(let i = 0; i < todoList.length; i++)
        {
            // Checks to ensure the correct object is being edited.
            if(event == todoList[i].Title && todoList[i].Title == old)
            {
                todoList[i].Title = neww;
            }
        }
    }

    // Checks which category needs to be edited.
    if(key == "Description"){
        for(let i = 0; i < todoList.length; i++)
        {
            // Checks to ensure the correct object is being edited.
            if(event == todoList[i].Title && todoList[i].Description == old)
            {
                todoList[i].Description = neww;
            }
        }
    }

    // Checks which category needs to be edited.
    if(key == "Date"){
        for(let i = 0; i < todoList.length; i++)
        {
            // Checks to ensure the correct object is being edited.
            if(event == todoList[i].Title && todoList[i].Date == old)
            {
                todoList[i].Date = neww;
            }
        }
    }

    // Checks which category needs to be edited.
    if(key == "Deadline"){
        for(let i = 0; i < todoList.length; i++)
        {
            // Checks to ensure the correct object is being edited.
            if(event == todoList[i].Title && todoList[i].Deadline == old)
            {
                todoList[i].Deadline = neww;
            }
        }
    }

    // Checks which category needs to be edited.
    if(key == "Progress"){
        for(let i = 0; i < todoList.length; i++)
        {
            // Checks to ensure the correct object is being edited.
            if(event == todoList[i].Title && todoList[i].Progress == old)
            {
                todoList[i].Progress = neww;
            }
        }
    }

}

/**
 * Personal Test Cases
 */
//addTodo("Forge", "Internship", "2/2/23", "2/3/23", "in the works");
//addTodo("Exam", "Physics", "2/2/23", "3/20/23", "studying")
//addTodo("Project", "Data Structures", "2/2/23", "2/14/23", "new");
//removeTodo("Exam");
//editTodo("Forge", "Title", "Forge", "Egrof");
//editTodo("Exam", "Description", "Physics", "Calculus");
//editTodo("Egrof", "Date", "2/2/23", "7/23/02");
//editTodo("Egrof", "Deadline", "2/3/23", "2/14/23");
//editTodo("Project", "Deadline", "2/14/23", "3/1/23");
//editTodo("Egrof", "Progress", "in the works", "completed");
//reorganizeTodo(0,2);
//reorganizeTodo(0,1);
//reorganizeTodo(2,1);
//console.log(todoList);