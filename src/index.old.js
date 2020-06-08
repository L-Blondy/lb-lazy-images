import { loadImg, loadOnScroll } from './rawSrc/loadImg';

const img = document.createElement('img');
const container = document.querySelector('.container');
const button = document.querySelector('button.load');
img.dataset.src = 'subfolder1/subfolder2/chevron-down-solid.old.svg';
container.appendChild(img);

button.addEventListener('click', () => {
	loadImg(img)
		.then(images => console.log('images', images))
		.catch(e => console.log('promise.all', e));
});

const images = document.querySelectorAll('.img');

const options = {
	root: document.getElementById('root'),
	rootMargin: '0px 0px -100px 0px'
};

const loader = loadOnScroll(images, options)
	.onIntersection((e) => console.log(e))
	.onLoad((e) => console.log(e))
	.onError((e) => console.log(e));
