# lb-lazy-images v2

Image Lazy loading utility for **Parcel-bundler**.  
If the `IntersectionObserver` API is not supported/polyfilled, all images will eagerload.  
1.6KB Gzipped

# Features

- Built-in **Caching system** to prevent partial image rendering.
- Use **plain HTML syntax** to set img data-src and data-srcset.
- No **fallback setup** to worry about for old browsers, it's already taken care of.
- **Event hooks** are available for debugging / animating

# Requirements
- parcel-bundler

# Usage

### HTML

**Important :** 
- All images have to be located in **src/assets**.   
`data-src` and `data-srcset` paths start from **~~`src/assets`~~** excluded
- **URLs** and **imported filenames** are still supported if you have a different file structure.

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

Add some callback to each image if you wish :
```
LazyLoader
	.loadOnScroll('.selector')
	.onLoad( img => do something )
	.onError( img => do something )
	.onIntersection( img => do something )
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
And that's it !

[⭐ ⭐ ⭐](https://github.com/L-Blondy/lb-lazy-images)

