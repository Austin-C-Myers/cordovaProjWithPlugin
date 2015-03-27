/*global cordova,window,console*/
/**
 * An Image Picker plugin for Cordova
 * 
 * Developed by Wymsee for Sync OnSet
 */

var HelloWorld = function() {

};

HelloWorld.prototype.showView = function() {
	var params = {
		maximumImagesCount: options.maximumImagesCount ? options.maximumImagesCount : 15,
		width: options.width ? options.width : 0,
		height: options.height ? options.height : 0,
		quality: options.quality ? options.quality : 100
	};

	return cordova.exec(success, fail, "HelloWorld", "getPictures", [params]);
}

/*
HelloWorld.prototype.getPictures = function(success, fail, options) {
	if (!options) {
		options = {};
	}

	var params = {
		maximumImagesCount: options.maximumImagesCount ? options.maximumImagesCount : 15,
		width: options.width ? options.width : 0,
		height: options.height ? options.height : 0,
		quality: options.quality ? options.quality : 100
	};

	return cordova.exec(success, fail, "HelloWorld", "getPictures", [params]);
};
*/

window.helloWorld = new HelloWorld();
