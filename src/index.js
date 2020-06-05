import { loadImg, loadOnScroll } from './rawSrcFolder/loadImg';

const img = document.createElement('img');
const container = document.querySelector('.container');
const button = document.querySelector('button.load');
img.dataset.src = 'subfolder1/subfolder2/chevron-down-solid.old.svg';
container.appendChild(img);

button.addEventListener('click', () => {
	loadImg(img)
		.then(images => console.log(images))
		.catch(e => console.log('promise.all', e));
});

const images = document.querySelectorAll('.img');

loadOnScroll(images, {
	root: document.getElementById('root'),
	margin: '0px'
}, (e) => console.log(e));