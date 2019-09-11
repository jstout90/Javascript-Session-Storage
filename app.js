let inputKey = document.getElementById('key');
let inputValue = document.getElementById('value');
let inputBtn = document.getElementById('submitData');
let outData = document.getElementById('outputData');
let inputForm = document.getElementById('inputForm');

inputBtn.addEventListener('click', addToStorage);

function addToStorage() {
    const key = inputKey.value;
    const value = inputValue.value;

    if (key && value) {
        sessionStorage.setItem(JSON.stringify(key), JSON.stringify(value));
        inputForm.reset();
        outData.innerHTML = '';
        } else {
        alert('You must enter a Key and Value before submitting!')
    }
    for ( var i = 0; i < sessionStorage.length; i++){
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        outData.innerHTML += `${key}: ${value}<br/>`
    }
};
