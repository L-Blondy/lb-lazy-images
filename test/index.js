import LazyLoader from '_mybundle';
// import LazyLoader from '../lib/lib/LazyLoader';

const options = {
	root: document.getElementById('root'),
	rootMargin: '200px 200px 200px 200px',
	threshold: 0.001
};

// new LazyLoader('.img')
// 	.loadAll()
// 	.onLoad((e) => console.log('onLoadCb'))
// 	.onError((e) => console.log('onErrorCb'))
// 	.onAllSettled(() => console.log('allSettledCb'));

// window.IntersectionObserver = null;

// new LazyLoader('.img')
// 	.loadWithIO(options).

LazyLoader
	.loadWithIO('.img', options)
	.onLoad(img => console.log('onLoadCb', img))
	.onError(img => console.log('onErrorCb', img))
	.onAllSettled(images => console.log('allSettledCb', images))
	.onVisible(img => img.classList.add('fadein'))
	.onIntersection(img => console.log('onIntersectCb', img));

document.querySelector('button').addEventListener('click', () => (
	LazyLoader
		.loadAll('.with-button')
		.onLoad(img => img.classList.add('fadein'))
));

import sources from '../src/assets/*.*';

const sourceMap = Object.values(sources).map(val => Object.values(val)[ 0 ]);
const imageMap = sourceMap.map(src => {
	const img = document.createElement('IMG');
	img.dataset.src = src;
	root.appendChild(img);
	return img;
});
LazyLoader
	.loadWithIO(imageMap)
	.onVisible(img => img.classList.add('fadein'));