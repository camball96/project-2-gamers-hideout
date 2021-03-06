const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model { }

Review.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		review_txt: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		review_score: {
			type: DataTypes.NUMERIC,
			allowNull: false
		},
		game_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "game",
				key: "id",
			},
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: "user",
				key: "user_name"
			}
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "review",
	}
);

module.exports = Review;