module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        api: {
            model: 'api',
            required: true
        },
        endpoints: {
            collection: 'Endpoint',
            via: 'group'
        }
    }
}
