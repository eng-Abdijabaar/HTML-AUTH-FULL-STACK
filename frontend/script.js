const email = document.getElementById('email');
const password = document.getElementById('password');


const registerForm = document.getElementById('registerForm');

if (registerForm) {
    const username = document.getElementById('username');
    const image = document.getElementById('image');
    const registerBtn = document.getElementById('submit');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!username.value || !email.value || !password.value || !image.files[0]) {
            alert('Please fill out all fields and select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('username', username.value);
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('image', image.files[0]);

        registerBtn.disabled = true;
        registerBtn.textContent = 'Registering...';

        try {
            const response = await fetch('http://localhost:5000/api/auth/createUser', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Registration successful!');
                window.location.href = 'login.html';
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred while registering. Please try again.');
        } finally {
            registerBtn.disabled = false;
            registerBtn.textContent = 'Register';
        }
    });
}

const login_btn = document.getElementById('login-btn')

if (login_btn) {

    login_btn.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            })

            if (response.ok) {
                const data = response.json();
                alert('Login successful!');
                window.location.href = 'profile.html';
            } else {
                const errData = await response.json();
                alert(`Error: ${errData.message}`);
            } 
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred while logging in. Please try again.');
            
        }
    })
}