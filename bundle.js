"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=loadImg;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var images=require("./../../src/assets/**/*.*");var getAssets=function getAssets(images,relPath){if(!Object.entries){Object.entries=function(obj){var ownProps=Object.keys(obj),i=ownProps.length,resArray=new Array(i);while(i--){resArray[i]=[ownProps[i],obj[ownProps[i]]]}return resArray}}var pathList={};var _loop=function _loop(){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];values=Object.keys(images[key]).map(function(e){return images[key][e]});var isImage=typeof values[0]==="string";var isFolder=_typeof(values[0])==="object";if(isImage){pathList[relPath+key]=value}else if(isFolder){pathList=_objectSpread({},pathList,{},getAssets(value,relPath+key+"/"))}};for(var _i=0,_Object$entries=Object.entries(images);_i<_Object$entries.length;_i++){var values;_loop()}return pathList};var pathList=getAssets(images,"");function loadImg(elements){var promises=[];if(!elements.length){elements=new Array(elements)}if(elements.length){var _loop2=function _loop2(i){if("Promise"in window){var promise=new Promise(function(resolve,reject){var cacheImg=document.createElement("img");var attributes=elements[i].attributes;for(var _i2=0;_i2<attributes.length;_i2++){if(attributes[_i2].name!=="src"&&attributes[_i2].name!=="data-asset")cacheImg.setAttribute(attributes[_i2].name,attributes[_i2].value)}if(!pathList[elements[i].dataset.asset]){resolve(elements[i]);console.error('<img data-asset="'.concat(elements[i].dataset.asset,'"/> not loaded, please check the path'))}else cacheImg.src=pathList[elements[i].dataset.asset][Object.keys(pathList[elements[i].dataset.asset])[0]];cacheImg.onload=function(){return resolve(cacheImg)}});promise.then(function(cacheImg){elements[i].parentNode.replaceChild(cacheImg,elements[i]);return""});promises.push(promise)}else{try{elements[i].src=pathList[elements[i].dataset.asset][Object.keys(pathList[elements[i].dataset.asset])[0]]}catch(error){console.error('<img data-asset="'.concat(elements[i].dataset.asset,'"/> not loaded, please check the path'))}}};for(var i=0;i<elements.length;i++){_loop2(i)}}return Promise.all(promises)}var imagesScroll=document.querySelectorAll("[loadOnScroll]");if(imagesScroll.length){try{var loadCb=function loadCb(entries){entries.forEach(function(entry){if(entry.intersectionRatio>0){loadImg(entry.target);loadObs.unobserve(entry.target)}})};var loadObs=new IntersectionObserver(loadCb,{rootMargin:"0px 0px 500px 0px"});Array.prototype.forEach.call(imagesScroll,function(image){loadObs.observe(image)})}catch(error){console.log(imagesScroll);console.log("EagerLoaded as a fallback");loadImg(imagesScroll)}}