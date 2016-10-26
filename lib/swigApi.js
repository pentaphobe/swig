'use strict';


module.exports = {
	get: function (key) { return this[key]; },
	set: function (key, val) { this[key] = val; }
};