
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return parseFloat(inputValue);
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}