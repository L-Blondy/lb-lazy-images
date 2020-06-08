const images = require("./../../src/assets/**/*.*");

const getDictionary = (images, relPath = '') => {
	let pathList = {};
	for (let key in images) {
		const value = images[ key ];
		var values = Object.keys(images[ key ]).map(e => images[ key ][ e ]);
		const isImage = typeof values[ 0 ] === "string";
		const isFolder = typeof values[ 0 ] === "object";
		if (isImage) {
			const ext = Object.keys(value)[ 0 ];
			pathList[ `${ relPath + key }.${ ext }` ] = value[ ext ];
		}
		else if (isFolder) {
			pathList = { ...pathList, ...getDictionary(value, `${ relPath + key }/`) };
		}
	}
	return pathList;
};
export default getDictionary(images);