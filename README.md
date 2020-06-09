# lb-lazy-images

Lazy load utility for `Parcel-bundler`.  
Based on the `IntersectionObserver` API. If the IntersectionObserver API is not supported/polyfilled, all images will eagerload.

# Requirements
- parcel-bundler

# usage

## **HTML**

`data-src` and `data-srcset` paths start from ~~`src/assets`~~ excluded: 
```
<img 
	src="placeholder.jpg" 
	data-src="folder/filename.jpg"
	data-srcset="folder/filename1.jpg 500w, folder/filename2.jpg 700w, ..."
/>
```

## **Javascript**
```
import LazyLoader from "lb-lazy-images";
```

### Load with IntersectionObserver :
Basic usage :
```
LazyLoader.loadWithIO('.selector')
```
Customize the Observer :
```
//defaults:
const options= {
	root: viewport,
	rootMargin: '500px 500px 500px 500px',
	threshold: 0.01
}

LazyLoader.loadWithIO('.selector', options)
```
Add some callbacks to each image if you wish :
```
LazyLoader
	.loadWithIO('.selector')
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

### Generate many lazy loaded images with javascript :

```
import LazyLoader from  "lb-lazy-images"
import sources from '../src/assets/*.*';

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

//Lazyload + add some nice animation on scroll:
LazyLoader
	.loadWithIO(imageMap)
	.onVisible(img => img.classList.add('fadein'));
```
