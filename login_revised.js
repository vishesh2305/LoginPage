document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-box').addEventListener('submit', function (event) {
        event.preventDefault();
        checklogin();
    });

    function checklogin() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const users = {
            // Here add the data of users
        }

        if (!username || !email || !password) {
            document.getElementById("alert-text").textContent = 'All Fields are Necessary!';
        } else if ((users.hasOwnProperty(username) && users[username] === password) || (users.hasOwnProperty(email) && users[email] === password)) {
            document.getElementById('alert-text').innerText = 'Login successful!';
            // Redirect the user to the next page
        } else {
            document.getElementById('alert-text').innerText = 'Incorrect username or password. Try again.';
        }
    }
});
