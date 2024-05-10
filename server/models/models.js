const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')

//Описание моделей
const User = sequelize.define('User', {
     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
     email: {type: DataTypes.STRING, unique: true},
     password: {type: DataTypes.STRING},
     role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Basket = sequelize.define('Basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


const BasketDevice = sequelize.define('Basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('Device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('Type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('Rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const DeviceInfo = sequelize.define('Device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

//Связующая таблица

const TypeBrand = sequelize.define('Type_Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})



//Связи между таблицами
User.hasOne(Basket)
Basket.belongsTo(User)


User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Brand,
    Type,
    Rating,
    TypeBrand,
    DeviceInfo
}