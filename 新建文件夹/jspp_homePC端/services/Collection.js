const CollectionModel = require('../db/models/collection'),
      { getCollectionCourseData } = require('./Course');

class CollectionService {
  async getCollectionData () {
  	const result = await CollectionModel.findAll({
  		raw: true,
  		wiere: { status: 1 },
	  	attributes: {
	  		exclude: ['cid', 'createdAt', 'updatedAt']
	  	}
  	});

  	return result.map(async (item, index) => {
      item.courseIdList = item.courseIdList.split(',').map(item => parseInt(item));
  	  item.courseDataList = await getCollectionCourseData(item.courseIdList);
  	  return item;
  	});
  }
}

module.exports = new CollectionService();