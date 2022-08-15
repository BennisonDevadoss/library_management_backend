import bcrypt from 'bcrypt';

import { DataTypes } from 'sequelize';
import { UserInstance } from '../../types';
import { SALT_ROUND } from '../../config/constants';

import { isEmailUnique, isValidPassword } from './user.model.validators';

export const modelOptions = {
  paranoid: true,
  underscored: true,
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  indexes: [{ fields: ['email', 'name'] }]
};

export const attributes = {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: {
        args: [3, 100] as readonly [number, number],
        msg: 'Name length should be 3 to 100 characters'
      },
      notNull: {
        args: true,
        msg: 'name can\'t be empty'
      }
    }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmailUnique,
      len: {
        args: [1, 100] as readonly [number, number],
        msg: 'Email length should be 1 to 100 characters'
      },
      notNull: {
        args: true,
        msg: 'Email can\'t be empty'
      }
    }
  },
  encrypted_password: {
    type: DataTypes.TEXT
  },
  password_confirmation: {
    type: DataTypes.VIRTUAL
  },
  password: {
    type: DataTypes.VIRTUAL,
    validate: {
      isValidPassword
    },
    set(this: UserInstance, value: string) {
      if (value) {
        this.setDataValue('password', value);
        this.setDataValue(
          'encrypted_password',
          bcrypt.hashSync(value, SALT_ROUND)
        );
      }
    }
  },
  role_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'Role Id can\'t be empty'
      }
    },
    references: {
      model: 'roles',
      key: 'id'
    }
  },
  access_token: {
    type: DataTypes.TEXT,
    alloNull: true
  },
  sign_in_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  last_sign_in_ip: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  last_sign_in_at: {
    type: DataTypes.DATE
  },
  current_sign_in_ip: {
    type: DataTypes.STRING(50)
  },
  current_sign_in_at: {
    type: DataTypes.DATE
  },
  created_by: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
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
