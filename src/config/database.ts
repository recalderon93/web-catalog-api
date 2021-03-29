import { Sequelize } from 'sequelize';

async function testSeq(obj: Sequelize) {
  try {
    await obj.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

function dbCreator({
  database,
  username,
  password,
}: {
  database: string;
  username: string;
  password: string;
}): Sequelize {
  const sequelize = new Sequelize(database, username, password, {
    dialect: 'postgres',
    host: 'localhost',
  });
  testSeq(sequelize);
  return sequelize;
}

export default dbCreator;
