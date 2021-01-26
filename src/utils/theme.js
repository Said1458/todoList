import {
	steelBlue,
	macAndCheese,
	platinium,
	mintCream,
	alabster,
} from './colors';
import { primaryFont, secondaryFont, typeScale } from './typography';

export const defaultTheme = {
	backgroundColor: 'white',
	primaryColor: steelBlue['main'],
	white: '#ffffff',
	fontScale: {
		h1: typeScale.h1,
		h2: typeScale.h2,
	},
	secondaryColor: alabster['main'],
	// primaryColorHover: primary[100],
	// primaryColorActive: primary[200],
	// textColorPrimary: neutral[600],
	// textColorInverted: neutral[100],
	primaryFont: primaryFont,
	// status: {
	// 	warningColor: '#E1C542',
	// 	warningColorHover: '#CAB23F',
	// },
};
