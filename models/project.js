module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("Project", {
        title: { type: DataTypes.STRING, allowNull: false, validation: { min: 1 } },
        image: { type: DataTypes.STRING, allowNull: false, validation: { min: 1 } },
        text: { type: DataTypes.TEXT, allowNull: false, validation: { ming: 1 } },
        liveUrl: { type: DataTypes.STRING, allowNull: false, validation: { min: 1 } },
        gitUrl: { type: DataTypes.STRING, allowNull: false, validation: { min: 1 } },
        displayFront: { type: DataTypes.BOOLEAN, default: false }
    })
    return Project;
}