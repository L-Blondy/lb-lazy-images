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

export default getDictionary(images);