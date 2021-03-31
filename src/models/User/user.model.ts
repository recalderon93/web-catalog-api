import { DataTypes, Model, Optional } from 'sequelize';
import config from '../../config';

const { db } = config;

db.sync({ force: false });

interface UserAttributes {
  firstName: string;
  lastName: string;
  age: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'age'> {}

class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public firstName!: string;

  public lastName!: string;

  public age!: number;

  /** Timestamps */
  public readonly createAt!: Date;

  public readonly updateAt!: Date;
}

UserModel.init(
  {
    firstName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'user',
  },
);
export default UserModel;
