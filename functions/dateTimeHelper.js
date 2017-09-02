var moment = require('moment');

module.exports = function(){
	return moment().format('DD-MM-YYYY-hh-mm');
}
