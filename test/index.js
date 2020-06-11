// import LazyLoader from '_mybundle';
// import { loadWithIO, loadAll } from '_mybundle';
import LazyLoader from '../lib/lib/LazyLoader';

const options = {
	root: document.getElementById('root'),
	rootMargin: '100px 100px 100px 100px'
};

// new LazyLoader('.img')
// 	.loadAll()
// 	.onLoad((e) => console.log('onLoadCb'))
// 	.onError((e) => console.log('onErrorCb'))
// 	.onAllSettled(() => console.log('allSettledCb'));

window.IntersectionObserver = null;




LazyLoader
	.loadOnScroll('.img', options)
	.onLoad(img => console.log('onLoadCb'))
	.onError(img => console.log('onErrorCb'))
	.onIntersection(img => console.log('onIntersectCb'))
	.onVisible(img => console.log('onVisibleCb'))
	.onAllSettled(images => console.log('allSettledCb', images));

document.querySelector('button').addEventListener('click', () => (

	LazyLoader
		.loadAll('.with-button')
		.onLoad(img => img.classList.add('fadein'))
		.onAllSettled(() => console.log('allSettled'))
));

// import sources from '../src/assets/*.*';

// const sourceMap = Object.values(sources).map(val => Object.values(val)[ 0 ]);
// const imageMap = sourceMap.map(src => {
// 	const img = document.createElement('IMG');
// 	img.dataset.src = src;
// 	root.appendChild(img);
// 	return img;
// });
// LazyLoader
// 	.loadOnScroll(imageMap)
// 	.onVisible(img => img.classList.add('fadein'));