document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Usuário e senha de exemplo
    const validUsername = 'usuario';
    const validPassword = 'senha123';

    if (username === validUsername && password === validPassword) {
        alert('Login bem-sucedido!');
        errorMsg.textContent = '';
        // Aqui você pode redirecionar o usuário ou executar outras ações
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos!';
    }
});
