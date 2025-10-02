function createModalWindow(header, text) {
    let parent = document.getElementById('container');
    
    let child = document.createElement('div');
    child.className = 'modal-window';

    child.onclick = function() {
        removeModal();
    }

    let modalWindow = document.createElement('div');
    modalWindow.className = 'modal-inner';
    modalWindow.onclick = function(e) {
        e.stopPropagation();
    }

    modalWindow.innerHTML = `<h2>${header}</h2> <p>${text}</p>`;
    
    child.appendChild(modalWindow);
    parent.appendChild(child);
}

function removeModal() {
    let modal = document.querySelector('.modal-window');
    if (modal) {
        modal.remove();
    }
}