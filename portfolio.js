function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newEntry = container.children[0].cloneNode(true);
    // Clear input values
    newEntry.querySelectorAll('input, textarea').forEach(input => input.value = '');
    container.appendChild(newEntry);
}

function addEducation() {
    const container = document.getElementById('educationContainer');
    const newEntry = container.children[0].cloneNode(true);
    // Clear input values
    newEntry.querySelectorAll('input').forEach(input => input.value = '');
    container.appendChild(newEntry);
}

// Add drag and drop functionality for resume upload
document.querySelector('.upload-area').addEventListener('dragover', (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
});

document.querySelector('.upload-area').addEventListener('dragleave', (e) => {
    e.currentTarget.classList.remove('dragover');
});

document.querySelector('.upload-area').addEventListener('drop', (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

function handleFile(file) {
    // Add your file handling logic here
    console.log('File uploaded:', file.name);
}