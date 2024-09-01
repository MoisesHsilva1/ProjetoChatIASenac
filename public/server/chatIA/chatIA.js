const dialogflow = require('dialogflow'); 
const config = require('../config/keys');

const projectId = config.googleprojectId;
const sessionId = config.dialogFlowSessionId;

const credentials = {
    client_email: config.googleClientEmail,
    privateKey: config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient( { projectId, credentials});

const textQuery = async (userText, userId) => { 
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: userText,
                languageCode: config.dialogFlowSessionLanguageCode
            }
        }
    }

    try {
        const response =  await sessionClient.detectIntent(request);
        console.log(response);
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {
    textQuery 
}