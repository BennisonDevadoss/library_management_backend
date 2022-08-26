import { Op } from 'sequelize';

function columnSearchQuery(query) {
  const { name, email, mobile_no: mobileNo, role } = query;
  const searchQueries: any[] = [];
  if (name) {
    searchQueries.push({
      name: { [Op.iLike]: `%${name}%` }
    });
  }
  if (email) {
    searchQueries.push({
      email: { [Op.iLike]: `%${email}%` }
    });
  }
  if (mobileNo) {
    searchQueries.push({
      mobile_no: { [Op.iLike]: `%${mobileNo}%` }
    });
  }
  if (role) {
    searchQueries.push({
      '$roles.role$': { [Op.iLike]: `%${role}%` }
    });
  }
  return {
    [Op.and]: searchQueries
  };
}

export default columnSearchQuery;
