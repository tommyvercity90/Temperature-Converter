const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const errorMessage = document.getElementById("error");
const clearBtn = document.getElementById("clearBtn");

// Celsius conversions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Fahrenheit conversions
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

// Kelvin conversions
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
}

// Clear error message
function clearError() {
    errorMessage.textContent = "";
}

// Convert from Celsius
celsiusInput.addEventListener("input", function () {
    const celsius = parseFloat(celsiusInput.value);

    if (celsiusInput.value === "") {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        clearError();
        return;
    }

    if (isNaN(celsius)) {
        showError("Please enter a valid temperature.");
        return;
    }

    const kelvin = celsiusToKelvin(celsius);

    if (kelvin < 0) {
        showError("Temperature cannot be below absolute zero.");
        return;
    }

    clearError();

    fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
});

// Convert from Fahrenheit
fahrenheitInput.addEventListener("input", function () {
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (fahrenheitInput.value === "") {
        celsiusInput.value = "";
        kelvinInput.value = "";
        clearError();
        return;
    }

    if (isNaN(fahrenheit)) {
        showError("Please enter a valid temperature.");
        return;
    }

    const kelvin = fahrenheitToKelvin(fahrenheit);

    if (kelvin < 0) {
        showError("Temperature cannot be below absolute zero.");
        return;
    }

    clearError();

    celsiusInput.value = fahrenheitToCelsius(fahrenheit).toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
});

// Convert from Kelvin
kelvinInput.addEventListener("input", function () {
    const kelvin = parseFloat(kelvinInput.value);

    if (kelvinInput.value === "") {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        clearError();
        return;
    }

    if (isNaN(kelvin)) {
        showError("Please enter a valid temperature.");
        return;
    }

    if (kelvin < 0) {
        showError("Kelvin cannot be below 0 K.");
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        return;
    }

    clearError();

    celsiusInput.value = kelvinToCelsius(kelvin).toFixed(2);
    fahrenheitInput.value = kelvinToFahrenheit(kelvin).toFixed(2);
});

// Clear all inputs
clearBtn.addEventListener("click", function () {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    clearError();
});
