const baseURL = "https://moronimotta.github.io/wdd230/"
const linksURL = baseURL + "scoots/data/rentals.json";

storedData = [];

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
        formInputs.forEach(function (input) {
            input.removeAttribute('disabled');
        });
    } else {
        formInputs.forEach(function (input) {
            input.setAttribute('disabled', 'disabled');
        });
    }
}

function formInitalValue() {
    var formInputs = document.querySelectorAll('form input, form select, form textarea');

    formInputs.forEach(function (input) {
        input.setAttribute('disabled', 'disabled');
    });
}

formInitalValue();

const models = {
    scooter: [],
    atv: [],
    jeep: []
};

async function getRentals() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();

        data.rentals.forEach(rental => {
            if (models.hasOwnProperty(rental.type)) {
                models[rental.type].push(rental.name);
            }
        });

        storedData = data.rentals;

    } catch (error) {
        console.error(error);
    }
}
getRentals();


function populateOptionsAndPeriod() {
    const modelTypeSelect = document.getElementById('model-type');
    const periodSelect = document.getElementById('period');
    const selectedModel = modelTypeSelect.value;

    const rental = storedData.find(item => item.name === selectedModel);

    if (rental) {
        periodSelect.innerHTML = '';

        const halfDayOption = document.createElement('option');
        halfDayOption.value = 'half-day';
        halfDayOption.textContent = `Half Day - $${rental.halfDayPrice}`;
        periodSelect.appendChild(halfDayOption);

        const fullDayOption = document.createElement('option');
        fullDayOption.value = 'full-day';
        fullDayOption.textContent = `Full Day - $${rental.fullDayPrice}`;
        periodSelect.appendChild(fullDayOption);
    }
}

function populateModelOptions() {
    const selectedType = document.querySelector('input[name="motorType"]:checked').value;
    const selectedModels = models[selectedType];
    const modelTypeSelect = document.getElementById('model-type');

    modelTypeSelect.innerHTML = '';

    selectedModels.forEach(function (model) {
        var option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelTypeSelect.appendChild(option);
    });

    populateOptionsAndPeriod();
}

const rentalTypeRadios = document.querySelectorAll('input[name="motorType"]');
rentalTypeRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        populateModelOptions();
    });
});

const modelTypeSelect = document.getElementById('model-type');
modelTypeSelect.addEventListener('change', function () {
    populateOptionsAndPeriod();
});

populateModelOptions();


function updateTotalCost() {
    const periodSelect = document.getElementById('period');
    const numberInput = document.getElementById('number');
    const confirmInput = document.getElementById('confirmInput');

    if (periodSelect.value && numberInput.value) {
        confirmInput.style.display = 'block';
    } else {
        confirmInput.style.display = 'none';
    }
}

function displayTotalCost() {
    const periodSelect = document.getElementById('period');
    const numberInput = document.getElementById('number');
    const totalFieldset = document.getElementById('totalFieldset');
    const totalCostParagraph = document.getElementById('total-cost');

    const selectedPeriod = periodSelect.value;
    const numberRentals = parseInt(numberInput.value);

    let rentalPrice = 0;
    if (selectedPeriod === 'half-day') {
        rentalPrice = parseFloat(periodSelect.querySelector('option[value="half-day"]').textContent.match(/\d+/)[0]);
    } else if (selectedPeriod === 'full-day') {
        rentalPrice = parseFloat(periodSelect.querySelector('option[value="full-day"]').textContent.match(/\d+/)[0]);
    }

    const totalCost = numberRentals * rentalPrice;

    totalCostParagraph.innerHTML = `Total: $${totalCost.toFixed(2)}`;
    totalFieldset.style.display = 'block';
}

function confirmDetails() {
    displayTotalCost();
}

const numberInput = document.getElementById('number');
numberInput.addEventListener('input', function() {
    updateTotalCost();
});

const periodSelect = document.getElementById('period');
periodSelect.addEventListener('change', function() {
    updateTotalCost();
});



