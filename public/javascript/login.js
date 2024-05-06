document.addEventListener("DOMContentLoaded", function() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.loggedIn) {
        document.getElementById('loggedInMessage').classList.remove('hidden');
        document.getElementById('createAccountForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('loginLink').style.display = 'none';
    }
});

document.getElementById('toggleForm').addEventListener('click', function (e) {
    e.preventDefault();
    const createAccountForm = document.getElementById('createAccountForm');
    const loginForm = document.getElementById('loginForm');

    if (createAccountForm.style.display === 'none') {
        createAccountForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        createAccountForm.style.display = 'none';
        loginForm.style.display = 'block';
        document.getElementById('loginError').classList.add('hidden');
    }
});

document.getElementById('createAccountBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const newPassword = document.getElementById('newPassword').value;
    const userData = {
        name: name,
        email: email,
        phone: phone,
        password: newPassword,
        loggedIn: true
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    document.getElementById('createAccountForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && email === userData.email && password === userData.password) {
        document.getElementById('loginError').classList.add('hidden');
        document.getElementById('loggedInMessage').classList.remove('hidden');
        document.getElementById('createAccountForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        userData.loggedIn = true;
        localStorage.setItem('userData', JSON.stringify(userData));
        document.getElementById('loginLink').style.display = 'none';
    } else {
        document.getElementById('loginError').classList.remove('hidden');
        document.getElementById('loggedInMessage').classList.add('hidden');
    }
});