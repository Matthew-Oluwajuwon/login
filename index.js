document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you would perform the actual authentication logic, like sending a request to a server.
    // For the sake of simplicity, we're just logging the credentials to the console.
    console.log('Username:', username);
    console.log('Password:', password);
});
