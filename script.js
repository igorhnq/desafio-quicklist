const form = document.querySelector("form");
const newItem = document.getElementById("new-item");
const addItemButton = document.getElementById("add-item");
const ul = document.querySelector("ul");

const regex = /^\S.*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = newItem.value;

    const deleteItemButton = document.createElement("input");
    deleteItemButton.type = "button";
    deleteItemButton.value = "deletar";

    if(!regex.test(newItem.value)) {
        return alert("Por favor, insira um valor válido.");
    }

    ul.append(li);
    li.append(checkbox);
    li.append(span);
    li.append(deleteItemButton);

    deleteItemButton.addEventListener("click", (e) => {
        e.preventDefault();

        li.remove();
    })

    newItem.value = '';

    deleteItemButton.addEventListener("click", deleteSelectedItems);
})

 function deleteSelectedItems() {
    const items = document.querySelectorAll('input[type="checkbox"]:checked');
    
    items.forEach((item) => {
        item.parentNode.remove();                                                                                                                                                                                                         
    })
} 