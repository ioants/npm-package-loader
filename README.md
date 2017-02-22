# npm-package-loader
The loader package is used for loading resources into a ioant node application

## How to use
Loading a configuration json file. Loaders uses promises.

```js
var Loader = require('ioant-loader');

Loader.load("./configuration.json", "configuration").then(function(configuration) {
                loaded_configuration = configuration;
                // startApplication(); For example
           }).catch(function(error){
               Logger.log('error', 'Failed to load configuration file');
	       });
```
