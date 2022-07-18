const AWS = require('aws-sdk');
const uuid = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();
const groupsTable = process.env.GROUPS_TABLE;

exports.handler = async (event) => {

    console.log("Processiong event: ", event);

    const itemId = uuid.v4();

    const parseBody = (event);
    console.log("Body event: ", event);

    const newItem = {
        id: itemId,
        ...parseBody
    }

    await docClient.put({
        TableName: groupsTable,
        Item: newItem
    }).promise();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: newItem
    }
}