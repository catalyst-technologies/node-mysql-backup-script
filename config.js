
// The following variable contains the backup path.
module.exports.backup_dir = './backups/';
// The following object contains the database connection parameters
module.exports.db = {
	host: '127.0.0.1',
	user: 'root',
	pass: ''
};
// The following array contains all the database names that are to be backedup
module.exports.databases = [
	'test_db','test_db_2'
];
