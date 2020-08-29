module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        url: {
            type: 'string',
            required: true
        },
        group: {
            model: 'EndpointGroup',
            required: true
        },
        urlencodedData: {
            type: 'string'
        },
        rawData: {
            type: 'string'
        },
        rawDataType: {
            type: 'string',
            isIn: ['json', 'xml', 'html', 'js', 'text']
        },
        dataType: {
            type: 'string',
            isIn: ['none', 'raw', 'urlencoded'],
            defaultsTo: 'none'
        },
        method: {
            type: 'string',
            isIn: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            defaultsTo: 'GET'
        },
        headers: {
            type: 'json'
        }
    }
}
