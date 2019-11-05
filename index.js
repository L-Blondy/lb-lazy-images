require( "core-js/modules/es.object.entries" );
require( "core-js/modules/es.typed-array.for-each" );
require( "core-js/modules/es.object.values" );
const images = require( "./../../src/assets/**/*.*" )

const getAssets = ( images, relPath ) => {

	let pathList = {}
	for ( const [ key, value ] of Object.entries( images ) ) {
		var values = Object.keys( images[ key ] ).map( e => images[ key ][ e ] )
		const isImage = typeof values[ 0 ] === "string";
		const isFolder = typeof values[ 0 ] === "object"
		if ( isImage ) {
			pathList[ relPath + key ] = value
		}
		else if ( isFolder ) {
			pathList = { ...pathList, ...getAssets( value, relPath + key + "/" ) }
		}
	}
	return pathList
}
const pathList = getAssets( images, "" )

export default function loadImg ( elements ) {
	//nodelist
	if ( NodeList.prototype.isPrototypeOf( elements ) )
		elements.forEach( node => {
			node.src = pathList[ node.dataset.asset ][ Object.keys( pathList[ node.dataset.asset ] )[ 0 ] ]

		} )
	//single image
	else
		elements.src = pathList[ elements.dataset.asset ][ Object.keys( pathList[ elements.dataset.asset ] )[ 0 ] ]
}