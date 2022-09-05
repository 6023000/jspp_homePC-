const CourseModel = require('../db/models/course');

class CourseService {
  async getCollectionCourseData (idList) {
  	return await CourseModel.findAll({
  		raw: true,
  		where: {
  			cid: idList
  		},
  		attributes: {
  			exclude: ['cid', 'posterUrl', 'field', 'createdAt', 'updatedAt']
  		}
  	})
  }

  async getCourseData () {
    return await CourseModel.findAll({
      where: {
        status: 1
      },
      order: [
        ['id', 'DESC']
      ],
      attributes: {
        exclude: ['cid', 'posterUrl', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new CourseService();