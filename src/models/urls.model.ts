import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Url } from '@interfaces/urls.interface';

export type UserCreationAttributes = Optional<Url, 'id' | 'url' | 'uuid'>;

export class UrlModel extends Model<Url, UserCreationAttributes> implements Url {
  public id: number;
  public url: string;
  public uuid: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UrlModel {
  UrlModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      uuid: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'urls',
      sequelize,
    },
  );

  return UrlModel;
}
