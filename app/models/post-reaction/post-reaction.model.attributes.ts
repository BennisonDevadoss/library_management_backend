import db from '../../config/database';

import { Sequelize } from 'sequelize';

import { attributes, modelOptions } from './post-reaction.model';

function PostReactionModelFactory(sequelize: Sequelize) {
  return sequelize.define('PostReaction', attributes, modelOptions);
}

const PostReaction = PostReactionModelFactory(db);

export default PostReaction;
