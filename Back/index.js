const app = require('./app')
const { sequelize } = require('./src/DB_connection')
const PORT = 3001

sequelize.sync({force: true})
.then(res => {
    app.listen(app.listen(PORT, () => {
        console.log('in server http://localhost:3001');
    }))
})