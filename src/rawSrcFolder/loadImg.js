import images from '../../src/assets/**/*.*';

class Loader {
	constructor(targets, obsOptions = {}, obsCallback = () => { }) {
		this.targets = targets;
		this.imgElements = [];
		this.obsOptions = obsOptions;
		this.obsCallback = obsCallback;
	}

	computedFilename(dataSrc, sources = images) {
		const stepsToPath = dataSrc.split('/');
		const fileNameWithExt = stepsToPath.pop();
		const fileNameStep = fileNameWithExt.slice(0, fileNameWithExt.indexOf('.'));
		const extStep = fileNameWithExt.slice(fileNameWithExt.indexOf('.') + 1);
		stepsToPath.push(fileNameStep, extStep);
		try {
			const src = stepsToPath.reduce((path, step) => path = path[ step ], sources);
			return src;
		}
		catch (e) {
			return dataSrc;
		}
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
			return this.loadAll();
		}
		const self = this;
		const { root, margin = '200px' } = this.obsOptions;

		this.observer = new IntersectionObserver(cb, {
			root,
			threshold: 0.01,
			rootMargin: `${ margin } ${ margin } ${ margin } ${ margin }`
		});
		function cb(entries) {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					this.unobserve(entry.target);
					self.loadSingle(entry.target);
					self.obsCallback(entry);
				}

			});
		}
		this.imgElements.forEach(img => this.observer.observe(img));
		return this;
	}

	loadAll() {
		const allPromises = this.imgElements.reduce((allPromises, img) => {
			allPromises.push(this.loadSingle(img));
			return allPromises;
		}, []);

		if ("Promise" in window) {
			return Promise.all(allPromises);
		}
	}

	loadSingle(img) {
		const imgCached = document.createElement('IMG');
		let EM = 'Could not load <img ';
		[].slice.call(img.attributes).forEach(({ name, value }) => {
			EM += `${ name }="${ value }" `;
			if (name === 'src' || name === 'data-src' || name === 'data-srcset') return;
			imgCached.setAttribute(name, value);
		});
		imgCached.src = this.computedFilename(img.dataset.src);

		if (!('Promise' in window)) {
			console.log('no promises');
			return img.parentNode.replaceChild(imgCached, img);
		}
		return new Promise((resolve, reject) => {
			imgCached.onload = () => {
				img.parentNode.replaceChild(imgCached, img);
				resolve(imgCached);
			};
			imgCached.onerror = () => reject(new Error(EM + '/>'));
		});
	}
}

export function loadImg(targets) {
	return new Loader(targets)
		.toArray()
		.loadAll();
}

export function loadOnScroll(targets, obsOptions = {}, mode) {
	return new Loader(targets, obsOptions, mode)
		.toArray()
		.attachObserver();
}

