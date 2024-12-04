
// array ma pack karana ka laya 

let todo_list = [
    {
        item: 'Buy Groceries',
        due_date: '2024-12-4'
    },
    {
        item: 'Buy milk',
        due_date: '2024-12-4'
    }
];
display_items()
function addTodo(){
    let getelement = document.getElementById('todo-input');
    let Dateelement = document.getElementById('todo_date');

    let todoitem = getelement.value;
    let Dateitem = Dateelement.value;
    
    todo_list.push({item:todoitem, due_date:Dateitem});
    console.log(todo_list);

    getelement.value='';
     Dateelement.value='';
    display_items()
}

// add this only todo item and display 
// function display_items(){
//  let displayElement = document.getElementById('todo-item-display');
//  displayElement.innerText = '';
//  for(let i = 0; i < todo_list.length; i++){
//      displayElement.innerText = displayElement.innerText + "\n" + todo_list[i];
//  }


// }

// added this function to display items in todo list and delete button 
// function display_items(){
//     let containerElement = document.getElementById('todo-container');
//    let newhtml = '';
//     for(let i = 0; i < todo_ist.length; i++){
//         newhtml = newhtml + `
//         <div class=" grid grid-cols-1 md:grid-cols-3 bg-gray-700">
//         <span>${todo_ist[i]}</span>
//         <button   onclick="todo_ist.splice($[i],1); display_items();">Delete</button>
//         </div>`;
//     }
//     containerElement.innerHTML = newhtml;
   
//    }

function display_items() {
    // Get the container element where the items will be displayed
    let containerElement = document.getElementsByClassName('todo-container')[0];
    let newhtml = '';
    
    // Loop through the todo_list array and generate the HTML for each item
    for (let i = 0; i < todo_list.length; i++) {
        let item = todo_list[i].item;
        let due_date = todo_list[i].due_date;
        newhtml += `
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-y-7 border-2 p-2 place-items-center my-14 mx-6">
            <span>${item}</span>
             <span>${due_date}</span>
            <button class="px-8 py-2.5 bg-[#660F09] rounded-lg text-white" onclick="deleteItem(${i})">Delete</button>
        </div>`;
    }
    
    // Set the inner HTML of the container to display the new list
    containerElement.innerHTML = newhtml;
}

// Function to delete an item from the list
function deleteItem(index) {
    // Remove the item from the todo_list using splice
    todo_list.splice(index, 1);
    
    // Re-render the updated list
    display_items();
}
