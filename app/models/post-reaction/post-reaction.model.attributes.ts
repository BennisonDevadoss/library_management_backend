import { DataTypes, Sequelize } from 'sequelize';

/* PERFORMATING HARD DELETE */
export const modelOptions = {
  underscroed: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'post_reactions'
};

export const attributes = {
  reaction_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'reactions',
      key: 'id'
    },
    validate: {
      notNull: {
        args: true,
        msg: 'reaction_id can\'t be empty'
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
        msg: 'user_id can\'t be empty'
      }
    }
  },
  reaction_change_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  previous_reaction_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'reactions',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
};
