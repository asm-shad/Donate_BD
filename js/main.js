
// const noakhaliInput = getInputFieldValueById('noakhaliInputField');
// const feniInput = getInputFieldValueById('feniInputField');
// const quotaInput = getInputFieldValueById('quotaInputField');

// const userBalance = getTextFieldValueById('userBalanceAmount');
// const noakhaliBalance = getTextFieldValueById('noakhaliBalanceAmount');
// const feniBalance = getTextFieldValueById('feniBalanceAmount');
// const quotaBalance = getTextFieldValueById('quotaBalanceAmount');

// console.log(noakhaliInput);

document.getElementById('donate-noakhali').addEventListener('click', function(){
    const noakhaliInput = getInputFieldValueById('noakhaliInputField');
    console.log(noakhaliInput);
});

const historyField = document.getElementById('history-view');
const donationField = document.getElementById('donaton-view');

historyField.addEventListener('click', function(){
    historyField.classList.add('bg-lime-400');
    donationField.classList.remove('bg-lime-400');

    document.getElementById('donationField').classList.add('hidden');
    document.getElementById('historyField').classList.remove('hidden');
});

donationField.addEventListener('click', function(){
    historyField.classList.remove('bg-lime-400');
    donationField.classList.add('bg-lime-400');

    document.getElementById('donationField').classList.remove('hidden');
    document.getElementById('historyField').classList.add('hidden');
});