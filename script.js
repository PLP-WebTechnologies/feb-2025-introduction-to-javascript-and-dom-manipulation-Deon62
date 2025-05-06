
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. CHANGING TEXT CONTENT DYNAMICALLY
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    // Array of texts to cycle through
    const textOptions = [
        "This text will change when you click the button below.",
        "Look at that! The text has changed.",
        "JavaScript makes websites interactive!",
        "DOM manipulation is powerful.",
        "You can change content dynamically with JS."
    ];
    
    let currentTextIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        // Move to next text option or loop back to beginning
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        
        // Update the text content
        dynamicText.textContent = textOptions[currentTextIndex];
        
        // Add a highlight effect temporarily
        dynamicText.classList.add('highlighted');
        
        // Remove highlight after 1 second
        setTimeout(function() {
            dynamicText.classList.remove('highlighted');
        }, 1000);
    });
    
    // 2. MODIFYING CSS STYLES
    const changeStyleBtn = document.getElementById('change-style-btn');
    const body = document.body;
    let darkModeOn = false;
    
    changeStyleBtn.addEventListener('click', function() {
        // Toggle dark mode
        darkModeOn = !darkModeOn;
        
        if (darkModeOn) {
            // Apply dark mode styles
            body.style.backgroundColor = '#333';
            body.style.color = '#fff';
            document.querySelector('main').style.backgroundColor = '#444';
            document.querySelector('main').style.color = '#fff';
            changeStyleBtn.textContent = 'Toggle Light Mode';
        } else {
            // Revert to light mode styles
            body.style.backgroundColor = '#f5f5f5';
            body.style.color = '#000';
            document.querySelector('main').style.backgroundColor = '#fff';
            document.querySelector('main').style.color = '#000';
            changeStyleBtn.textContent = 'Toggle Dark Mode';
        }
    });
    
    // 3. ADDING AND REMOVING ELEMENTS
    const elementContainer = document.getElementById('element-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        // Create a new element
        const newElement = document.createElement('div');
        elementCount++;
        
        // Set its properties
        newElement.className = 'dynamic-element';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px 0';
        newElement.style.backgroundColor = getRandomColor();
        newElement.style.borderRadius = '5px';
        newElement.style.color = 'white';
        newElement.textContent = `Dynamic Element #${elementCount}`;
        
        // Add the element to the container
        elementContainer.appendChild(newElement);
        
        // Update button state
        removeElementBtn.disabled = false;
    });
    
    removeElementBtn.addEventListener('click', function() {
        // Get all dynamic elements
        const dynamicElements = elementContainer.querySelectorAll('.dynamic-element');
        
        // Remove the last element if any exist
        if (dynamicElements.length > 0) {
            elementContainer.removeChild(dynamicElements[dynamicElements.length - 1]);
            
            // Disable the remove button if no elements left
            if (elementContainer.querySelectorAll('.dynamic-element').length === 0) {
                removeElementBtn.disabled = true;
            }
        }
    });
    
    // Helper function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
