import { DataTypes } from 'sequelize';

export const modelOptions = {
  paranoid: true,
  underscored: true,
  tableName: 'roles',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at'
};

export const attributes = {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Role can't be empty"
      }
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    notNull: {
      args: true,
      msg: "created_at can't be empty"
    }
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
};
