import dictionary from './dictionary';

console.log(dictionary);

class Images {
	constructor(targets) {
		this.targets = this._getTargets(targets);
		this.cache = [];
	}

	_getTargets(targets) {
		if (typeof targets === 'string')
			targets = document.querySelectorAll(targets);
		if (!targets.length)
			return [ targets ];
		return [].slice.call(targets);
	}

	_translateDataset(img) {
		const { src, srcset } = img.dataset;
		if (src)
			img.dataset.src = dictionary[ src ] || src;
		if (srcset)
			img.dataset.srcset = srcset.split(',').reduce((srcset, current) => {
				const src = current.slice(0, current.lastIndexOf(' ')).trim();
				const size = current.slice(current.lastIndexOf(' ') + 1);
				console.log(src, size);
				return `${ srcset && srcset + ',' } ${ dictionary[ src ] || src } ${ size }`;
			}, '');
	}

	_cacheImg(img) {
		const el = document.createElement('img');
		[].slice.call(img.attributes).forEach(({ name, value }) => {
			if (name === 'src') return;
			if (name === 'data-src') return el.src = value;
			if (name === 'data-srcset') return el.srcset = value;
			el.setAttribute(name, value);
		});
		return el;
	}

	_attachListeners(target, cached) {
		cached.addEventListener('load', e => {
			target.parentNode.replaceChild(cached, target);
		});
		cached.addEventListener('error', e => {
			target.parentNode.replaceChild(cached, target);
			console.log(e);
		});
	}

	loadAll() {
		this.targets.forEach(target => this._loadOne(target));
		return this;
	}

	_loadOne(target) {
		this._translateDataset(target);
		const cached = this._cacheImg(target);
		this._attachListeners(target, cached);
	}

	_getWithMarginObserver(onIntersection, options) {
		const defaultOptions = {
			rootMargin: '500px 500px 500px 500px',
			threshold: 0.01
		};
		options = { ...defaultOptions, ...options };
		return new IntersectionObserver(onIntersection, options);
	}

	_getWithoutMarginObserver(onVisible, options) {
		options = {
			root: options.root,
			threshold: 0.01
		};
		console.log(options);
		return new IntersectionObserver(onVisible, options);
	}

	loadOnIntersection(options = {}) {
		if (!('IntersectionObserver' in window)) return this.loadAll();

		const withMarginObserver = this._getWithMarginObserver(onIntersection, options);
		const withoutMarginObserver = this._getWithoutMarginObserver(onVisible, options);
		const that = this;

		function onIntersection(entries) {
			entries.forEach(e => {
				if (!e.intersectionRatio) return;
				that._loadOne(e.target);
				console.log('intersecting');
				console.log(this);
				this.unobserve(e.target);
			});
		}

		function onVisible(entries) {
			entries.forEach(e => {
				// if (!e.intersectionRatio) return;
				console.log('visible');
				console.log(this);
				// this.unobserve(e.target);
			});
		}

		this.targets.forEach(target => {
			withMarginObserver.observe(target);
			withoutMarginObserver.observe(target);
		});
		return this;
	}
}

function load(targets, options = {}) {
	// return new Images(targets, options).loadAll();
	return new Images(targets).loadOnIntersection(options);
}

load('.img', { root: document.getElementById('root') });

export default Images;