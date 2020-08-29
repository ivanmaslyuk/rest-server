module.exports = {
    attributes: {
        user: {
            model: 'user',
            required: true
        },
        api: {
            model: 'api',
            required: true
        },
        canEdit: {
            type: 'boolean',
            defaultsTo: false
        }
    }
}
