const axios = require('axios')
const OA_ACCESS_TOKEN = 'Oq5_6XnxvXviH7iI7d7c5snBTnWPQUf-BYOM1oq7x0qfUnTY51_9RILnKHmNCjLg86egDImJjL4SN5qz5pdDLcbuKWzVBf17SHGF27b-nrbq8YiY2rJJKmqREnad8z4L5NKeQsemz1z8SniJFptMTWmSBISw9yyl5KvNQHK9hWzYNKr5KZoU5cnnK7rw7BSvQcL6KNHGdGG7Eq9L7mI403HOH0z1DhbQCLDn3YCvcsDGU5voOn-22avMSNzbFR4SHr9fGdfizYvB4H5nE4SCgJmNO-KK';
const BASE_URL = 'https://openapi.zalo.me/v2.0/oa/message?access_token=' + OA_ACCESS_TOKEN;

// Send POST REQUEST to Open API
export function sendTextMessage(recipientId, text, imageUrl) {
    const body = buildMessageBody(recipientId, text, imageUrl);
    return axios.post(BASE_URL, body)
}

export function sendListMessage(recipientId, list) {
    const body = buildListMessage(recipientId, list);
    return axios.post(BASE_URL, body)
}

export function sendQuestion(recipientId, question) {
    return sendTextMessage(recipientId, question, null)
}

export function sendIntroQuestion(recipientId, question) {
    return sendTextMessage(recipientId, question, null)
}

function buildBody(recipientId, message) {
    return {
        "recipient":{
            "user_id": recipientId
        },
        "message": message
    }
}

function buildMessageBody(recipientId,  text, imageUrl) {
    const message = imageUrl ? {
        text,
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "media",
                "elements": [{
                    "media_type": "image",
                    "url": imageUrl
                }]
            }
        }
    }: {
        text
    }
    return buildBody(recipientId, message)
}

function buildListMessage(recipientId, list) {
    return buildBody(recipientId, {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "elements": list
            }
        }
    })
}