const qiniu = require('qiniu'),  //npm i qiniu -S
      { keys, bucket, files } = require('./configs/qiniu');

qiniu.conf.ACCESS_KEY = keys.ak;
qiniu.conf.SECRET_KEY = keys.sk;

;(() => {

  function uploadtoken(bucket, key) {
    var policy = new qiniu.rs.PutPolicy({ isPrefixalScope: 1, scope: bucket + ':' + key });
    return policy.uploadToken();
  }

  const config = new qiniu.conf.Config(),
        putExtra = new qiniu.form_up.PutExtra(),
        formUploader = new qiniu.form_up.FormUploader(config);


  files.map(async (file) => {
    const upToken = uploadtoken(bucket.name, file.name);

    try {
    	formUploader.putFile(upToken, file.name, file.path, putExtra, (err, data) => {
        if (err) {
          console.log('Failed to upload data.(101)');
          console.log(err);
          return;
        } 

        console.log('Data has been uploaded successfully.');
        console.log(data);
      })
    } catch (err) {
    	console.log('Failed to upload data.(102)');
      console.log(err);
    }
  });
})();