let  = 1260;

document.getElementById('depositeBtn').addEventListener('click', function () {
    const inputDeposite = document.getElementById('inputDeposite');
    const totalBalanceString = document.getElementById('totalBalance');
    const totalDepositeString = document.getElementById('totalDeposite');
    const totalBalance = parseFloat(totalBalanceString.innerText) + parseFloat(inputDeposite.value);
    const totalDeposite = parseFloat(totalDepositeString.innerText) + parseFloat(inputDeposite.value);
    totalBalanceString.innerText = totalBalance.toFixed(2);
    totalDepositeString.innerText = totalDeposite.toFixed(2);
    inputDeposite.value = '';
});

document.getElementById('withdrawBtn').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('inputWithdraw');
    const totalBalanceString = document.getElementById('totalBalance');
    const totalWithdrawString = document.getElementById('totalWithdraw');
    const totalBalance = parseFloat(totalBalanceString.innerText) - parseFloat(inputWithdraw.value);
    const totalWithdraw = parseFloat(totalWithdrawString.innerText) + parseFloat(inputWithdraw.value);
    totalBalanceString.innerText = totalBalance.toFixed(2);
    totalWithdrawString.innerText = totalWithdraw.toFixed(2);
    inputWithdraw.value = '';
})