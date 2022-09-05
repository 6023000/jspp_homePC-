const CourseTabModel = require('../db/models/courseTab');

class CourseTabService {
  async getCourseCategory () {
  	return await CourseTabModel.findAll({
      attributes: {
      	exclude: ['cid', 'createdAt', 'updatedAt']
      }
  	});
  }
}

module.exports = new CourseTabService();