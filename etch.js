// Function to change grid color on hover
function changeColor(event){
    event.target.style.backgroundColor = "black";
}

// Function to revert grid color when hover ends
function revertColor(event){
    event.target.style.backgroundColor = "antiquewhite";
}

// Function to create the grid
function createGrid(rows, cols){
    const container = document.getElementById("grid-container"); 
    container.innerHTML = ""; 

    // Set grid dimensions in CSS
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Create grid items
    for (let i = 0; i < rows * cols; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent = i;

        //Append the grid item to the container
        container.appendChild(gridItem);
        
        //Add event listeners for hover effect
        gridItem.addEventListener("mouseover", changeColor);
        gridItem.addEventListener("mouseout", revertColor);
    }
}

// Function to resize the grid
function resizeGrid(){
    let size = prompt("Enter the number of squares per side for the new grid (max: 100):");

    // Validate user input
    size = size && size.trim();
    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100){
        alert("Invalid Input! Please enter a number between 1 and 100.");
        return;
    }

    // Create the new grid with user specified dimensions 
    createGrid(size, size);
}

// Add an event listener to the resize button 
document.getElementById("resize-button").addEventListener("click", resizeGrid);

//Create a default 16*16 grid on page load
createGrid(16, 16);