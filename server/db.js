import dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(
  "moods_db",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

// Run `node db/db.js` to test database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

testConnection();

// ORM Models
const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  spotify_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  display_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Mood = sequelize.define("mood", {
  mood_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
  energy: {
    type: DataTypes.FLOAT,
  },
  happiness: {
    type: DataTypes.FLOAT,
  },
  instrumentalness: {
    type: DataTypes.FLOAT,
  },
  acousticness: {
    type: DataTypes.FLOAT,
  },
});

// User.hasMany(Mood, { foreignKey: "user_id" });
// Mood.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Mood, {
  foreignKey: "user_id",
  sourceKey: "spotify_id",
});

Mood.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "spotify_id",
});

// Synchronize ORM models with database
async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize the database: ", error);
  }
}

syncDatabase();

export { sequelize, User, Mood };
