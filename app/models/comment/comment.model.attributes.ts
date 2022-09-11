import { DataTypes } from 'sequelize';

export const modelOptions = {
  paranoid: true,
  underscored: true,
  tableName: 'comments',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at'
};

export const attributes = {
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: `comment can't be empty`
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
          msg: `book_id can't be empty`
        }
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      validate: {
        notNull: {
          args: true,
          msg: `user_id can't be empty`
        }
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE
    },
    deleted_at: {
      type: DataTypes.DATE
    }
  }
};
