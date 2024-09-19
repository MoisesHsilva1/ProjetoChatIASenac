async function sendMessage() {
    const fieldResponseUser = document.getElementById('response-text');
    const fieldChat = document.getElementById('field-message');
    const responseIa = document.getElementById('response-IA');
    const message = fieldChat.value;

    fieldResponseUser.innerHTML = '';
    responseIa.innerHTML = '';

    fieldResponseUser.innerHTML += `<p style="color: yellow;">Você: ${message}</p>`;

    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        responseIa.innerHTML += `<p style="color: white;">IA: ${data.response}</p>`;
    } catch (error) {
        fieldResponseUser.innerHTML += `<p style="color: red;">Erro: Não foi possível se conectar ao servidor.</p>`;
    }

    fieldChat.value = '';
}

function clearHistory() {
    const fieldResponseUser = document.getElementById('response-text');
    const responseIa = document.getElementById('response-IA');

    fieldResponseUser.innerHTML = '';
    responseIa.innerHTML = '';
}
document.getElementById('button-gerateText').addEventListener('click', sendMessage);
