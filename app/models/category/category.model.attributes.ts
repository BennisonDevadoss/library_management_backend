import { DataTypes } from 'sequelize';

export const modelOptions = {
  paranoid: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  tableName: 'categories',
  indexes: [{ fields: ['name'] }]
};
export const attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'name can\'t be empty'
      }
    }
  },
  created_by: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    validate: {
      notNull: {
        args: true,
        msg: 'created_by can\'t be emptyI'
      }
    }
  },
  updated_by: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'created_at can\'t be empty'
      }
    }
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'updated_at can\'t be empty'
      }
    }
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
};
