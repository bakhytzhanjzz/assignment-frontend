// DOM Manipulation Example
document.addEventListener('DOMContentLoaded', function () {
    const mainHeader = document.getElementById('main-header');
    mainHeader.style.backgroundColor = '#d4af37'; // Change the header color to a gold tone

    const cards = document.querySelectorAll('.card-title');
    cards.forEach(card => {
        card.style.color = '#FF5733'; // Change card title color to orange-red
    });
});

// Event Handling with Keyboard
document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        document.body.style.backgroundColor = '#f7f7f7'; // Switch background on 'r' key
    } else if (event.key === 'b') {
        document.body.style.backgroundColor = '#000000'; // Switch background on 'b' key
    }
});

// Form Validation Example
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = "Passwords do not match!";
        return false;
    }
    return true;
}

// Drag-and-drop feature
const draggables = document.querySelectorAll('.draggable');
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

document.getElementById('fetchFactBtn').addEventListener('click', function () {
    console.log('Button clicked! Fetching fact...');
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: { 'X-Api-Key': 'd+kS8K0WxZBB03QZmjsgBg==n5pswRjqIlrRDKGS' }
    })
    .then(response => {
        console.log('Response received:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fact received:', data);
        document.getElementById('fact').textContent = data[0].fact;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('fact').textContent = 'Sorry, no facts available at the moment.';
    });
});

