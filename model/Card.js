module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("card", {
        productId:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        customerId:{ 
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        quantity: Sequelize.INTEGER,
    });
    return Card;
}