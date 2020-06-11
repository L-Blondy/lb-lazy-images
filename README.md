# lb-lazy-images v2

Image Lazy loading utility for **Parcel-bundler**.  
If the `IntersectionObserver` API is not supported/polyfilled, all images will eagerload.  
1.6KB Gzipped

# Features

- Built-in **Caching system** to prevent partial image rendering.
- Use **plain HTML syntax** to set img data-src and data-srcset.
- No **fallback setup** to worry about for old browsers, it's already taken care of.
- Built-in **Event hooks** for easy animations and debugging.

# Requirements
- parcel-bundler

# Usage

### HTML

**Important :** 
- All images have to be located in **src/assets**.   
`data-src` and `data-srcset` paths start from **~~`src/assets`~~** excluded
- If you have a different file structure **URLs** and **imported filenames** are still supported.

```
<img 
	src="placeholder.jpg" 
	data-src="folder/filename.jpg"
	data-srcset="folder/filename1.jpg 500w, folder/filename2.jpg 700w, ..."
/>
```

### Load on scroll with the IntersectionObserver :

Basic usage :
```
import LazyLoader from "lb-lazy-images";

LazyLoader.loadOnScroll('.selector')
```

Customize the IntersectionObserver :
```
//defaults:
const options= {
	root: viewport,
	rootMargin: '500px 500px 500px 500px',
	threshold: 0.01
}

LazyLoader.loadOnScroll('.selector', options)
```

Add some callback if you wish :
```
LazyLoader
	.loadOnScroll('.selector')
	.onIntersection( img => do something )
	.onLoad( img => do something )
	.onError( img => do something )
	.onVisible( img => img.classList.add('fadein') ) //animate here
	.onAllSettled( images => do something )

```

### Or load with some event :

```
button.addEventListener('click', ()=>{

	LazyLoader
		.loadAll('.selector')
		.onLoad( img => do something )
		.onError( img => do something )
		.onAllSettled( images => do something )

})
```

### Generate lots of lazy loading images with JS :

Import the sources + library : 
```
import sources from '../src/assets/*.*';
import LazyLoader from  "lb-lazy-images"
```
Generate a map of images appended to the DOM :
```
const sourceMap = Object.values(sources).map(val => (
	Object.values(val)[ 0 ]
));
const imageMap = sourceMap.map(src => {
	const img = document.createElement('IMG');
	img.dataset.src = src;
	//do more stuff
	container.appendChild(img);
	return img;
});
```
Setup Lazy Loading using the map :
```
LazyLoader
	.loadOnScroll(imageMap)
	.onVisible(img => img.classList.add('fadein'));
```

# Loading methods :

| Method       | Arg 1 | Arg 2 |Description
| ------------ | ---------- | ---------- |-------------------------------
| loadOnScroll | String, Node, NodeList, Array, HTMLCollection | Object | Loads the images with the IntersectionObserver API. Fallsback to `loadAll` for older Browsers |
| loadAll      | String, Node, NodeList, Array, HTMLCollection |       N/A     | Starts loading all the images when called.

# Event hooks : 

| Method         |  loadOnScroll | loadAll  | Description
| -------------- | ------------- | -------- | ---------
| onIntersection | X             |          | Fires when the image hits the margin of the IntersectionObserver root. Image will start loading here. Will fire just before `onLoad` if the intersectionObserver is not supported.
| onLoad         | X             | X        | Fires when the image loads. The image src/srcset are loaded in the DOM here. 
| onError        | X             | X        | Fires on loading error. The image src/srcset are still loaded in the DOM here. 
| onVisible      | X             |          | Fires when the image enters the IntersectionObserver root. Will fire right after onLoad if the intersectionObserver is not supported.
| onAllSettled   | X             | X        | Fires when all images have finished loading, whether or not there was an error.


[⭐ ⭐ ⭐](https://github.com/L-Blondy/lb-lazy-images)

