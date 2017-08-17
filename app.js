var config = require('./config.js');
var dateTime = require('./functions/dateTimeHelper.js');
var db_dumper = require('./functions/db_dumper.js');


config.databases.forEach(function(element) {
	var time_stamp = dateTime();
	db_dumper(element,time_stamp);
});
