module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        owner: {
            model: 'user',
            required: true
        },
        globals: {
            type: 'json'
        },
        contributors: {
            collection: 'user',
            via: 'api',
            through: 'contributor'
        },
        environments: {
            collection: 'environment',
            via: 'api'
        },
        headerPresets: {
            collection: 'HeaderPreset',
            via: 'api'
        },
        groups: {
            collection: 'EndpointGroup',
            via: 'api'
        }
    }
};

