/*global parseJson:true,global,isHostMethod */

var parseJson;

parseJson = function(str) {
	return (new Function('return (' + str + ')'))();
};