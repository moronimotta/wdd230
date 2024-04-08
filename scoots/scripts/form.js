function selectMotor(type) {
    document.getElementById('selectedType').value = type;
    
    const icons = document.querySelectorAll('.motor-icon');
    icons.forEach(icon => {
        if (icon.alt.toLowerCase() === type) {
            icon.src = './images/' + type + '-checked.png';
        } else {
            icon.src = './images/' + icon.alt.toLowerCase() + '.png';
        }
    });
}

 function unlockForm() {
    var agreementCheckbox = document.getElementById('agreement');
    var formInputs = document.querySelectorAll('form input, form select, form textarea');
    
    if (agreementCheckbox.checked) {
        formInputs.forEach(function(input) {
            input.removeAttribute('disabled');
        });
    } else {
        formInputs.forEach(function(input) {
            input.setAttribute('disabled', 'disabled');
        });
    }
}


async function getRentals() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();

    } catch (error) {
        console.error(error);
    }
}


getRentals();


const models = {
    scooter: ["Honda Metro Scooter", "Honda Dio Scooter", "Honda PCX150 Scooter"],
    atv: ["Honda Pioneer ATV"],
    jeep: ["Jeep Wrangler - 4 door with a/c", "Jeep Wrangler - 2 door"]
};

function populateModelOptions() {
    var selectedType = document.querySelector('input[name="motorType"]:checked').value;

    var selectedModels = models[selectedType];

    var modelTypeSelect = document.getElementById('model-type');

    modelTypeSelect.innerHTML = '';

    selectedModels.forEach(function(model) {
        var option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelTypeSelect.appendChild(option);
    });
}

function handleRentalTypeChange() {
    populateModelOptions();
}

var rentalTypeRadios = document.querySelectorAll('input[name="motorType"]');
rentalTypeRadios.forEach(function(radio) {
    radio.addEventListener('change', handleRentalTypeChange);
});

populateModelOptions();

