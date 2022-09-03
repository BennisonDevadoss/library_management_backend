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
      notNull: {
        args: true,
        msg: 'name can\'t be empty'
      }
    }
  },
  author: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'author can\'t be empty'
      }
    }
  },
  category_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'categories',
      key: 'id'
    },
    validate: {
      notNull: {
        args: true,
        msg: 'category_id can\'t be empty'
      }
    }
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  rating: {
    type: DataTypes.REAL,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'rating can\'t be empty'
      }
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'price can\'t be empty'
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
    validatae: {
      notNull: {
        args: true,
        msg: 'created_by can\'t be empty'
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
