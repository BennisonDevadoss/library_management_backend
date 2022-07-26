import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { PostReactionStatic } from '../../types/post-reaction';

import { attributes, modelOptions } from './post-reaction.model.attributes';

function PostReactionModelFactory(sequelize: Sequelize): PostReactionStatic {
  return sequelize.define(
    'PostReaction',
    attributes,
    modelOptions
  ) as PostReactionStatic;
}

const PostReaction = PostReactionModelFactory(db);

export default PostReaction;
