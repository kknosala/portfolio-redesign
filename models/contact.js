module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
        name: { type: DataTypes.STRING, allowNull: false, validation: { min: 1 } },
        email: { type: DataTypes.STRING, allowNull: false, validation: { isEmail: true } },
        message: { type: DataTypes.TEXT, allowNull: false, validation: { min: 1 } }
    })

    return Contact;
}