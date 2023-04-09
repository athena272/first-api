const { listUsers, getUserById, createUser, updateUser } = require('./controllers/userController.js')

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: getUserById
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: createUser
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: updateUser
    },
]