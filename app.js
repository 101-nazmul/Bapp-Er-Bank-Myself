document.getElementById('logInBtn').addEventListener('click', function(){
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;
    if(inputEmail === 'sn.nazmul.102@gmail.com' && inputPassword === '.NazMul.101') {
        window.location.href = '/Main Bank/index.html';
    } else {
        alert('Unvalid User')
    }
}) 