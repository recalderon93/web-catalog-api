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
  console.log('logging');
  const sequelize = new Sequelize('gql-example', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    logging: false,
  });
  testSeq(sequelize);
  return sequelize;
}
export default dbCreator;
