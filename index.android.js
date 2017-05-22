'use strict';

import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
	name: 'BgImage',
	propTypes: {
		drawable: PropTypes.string,
		...View.propTypes // include the default view properties
	}
};

module.exports = requireNativeComponent('RCTBgImage', iface);