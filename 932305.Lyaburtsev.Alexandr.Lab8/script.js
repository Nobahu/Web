const itemsContainer = document.querySelector('.objects_items');
const savedContainer = document.querySelector('.objects_saved');
const addBtn = document.querySelector('.objects_add');
const saveBtn = document.querySelector('.objects_save');

addBtn.addEventListener('click', () => {
    const newObject = document.createElement('div');
    newObject.classList.add('objects_item');
    newObject.innerHTML = `
        <input type="text" class="objects_input">
        <input type="text" class="objects_input">
        <button type="button" class="objbutton objbutton_up">&uarr;</button>
        <button type="button" class="objbutton objbutton_down">&darr;</button>
        <button type="button" class="objbutton objbutton_close">&times;</button>
    `;
    
    newObject.querySelector('.objbutton_up').addEventListener('click', moveObjectUp);
    newObject.querySelector('.objbutton_down').addEventListener('click', moveObjectDown);
    newObject.querySelector('.objbutton_close').addEventListener('click', removeObject);

    itemsContainer.append(newObject);
});

saveBtn.addEventListener('click', () => {
    const objectItems = document.querySelectorAll('.objects_item');
    
    if (objectItems.length === 0) {
        savedContainer.textContent = '{}';
        return;
    }
    
    let savedObjects = '{';
    let hasValidItems = false;

    objectItems.forEach((item, index) => {
        const inputs = item.querySelectorAll('.objects_input');
        const firstInputValue = inputs[0].value.trim();
        const secondInputValue = inputs[1].value.trim();

        if (firstInputValue !== '' || secondInputValue !== '') {
            if (hasValidItems) {
                savedObjects += ',';
            }
            savedObjects += `"${firstInputValue || ''}":"${secondInputValue || ''}"`;
            hasValidItems = true;
        }
    });

    savedObjects += '}';
    savedContainer.textContent = savedObjects;
});

const moveObjectUp = ($event) => {
    const currentObj = $event.target.closest('.objects_item');
    const prevObj = currentObj.previousElementSibling;
    if (prevObj) {
        currentObj.parentNode.insertBefore(currentObj, prevObj);
    }
};

const moveObjectDown = ($event) => {
    const currentObj = $event.target.closest('.objects_item');
    const nextObj = currentObj.nextElementSibling;
    if (nextObj) {
        currentObj.parentNode.insertBefore(nextObj, currentObj);
    }
};

const removeObject = ($event) => {
    const item = $event.target.closest('.objects_item');
    if (item && itemsContainer.children.length > 1) {
        item.remove();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const initialUpBtn = document.querySelector('.objbutton_up');
    const initialDownBtn = document.querySelector('.objbutton_down');
    const initialCloseBtn = document.querySelector('.objbutton_close');
    
    if (initialUpBtn) initialUpBtn.addEventListener('click', moveObjectUp);
    if (initialDownBtn) initialDownBtn.addEventListener('click', moveObjectDown);
    if (initialCloseBtn) initialCloseBtn.addEventListener('click', removeObject);
});