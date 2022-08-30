import { DataTypes } from 'sequelize';

export const modelOptions = {
  paranoid: true,
  underscored: true,
  tableName: 'books',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  indexes: [{ fields: ['name', 'author'] }]
};

export const attributes = {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isNull: {
        args: true,
        msg: `name can't be empty`
      }
    }
  },
  author: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isNull: {
        args: true,
        msg: `author can't be empty`
      }
    }
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNull: {
        args: true,
        msg: `rating can't be empty`
      }
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNull: {
        args: true,
        msg: `price can't be empty`
      }
    }
  },
  created_by: {
    type: DataTypes.BIGINT,
    allowNull: false,
    reference: {
      model: 'users',
      key: 'id'
    },
    validatae: {
      isNull: {
        args: true,
        msg: `created_by can't be empty`
      }
    }
  },
  updated_by: {
    type: DataTypes.BIGINT,
    allowNull: true,
    reference: {
      model: 'users',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isNull: {
        args: true,
        msg: `created_at can't be empty`
      }
    }
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isNull: {
        args: true,
        msg: `updated_at can't be empty`
      }
    }
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
};
