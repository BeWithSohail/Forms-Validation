document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to hide errors on input
    const formInputs = document.querySelectorAll('input, select');
    formInputs.forEach((input) => {
        input.addEventListener('input', function () {
            validateInput(input);
        });

        input.addEventListener('keyup', function () {
            validateInput(input);
        });
    });
});

function validateForm() {
    // Reset error messages
    hideErrors();

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');
    const number = document.getElementById('number');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const select = document.getElementById('select');

    // Validate Name
    validateInput(name);

    // Validate Email
    validateInput(email);

    // Validate Checkbox
    validateInput(checkbox);

    // Validate Number
    validateInput(number);

    // Validate Radio Buttons
    validateInput(radio1);
    validateInput(radio2);

    // Validate Select Option
    validateInput(select);
}

function validateInput(input) {
    const id = input.id;
    const errorId = id + 'Error';
    const errorElement = document.getElementById(errorId);

    switch (id) {
        case 'name':
            if (input.value.trim() === '') {
                showError(errorId, 'Name is required.');
            } else {
                hideError(errorId);
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                showError(errorId, 'Enter a valid email address.');
            } else {
                hideError(errorId);
            }
            break;

        case 'checkbox':
            if (!input.checked) {
                showError(errorId, 'Checkbox must be checked.');
            } else {
                hideError(errorId);
            }
            break;

        case 'number':
            if (isNaN(input.value)) {
                showError(errorId, 'Enter a valid number.');
            } else {
                hideError(errorId);
            }
            break;

        case 'radio1':
        case 'radio2':
            if (!document.querySelector(`input[name="${input.name}"]:checked`)) {
                showError(errorId, 'Select one option.');
            } else {
                hideError(errorId);
            }
            break;

        case 'select':
            if (input.value === '') {
                showError(errorId, 'Select an option.');
            } else {
                hideError(errorId);
            }
            break;

        default:
            break;
    }
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'block';
    errorElement.innerText = message;
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
}

function hideErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
        element.style.display = 'none';
    });
}
