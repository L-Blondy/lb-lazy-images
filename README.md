# lb-lazy-images

Lazy load utility for `Parcel-bundler`.  
Based on the `IntersectionObserver` API. All images will eagerload as a fallback if the IntersectionObserver API is not supported/polyfilled.

# Requirements
- parcel-bundler

# usage

**HTML**

`data-src` and `data-srcset` paths start from ~~`src/assets`~~ excluded: 
```
<img 
	src="placeholder.jpg" 
	data-src="folder/filename.jpg"
	data-srcset="folder/filename1.jpg 500w, folder/filename2.jpg 700w, ..."
/>
```

**Javascript**
```
import { loadOnScroll, loadImg } from  "lb-lazy-images"
```

Load with IntersectionObserver:
```
//IntersectionObserver default options
const options= {
	root: viewport,
	rootMargin: '500px 500px 500px 500px',
	threshold: 0.01
}

loadOnScroll('.query', options)

. . .

//add some callbacks to each image if you wish
loadOnScroll('.query', options)
	.onIntersection(e => console.log(e))
	.onLoad(e => console.log(e))
	.onError(e => console.log(e))
```

Or load with some event:

```
button.addEventListener('click', ()=>{

	loadImg('.query')
		.then(images => do something)
		.then(()=> do something else)

})
```

Use it with elements created with javascript:
```
import { loadOnScroll } from  "lb-lazy-images"
import src from './src/assets/myImage.svg'

const img = document.createElement('IMG)
img.src = src
someElement.appendChild(img)

loadOnScroll(img)
```
