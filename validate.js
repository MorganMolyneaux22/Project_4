// <!-- Morgan Molyneaux, July 28, 2023: Purpose of program: Showcase basic knowledge of eventlister using Javascript.  To 
//     make an interactable Vistor Form.  If user it to enter invalid information, pop-up form to follow.  Detailing
//     to the user what they are missing/required.
// The entirety of this code and the repository in which it's contained was crafted and developed by Morgan Molyneaux.

const statesList = ["CA", "TX", "NY", "FL", "IL", "UT"];// im not putting all the states (deal with it)


function checkRequired(input) {
    if (!input.value.trim()) {
        alert(input.name + " is required.");
        return false;
    }
    return true;
}

function validateState(value) {
    if (!statesList.includes(value.toUpperCase())) {
        alert("Please enter a valid state.");
        return false;
    }
    return true;
}

function checkFormat(type, value) {
    let temp_value;
    switch (type) {
        case 'zip':
            temp_value = /^[0-9]{5}(?:-[0-9]{4})?$/;
            break;
        case 'phone':
            // temp_value = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; i was getting an error because it's very picky
            break;
        case 'email':
            temp_value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        default:
            return true;
    }

    if (!temp_value.test(value)) {
        alert("Please enter a valid " + type + ".");
        return false;
    }
    return true;
}

// Access id form and listen for button event.  I user hasn't clicked option, prompt to the user to click an option 
document.getElementById('submitBtn').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default form submission
    
    let checkboxes = document.querySelectorAll("input[name='findSource']:checked");
    if (checkboxes.length === 0) {
        alert("Please select at least one option for 'How did you find my page?'");
        return;
    }

    // If all other cases pass withou failure, the form is set to blank and a thank you message is displayed
    document.querySelector('#contact .form').style.display = 'none';
    document.getElementById('thank_you').style.display = 'block';
});


