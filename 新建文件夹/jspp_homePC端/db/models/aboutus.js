const seq = require('../db_connect'),
      { STRING, TEXT, INT } = require('../../configs/db_type');

const Aboutus = seq.define('aboutus', {
	aid: {
    comment: 'aboutus ID',
    type: INT,
    allowNull: false,
    unique: true
	},
  posterUrl: {
  	comment: 'poster',
  	type: STRING,
  	allowNull: false
  },
  title: {
  	comment: 'title',
  	type: STRING,
  	allowNull: false
  },
  name: {
  	comment: 'name',
  	type: STRING,
  	allowNull: false
  },
  intro: {
  	comment: 'introduction',
  	type: TEXT,
  	allowNull: false
  },
  posterKey: {
  	comment: 'qiniu poster image name',
  	type: STRING,
  	allowNull: false
  }
});

module.exports = Aboutus;