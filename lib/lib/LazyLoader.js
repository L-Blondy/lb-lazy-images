import images from '../../src/assets/**/*.*';
import { translateDataset, toArray, preload, display } from './utils';

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

	static loadOnScroll(targets, options) {
		return new LazyLoader(targets).loadWithIO(options);
	}

	static loadAll(targets) {
		return new LazyLoader(targets).loadAll();
	}
}

module.exports = LazyLoader;