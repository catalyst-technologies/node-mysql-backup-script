var moment = require('moment');

module.exports = function(){
	return moment().format('YYYY-MM-DD-hh-mm');
}
