# lb-lazy-images

Lazy load utility for `Parcel-bundler`.  
Based on the `IntersectionObserver` API.  
All images will eagerload as a fallback if the IntersectionObserver API is not supported. You can however polyfill it if you wish.  

## Auto load (on Scroll)

Add the `loadOnScroll` prop to the `img` tag.  
Define a `data-src` and/or `data-srcset`.  
Call the `loadOnScroll` function to setup the IntersectionObserver.  

### Note: 
- `root` corresponds to the 'root' of the IntersectionObserver, defaults to the viewport.
- `margin` applies on all sides of the element, defaults to 500px
- For the `data-src` && `data-srcset` properties: path begins from `src/assets` excluded, use no file extension. Example: ~~src/assets/~~ **folder/filename** ~~.jpg~~

file.js
```
import { loadOnScroll } from  "lb-lazy-images"
...
loadOnScroll(root, margin)
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-src="folder/filename"
	data-srcset=<<"folder/filename1 500w, folder/filename2 700w, ...">>
	loadOnScroll
/>
```

## Manual load (on event)

Just pass the target as an argument on the `loadImg` function to load the images on event.  
It returns a Promise resolving with an array of the element(s) passed as argument.

file.js
```
import { loadImg } from "lb-lazy-images"
...
element.addEventListener("click", e => {
	loadImg(<img element, NodeList or Array here>)
		.then(images => do something)
		.then(()=> do something else)
})
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-src="folder/filename"
	data-srcset=<<"folder/filename1 500w, folder/filename2 700w, ...">>
/>
```

