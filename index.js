//const async = require("async");
const get = require("async-get-file");
const download = require("download-file");

var get_file = function(){
	this.async_get = function(url,options) {
		get(url,options);
	}
	this.get = function(url,options) {
		download(url,options, (err) => {
			if(err) return err;
		});
	}
}

module.exports = get_file;