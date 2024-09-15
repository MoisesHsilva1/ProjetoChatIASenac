async function sendMessage() {
    const fieldResponse = document.getElementById('response-text');
    const fieldChat = document.getElementById('field-message');
    const message = fieldChat.value;

    fieldResponse.innerHTML += `<p>Usuario: ${message}</p>`;

    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        fieldResponse.innerHTML += `<p>IA: ${data.reply}</p>`;
    } catch (error) {
        fieldResponse.innerHTML += `<p>Erro: Não foi possível se conectar ao servidor.</p>`;
    }

    fieldChat.value = '';
}
document.getElementById('button-gerateText').addEventListener('click', sendMessage);
