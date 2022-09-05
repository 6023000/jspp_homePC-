const StudentModel = require('../db/models/student');

class StudentService {
  async getGoodStudentData () {
  	return await StudentModel.findAll({
  		where: { status: 1 },
  		attributes: {
  			exclude: ['sid', 'studentImg', 'createdAt', 'updatedAt']
  		}
  	});
  }
}

module.exports = new StudentService();