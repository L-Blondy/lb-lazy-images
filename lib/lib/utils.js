import dictionary from './dictionary';

const translateSrc = src => (
	dictionary[ src ] || src
);

const translateSrcset = srcset => (
	srcset.split(',').reduce((srcset, current) => {
		const src = current.slice(0, current.lastIndexOf(' ')).trim();
		const size = current.slice(current.lastIndexOf(' ') + 1);
		return `${ srcset && srcset + ',' } ${ translateSrc(src) } ${ size }`;
	}, '').trim()
);

const translateDataset = img => {
	let { src, srcset } = img.dataset;
	src && (img.dataset.src = translateSrc(src));
	srcset && (img.dataset.srcset = translateSrcset(srcset));
};


const toArray = targets => {
	if (typeof targets === 'string')
		targets = document.querySelectorAll(targets);
	if (!targets.length)
		return [ targets ];
	return [].slice.call(targets);
};

const preload = img => {
	const preloader = img.cloneNode(false);
	const { src, srcset } = preloader.dataset;

	if (src) {
		preloader.src = src;
	}
	if (srcset) {
		preloader.srcset = srcset;
	}
	return preloader;
};

function display(img) {
	img.dataset.src && (img.src = img.dataset.src);
	img.dataset.srcset && (img.srcset = img.dataset.srcset);
	img.removeAttribute('data-src');
	img.removeAttribute('data-srcset');
}

module.exports = {
	translateDataset,
	toArray,
	preload,
	display
};