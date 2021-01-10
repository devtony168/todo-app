const list = []
let input = ""

alert("Welcome to your ToDo List!")
input = prompt("What would you like to do? Choose 'new', 'list', 'delete' or 'quit'.")

while (input !== "quit") {
    if (input === "new") {
        const newItem = prompt("Enter you new item: ")
        list.push(newItem)
        console.log(`${newItem} added to your list.`)
    } 
    
    else if (input === "list") {
        if (!Array.isArray(list) || !list.length) {
            alert("Your ToDo List is empty! Add some new items.")
        } else {
            console.log("**************************")
            for (let item of list) {
                console.log(`${list.indexOf(item)}: ${item}`)
            }
            console.log("**************************")
            alert("See console logs for your list. ")
        }
    } 
    
    else if (input === "delete") {
        const index = parseInt(prompt("Which item do you want to delete? Select index of item."))
        if (!Number.isNaN(index)) {
            const removedItem = list.splice(index, 1)
            console.log(`${removedItem} removed from your list`)
        } else {
            console.log("Unknown index.")
        }
    } 
    
    else {
        alert("Invalid input. Try again.")
    }
    input = prompt("What's next? Choose 'new', 'list', 'delete' or 'quit'.")
}

alert("You quit ToDo List. See you next time!")
