document.getElementById('convert-btn').addEventListener('click', convertTemp);
document.getElementById('clear-btn').addEventListener('click', clearFields);

function convertTemp() {
    const tempValue = parseFloat(document.getElementById('temp-input').value);
    const tempUnit = document.getElementById('temp-unit').value;
    if (!tempValue) {
        alert('Please enter a valid temperature.');
        return;
    }
    let result;
    switch (tempUnit) {
        case 'C':
            result = `${tempValue}°C is ${(tempValue * 9/5 + 32).toFixed(2)}°F or ${(tempValue + 273.15).toFixed(2)}K`;
            break;
        case 'F':
            result = `${tempValue}°F is ${((tempValue - 32) * 5/9).toFixed(2)}°C or ${((tempValue - 32) * 5/9 + 273.15).toFixed(2)}K`;
            break;
        case 'K':
            result = `${tempValue}K is ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)}°F or ${(tempValue - 273.15).toFixed(2)}°C`;
            break;
    }
    document.getElementById('conversion-result').textContent = result;
}
 function clearFields() {
     document.getElementById('temp-input').value = '';
     document.getElementById('conversion-result').textContent = '';
}