import { DataTypes } from 'sequelize';

export const modelOptions = {
  paranoid: true,
  underscored: true,
  tableName: 'posts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  indexes: [{ fields: ['post', 'book_id'] }]
};

export const attributes = {
  post: {
    type: DataTypes.BLOB,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'post can\'t be empty'
      }
    }
  },
  book_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'books',
      key: 'id'
    },
    validate: {
      notNull: {
        args: true,
        msg: 'book_id can\'t be empty'
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
        msg: 'creted_by can\'t be empty'
      }
    }
  },
  updated_by: {
    type: DataTypes.BIGINT,
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
    type: DataTypes.DATE
  }
};
