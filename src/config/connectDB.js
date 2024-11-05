const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('thanhduy', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Thanh cong');
    } catch (error) {
        console.log('Khong thanh cong', error);
    }
}
module.exports = connectDB;