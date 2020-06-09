import images from '../../src/assets/**/*.*';

const getDictionary = (images, relPath = '') => {
	let dictionary = {};
	for (let key in images) {
		const value = images[ key ];
		var values = Object.keys(images[ key ]).map(e => images[ key ][ e ]);
		const isImage = typeof values[ 0 ] === "string";
		const isFolder = typeof values[ 0 ] === "object";
		if (isImage) {
			const ext = Object.keys(value)[ 0 ];
			dictionary[ `${ relPath + key }.${ ext }` ] = value[ ext ];
		}
		else if (isFolder) {
			dictionary = { ...dictionary, ...getDictionary(value, `${ relPath + key }/`) };
		}
	}
	return dictionary;
};

const dictionary = getDictionary(images);

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

class LazyLoader {

	constructor(images) {
		this.images = toArray(images);
		this.settledCountdown = this.images.length;
		this.hasObservers = false;
		this.onLoadCb = this.onErrorCb = this.onIntersectCb = this.onVisibleCb = () => { };
		this._init();
	}

	_init() {
		this.images.forEach(translateDataset);
	}

	_countDown() {
		this.settledCountdown--;
		!this.settledCountdown && this.onAllSettledCb && this.onAllSettledCb(this.images);
	}

	_attachListeners(img, preloader) {
		preloader.addEventListener('load', e => {
			display(img);
			this.onLoadCb(img);
			if (!window.IntersectionObserver) {
				this.onIntersectCb(img);
				this.onVisibleCb(img);
			}
			this._countDown();
		});
		preloader.addEventListener('error', e => {
			display(img);

			this.onErrorCb(img);
			if (!window.IntersectionObserver) {
				this.onIntersectCb(img);
				this.onVisibleCb(img);
			}
			this._countDown();
		});
	}

	_setObservers(options = {}) {
		options = {
			root: options.root,
			rootMargin: options.rootMargin || '500px 500px 500px 500px',
			threshold: options.threshold || 0.01
		};

		this.intersectObs = new IntersectionObserver(intersectCb, options);
		this.visibleObs = new IntersectionObserver(visibleCb, { ...options, rootMargin: '0px 0px 0px 0px' });
		const that = this;

		function intersectCb(entries) {
			entries.forEach(e => {
				if (!e.intersectionRatio) return;
				const preloader = preload(e.target);
				that._attachListeners(e.target, preloader);
				that.onIntersectCb(e.target);
				that.visibleObs.observe(e.target);
				this.unobserve(e.target);
			});
		}

		function visibleCb(entries) {
			entries.forEach(e => {
				if (!e.intersectionRatio) return;
				that.onVisibleCb(e.target);
				this.unobserve(e.target);
			});
		}

		this.hasObservers = true;
		return this;
	}

	loadAll() {
		this.images.forEach(img => {
			const preloader = preload(img);
			this._attachListeners(img, preloader);
		});
		return this;
	}

	loadWithIO(options = {}) {
		if (!window.IntersectionObserver)
			return this.loadAll();
		this._setObservers(options);
		this.images.forEach(img => {
			this.intersectObs.observe(img);
		});
		return this;
	}

	onLoad(cb) {
		this.onLoadCb = cb;
		return this;
	}

	onError(cb) {
		this.onErrorCb = cb;
		return this;
	}

	onAllSettled(cb) {
		this.onAllSettledCb = cb;
		return this;
	}

	onVisible(cb) {
		this.onVisibleCb = cb;
		return this;
	}

	onIntersection(cb) {
		this.onIntersectCb = cb;
		return this;
	}

	static loadWithIO(targets, options) {
		return new LazyLoader(targets).loadWithIO(options);
	}

	static loadAll(targets) {
		return new LazyLoader(targets).loadAll();
	}
}

export default LazyLoader;