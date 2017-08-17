var mysqlDump = require('mysqldump');
var config = require('./../config.js');


module.exports = function(db_name,time_stamp){
	mysqlDump( {
		host: config.db.host,
		user: config.db.user,
		password: config.db.pass,
		database: db_name,
		dest: './backups/' + time_stamp + '-' + db_name + '.sql'
	}, function(err){
		if(err){
			console.log(err);
		}else{
			console.log("Success");
		}
	});
}
