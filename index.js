const images = require( "./../../src/assets/**/*.*" )

//get compiled path list
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
	const promises = []
	//nodelist
	if ( !elements.length ) {
		elements = new Array( elements )
	}
	if ( elements.length ) {
		for ( let i = 0; i < elements.length; i++ ) {
			if ( "Promise" in window ) {
				const promise = new Promise( function ( resolve, reject ) {
					//create cache
					const cacheImg = document.createElement( "img" )
					//pass all attributes
					const attributes = elements[ i ].attributes
					for ( let i = 0; i < attributes.length; i++ ) {
						if ( attributes[ i ].name !== "src" && attributes[ i ].name !== "data-src" && attributes[ i ].name !== "data-srcset" )
							cacheImg.setAttribute( attributes[ i ].name, attributes[ i ].value )
					}

					//get new srcset
					const srcset = elements[ i ].dataset.srcset.split( [ "," ] );
					srcset.forEach( source => {
						const endIndex = source.substring( 1 ).indexOf( " " );
						let path = source.substring( 0, endIndex + 1 )
						if ( !path ) return;
						let x = 0;
						while ( path[ x ].toLowerCase() === path[ x ].toUpperCase() ) {
							x++
						}
						path = source.substring( x, endIndex + 1 )
						const size = source.substring( endIndex + 1 )
						const newPath = pathList[ path ][ Object.keys( pathList[ path ] )[ 0 ] ]
						cacheImg.srcset += newPath + " " + size + ", "
					} )

					//get new  src
					if ( !pathList[ elements[ i ].dataset.src ] ) {
						resolve( elements[ i ] )
						console.error( `<img data-src="${ elements[ i ].dataset.src }"/> not loaded, please check the path` )
					}
					else {
						cacheImg.src = pathList[ elements[ i ].dataset.src ][ Object.keys( pathList[ elements[ i ].dataset.src ] )[ 0 ] ]
					}
					cacheImg.onload = () => resolve( cacheImg );

				} )
				promise.then( cacheImg => {
					elements[ i ].parentNode.replaceChild( cacheImg, elements[ i ] )
					return "";
				} )
				promises.push( promise )
			}
			else {
				//fallback if no promise
				try {
					elements[ i ].src = pathList[ elements[ i ].dataset.src ][ Object.keys( pathList[ elements[ i ].dataset.src ] )[ 0 ] ]
				}
				catch ( error ) {
					console.error( `<img data-src="${ elements[ i ].dataset.src }"/> not loaded, please check the path` )
				}
			}
		}
	}
	return Promise.all( promises )
}
//auto load LOAD-ON-SCROLL
const imagesScroll = document.querySelectorAll( "[loadOnScroll]" )

if ( imagesScroll.length ) {
	try {
		function loadCb ( entries ) {
			entries.forEach( ( entry ) => {
				if ( entry.intersectionRatio > 0 ) {
					loadImg( entry.target )
					loadObs.unobserve( entry.target )
				}
			} )
		}
		const loadObs = new IntersectionObserver( loadCb, { rootMargin: "0px 0px 500px 0px" } );

		Array.prototype.forEach.call( imagesScroll, image => {
			loadObs.observe( image )
		} )
	}
	//fallback
	catch ( error ) {
		console.log( "EagerLoaded as a fallback" )
		loadImg( imagesScroll )
	}
}
