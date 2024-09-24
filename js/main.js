
//const noakhaliInput = getInputFieldValueById('noakhaliInputField');
// const feniInput = getInputFieldValueById('feniInputField');
// const quotaInput = getInputFieldValueById('quotaInputField');

// const userBalance = getTextFieldValueById('userBalanceAmount');
// const noakhaliBalance = getTextFieldValueById('noakhaliBalanceAmount');
// const feniBalance = getTextFieldValueById('feniBalanceAmount');
// const quotaBalance = getTextFieldValueById('quotaBalanceAmount');

//console.log(noakhaliInput);

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

document.getElementById('donate-noakhali').addEventListener('click', function(){
    const noakhaliInput = getInputFieldValueById('noakhaliInputField');
    const userBalance = getTextFieldValueById('userBalanceAmount');
    const noakhaliBalance = getTextFieldValueById('noakhaliBalanceAmount');

    if(noakhaliInput > userBalance){
        alert('Invalid Data');
    } 
    else {
        const userNewBalance = userBalance - noakhaliInput;
        const noakhaliNewBalance = noakhaliBalance + noakhaliInput;

        document.getElementById('userBalanceAmount').innerText = userNewBalance;
        document.getElementById('noakhaliBalanceAmount').innerText = noakhaliNewBalance;

        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-4'

        historyItem.innerHTML = `
            <h3 class="font-bold">${noakhaliInput} Taka is Donated for Flood Relief in Noakhali, Bangladesh</h3>
            <p class="text-xs text-gray-500">Date: ${new Date().toString()}</p>
        `;
        const historyContainer = document.getElementById('historyField');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
});