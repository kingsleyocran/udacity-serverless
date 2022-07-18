const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const groupsTable = process.env.GROUPS_TABLE;

exports.handler = async (event) => {

    const result = await docClient.scan({
        TableName: groupsTable
    }).promise();

    const items = result.Items;

    const output = {
        items: items
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: output
    }
}