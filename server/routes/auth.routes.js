const LogRegcontroller = require('../controllers/auth.controller'),
    UserController = require('../controllers/user.controller'),
    {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/register',LogRegcontroller.register)
    app.post('/api/login',LogRegcontroller.login)
    app.get('/api/users',authenticate,UserController.index)
    app.get('/api/logout',authenticate,LogRegcontroller.logout)
}
