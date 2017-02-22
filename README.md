# npm-package-loader
The loader package is used for loading resources into an IOant node application.
Note: Loaders uses promises.

## How to use
Loading a configuration json file.

```js
var Loader = require('ioant-loader');
// load(path_to_asset, tag)
Loader.load("./configuration.json", "configuration").then(function(configuration) {
                loaded_configuration = configuration;
                // startApplication(); For example
           }).catch(function(error){
               Logger.log('error', 'Failed to load configuration file');
	       });
```
Retrieving the preloaded configuration file by its tag.

```js
var Loader = require('ioant-loader');

Loader.getLoadedAsset("configuration").then(function(configuration) {
                loaded_configuration = configuration;
                // startApplication(); For example
           }).catch(function(error){
               Logger.log('error', 'Failed to get loaded configuration file');
	       });
```
