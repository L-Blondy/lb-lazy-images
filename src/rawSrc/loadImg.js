const images = require("./../../src/assets/**/*.*");

const getDictionary = (images, relPath = '') => {
	let pathList = {};
	for (let key in images) {
		const value = images[ key ];
		var values = Object.keys(images[ key ]).map(e => images[ key ][ e ]);
		const isImage = typeof values[ 0 ] === "string";
		const isFolder = typeof values[ 0 ] === "object";
		if (isImage) {
			pathList[ relPath + key + '.' + Object.keys(value)[ 0 ] ] = value[ Object.keys(value)[ 0 ] ];
		}
		else if (isFolder) {
			pathList = { ...pathList, ...getDictionary(value, relPath + key + "/") };
		}
	}
	return pathList;
};
const dictionary = getDictionary(images);

class Loader {
	constructor(targets, obsOptions = {}) {
		this.targets = targets;
		this.imgElements = [];
		this.obsOptions = obsOptions;
	}

	getSrc(dataSrc) {
		return dictionary[ dataSrc ] || dataSrc;
	}

	getSrcset(dataSrcset) {
		const srcset = dataSrcset.split(',').reduce((srcset, current) => {
			const src = current.slice(0, current.lastIndexOf(' ')).trim();
			const size = current.slice(current.lastIndexOf(' ') + 1);
			return `${ srcset && srcset + ',' } ${ dictionary[ src ] } ${ size }`;
		}, '');
		return srcset;
	}

	toArray() {
		if (typeof this.targets === 'string')
			this.imgElements = [].slice.call(document.querySelectorAll(this.targets));
		else if (!this.targets.length)
			this.imgElements = [ this.targets ];
		else
			this.imgElements = [].slice.call(this.targets);
		return this;
	}

	attachObserver() {
		if (!('IntersectionObserver' in window)) {
			setTimeout(() => this.loadAll(), 17);
			return this;
		}
		const self = this;
		const { root, rootMargin = '500px 500px 500px 500px', threshold = 0.01 } = this.obsOptions;

		this.observer = new IntersectionObserver(cb, { root, rootMargin, threshold });

		function cb(entries) {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					this.unobserve(entry.target);
					self.loadSingle(entry.target);
					self.obsCallback && self.obsCallback(entry);
				}
			});
		}
		this.imgElements.forEach(img => this.observer.observe(img));
		return this;
	}

	loadAll() {
		this.allPromises = this.imgElements.reduce((allPromises, img) => {
			allPromises.push(this.loadSingle(img));
			return allPromises;
		}, []);

		if ("Promise" in window) {
			return Promise.all(this.allPromises);
		}
		return this;
	}

	loadSingle(img) {
		const imgCached = document.createElement('IMG');
		let EM = 'Could not load <img ';
		[].slice.call(img.attributes).forEach(({ name, value }) => {
			EM += `${ name }="${ value }" `;
			if (name === 'src' || name === 'data-src' || name === 'data-srcset') return;
			imgCached.setAttribute(name, value);
		});
		EM += '/>';
		if (img.dataset.src)
			imgCached.src = this.getSrc(img.dataset.src);
		if (img.dataset.srcset)
			imgCached.srcset = this.getSrcset(img.dataset.srcset);
		console.log(imgCached);

		if (!('Promise' in window)) {
			img.parentNode.replaceChild(imgCached, img);
			console.log('no promise');
			this.onLoadCallback && imgCached.addEventListener('load', this.onLoadCallback);
			this.onErrorCallback && imgCached.addEventListener('error', (e) => {
				e.message = EM;
				this.onErrorCallback(e);
			});
			return;
		}
		return new Promise((resolve, reject) => {
			imgCached.addEventListener('load', (e) => {
				img.parentNode.replaceChild(imgCached, img);
				this.onLoadCallback && this.onLoadCallback(e);
				resolve(imgCached);
			});
			imgCached.addEventListener('error', (e) => {
				e.message = EM;
				this.onErrorCallback && this.onErrorCallback(e);
				reject(e);
			});
		});
	}

	onIntersection(obsCallback) {
		this.obsCallback = obsCallback;
		return this;
	}

	onLoad(onLoadCallback) {
		this.onLoadCallback = onLoadCallback;
		return this;
	}

	onError(onErrorCallback) {
		this.onErrorCallback = onErrorCallback;
		return this;
	}
}

export function loadImg(targets) {
	return new Loader(targets)
		.toArray()
		.loadAll();
}
export function loadOnScroll(targets, obsOptions = {}) {
	return new Loader(targets, obsOptions)
		.toArray()
		.attachObserver();
}

