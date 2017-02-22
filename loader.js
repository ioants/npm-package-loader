/**
 * @file loader.js
 * @author Adam Saxén
 *
 *  Module for loading assets
 */
var Promise = require('bluebird');
const Logger = require('ioant-logger');
var fs = Promise.promisifyAll(require("fs"));
var child_process = Promise.promisifyAll(require("child_process"));
var loaded_assets = {}
const path = require('path');


var parseJson = function(contents) {
    return new Promise(function (resolve, reject) {
        try {
            var jsonObject = JSON.parse(contents);
            resolve(jsonObject);
        } catch (e) {
            return reject(e);
        }
})};

exports.load = function(path_to_asset, tag) {
    Logger.log('info', 'Loading asset', {path: path_to_asset});
    var p1 = fs.readFileAsync(path.join(process.cwd(), path_to_asset), 'utf8').then(parseJson);
    return p1.then(function(assetObject) {
                Logger.log('info', 'Success! Loaded asset: '+path_to_asset);
                loaded_assets[tag] = assetObject;
                return new Promise(function (resolve, reject) {resolve(assetObject)});
           }).catch(function(error){
              Logger.log('error', 'Faield to load asset: '+path_to_asset);
              throw error;
	       });
}

exports.getLoadedAsset = function(tag) {
    Logger.log('info', 'Loading preloaded asset', {tag:tag});
    return new Promise(function (resolve, reject) {
        if (tag in loaded_assets){
            resolve(loaded_assets[tag])
        }
        else{
            reject();
        }
    });
}
