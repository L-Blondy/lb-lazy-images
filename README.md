# lb-lazy-images

Lazy load images located in 
> src/assets

## Usage

file.js
```
import loadImg from "lb-lazy-images"
...
element.addEventListener("click", e => loadImg(<target img tag>))
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-asset=<<path from "asset", ex="subfolder/myImage">> 
/>
```

## Notes
- Put no extension on the `data-asset` property

