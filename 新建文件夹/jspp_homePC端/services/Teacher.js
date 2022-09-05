const TeacherModel = require('../db/models/teacher');

class TeacherService {
  async getStarTeacherData () {
  	return await TeacherModel.findAll({
  		where: {
  			status: 1,
  			isStar: 1
  		},
  		attributes: {
  			exclude: ['tid', 'teacherImg', 'createdAt', 'updatedAt']
  		}
  	})
  }
}

module.exports = new TeacherService();