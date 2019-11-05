// require( "core-js/modules/es.object.entries" );   => correct way to import polyfills from CORE-JS

const images = require( "./../../src/assets/**/*.*" )

const getAssets = ( images, relPath ) => {

	//Polyfill for Object.entries from MDN
	if ( !Object.entries ) {
		Object.entries = function ( obj ) {
			var ownProps = Object.keys( obj ),
				i = ownProps.length,
				resArray = new Array( i );
			while ( i-- )
				resArray[ i ] = [ ownProps[ i ], obj[ ownProps[ i ] ] ];

			return resArray;
		};
	}

	let pathList = {}
	for ( const [ key, value ] of Object.entries( images ) ) {
		var values = Object.keys( images[ key ] ).map( e => images[ key ][ e ] )
		const isImage = typeof values[ 0 ] === "string";
		const isFolder = typeof values[ 0 ] === "object";
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
	if ( elements.length )//NodeList.prototype.isPrototypeOf( elements ) )
		for ( let i = 0; i < elements.length; i++ ) {
			elements[ i ].src = pathList[ elements[ i ].dataset.asset ][ Object.keys( pathList[ elements[ i ].dataset.asset ] )[ 0 ] ]
		}
	//single image
	else
		elements.src = pathList[ elements.dataset.asset ][ Object.keys( pathList[ elements.dataset.asset ] )[ 0 ] ]
}