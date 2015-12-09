'use strict';
var buffer = {};

/**
 * Find working vendor prefix for javascript style key (el.style[ key ]).
 *
 * @prop {string} CSS property name (f.ex.: transform-origin).
 *
 */
var find = function(cssProp) {
	if(buffer[ cssProp ]) {
		return buffer[ cssProp ];
	}

	// convert to js key
	var split = cssProp.split('-');
	var jsProp = '';

	for (var i = 0; i < split.length; i++) {
		jsProp += i === 0 ? split[ i ] : split[ i ][ 0 ].toUpperCase() + split[ i ].substr(1);
	}

	var prefixes = [ '', 'ms', 'Webkit', 'Moz', 'O' ];
	var upperJsProp = jsProp[ 0 ].toUpperCase() + jsProp.substr(1);
	var result;

	for (i = 0; i < prefixes.length; i++) {
		var prefix = prefixes[ i ];
		var key = prefix.length > 0 ? prefix + upperJsProp : jsProp;

		if(typeof document.body.style[ key ] !== 'undefined') {
			result = {
				css: prefix.length > 0 ? '-' + prefix.toLowerCase() + '-' + cssProp : cssProp,
				js: key // transform : WebkitTransform
			};

			break;
		}
	}

	if(!result) {
		result = {
			js: jsProp,
			css: cssProp
		};
	}

	buffer[ cssProp ] = result;
	return result;
};

module.exports = {
	find: find
};
