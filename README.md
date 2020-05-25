# lb-lazy-images

Lazy load utility for `Parcel-bundler`.  
Based on the `IntersectionObserver` API.  
All images will eagerload as a fallback if the IntersectionObserver API is not supported. You can however polyfill it if you wish.  

## Auto load (on Scroll)

Add the `loadOnScroll` prop to the `img` tag.  
Define a `data-src` and/or `data-srcset`.  
Call the `loadOnScroll` function to setup the IntersectionObserver.  

file.js
```
import { loadOnScroll } from  "lb-lazy-images"
...
loadOnScroll(root=viewport, margin="500px")
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-src=<<path from "src/asset", ex="subfolder/myImage">> 
	data-srcset=<<"path, path, path, ...">>
	loadOnScroll
/>
```

### Note: 
- 'root' corresponds to the 'root' of the IntersectionObserver, defaults to the viewport.
- Margin applies on all sides of the element, defaults to 500px
- For the `data-src` && `data-srcset` properties: use not file extension, path begins from `src/assets` excluded

## Manual load (on event)

Just pass the target as an argument on the `loadImg` function to load the images on event.  
It returns a Promise resolving with an array of the element(s) passed as argument.

file.js
```
import { loadImg } from "lb-lazy-images"
...
element.addEventListener("click", e => {
	loadImg(<image or NodeList here>)
		.then( images => images[0].parentNode.classList += "display"  )
		.then(()=> do something else)
})
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-src=<<path from "src/asset", ex="subfolder/myImage">> 
	data-srcset=<<"path width, path width, ...">>
/>
```

