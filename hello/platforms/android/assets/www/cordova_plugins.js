cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.synconset.HelloWorld/www/helloworld.js",
        "id": "com.synconset.HelloWorld.HelloWorld",
        "clobbers": [
            "plugins.helloWorld"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.synconset.HelloWorld": "1.0.6"
}
// BOTTOM OF METADATA
});