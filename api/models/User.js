module.exports = {
    attributes: {
        username: {
            type: 'string',
            minLength: 3,
            maxLength: 50,
            required: true,
            regex: /^[a-z0-9]+$/i
        },
        fullName: {
            type: 'string'
        },
        password: {
            type: 'string',
            required: true
        },
        ownApis: {
            collection: 'api',
            via: 'owner'
        },
        contributingApis: {
            collection: 'api',
            via: 'user',
            through: 'contributor'
        },

        toJSON() {
            const obj = this.toObject()
            delete obj.password
            return obj
        }
    }
}
