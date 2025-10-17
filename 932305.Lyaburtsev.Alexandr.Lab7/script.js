function removeFigure(figureId) {
    let element = document.getElementById(figureId);
    if (element) {
        element.remove();
    }
}

function createTriangle(inputId) {
    let el = document.getElementById(inputId);
    let amount = el.value;

    for(let i = 0; i < amount; i++) {
        let triangle = document.createElement('div');
        
        let size = Math.random() * 100 + 100;
        triangle.style.opacity = '0.9';
        triangle.style.width = '0';
        triangle.style.height = '0';
        triangle.style.borderLeft = `${size/2}px solid transparent`;
        triangle.style.borderRight = `${size/2}px solid transparent`;
        triangle.style.borderBottom = `${size}px solid blue`;
        
        triangle.style.position = 'absolute';
        triangle.style.left = Math.random() * (window.innerWidth - size);
        triangle.style.top = Math.random() * (window.innerHeight - size);

        let triangleId = `triangle-${Date.now() + Math.floor(Math.random() * 10000)}`;
        triangle.id = triangleId;

        triangle.ondblclick = function() { 
            removeFigure(triangleId); 
        };
        
        triangle.onclick = function() {
            this.style.borderBottomColor = 'yellow';
        }

        document.getElementById('figures').appendChild(triangle);
    }
}

function createCircle(inputId) {
    let el = document.getElementById(inputId);
    let amount = el.value;

    for(let i = 0; i < amount; i++) {
        let circle = document.createElement('div');
        
        let size = Math.random() * 100 + 100;
        circle.style.opacity = '0.9';
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.borderRadius = `50%`;
        circle.style.border = '2px solid black';
        circle.style.boxSizing = 'border-box';
        circle.style.backgroundColor = 'green';
        
        circle.style.position = 'absolute';
        circle.style.left = Math.random() * (window.innerWidth - size);
        circle.style.top = Math.random() * (window.innerHeight - size);

        let circleId = `circle-${Date.now() + Math.floor(Math.random() * 10000)}`;
        circle.id = circleId;

        circle.ondblclick = function() { 
            removeFigure(circleId); 
        };
        
        circle.onclick = function() {
            this.style.backgroundColor = 'yellow';
        }

        document.getElementById('figures').appendChild(circle);
    }
}

function createRectangle(inputId) {
    let el = document.getElementById(inputId);
    let amount = el.value;

    for(let i = 0; i < amount; i++) {
        let rectangle = document.createElement('div'); 
        
        let size = Math.random() * 100 + 100;
        rectangle.style.width = `${size}px`;
        rectangle.style.height = `${size}px`;
        rectangle.style.backgroundColor = 'red';
        rectangle.style.opacity = '0.9';

        rectangle.style.border = '2px solid black';
        rectangle.style.boxSizing = 'border-box';
        
        rectangle.style.position = 'absolute';
        rectangle.style.left = Math.random() * (window.innerWidth - size);
        rectangle.style.top = Math.random() * (window.innerHeight - size);

        let rectangleId = `rectangle-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        rectangle.id = rectangleId;

        rectangle.ondblclick = function() { 
            removeFigure(rectangleId); 
        };
        
        rectangle.onclick = function() {
            this.style.backgroundColor = 'yellow';
        }

        document.getElementById('figures').appendChild(rectangle);
    }
}