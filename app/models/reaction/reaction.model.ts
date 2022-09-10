import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { ReactionStatic } from '../../types/reaction';

import { attributes, modelOptions } from './reaction.model.attributes';

function ReactionModelFactory(sequelize: Sequelize): ReactionStatic {
  return sequelize.define(
    'Reaction',
    attributes,
    modelOptions
  ) as ReactionStatic;
}

const Reaction = ReactionModelFactory(db);

export default Reaction;
