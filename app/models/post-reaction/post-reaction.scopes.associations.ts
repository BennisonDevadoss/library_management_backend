import Reaction from '../reaction/reaction.model';
import PostReaction from './post-reaction.model';

function defineScopeAndAssociation() {
  PostReaction.belongsTo(Reaction, {
    foreignKey: 'reaction_id',
    as: 'reaction'
  });
}

export default defineScopeAndAssociation;
