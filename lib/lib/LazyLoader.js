import images from '../../src/assets/**/*.*';
import { translateDataset, toArray, preload } from './utils';

class LazyLoader {

	constructor(images) {
		this.images = toArray(images);
		this.settledCountdown = this.images.length;
		this.preloaders = [];
		this.hasObservers = false;
		this._init();
	}

	_init() {
		this.images.forEach(translateDataset);
	}

	_countDown() {
		this.settledCountdown--;
		!this.settledCountdown && this.onAllSettledCb && this.onAllSettledCb(this.preloaders);
	}

	_attachListeners(img, preloader) {
		preloader.addEventListener('load', e => {
			img.parentNode && img.parentNode.replaceChild(preloader, img);
			this.onLoadCb && this.onLoadCb(e);
			this._countDown();
		});
		preloader.addEventListener('error', e => {
			img.parentNode && img.parentNode.replaceChild(preloader, img);
			this.onErrorCb && this.onErrorCb(e);
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
				that.visibleObs.observe(preloader);
				that.preloaders.push(preloader);
				that.onIntersectCb && that.onIntersectCb(e);
				this.unobserve(e.target);
			});
		}

		function visibleCb(entries) {
			entries.forEach(e => {
				if (!e.intersectionRatio) return;
				that.onVisibleCb && that.onVisibleCb(e);
				this.unobserve(e.target);
			});
		}

		this.hasObservers = true;
		return this;
	}

	loadAll() {
		this.images.forEach(img => {
			const preloader = preload(img);
			this.preloaders.push(preloader);
			this._attachListeners(img, preloader);
		});
		return this;
	}

	loadWithIO(options = {}) {
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

	onIntersect(cb) {
		this.onIntersectCb = cb;
		return this;
	}

}

const options = {
	root: document.getElementById('root'),
	rootMargin: '200px 200px 200px 200px',
	threshold: 0.001
};

const test = new LazyLoader('img');

// test
// 	.loadAll()
// 	.onLoad((e) => console.log('onLoadCb'))
// 	.onError((e) => console.log('onErrorCb'))
// 	.onAllSettled(() => console.log('allSettledCb'));

test
	.loadWithIO(options)
	.onLoad((e) => console.log('onLoadCb'))
	.onError((e) => console.log('onErrorCb'))
	.onAllSettled(() => console.log('allSettledCb'))
	.onVisible(() => console.log('onVisibleCb'))
	.onIntersect(() => console.log('onIntersectCb'));