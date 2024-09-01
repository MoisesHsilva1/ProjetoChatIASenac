const { GoogleAuth } = require('google-auth-library');
const fetch = require('node-fetch');
const fs = require('fs');

const keyfile = 'projectGoogle.json';

const projectId = 'project-id';
const sessionId = 'session-id';


async function getToken() {
    const auth = new GoogleAuth({
        keyFile: keyfile,
        scopes: ['https://www.googleapis.com/auth/cloud-platform']
    });
    const client = await auth.getClient();
    const tokenresponse =  await client.getAccessToken();
    return tokenresponse.token;
}

async function sendMessageDialogflow(message) {
    const token = await getToken();
    const url = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`;

    const body = {
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });

    const json = await response.json();
    console.log('Dialogflow response:', dataqueryResult.fulfillmentText);
}

sendMessageDialogflow('Olá');